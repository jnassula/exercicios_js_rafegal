let nome = "Oliver"
let sobrenome = "Galleani"
let nomeSobrenome = nome + ' ' + sobrenome

let totalLetras = nomeSobrenome.length

if (totalLetras % 2 == 0){
    console.log(`O total de letras dessa variável é ${totalLetras}. Consequentemente é PAR.`)
}else{
    console.log(`O total de letras dessa variável é ${totalLetras}. Consequentemente é IMPAR.`)
}