import { Link } from "react-router-dom"
import LabeledEdit from "../Components/LabeledEdit"
import "../index.css";
import { useState, useEffect } from "react"

export default function NewTruck() {
    const [placa, setPlaca] = useState([]);
    let [dados, setDados] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/veiculos/", {method: "GET"})
        .then((response) => response.json())
        .then(json => setPlaca(json))
    },[])

    const newId = placa.map(element => element.id);
    const postId = newId.findLast((element) => element > newId.length+1)+1;

    function postNewPlate() {
        let largo = document.getElementById("comprimento").value;
        let ancho = document.getElementById("largura").value;
        let areaq = Number(largo * ancho).toPrecision(3);

        fetch("http://localhost:5000/veiculos/", {
            method: "POST",
            body: JSON.stringify({
                id: Number(postId),
                description: document.getElementById("placa").value,
                area: Number(areaq),
            }),
            headers: {"Content-type": "application/json"}, })
        .then(alert("Cadastro realizado!"))         
    }

    const handleChange = (event) => {
        event.target.value = event.target.value.toUpperCase();
        setDados(event.target.value)
    }

    return(
        <div>
            <h1>Cadastro de placas das carretas</h1>
            <form onSubmit={postNewPlate} className="formOrder" >
                <LabeledEdit type="number" className="edit" 
                id="comprimento" 
                textlabel="Comprimento da carreta " 
                forname="medida1" required min="1" step="0.1"
                />
                <LabeledEdit type="number" className="edit" 
                id="largura" 
                textlabel="Largura da carreta " 
                forname="medida2" required min="1" step="0.1"
                />
                <LabeledEdit type="text" className="edit" 
                id="placa" 
                textlabel="Placa " 
                forname="placa" required maxLength="8" 
                placeholder="AAA-0000" pattern="[0-9A-Z]{3}-[0-9A-Z]{4}"
                value={dados}
                onChange={handleChange}
                />
                <button className="buttonApp" type="submit">Gravar</button>
            </form>
            <div className="headerOption">
                <Link className="linkpage" to="/" >Retornar</Link>
            </div>
        </div>
    )
}            