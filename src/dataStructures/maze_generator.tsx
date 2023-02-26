import { ListGraph, graph_create_grid } from './ListGraph';
import {Stack, stack_pop_top, stack_add_item, stack_view_top, stack_create_empty } from './stack';



export enum State {
    unvisited = "unvisited",
    visited = "visited",
    fully_explored = "fully_explored",
}

export interface Maze {
    walls: Array<Array<number>>;
    grid_graph: ListGraph; 
    node_status: Array<State>;
}

function random_permutation<T>(array: Array<T>): Array<T> {
    const permutation = Array.from(array.values()); 
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) % (i + 1);
        [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }
    return permutation;
}

function init_maze(width: number, height: number): Maze {
    const grid_graph = graph_create_grid(width, height);
    return {
        walls: grid_graph.node_neighburs,
        grid_graph: grid_graph,
        node_status: new Array<State>(grid_graph.size).fill(State.unvisited),
    };
}

function maze_remove_wall(maze: Maze, node: number, neighbur: number) {
    maze.walls[node] = maze.walls[node]
                            .filter((item) => item != neighbur);
    maze.walls[neighbur] = maze.walls[neighbur]
                            .filter((item) => item != node);
}


export function generate_maze(width: number, height: number): Maze {
    const maze = init_maze(width, height); 
   // var Frames: Array<Maze> = new Array<Maze>(0);

    function visit_node(node: number): void {
        maze.node_status[node] = State.visited;
        const permuted_neighburs = random_permutation(maze.grid_graph.node_neighburs[node]);
        console.log("current node: ", node, "\n");
        permuted_neighburs.forEach((neighbur) => {
            if (maze.node_status[neighbur] === State.unvisited) {
                maze_remove_wall(maze, node, neighbur);
                visit_node(neighbur);
            } else {}
        });
        maze.node_status[node] = State.fully_explored;
    }
    
    visit_node(0);
    return maze;
}


