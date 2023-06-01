import React from "react"
import { useState, useEffect } from "react"

export default function DBSelectOption ({forname, textlabel, url, ...rest}) {
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        fetch(`${url}`)
        .then((response) => response.json())
        .then(json => setOptions(json))
    },[url])

    return(
        <>
            <label style={{cursor: "pointer", fontWeight: "600"}} forname={forname}>{textlabel} 
            <select style={{ display: "block" }} {...rest}>
                <option></option>
                {options.map((descr) => (
                <option 
                    key={descr.id} 
                    value={descr.area} 
                >{descr.description}</option>
                ))}
            </select>
            </label>
        </>        
    )
}