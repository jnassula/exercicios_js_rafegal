function validaNUmerosNegativos(array){
    let numeros = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] < 0){
            numeros++
        }
    }
    return numeros
}

let array = [1, 25, 12, -4, -9, -7, 8]
let resultado = validaNUmerosNegativos(array)
console.log(resultado)