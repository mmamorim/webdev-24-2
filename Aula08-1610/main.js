
let vetor1 = [ 37, 12, 56, 44, 23, 22 ]
vetor1.push(45)
console.log(vetor1);

function maior(a,b) {
    if(a<b) return -1
    if(a>b) return 1
    return 0
}

vetor1.sort((a,b) => {
    if(a<b) return -1
    if(a>b) return 1
    return 0
})

for(let i=0; i<vetor1.length; i++) {
    console.log("posição "+i,vetor1[i]);    
}

for(let i in vetor1) {
    console.log("posição "+i,vetor1[i]);    
}