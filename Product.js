import React from "react";

function Product(props){
    console.log(props);
    return (
        <div>
        <p>{props.id}</p>
        <p>{props.price}</p>
        <p>{props.name}</p>
        <p>{props.description}</p>
        </div>
        )
}

export default Product;