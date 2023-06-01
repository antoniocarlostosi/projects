import { Link } from "react-router-dom"
import LabeledEdit from "../Components/LabeledEdit"
import "../index.css";
import { useState, useEffect } from "react"

export default function NewPerson() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/conferente/", {method: "GET"})
        .then((response) => response.json())
        .then(json => setPerson(json))
    },[])

    const newId = person.map(element => element.id);
    const postId = newId.findLast((element) => element > newId.length+1)+1;

    function postNewPerson() {       
        fetch("http://localhost:5000/conferente/", {
            method: "POST",
            body: JSON.stringify({
                id: Number(postId),
                description: document.getElementById("nome").value,
            }),
            headers: {"Content-type": "application/json"}, })
        .then(alert("Cadastro realizado!"))         
    }

    return(
        <div>
            <h1>Cadastro de conferentes</h1>
            <form onSubmit={postNewPerson} className="formOrder" >
                <LabeledEdit type="text" className="edit" 
                id="nome" 
                textlabel="Nome do conferente" 
                forname="nome" required
                />
                <button className="buttonApp" type="submit">Gravar</button>
            </form>
            <div className="headerOption">
                <Link className="linkpage" to="/" >Retornar</Link>
            </div>
        </div>
    )
}            