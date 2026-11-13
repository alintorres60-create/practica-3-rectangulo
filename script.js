function calcular() {

    let base = parseFloat(document.getElementById("base").value);

    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Ingrese valores mayores que cero";
        return;
    }
    
    let area = base * altura;
    
    let perimetro = 2 * base + 2 * altura;
    
    document.getElementById("resultado").innerHTML =
        "Área: " + area +
        "<br>Perímetro: " + perimetro;
}

