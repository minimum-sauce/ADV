import React from 'react';
import './index.css';
import { TextField } from './TextField'
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div>
            <TextField text='hello' person={{fname: "", lname: ""}} 
            handleChange={e => {
                }}
            />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

