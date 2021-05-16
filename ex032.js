function validaNumerosPositivos(array){
    // escreva seu código aqui
    

    for (let i = 0; i < array.length; i++){
        
        if (array[i] > 1){
            array[i] = true
        }else 
            array[i] = false
       
    }
    return array   
}
let array = [10, 10, -5, 2, -2, 10, 0]
let boolean = validaNumerosPositivos(array)
console.log(boolean)