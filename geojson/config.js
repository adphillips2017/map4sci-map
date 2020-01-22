// DATA_CHOICE = 'map_data'
import md_clusterBoundry from './map-data/cluster_boundary.geojson';
import md_cluster from './map-data/cluster.geojson'
import md_edges from './map-data/edges.geojson';
import md_nodes from './map-data/nodes.geojson';

// DATA_CHOICE = 'direct_topics'
import direct_topics_allEdges from './direct_topics/alledges.geojson';
import direct_topics_clusterBoundary from './direct_topics/cluster_boundary.geojson';
import direct_topics_cluster from './direct_topics/cluster.geojson';
import direct_topics_edges from './direct_topics/edges.geojson';
import direct_topics_map from './direct_topics/map.geojson';
import direct_topics_nodes from './direct_topics/nodes.geojson';

// DATA_CHOICE = 'impred_lastfm'
import impred_lastfm_allEdges from './impred_lastfm/im_alledges.geojson';
import impred_lastfm_clusterBoundry from './impred_lastfm/im_cluster_boundary.geojson';
import impred_lastfm_cluster from './impred_lastfm/im_cluster.geojson';
import impred_lastfm_edges from './impred_lastfm/im_edges.geojson';
import impred_lastfm_nodesBack from './impred_lastfm/im_nodes_back.geojson';
import impred_lastfm_nodes from './impred_lastfm/im_nodes.geojson';

// DATA_CHOICE = 'impred_lastfm2'
import impred_lastfm2_allEdges from './impred_lastfm2/im_alledges.geojson';
import impred_lastfm2_clusterBoundry from './impred_lastfm2/im_cluster_boundary.geojson';
import impred_lastfm2_cluster from './impred_lastfm2/im_cluster.geojson';
import impred_lastfm2_edges from './impred_lastfm2/im_edges.geojson';
import impred_lastfm2_nodes from './impred_lastfm2/im_nodes.geojson';

// DATA_CHOICE = 'impred_medline'
import impred_medline_allEdges from './impred_medline/im_alledges.geojson';
import impred_medline_clusterBoundry from './impred_medline/im_cluster_boundary.geojson';
import impred_medline_cluster from './impred_medline/im_cluster.geojson';
import impred_medline_edges from './impred_medline/im_edges.geojson';
import impred_medline_nodes from './impred_medline/im_nodes.geojson';

// DATA_CHOICE = 'impred_topics'
import impred_topics_allEdges from './impred_topics/im_alledges.geojson';
import impred_topics_clusterBoundry from './impred_topics/im_cluster_boundary.geojson';
import impred_topics_cluster from './impred_topics/im_cluster.geojson';
import impred_topics_edges from './impred_topics/im_edges.geojson';
import impred_topics_nodes from './impred_topics/im_nodes.geojson';

// DATA_CHOICE = 'impred_topics2'
import impred_topics2_allEdges from './impred_topics2/im_alledges.geojson';
import impred_topics2_clusterBoundry from './impred_topics2/im_cluster_boundary.geojson';
import impred_topics2_cluster from './impred_topics2/im_cluster.geojson';
import impred_topics2_edges from './impred_topics2/im_edges.geojson';
import impred_topics2_nodes from './impred_topics2/im_nodes.geojson';

// DATA_CHOICE = 'lastfm'
import lastfm_allEdges from './lastfm/im_alledges.geojson';
import lastfm_clusterBoundry from './lastfm/im_cluster_boundary.geojson';
import lastfm_cluster from './lastfm/im_cluster.geojson';
import lastfm_edges from './lastfm/im_edges.geojson';
import lastfm_nodes from './lastfm/im_nodes.geojson';

// DATA_CHOICE = 'im_cleaned'
import im_clusterBoundry from './im-cleaned/im_cluster_boundary.geojson';
import im_cluster from './im-cleaned/im_cluster.geojson'
import im_edges from './im-cleaned/im_edges.geojson';
import im_nodes from './im-cleaned/im_nodes.geojson';

const DATA_CHOICE = 'impred_lastfm';
let geoData = {};

switch (DATA_CHOICE) {
    case('im_cleaned'): {
        geoData.clusterBoundary = im_clusterBoundry;
        geoData.cluster = im_cluster;
        geoData.edges = im_edges;
        geoData.nodes = im_nodes;
        break;
    }
    case ('map_data'): {
        geoData.clusterBoundary = md_clusterBoundry;
        geoData.cluster = md_cluster;
        geoData.edges = md_edges;
        geoData.nodes = md_nodes;
        break;
    }
    case ('direct_topics'): {
        geoData.allEdges = direct_topics_allEdges;
        geoData.clusterBoundary = direct_topics_clusterBoundary;
        geoData.cluster = direct_topics_cluster;
        geoData.edges = direct_topics_edges;
        geoData.map = direct_topics_map;
        geoData.nodes = direct_topics_nodes;
        break;
    }
    case ('impred_lastfm'): {
        geoData.allEdges = impred_lastfm_allEdges;
        geoData.clusterBoundary = impred_lastfm_clusterBoundry;
        geoData.cluster = impred_lastfm_cluster;
        geoData.edges = impred_lastfm_edges;
        geoData.nodesBack = impred_lastfm_nodesBack;
        geoData.nodes = impred_lastfm_nodes;
        break;
    }
    case ('impred_lastfm2'): {
        geoData.allEdges = impred_lastfm2_allEdges;
        geoData.clusterBoundary = impred_lastfm2_clusterBoundry;
        geoData.cluster = impred_lastfm2_cluster;
        geoData.edges = impred_lastfm2_edges;
        geoData.nodes = impred_lastfm2_nodes;
        break;
    }
    case ('impred_medline'): {
        geoData.allEdges = impred_medline_allEdges;
        geoData.clusterBoundary = impred_medline_clusterBoundry;
        geoData.cluster = impred_medline_cluster;
        geoData.edges = impred_medline_edges;
        geoData.nodes = impred_medline_nodes;
        break;
    }
    case ('impred_topics'): {
        geoData.allEdges = impred_topics_allEdges;
        geoData.clusterBoundary = impred_topics_clusterBoundry;
        geoData.cluster = impred_topics_cluster;
        geoData.edges = impred_topics_edges;
        geoData.nodes = impred_topics_nodes;
        break;
    }
    case ('impred_topics2'): {
        geoData.allEdges = impred_topics2_allEdges;
        geoData.clusterBoundary = impred_topics2_clusterBoundry;
        geoData.cluster = impred_topics2_cluster;
        geoData.edges = impred_topics2_edges;
        geoData.nodes = impred_topics2_nodes;
        break;
    }
    case ('lastfm'): {
        geoData.allEdges = lastfm_allEdges;
        geoData.clusterBoundary = lastfm_clusterBoundry;
        geoData.cluster = lastfm_cluster;
        geoData.edges = lastfm_edges;
        geoData.nodes = lastfm_nodes;
        break;
    }

    default: console.error('Undefined data choice.')
}

export const geo_data = geoData;
