import React from "react";
import ReactDOM from "react-dom";
import * as WorkerRegister from "./serviceWorker";

function MyApp(){
    return 
    <ul>
        <li>food</li>
        <li>gym</li>
        <li>game</li>
    </ul>
}

ReactDOM.render(<MyApp/> ,document.getElementById("root"));

WorkerRegister.unregister();