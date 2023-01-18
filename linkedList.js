/*
* Связный список - это структура данных, в которой значения хранятся линейно и каждое значение содержит в себе
* собственное значение узла и ссылку на следующий узел в списке
* */


class LinkedList { // Класс связного списка
    constructor() {
        this.size = 0 // По умолчанию размер будет 0
        this.root = null // Корневой элемент, по умолчанию 0
    }

// Метод для добавления заначения
    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }
//Метод для получения размера списка
    getSize() {
        return this.size
    }
//Метод для вывода списка
    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result);;
    }
}

class Node { //Класс для добавления узла
    constructor(value) {
        this.value = value // Значение
        this.next = null // Ссылка на следующий элемент
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(2)
list.add(5)
list.add(7)

list.print() //[5,3,2,5,7]