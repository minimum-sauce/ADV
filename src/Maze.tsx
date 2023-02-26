import { stringify } from 'querystring';
import { createElement } from 'react';
import { generate_maze, State } from './dataStructures/maze_generator';


export function Maze() {
    const x = 5;
    const y = 5;
    const maze = generate_maze(x, y);

    const set_id = (state: State): string => {
        return state; 
    }

   // const div_row = new Array(y);
   // for (let i = 0; i < y; i++) {
   //     const div_item = new Array(x);
   //     //div_maze.innerHTML += "<div className='row'>";
   //     for (let j = 0; j < x; j++) {
   //         const index = y * i + j;
   //         const node_state = maze.node_status[index];
   //         div_item[j] = createElement('div', { className:"item", id:set_id(node_state), key:j});
   //     }
   //     
   //     div_row[i] = createElement('div', {className:"row", key:i }, div_item);
   // }
   // const maze_element = createElement('div', {className: "maze"}, div_row); 
   // 
   // return maze_element;
    return (
        <div className='maze'>
            <div className="item">
                {maze.node_status.map((val, index) => (
                    <div className="item" key={index.toString()} id={val}> 
                        {val}
                    </div>
                ))}
            </div>
        </div>
    );
}
