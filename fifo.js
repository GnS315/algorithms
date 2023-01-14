// fifo - firs in firs out - первый зашел, первый вышел - очередь
//
// Работа с очередью включает в себя следующие операции:
// enqueue — добавление нового элемента в очередь
// dequeue — удаление первого элемента из очереди
// size - получить длинны
// peek - получить первый элемент без удаления
//

class Queue {

  constructor() {
    this.queue = []
  }

  enqueu(item) {
    this.queue.push(item)
  }

  dequeue() {
    this.queue.shift()
  }

  size() {
    return this.queue.length
  }

  peek() {
    return this.queue[0]
  }
}