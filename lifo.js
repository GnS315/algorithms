// lifo - last in first out - первый зашел, первый вышел - стек
// Стек — упорядоченная коллекция элементов, в которой добавление новых 
// и удаление старых элементов всегда происходит с одного конца коллекции. 
// Обычно его называют вершиной стека.
//
// Работа со стеком включает в себя следующие операции:
// Добавить в стек - push
// Взять из стека - pop
// Вернуть элемент из вершины без удаления - peek
// Проверить на пустоту - isEmpty
// Вернуть размер - size
//

class Stack {

  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length-1]
  }

  isEmpty() {
    return this.stack.length === 0
  }

  size() {
    return this.stack.length
  }
}