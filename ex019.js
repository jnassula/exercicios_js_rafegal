let nome = "Oliver"
let sobrenome = "Galleani"
let numero = 10

let nomeSobrenome = nome + ' ' + sobrenome
let totalCaracteres = nomeSobrenome.length * numero

if (totalCaracteres % 2 == 0){
    console.log(`A quantidade de caracteres dessa variável é ${totalCaracteres}. Essa variável é PAR.`)
}else{
    console.log("Essa variável é IMPAR.")
}