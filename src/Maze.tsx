import { stringify } from 'querystring';
import { createElement } from 'react';
import { generate_maze, State } from './dataStructures/maze_generator';


export function Maze() {
    const x = 10;
    const y = 10;
    const maze = generate_maze(x, y);

    const set_id = (state: State): string => {
        return (state + " "); 
    }

    const get_walls = (x_idx: number, y_idx: number): string => {
        const index = y_idx * y + x_idx;
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
        console.log("walls for index: ",index, ": ", node_walls);
        return wall_class_names;
    }
    

    const rows = new Array<number>(y).fill(0);

    return (
        <div className='maze'>
            {rows.map((_, y_idx) => (
                <div className='row' >
                    {maze.node_status
                        .slice(y * y_idx, y * y_idx + x)
                        .map((status, x_idx) => (
                        <div className={'items ' + set_id(status) + get_walls(x_idx, y_idx)}>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
