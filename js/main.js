const dolarBlue = 959;

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

