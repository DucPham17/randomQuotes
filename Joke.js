import React from "react";

function Joke(props){
    console.log(props);
    return (
        <div>
            <p style={{display: props.questions ? "block": "none"}}>{props.questions}</p>
            <p>{props.puchline}</p>
        </div>
    )
}
export default Joke;