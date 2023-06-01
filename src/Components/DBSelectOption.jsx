import React from "react"

export default function DBSelectOption ({forname, textlabel, options, optKey, optValue, optText, ...rest}) {
    return(
        <>
            <label style={{cursor: "pointer", fontWeight: "600"}} forname={forname}>{textlabel} 
            <select style={{ display: "block" }} {...rest}>
                <option></option>
                {options.map((descr) => (
                <option 
                    key={descr[optKey]} 
                    value={descr[optValue]} 
                >{descr[optText]}</option>
                ))}
            </select>
            </label>
        </>        
    )
}