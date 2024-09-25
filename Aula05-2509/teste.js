

function trecho() {
    let e1 = document.getElementById("cxaTexto1")

    let idade = parseInt(e1.value)
    console.log("idade",idade);    
    let e2 = document.getElementById("resposta")

    if(idade >= 18) {
        //console.log("maior de idade")
        e2.innerText = "maior de idade"
    } else {
        //console.log("menor");
        e2.innerText = "menor de idade"
    }

    //console.log("e2",e2.innerText);
    
}

