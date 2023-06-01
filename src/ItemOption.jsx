import React from "react";

export default function ItemOption (props) {
    return(
        <button><a href={props.link}>{props.text}</a></button>
    )
}