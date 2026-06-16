let numeros = [17,93,-63,50,88,1]
let menor = 0
for (i = 0; i < numeros.length; i++){
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}
console.log("O maior numero é : "+ menor)
