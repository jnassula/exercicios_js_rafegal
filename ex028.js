let array = ["Hoje", "Eu", "Quero", "Aprender"]
let menorString = array[0]

for(i = 0; i < array.length; i++){
    if (array[i].length < menorString.length){
        menorString = array[i]
    }
}
console.log(menorString)