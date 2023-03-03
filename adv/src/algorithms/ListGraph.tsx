export interface ListGraph {
    node_neighbours: number[][];
    size: number;
}

type EdgeList = Array<[number, number]>


/* 
* create a new graph
* @param size - how many nodes the graph should habe
* @returns returns a graph with the given size 
*/
export function graph_create_new(size: number) {
    const node_neighbours = new Array<number[]>(size).fill([]);
    return {
        node_neighbours,
        size
    };
}

/*
* Creates a graph where the nodes are connected in a grid pattern 
* @param width - the width of the grid
* @param height - the height of the grid
* @returns returns a graph where the nodes are connected as a grid
* */
export function graph_create_grid(width: number, height: number) {
    const size = width * height;
    const graph = graph_create_new(size);

    graph.node_neighbours.forEach((_, index) => {
        const y: number = Math.floor(index / width);
        const x: number = index % width;
        var neighbours = new Array<number>(0);

        if (x > 0) {             // Not the left most element
            neighbours = neighbours.concat(index - 1);
        }
        if (x < (width - 1)) {  // Not the right most element
            neighbours = neighbours.concat(index + 1);
        }
        if (y > 0) {             // Not first row
            neighbours = neighbours.concat(index - width);
        }
        if (y < (height - 1)) { // Not last row
            neighbours = neighbours.concat(index + width);
        }
        graph.node_neighbours[index] = graph.node_neighbours[index].concat(neighbours);
    });

    return graph;
}




