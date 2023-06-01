import { Link } from "react-router-dom"
import "../index.css";
import { useState, useEffect } from "react";

export default function DeleteTruck() {
    const [plate, setPlate] = useState([]);

    useEffect(() => {
        ListPlates();
    },[])

    function ListPlates() {
        fetch("http://localhost:5000/veiculos/", { method: "GET" })
            .then((response) => response.json())
            .then(json => setPlate(json));
    }

    function DeletePlate(numId) {
       fetch(`http://localhost:5000/veiculos/${numId}`, {method: "DELETE"})
        .then(alert("Placa excluída!")).then(ListPlates)        
    }

    return(
        <div>
            <h1>Exclusão de placas</h1>
            {plate.map((item) => (
                <div className="divitem">
                    <button className="buttonApp" onClick={() => DeletePlate(item.id)}>{item.description}</button>
                </div>
            ))}
            <div className="headerOption">
                <Link className="linkpage" to="/" >Retornar</Link>
            </div>
        </div>
    )
}            
