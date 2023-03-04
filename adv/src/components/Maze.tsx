import React, { useRef } from 'react';
import { useState } from 'react';
import { generate_maze, State, Maze } from '../algorithms/maze_generator';
import usePlay from '../hooks/usePlay';
import Stepper from './Stepper';


/*
* creates a container for rendering the given maze  
* @param maze - the maze to be generated
* @returns returns a JSX element to render the given maze
*/
export function draw_maze(maze: Maze) {
    const x = maze.width;
    const y = maze.height;
    const set_id = (state: State): string => {
        return (state + " ");
    }

    /**
    * checks which walls are precent for the current node and determines the relevant 
    * css classes used to draw the different walls
    * @param x_idx - the placement of the current node on the x-axis
    * @param y_idx - the placement of the current node on the y-axis
    * @returns returns a string with the relevant css class names for drawing 
    *          the walls of the current node 
    */
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
            if (neighbur === index - x) {
                wall_class_names += "top-wall ";
            } else { }
            if (neighbur === index + x) {
                wall_class_names += "bottom-wall ";
            } else { }
            if (neighbur === index - 1) {
                wall_class_names += "left-wall ";
            } else { }
            if (neighbur === index + 1) {
                wall_class_names += "right-wall ";
            } else { }
        });

        return wall_class_names;
    }

    const rows = new Array<number>(y).fill(0);
    return (
        <div className='maze'>
            {rows.map((_, y_idx) => (
                <div className='row' key={y_idx} >
                    {maze.node_status
                        .slice(x * y_idx, x * y_idx + x)
                        .map((status, x_idx) => (
                            <div className={'items ' + set_id(status) + get_walls(x_idx, y_idx)} key={x_idx}>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}

/* 
* Main function creating the interface for use of the maze generation algorithm
* @returns returns a react element containing the html code needed to display the maze generation
* */
export const IterableMaze: React.FC = () => {
    var timer_id: NodeJS.Timer;
    const index = useRef(0);
    const [x, setX] = useState(5);
    const [y, setY] = useState(5);
    const [maze_frames, setFrames] = useState(generate_maze(x, y));
    const [current_maze, setMaze] = useState<Maze>(maze_frames[0]);
    console.log("amount of frames: ", maze_frames.length);

    function generate_new_maze(event: React.FormEvent<HTMLFormElement>, timer_id: NodeJS.Timer): void {
        clearInterval(timer_id);
        index.current = 0;
        const new_maze = generate_maze(x, y);
        setFrames(new_maze);
        setMaze(new_maze[index.current]);
        event.preventDefault();
    }

    const decrement_index = () => {
        if (index.current > 0) {
            index.current--;
            setMaze(maze_frames[index.current]);
        } else {
            index.current = 0;
        }
    }

    const increment_index = () => {
        if (index.current < maze_frames.length - 1) {
            index.current++;
            setMaze(maze_frames[index.current]);
        } else {
            index.current = maze_frames.length - 1;
        }
    }

    const { play, set_play } = usePlay(increment_index, 2);
    // play function to iterate over frames with 500ms delay
    function handle_play() {
        set_play(!play)
    }

    return (
        <div className='App'>
            <form onSubmit={(e) => (generate_new_maze(e, timer_id))}>
                <label>X:
                    <input
                        type="number"
                        value={x}
                        min="1"
                        onChange={(e) => (setX(+e.target.value))} />
                </label>
                <label>Y:
                    <input
                        type="number"
                        value={y}
                        min="1"
                        onChange={(e) => (setY(+e.target.value))} />
                </label>
                <input type="submit" value="initialize" className='btn btn-dark btn-block' />
            </form>
            <div className='buttons'>
                <Stepper
                    next={increment_index}
                    play={handle_play}
                    prev={decrement_index}
                    state_play={play}
                />
            </div>
            <div className='maze-container'>
                {draw_maze(current_maze)}
            </div>
        </div>
    );
}
