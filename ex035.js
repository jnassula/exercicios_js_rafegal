function identificaMaiorString(array){
    // escreva seu código aqui
    let maiorString = array[0]
    for (let i = 0; i < array.length; i++){
        if(array[i].length > maiorString.length){
            maiorString = array[i]
        }
    }
    return maiorString
} 


let array = ["Gato", "Cachorro", "Zebra", "Boi"]
let resultado = identificaMaiorString(array)
console.log(resultado)