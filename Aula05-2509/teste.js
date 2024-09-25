

function trecho() {
    let e1 = document.getElementById("cxaTexto1")

    let idade = parseInt(e1.value)
    console.log("idade",idade);    
    let e2 = document.getElementById("resposta")

    if(idade <= 12) {
        e2.innerText = "criança"
    } else {
        if(idade < 18) {
            e2.innerText = "Adolescente"
        } else {
            if(idade < 45) {
                e2.innerText = "Adulto"
            } else {
                e2.innerText = "Véio"
            }
        }
    }

    //console.log("e2",e2.innerText);
    
}

