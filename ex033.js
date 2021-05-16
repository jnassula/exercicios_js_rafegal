function validaNumerosParesImpares(array){
    // escreva seu código aqui
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            array[i] = +1
        }else{
            array[i] = -1
        }
    }
    return array
}



let array = [10, 10, 5, 2, 2, 10, 0]
let boolean = validaNumerosParesImpares(array)
console.log(boolean)