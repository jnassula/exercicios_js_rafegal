function validaTemperatura(temperaturas){    
    let menorTemperatura = temperaturas[0]
    let maiorTemperatura = temperaturas[0]
    let media = 0
    let soma = 0

    // escreva seu código aqui
    for (let i = 0; i < temperaturas.length; i++){
        if (temperaturas[i] > maiorTemperatura){
            maiorTemperatura = temperaturas[i]
        }
        if (temperaturas[i] < menorTemperatura){
            menorTemperatura = temperaturas[i]
        }
        soma += temperaturas[i]
    }
    media = soma / temperaturas.length

    return {maiorTemperatura, menorTemperatura, media}
}

let temperatura = [5, 5, 10, 10]
let resultado = validaTemperatura(temperatura)
console.log("Maior temperatura:", resultado.maiorTemperatura)
console.log("Menor temperatura:", resultado.menorTemperatura)
console.log("Média da temperatura:", resultado.media)