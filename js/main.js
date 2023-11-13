const dolarBlue = 960;


let saldo = Number(prompt("Cuanto dinero quieres invertir?"));
    console.log("Tienes $" + saldo);

if (saldo >= dolarBlue){
    console.log("Podés comprar dólares.");
}else {
    console.log("No podés comprar dólares.");
}

confirm("Quieres comprar dólares?");
   

for(let i = 1000; i<= saldo; i=i+dolarBlue){
    console.log(i/dolarBlue + " dólares");
}

while (saldo >= dolarBlue) { 
    saldo -= dolarBlue; 
    console.log("Podés seguir comprando. " + "Tenes disponible $" + saldo); 
    if (saldo<dolarBlue) {
        console.log("No podes seguir comprando");
    }
} 

function resta(a,b){
    return a - b
}

let resultado = resta( saldo, dolarBlue);
console.log(resultado)
console.log("$" + resultado + ". Este es el saldo que te sobro o lo que te falta para poder seguir comprando.")

function tipoDolar(n, v, c) {
    this.nombre = n
    this.valor =
    this.compra = c
}

const blue = new tipoDolar ("Dolar Blue", "$960", "$940")
console.log(blue)
const oficial = new tipoDolar ("Dolar Oficial", "$368", "$349")
console.log(oficial)
const solidario = new tipoDolar ("Dolar Solidario", "$640", "$640")
console.log(solidario)
const bolsa = new tipoDolar ("Dolar Bolsa", "$903", "$884")
console.log(bolsa)
const cripto = new tipoDolar ("Dolar Cripto", "$897", "$888")
console.log(cripto)
