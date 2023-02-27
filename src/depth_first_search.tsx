import { DFS_state, ListGraph, Color } from './types';


export function DFS(destination: number, graph: ListGraph, state_array: ListGraph[]) {

    const node_state = new Array<Color>(graph.size).fill(Color.un_visited);
    const graph_state: DFS_state = {
        node_state: node_state,
        size: graph.size,
    };


    const depth_fisrt_search = (current_node: number): boolean => {
        const current_node_neighburs = graph.node_neighburs[current_node];

        if(current_node === destination) {
            return true;
        }

        current_node_neighburs.forEach((neighbur_node) => {
            if (graph_state.node_state[neighbur_node] != Color.un_visited) {} 
            else {
                const neighbur_node_found_destination = depth_fisrt_search(neighbur_node);
                if (neighbur_node_found_destination) {
                    
                } else {

                }
            }
        });
        graph_state.node_state[current_node] = Color.fully_explored;
        return false;
        
    }
    depth_fisrt_search(1);
}
