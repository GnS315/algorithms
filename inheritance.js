/*
* Наследование через классы
* Наследование классов - способ расширения одного класса другим, таким образом мы можем добавить новый функционал
* к уже существующему
* Наследование происходит при помощи ключевого слова extends
* */

// Допустим, у нас есть класс Animal

class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name
    }
    run(speed) {
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }
    stop() {
        this.speed = 0
        console.log(`${this.name} стоит неподвижно.`)
    }
}

/*
* Допустим мы хотим создать класс Fox, который будет расширять класс Animal
* */

class Fox extends Animal {
    constructor(tailLength) {
        super();
        this.tailLength = tailLength
    }
    hunt() {
        console.log(`${this.name} охотится`)
    }

}

const fox = new Fox('Полярная лиса', 10)

fox.run(10) // Полярная лиса бежит со скоростью 10
fox.hunt() // Полярная лиса охотится

/*
* Таким образом объект класса Fox имеет доступ как к методым Fox, так и к методам Animal
* Если не указать конструктор в дочернем классе, то будет вызван конструктор родительского.
* В дочерних класах при вызове конструктора нужно указывать super() и делать это перед использованием this
* */

/**********************************************************************/

/*
* Прототипное наследование
*
* В js у объектов существует скрытое свойство [[Prototype]], которое либо равно null, либо ссылается на другой объект,
* этот объект и есть прототип. Когда мы хотим получить какое-то свойство, а его нет,
* то оно автоматически берется из прототипа
* Одним из способов задать прототип, является использование __proto__ - геттер/сеттер для [[Prototype]]
* Ограничения: ссылки не могут идти по кругу, значение __proto__ может быть объектом или null, другое будет игнорироваться
* */

const animal = {
    eats: true
}
const rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

// теперь мы можем найти оба свойства в rabbit:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

/*
* Объекты можно создать при помощи функции-конструктора new F(), если в F.prototype будет содержаться объект,
* то оператор new установит его в качестве [[Prototype]] для нового объекта. prototype - обычное свойство с именем
* "prototype"
* */

const animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name
}

Rabbit.prototype = animal

const rabbit = new Rabbit('Кролик')

console.log(rabbit.eats) // true
