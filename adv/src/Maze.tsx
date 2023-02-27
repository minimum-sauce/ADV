import React from 'react';
import { useState } from 'react';
import { generate_maze, State, Maze} from './dataStructures/maze_generator';


export function draw_maze(maze: Maze, x: number, y: number) {
    const set_id = (state: State): string => {
        return (state + " "); 
    }

    const get_walls = (x_idx: number, y_idx: number): string => {
        const index = y_idx * x + x_idx;
        const node_walls = maze.walls[index];
        var wall_class_names = "";

        if (x_idx === 0) {
            wall_class_names += "left-wall ";
        }
        if (x_idx === (x - 1)) {
            wall_class_names += "right-wall ";
        }
        if (y_idx === 0) {
            wall_class_names += "top-wall ";
        }
        if (y_idx === (y - 1)) {
            wall_class_names += "bottom-wall ";
        }

        node_walls.forEach((neighbur) => {
            if(neighbur === index - x) {
                wall_class_names += "top-wall ";
            } else {} 
            if(neighbur === index + x) {
                wall_class_names += "bottom-wall ";
            } else {}
            if(neighbur === index - 1) {
                wall_class_names += "left-wall ";
            } else {}
            if(neighbur === index + 1) {
                wall_class_names += "right-wall ";
            } else{}
        });
        //console.log("index for neighbur walls: ",index, ": ", node_walls);
        return wall_class_names;
    }
    
    const rows = new Array<number>(y).fill(0);
    return (
        <div className='maze'>
            {rows.map((_, y_idx) => (
                <div className='row' >
                    {maze.node_status
                        .slice(x * y_idx, x * y_idx + x)
                        .map((status, x_idx) => (
                        <div className={'items ' + set_id(status) + get_walls(x_idx, y_idx)}>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


export default function IterableMaze(x: number, y: number): [Maze, () => void, () => void] {
    const [index, setIndex] = useState<number>(0);
    const [mazes, _] = useState(generate_maze(x,y));
    const [current_maze, setMaze] = useState<Maze>(mazes[0]);

    const increment_index = () => {
        if (index < mazes.length) {
            setIndex(index + 1);
            set_current_maze(); 
        } else {}
    }
    const decrement_index = () => {
        if (index > 0) {
            setIndex(index - 1);
            set_current_maze(); 
        } else {}
    }
    const set_current_maze = () => {
        setMaze(mazes[index]);
    }
    
    return [current_maze, increment_index, decrement_index ];
} 

export function maze_function() {
    const x = 5;
    const y = 5;
    const [current_maze, increment_index, decrement_index] = IterableMaze(x, y);
    
    return (
        <div className='interface'>
            {draw_maze(current_maze, x, y)}
            <div className='buttons'>
                <button className='decrement' onClick={decrement_index}>decrement</button>
                <button className='increment' onClick={increment_index}>increment</button>
            </div>
        </div>
    );
}
