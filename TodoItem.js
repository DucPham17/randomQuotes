import React from 'react';


function TodoItem(props){

    const textDeco ={
        color : "red",
        textDecoration : "line-through"
    }
       
        return ( 
        <div className="items">
            <input type="checkbox" onChange={() => props.handleChange(props.id)}/>
            <p style = {props.completed? textDeco : null}>{props.name}</p>
        </div>  
        )
    }

           



export default TodoItem;