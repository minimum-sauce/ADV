import { State, Maze } from '../algorithms/maze_generator';
import { graph_create_grid } from '../algorithms/list_graph';
import { generate_maze, init_grid_maze, maze_remove_wall, permutate_neighbours } from '../algorithms/maze_generator';


describe("Maze Generation process", () => {
    const graph = graph_create_grid(3, 3);
    
    test('init_grid_maze function creates a valid maze', () => {
        const reference: Maze = {
            walls: graph.node_neighbours,
            grid_graph: graph,
            node_status: new Array<State>(9).fill(State.unvisited),
            width: 3,
            height: 3,
        }
        expect(init_grid_maze(3, 3)).toStrictEqual(reference);
    });
    test('All nodes are explored by generate_maze function',  () => {
        const maze_generation = generate_maze(4, 4);
        const finished_maze = maze_generation[-1];
        console.log("node_status: ", finished_maze.node_status);
        finished_maze.node_status.forEach((state) => {
            expect(state).toBe(State.fully_explored);
        });
    });
    test('maze_remove_wall removes the right walls', () => {
        const reference: Maze = {
            walls: [[], []],
            grid_graph: graph,
            node_status: new Array<State>(2).fill(State.unvisited),
            width: 2,
            height: 1,
        }
        const maze = init_grid_maze(2, 1);
        maze_remove_wall(maze, 0, 1);
        expect(maze.walls).toStrictEqual(reference.walls);
    });

    test('All neighbours are present after permutation', () => {
        const maze =  init_grid_maze(2, 2);
        maze.grid_graph.node_neighbours.forEach((neighbours) => {
            const permutation = permutate_neighbours(neighbours);
            permutation.forEach((value) => {
                expect(neighbours).toContain(value); 
            });
        });
    })
});
