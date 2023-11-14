/*
* Дерево - рекурсивная структура данных, где каждый узел также является деревом
* Бинарное дерево поиска - дерево, где у каждого узла может быть только два потомка,
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
          if (!node.right) { // Если нет правого поддерева, то выходим из цикла
            break;
          }
          node = node.right // Присваиваем значение узлу
        } else { // То же самое для левого дерева
          if (!node.left) {
            break;
          }
          node = node.left
        }
      }

      if (value > node.value) { // Если значение больше чем значение узла, то добавляем новый узел вправо
        node.right = newNode
      } else { // Иначе добавляем значение влево
        node.left = newNode
      }
    }
  }
  // Прямой обход
  preOrder(node, callback) {
    if (!node) {
      return
    }

    if (callback) {
      callback(node)
    }

    this.preOrder(node.left, callback)
    this.preOrder(node.right, callback)
  }

  // Центрированный
  inOrder(node, callback) {
    if (!node) {
      return
    }

    this.preOrder(node.left, callback)
    if (callback) {
      callback(node)
    }
    this.preOrder(node.right, callback)

  }
  // Обратный обход
  postOrder(node, callback) {
    if (!node) {
      return
    }

    this.preOrder(node.left, callback)
    this.preOrder(node.right, callback)

    if (callback) {
      callback(node)
    }

  }
  // Обход в глубину. Существуют три варианта: прямой, центрированный и обратный обход
  traverseDFS(callback, method) {
    if (method === 'preOrder') {
      this.preOrder(this.root, callback)
    }
    if (method === 'inOrder') {
      this.inOrder(this.root, callback)
    }

    this.postOrder(this.root, callback)
  }

  // Обход в ширину
  traverseBFS() {

  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

