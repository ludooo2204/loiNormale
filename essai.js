console.log("coucou")

function randNormal(mean=2,std=0.2) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    
return num*std+mean

}
let meanCherché=1
let stdCherché=0.1
let sum=0
let sum2=0
let nbrMesure=100000
let array=[]
console.log("mean visé = ",meanCherché)
console.log("std visé = ",stdCherché)
for (let index = 0; index < nbrMesure; index++) {

    const valeur=randNormal(meanCherché,stdCherché)
    array.push(valeur)
    const ecartMoyenne=(valeur-1)*(valeur-1)
    sum+=valeur
    sum2+=ecartMoyenne
    // console.log(valeur)
    // console.log(index)
}
const moyenne=sum/(nbrMesure)
const moyenne2=sum2/(nbrMesure-1)
console.log("moyenne", moyenne)
console.log("std", Math.sqrt(moyenne2))
// const std=Math.sqrt(sum)
// console.log(std)
console.log("max= ",Math.max(...array))
console.log("min =",Math.min(...array))
// console.log(Math.(...array))
