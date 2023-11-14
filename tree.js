/*
* Дерево - рекурсивная структура данных, где каждый узел также является деревом
* Бинарное дерево (дерево поиска) - дерево, где у каждого узла может быть только два потомка,
* при этом значение меньше родительского узла должно находиться в левом узле, а большее в правом
* */

class BinaryTree {
  constructor() {
    this.root = null
  }
  // Добавление узла
  add(value) {
    if (!this.root) { //Если нет корневого узла, то добавляем его
      this.root = new Node(value)
    } else {
      let node = this.root
      let newNode = new Node(value)

      while (node) { // Крутимся в цикле пока node не будет равна пустому значению
        if (value > node.value) { // Если значение больше чем значение узла, то уходим в правое поддерево
          if (!node.rigth) { // Если нет правого поддерева, то выходим из цикла
            break;
          }
          node = node.rigth // Присваиваем значение узлу
        } else { // То же самое для левого дерева
          if (!node.left) {
            break;
          }
          node = node.left
        }
      }

      if (value > node.value) { // Если значение больше чем значение узла, то добавляем новый узел вправо
        node.rigth = newNode
      } else { // Иначе добавляем значение влево
        node.left = newNode
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.rigth = null
  }
}

