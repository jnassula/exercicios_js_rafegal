const prompt = require('prompt-sync')(); 

let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let idade = prompt("Digite sua idade: ")

console.log("Olá " + nome + ' ' + sobrenome + ' - ' + idade + ' anos.')