function validaRepeticaoNumeroNoArray(array, numero){
    // escreva seu código aqui
    numeroX = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] === numero){
            numeroX++
        }
    }
    return numeroX
}

let array = [10, 10, 5, 2, 2, 10]
let vezesRepetidas = validaRepeticaoNumeroNoArray(array, 10)
console.log(vezesRepetidas)