import React, { useEffect } from "react";
import "../index.css";
import OrderDisplay from "../OrderDisplay";
import DBSelectOption from "../Components/DBSelectOption"
import { Link } from "react-router-dom";
import LabeledEdit from "../Components/LabeledEdit";
import { useState } from "react";

export default function FormOrder() {
    let [driver, setDriver] = useState("");
    const [placa, setPlaca] = useState([]);
    const [material, setMaterial] = useState([]);
    const [vale, setVale] = useState([]);
    const [conferente, setConferente] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/veiculos/", { method: "GET" })
            .then((response) => response.json())
            .then(json => setPlaca(json));
    },[])

    useEffect(() => {
        fetch("http://localhost:5000/material/", { method: "GET" })
            .then((response) => response.json())
            .then(json => setMaterial(json));
    },[])
 
    useEffect(() => {
        fetch("http://localhost:5000/vale/", { method: "GET" })
            .then((response) => response.json())
            .then(json => setVale(json));
    },[])
 
    useEffect(() => {
        fetch("http://localhost:5000/conferente/", { method: "GET" })
            .then((response) => response.json())
            .then(json => setConferente(json));
    },[])

    const handleChange = (event) => {
        event.target.value = event.target.value.toUpperCase();
        setDriver(event.target.value)
    }

    return(
        <div>
            <h1>Requisição de materiais a granel</h1>
            <form onSubmit={OrderDisplay} className="formOrder" >
                <LabeledEdit type="text" className="edit" 
                id="medida1" textlabel="Medida 1"
                forname="medida1" required maxLength="4"
                />
                <LabeledEdit type="text" className="edit" 
                id="medida2" textlabel="Medida 2" 
                forname="medida2" required maxLength="4"
                />
                <LabeledEdit type="text" className="edit" 
                id="motorista" textlabel="Motorista" 
                forname="motorista" required 
                value={driver} onChange={handleChange}
                />
                <DBSelectOption className="optionList" id="placa" forname="placa" textlabel="Caminhão"
                options={placa} optKey="id" optText="description" optValue="area" required
                />
                <DBSelectOption className="optionList" id="material" forname="material" textlabel="Material"
                options={material} optKey="id" optText="description" required
                />
                <DBSelectOption className="optionList" id="vale" forname="vale" textlabel="Vale"
                options={vale} optKey="id" optText="description" required
                />
                <DBSelectOption className="optionList" id="conferente" forname="conferente" textlabel="Conferente"
                options={conferente} optKey="id" optText="description" required
                />
                <button className="buttonApp" 
                type="submit">Imprimir</button>
            </form>
            <div className="headerOption">
                <Link className="linkpage" to="newtruck">Nova placa</Link>
                <Link className="linkpage" to="newperson">Novo conferente</Link>
                <Link className="linkpage" to="deltruck">Excluir placa</Link>
                <Link className="linkpage" to="delperson">Excluir conferente</Link>
            </div>
        </div>
    )
}