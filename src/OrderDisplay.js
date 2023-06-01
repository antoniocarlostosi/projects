export default function OrderDisplay() {
    const datavale = new Date();
    const veiculo = document.getElementById("placa");
    const motorista = document.getElementById("motorista").value;
    const material = document.getElementById("material").value;
    const conferente = document.getElementById("conferente").value;
    const vale = document.getElementById("vale").value;
    const area = veiculo.value
    const placa = veiculo.options[veiculo.selectedIndex].text;
    
    // Cálculo do volume
    let med1 = document.getElementById("medida1");
    let med2 = document.getElementById("medida2");
    med1 = med1.value.replace(",",".")
    med2 = med2.value.replace(",",".")
    const volume = (((Number(med1)+Number(med2)) / 2)*Number(area)).toFixed(2)

    let style = "<style>";
    style += "body {width: 100%; font-size: 24px; font-family: Helvetica; padding: 10px 10px;}";
    style += "h2 {font-size: 24px}";
    style += "table, td {border: solid 1px black; border-collapse: collapse; padding: 2px 3px; text-align: center}";
    style += "table {width: 95%}";
    style += "td {height: 50px} </style>";
    
    let win = window.open('', '', 'height=700,width=1200');
    win.document.write('<html><head>');
    win.document.write('<title>Areia e pedra</title>');
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write("<center><h2>Recebimento de materiais a granel</h2></center><br><br><br>");
    win.document.write("<table>");
    win.document.write("<tr><td>Data</td>");
    win.document.write(`<td>${datavale.toLocaleString("pt-BR", {dateStyle: "short"})}</td></tr>`);
    win.document.write("<tr><td>Metragem</td>");
    win.document.write(`<td>${volume.replace(".",",")} M3 ${material}</td></tr>`);
    win.document.write("<tr><td>Motorista</td>");
    win.document.write(`<td>${motorista.toUpperCase()}  (${placa})</td></tr>`);
    win.document.write("<tr><td>Vale</td>");
    win.document.write(`<td>${vale}</td></tr>`);
    win.document.write("<tr><td>Conferente</td>");
    win.document.write(`<td>${conferente}</td></tr></table>`);
    win.document.write("<br><br><br>");
    win.document.write("<hr>");
    win.document.write("<br><br>");
    win.document.write("<center><h2>Recebimento de materiais a granel</h2></center><br><br><br>");
    win.document.write("<table>");
    win.document.write("<tr><td>Data</td>");
    win.document.write(`<td>${datavale.toLocaleString("pt-BR", {dateStyle: "short"})}</td></tr>`);
    win.document.write("<tr><td>Metragem</td>");
    win.document.write(`<td>${volume.replace(".",",")} M3 ${material}</td></tr>`);
    win.document.write("<tr><td>Motorista</td>");
    win.document.write(`<td>${motorista.toUpperCase()}  (${placa})</td></tr>`);
    win.document.write("<tr><td>Vale</td>");
    win.document.write(`<td>${vale}</td></tr>`);
    win.document.write("<tr><td>Conferente</td>");
    win.document.write(`<td>${conferente}</td></tr></table>`);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
}