import React from "react";
import "../index.css";
import OrderDisplay from "../OrderDisplay";
import DBSelectOption from "../Components/DBSelectOption"
import { Link } from "react-router-dom";
import LabeledEdit from "../Components/LabeledEdit";
import { useState } from "react";

export default function FormOrder() {
    let [driver, setDriver] = useState("");

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
                url="http://localhost:5000/veiculos/" required
                />
                <DBSelectOption className="optionList" id="material" forname="material" textlabel="Material"
                url="http://localhost:5000/material/" required
                />
                <DBSelectOption className="optionList" id="vale" forname="vale" textlabel="Valor do vale"
                url="http://localhost:5000/vale/" required
                />
                <DBSelectOption className="optionList" id="conferente" forname="conferente" textlabel="Conferente"
                url="http://localhost:5000/conferente/" required
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