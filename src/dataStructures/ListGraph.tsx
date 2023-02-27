
export interface ListGraph {
    node_neighburs: number[][];  
    size: number;
}

type EdgeList = Array<[number, number]> 



export function graph_create_new(size: number) {
    const node_neighburs = new Array<number[]>(size).fill([]);
    return {
        node_neighburs,
        size
    };
}


export function graph_create_from_edge_list(size: number, 
                                            edge_list: EdgeList): ListGraph {
    const graph = graph_create_new(size);
    edge_list.forEach(([node, new_neighbur]) => {
        const neighburs = graph.node_neighburs[node];
        graph.node_neighburs[node] = neighburs.concat(new_neighbur);
    });
    return graph;
}

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






// --------------- testing ------------------
const edge_list: EdgeList = [
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 3],
    [0, 2]
]
//console.log(graph_create_new(5));
//console.log(graph_create_from_edge_list(5, edge_list));
console.log(graph_create_grid(4, 4));
