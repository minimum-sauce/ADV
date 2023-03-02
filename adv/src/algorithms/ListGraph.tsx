export interface ListGraph {
    node_neighburs: number[][];  
    size: number;
}

type EdgeList = Array<[number, number]> 


/* 
* create a new graph
* @param size - how many nodes the graph should habe
* @returns returns a graph with the given size 
*/
export function graph_create_new(size: number) {
    const node_neighburs = new Array<number[]>(size).fill([]);
    return {
        node_neighburs,
        size
    };
}

//export function graph_create_from_edge_list(size: number, 
//                                            edge_list: EdgeList): ListGraph {
//    const graph = graph_create_new(size);
//    edge_list.forEach(([node, new_neighbur]) => {
//        const neighburs = graph.node_neighburs[node];
//        graph.node_neighburs[node] = neighburs.concat(new_neighbur);
//    });
//    return graph;
//}

/*
* Creates a graph where the nodes are connected in a grid pattern 
* @param width - the width of the grid
* @param height - the height of the grid
* @returns returns a graph where the nodes are connected as a grid
* */
export function graph_create_grid(width: number, height: number) {
    const size = width * height;
    const graph = graph_create_new(size);

    graph.node_neighburs.forEach((_, index) => {
        const y: number = Math.floor(index / width);
        const x: number = index % width;
        var neighburs = new Array<number>(0);

        if (x > 0) {             // Not the left most element
            neighburs = neighburs.concat(index - 1);
        }
        if ( x < (width - 1)) {  // Not the right most element
            neighburs = neighburs.concat(index + 1);
        }
        if (y > 0) {             // Not first row
            neighburs = neighburs.concat(index - width);
        }
        if ( y < (height - 1)) { // Not last row
            neighburs = neighburs.concat(index + width);
        }
        graph.node_neighburs[index] = graph.node_neighburs[index].concat(neighburs);
    });

    return graph;
}




