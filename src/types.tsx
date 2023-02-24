
export enum Color {
    un_visited = "white",
    visited = "gray",
    fully_explored = "black",
    on_path = "green",
}

export interface DFS_state {
    node_state: Color[];
    size: number;
}

export interface ListGraph {
    node_neighburs: number[][];
    size: number;
}
