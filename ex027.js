const prompt = require('prompt-sync')();
let array = [30, 89, 10, 41 ,25]

/* for(i = 0; i < array.length; i++){
    
    console.log(array[i])
} */
let number = Number(prompt("Digite um número: "))
let acertouNumero = false

for(let elemento of array){
    if (number == elemento){
        acertouNumero = true
    }
    
}
if (acertouNumero){
    console.log("Parabéns vc acertou!")
}else{
    console.log("Você errou!")
}