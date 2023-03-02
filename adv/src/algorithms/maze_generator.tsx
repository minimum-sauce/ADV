import { ListGraph, graph_create_grid } from './ListGraph';


export enum State {
    unvisited = "unvisited",
    visited = "visited",
    fully_explored = "fully_explored",
}


export interface Maze {
    walls: Array<Array<number>>;
    grid_graph: ListGraph; 
    node_status: Array<State>;
    width: number;
    height: number;
}

/* 
* creates a clone of a graph(no references to the original graph)
* @param graph - the graph to be copied
* @returns returns a clone of the given graph
*/
function list_graph_clone(graph: ListGraph) {
    const neighburs_copy = new Array<number[]>(graph.node_neighburs.length);
    graph.node_neighburs.forEach((neighbur, index) => {
        neighburs_copy[index] = [...neighbur]; 
    });
    return {
        node_neighburs: neighburs_copy,
        size: graph.size,
    }
}

/* 
* creates an array containing a random permutation of the items present in a given array (does not mutate the original array)
* @param array - the array to create a permutation from 
* @returns returns an array where the values of the initial array has been randomly reordered
* */
function random_permutation<T>(array: Array<T>): Array<T> {
    const permutation = Array.from(array.values()); 
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) % (i + 1);
        [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }
    return permutation;
}

/* 
* creates a grid-maze of a given width and height
* @param width - the width of the grid
* @param height - the height of the grid
* @returns returns a maze with walls between every node
* */
function init_grid_maze(width: number, height: number): Maze {
    const grid_graph = graph_create_grid(width, height);
    return {
        walls: grid_graph.node_neighburs, // walls between every node connected to eachother
        grid_graph: grid_graph,
        node_status: new Array<State>(grid_graph.size).fill(State.unvisited),
        width,
        height,
    };
}

function maze_remove_wall(maze: Maze, node: number, neighbur: number) {
    maze.walls[node] = maze.walls[node]
                            .filter((item) => item != neighbur);
    maze.walls[neighbur] = maze.walls[neighbur]
                            .filter((item) => item != node);
}


/*
* Creates a clone of a maze(no references to the original maze)
* @param maze - the maze to be cloned
* @returns returns a cloned version of the original maze
*/
function maze_clone(maze: Maze): Maze {
    const width = maze.width;
    const height = maze.height;
    const grid_graph = list_graph_clone(maze.grid_graph);
    const node_status = [...maze.node_status];
    const walls = new Array<number[]>(maze.walls.length);
    maze.walls.forEach((neighbur, index) => {
        walls[index] = [...neighbur]; 
    });
    return {
        grid_graph, 
        node_status, 
        walls,
        width,
        height,
    };

}

/* 
* Runs a random deph-first search algorithm to generate a maze.
* The steps of the algorithm are stored as instances of the maze in that moment.
* These frames of the algorithm are then returned 
* @param width - the width of the maze
* @param height - the height of the maze
* @returns returns a list of frames(instances of the maze) describing the process of the algorithm
*/
export function generate_maze(width: number, height: number): Array<Maze> {
    const maze = init_grid_maze(width, height); 
    var frames: Array<Maze> = new Array<Maze>(0);

    function visit_node(node: number): void {
        maze.node_status[node] = State.visited;
        const permuted_neighburs = random_permutation(maze.grid_graph.node_neighburs[node]);
        frames = frames.concat(maze_clone(maze));
        permuted_neighburs.forEach((neighbur) => {
            if (maze.node_status[neighbur] === State.unvisited) {
                maze_remove_wall(maze, node, neighbur);
                visit_node(neighbur);
            } else {}
        });
        maze.node_status[node] = State.fully_explored;
        frames = frames.concat(maze_clone(maze));
    }
    
    visit_node(0);
    return frames;
}


