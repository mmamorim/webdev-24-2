
let nota1, nota2, media

function calcular() {
    console.log("vamos calcular...");    
    let elem1 = document.getElementById("campo1") 
    let nota1 = parseFloat(elem1.value)        
    let elem2 = document.getElementById("campo2") 
    let nota2 = parseFloat(elem2.value)        
    media = (nota1+nota2)/2
    console.log("A média é",media);
}

