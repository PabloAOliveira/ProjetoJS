// // // function Stack() {
// // //     var items = []

// // //     this.push = function(element) {
// // //         //adiciona um novo item à pilha
// // //         items.push(element)
// // //     }

// // //     this.pop = function() {
// // //         //remover o item do topo da pilha
// // //         return items.pop()
// // //     }

// // //     this.peek = function() {
// // //         //devolve o elemento que está no topo da pilha
// // //         return items[items.length -1]
// // //     }

// // //     this.isEmpty = function() {
// // //         //informar se a pilha esta vazia ou não
// // //         return items.length === 0
// // //     }

// // //     this.clear = function() {
// // //         //limpa a pilha
// // //         items = []
// // //     }

// // //     this.size = function() {
// // //         //informar o tamanho da pilha
// // //         return items.length
// // //     }

// // //     this.print = function() {
// // //         //imprime a pilha no console como string
// // //         console.log(items.toString())
// // //     }
// // // }

// // function dec2bin(decNumber) {
// //     var restStack = [],
// //     rest,
// //     binaryString = ''

// //     while(decNumber > 0) {
// //         rest = Math.floor(decNumber % 2) 
// //         restStack.push(rest)
// //         decNumber = Math.floor(decNumber / 2)
// //     }

// //     while(restStack.length > 0) {
// //         binaryString += restStack.pop().toString()
// //     }

// //     return binaryString
// // }

// // console.log(dec2bin(25))

// function baseConverter(decNumber, base) {
//     var restStack = [],
//     rest,
//     baseString = '',
//     digits = '123456789ABCDEF'

//     while(decNumber > 0) {
//         rest = Math.floor(decNumber % base)
//         restStack.push(rest)
//         decNumber = Math.floor(decNumber / base)
//     }

//     while(restStack.length > 0) {
//         baseString += digits[restStack.pop()]
//     }


//     return baseString
// }