let array = [10, 5, 7, 14, 8]
let maiorValor = array[0]
let soma = 0


for(i = 0; i < array.length; i++){
    soma += array[i]
    if (array[i] > maiorValor){
        maiorValor = array[i]
    }
}

console.log(maiorValor)
console.log(soma)