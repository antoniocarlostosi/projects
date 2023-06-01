import { Link } from "react-router-dom"
import "../index.css";
import { useState, useEffect } from "react"

export default function DeletePerson() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        ListPersons();
    },[])

    function ListPersons() {
        fetch("http://localhost:5000/conferente/", { method: "GET" })
            .then((response) => response.json())
            .then(json => setPerson(json));
    }

    function DeleteConf(numId) {
       fetch(`http://localhost:5000/conferente/${numId}`, {method: "DELETE"})
        .then(alert("Conferente excluído!")).then(ListPersons)        
    }

    return(
        <div>
            <h1>Exclusão de conferentes</h1>
            {person.map((item) => (
                <div className="divitem">
                    <button className="buttonApp" onClick={() => DeleteConf(item.id)}>{item.description}</button>
                </div>
            ))}
            <div className="headerOption">
                <Link className="linkpage" to="/" >Retornar</Link>
            </div>
        </div>
    )
}            

