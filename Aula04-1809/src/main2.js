
function calcular() {
    console.log("estou executando calcular");
    let elem1 = document.getElementById("campo1")
    let nota1 = parseInt(elem1.value)
    let elem2 = document.getElementById("campo2")
    let nota2 = parseInt(elem2.value)
    let media = (nota1 + nota2) / 2
    console.log(`sua média é ${media}`)
}

