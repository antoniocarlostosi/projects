export default function LabeledEdit({forname, textlabel, ...rest}) {
    return(
        <>
            <label style={{cursor: "pointer", fontWeight: "600"}} forname={forname}>{textlabel}
            <input style={{ display: "block" }} {...rest}/>
            </label>
        </>
    )
}