let num = [5, 4 , 8 , 3]
num.push(1)   //acrescenta um valor no final
num.sort()   // organiza em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 esta  na posição ${pos}`)
}
