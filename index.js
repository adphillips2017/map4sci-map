import { geo_data } from './geojson/config.js';

console.log('index.js loaded')

/* @TODO:
    navigation pane <- no built in way to accomplish this. 
    proper pop ups
    lines to look more like high ways
    font sizes
    change color on hover <- captured the hover event, can't access feature id for some reason
*/

var blankStyle = {
    "version": 8,
    "name": "Blank",
    "center": [
        0,
        0
    ],
    "zoom": 0,
    "sources": {},
    "sprite": "https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty",
    "glyphs": "https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgba(255,255,255,1)"
            }
        }
    ],
    "id": "blank"
};

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRwaGlsbGlwczIwMTciLCJhIjoiY2s1NDNvaHdrMGZidDNobHFkdHB5MG1wcCJ9.NG8JyVzQuA6pP9UfZhlubg';
var map = new mapboxgl.Map({
    container: 'map',
    style: blankStyle,
    center: [-0, 0],
    zoom: 1,
    renderWorldCopies: false,
    dragRotate: false
});
var hoveredEdgeID = null;

map.on('load', () => {
    map.addSource('edges_source', {
        'type': 'geojson',
        'data': geo_data.edges
    });

    map.addLayer({
        "id": "cluster",
        "type": "fill",
        "source": { "type": "geojson", "data": geo_data.cluster },
        "layout": {},
        "paint": {
            "fill-color": ['get', 'fill'],
            "fill-opacity": 0.7,
            "fill-outline-color": ['get', 'stroke'],
        },
    });

    map.addLayer({
        "id": "cluster-labels",
        "type": "symbol",
        "minzoom": 2,
        "source": { "type": "geojson", "data": geo_data.cluster },
        "layout": {
            "text-field": "{label}",
            "text-font": [
                "Roboto Regular"
            ],
            "text-max-width": 5,
            "text-size": 15,
            "text-anchor": "center",
            "text-radial-offset": 1
        },
        "paint": {},
    });

    map.addLayer({
        "id": "cluster_boundary",
        "type": "line",
        "minzoom": 3,
        "source": { "type": "geojson", "data": geo_data.clusterBoundary },
        "layout": {},
        "paint": {
            "line-color": ['get', 'stroke'],
            "line-width": 0.5,
            "line-opacity": 0.8
        },
    });

    map.addLayer({
        "id": "edges",
        "type": "line",
        "minzoom": 4,
        "source": "edges_source", //{ "type": "geojson", "data": geo_data.edges },
        //"filter": ["==", "level", "1"],
        "layout": {},
        "paint": {
            //"line-color": ['get', 'stroke'],
            //"line-color": "#ffeba1",
            "line-color": [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                'red',
                'yellow'
            ],
            "line-width": 3,
            "line-opacity": 1
        },
    });
    map.addLayer({
        "id": "edges_border",
        "type": "line",
        "minzoom": 4,
        "source": { "type": "geojson", "data": geo_data.edges },
        "layout": {},
        "paint": {
            "line-color": "#f9d776",
            "line-width": 1,
            "line-opacity": 1,
            "line-gap-width": 3
        },
    });

    map.addLayer({
        "id": "nodes",
        "type": "circle",
        "minzoom": 6,
        "source": { "type": "geojson", "data": geo_data.nodes },
        "layout": {},
        "paint": {
            "circle-color": "black",
            "circle-radius": 3
        },
    });

    map.addLayer({
        "id": "node-labels",
        "type": "symbol",
        "minzoom": 6,
        "source": { "type": "geojson", "data": geo_data.nodes },
        "layout": {
            "text-field": "{label}",
            "text-font": [
                "Roboto Regular"
            ],
            "text-max-width": 5,
            "text-size": 12,
            "text-anchor": "left",
            "text-radial-offset": 1
        },
        "paint": {},
    });

    // Add zoom controls (without rotation controls) to the map in the top-left position.
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-left');

    // When the user moves their mouse over the edges layer, update the
    // feature state for the feature under the mouse.
    map.on('mousemove', 'edges', function (e) {
        console.log('eee: ', e.features[0])
        if (e.features.length > 0) {
            if (hoveredEdgeID) {
                map.setFeatureState(
                    { source: 'edges_source', id: hoveredEdgeID },
                    { hover: false }
                );
            }
            hoveredEdgeID = e.features[0].properties.label;
            map.setFeatureState(
                { source: 'edges_source', id: hoveredEdgeID },
                { hover: true }
            );
        }
    });

    // When the mouse leaves the edges layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'edges', function () {
        if (hoveredEdgeID) {
            map.setFeatureState(
                { source: 'edges_source', id: hoveredEdgeID },
                { hover: false }
            );
        }
        hoveredEdgeID = null;
    });

    // For Testing.
    map.on('moveend', function (e) { console.log('Zoom Level: ', map.getZoom()) });

    addPopupOnClick(map, 'nodes', 'label');
    addPopupOnClick(map, 'edges', 'label');
});

function addPopupOnClick(map, layer, field) {
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', layer, function (e) {
        let descriptionHTML = createPopulHTML(e.features[0].properties, field);
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(descriptionHTML)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', layer, function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', layer, function () {
        map.getCanvas().style.cursor = '';
    });
}

function createPopulHTML(description, field){
    return `
        <p class="popup-label">${capitalizeString(field)}</p>
        <p>${description[field]}</p>
    `
}

function capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}