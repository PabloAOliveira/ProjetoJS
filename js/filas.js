// // function Queue() {
// //     var items = []

// //     this.enqueue = function() {
// //         //adiciona novo item
// //         items.push()
// //     }

// //     this.dequeue = function() {
// //         //remove um item 
// //         return items.shift()
// //     }

// //     this.front = function() {
// //         //retorna o primeiro elemeneto da fila
// //         return items[0]
// //     }

// //     this.isEmpty = function() {
// //         //verifica se a fila está vazia ou nao
// //         return items.length === 0
// //     }

// //     this.size = function() {
// //         //retorna o tamanho da fila
// //         return items.length
// //     }

// //     this.print = function() {
// //         //imprimir a fila no console
// //         console.log(items.toString())
// //     }
// // } 

// // function PriorityQueue() {
// //     var item = []

// //     function QueueElement (element, priority) {
// //         this.element = element
// //         this.priority = priority
// //     }
// //     this.enqueue = function(element, priority) {
// //         var queueElement = new QueueElement(element, priority)
// //         var added = false

// //         for(var i = 0; i < items.length; i ++) {
// //             if(queueElement.priority < items[i].priority) {
// //                 items.splice(i, 0, queueElement)
// //                 added = true
// //                 break
// //             }
// //         }
// //         if(!added) {
// //             items.push(queueElement)
// //         }
// //     }

// //     this.dequeue = function() {
// //         return items.shift()
// //     }

// //     this.print = function() {
// //         for(var i = 0; i < items.length; i++){
// //             console.log(items[i].element + ' ' + items[i].priority)
// //         }
// //     }
// // }

// // var pqueue = new PriorityQueue()
// // pqueue.enqueue('Carlos', 2)
// // pqueue.enqueue('ana', 1)
// // pqueue.enqueue('Lucas', 1)
// // pqueue.print()

// function hotPotato(nameList, num){
//     var queue = new Queue()

//     for(var i = 0; i < nameList.length; i ++) {
//         queue.enqueue(nameList[i])
//     }

//     var eliminated = ''

//     while(queue.size() > 1) {
//         for(var i = 0; i < num; i++){
//             queue.enqueue(queue.dequeue())
//     }
//         eliminated = queue.dequeue()
//         console.log(eliminated + 'was eliminated from the hot potato game')
//     }
//     return queue.dequeue()
// }

// var names = ['Pablo', 'antonio', 'oliveira', 'abacate', 'abacaxi']
// var winner = hotPotato(names, 7)
// console.log('the winner is' + winner)