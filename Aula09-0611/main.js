
console.log("oi gentes");

//let v = [ 10, 20, 30, 40, 50 ]
// console.log(v);
//let x = v[0]
//let y = v[1]
// desestruturação 
//let [x,y, ,z] = v
//console.log(x,y,z);

let obj = {
    nome: "Fiesta",
    marca: "ford",
    ano: 2024,
    motor: {
        potencia: 1.8,
        tipo: "Aspirado"
    }
}

//obj.nome = "Ana"
//obj.idade = 23
//obj.fome = true

console.log(obj)

let {nome, marca} = obj

console.log(nome,marca);

function fazAlgo({nome,marca}) {

}

fazAlgo(obj)