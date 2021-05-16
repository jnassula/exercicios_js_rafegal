const prompt = require('prompt-sync')(); 

let numberA = Number(prompt("Digite o primeiro número: "))
let numberB = Number(prompt("Digite o segundo número: "))

console.log("1. Soma")
console.log("2. Subtração")
let opcao = Number(prompt("Selecione a opção desejada: "))
let resultado = 0



if (opcao === 1){
    resultado = numberA + numberB

    console.log(`A soma dos números é ${resultado}.`)
}else if (opcao === 2){
    resultado = numberA - numberB

    console.log(`A subtração dos números é ${resultado}.`)
}else{
    console.log("Opção inválida!")
}

