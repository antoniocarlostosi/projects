import { Link } from "react-router-dom"
import "../index.css";
import DBSelectOption from "../Components/DBSelectOption";


export default function DeleteTruck() {

    function DeletePlate() {
        fetch("http://localhost:5000/veiculos/", {method: "DELETE"})
        .then(alert("Placa excluída!"))         
    }

    return(
        <div>
            <h1>Excluir placas das carretas</h1>
            <form className="formOrder">
                <DBSelectOption className="optionList" id="placa" forname="placa" textlabel="Caminhão "
                ext="Selecione o caminhão"
                url="http://localhost:5000/veiculos/" required
                />
                <button className="buttonApp" onClick={DeletePlate}>Excluir</button>
            </form>
            <div className="headerOption">
                <Link className="linkpage" to="/" >Retornar</Link>
            </div>
        </div>
    )
}            