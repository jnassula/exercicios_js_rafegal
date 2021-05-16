let array = [10, 5, 7, 14, 8]
let primeiroMenorValor = array[0]
let posicaoPrimeiroMenorValor = 0

for (let i = 0; i < array.length; i++){
    if (array[i] < primeiroMenorValor){
        primeiroMenorValor = array[i]
        posicaoPrimeiroMenorValor = i
    }
}
console.log(posicaoPrimeiroMenorValor)
