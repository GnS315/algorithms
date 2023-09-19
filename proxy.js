/*
* Proxy - объект, который "оборачивается" вокруг другого объекта и может перехватывать и обрабатывать
* разные действия с ним, чтение/запись и т.д.
* */

// Объявление прокси
const proxy = new Proxy(target, handler)

// target - объект, для которого нужно сделать прокси
// handler - конфигурация прокси, объект с методами, которые перехватывают различные операции

/************************************************/

// Создадим пустой прокси без конфигуации
const target = {}
const proxy = new Proxy(target, {})
proxy.number = 1

console.log(target.number) // 1 свойство появилось в target
console.log(proxy.number) // 1 также можно прочитать его из proxy

/*
* С пустым handler, запросы будут перенаправляться на target без изменений
* */

/************************************************/

/*
* Для действий с объектами существуют "внутренние методы", которе на низком уровне описывают как его выполнять
* Ловушки в конфигурации перехваытывают вызовы этих методов, полный список описан в спецификации:
* https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots
* Для каждого внутреннего метода в таблице указана ловушка, т.е. имя метода, который мы можем добавить в handler при
* при создании прокси, чтобы перехватить эту операцию
* */

/*
* Ловушка с get
* Чтобы перехватить операцию чтения, handler должен иметь метод get(target, property, receiver), он сработает
* при попытке прочитать свойства объекта
* target - оригинальный объект, который передавали в аргументом в конструктор new Proxy
* property - имя свойства
* receiver - если свойство объекта является геттером, то receiver - это объект, который использован как this при
* его вызове
* */

// Ловушка с get, которая вернет null, если объекта не будет в массиве

let numbers = [1,2,3,4,5,6]

numbers = new Proxy(numbers, {
    get(target, property) {
        if (property in target) {
            return target[property]
        } else {
            return null
        }
    }
})

console.log(numbers[1]) // 1
console.log(numbers[123123]) // null

/*
* Set сработает, когда произойдет запись свойства
* set(target, property, value, receiver)
* target - оригинальный объект
* property - имя свойства
* value - значение свойства
* receiver - то же, что в get
* */
// Ловушка с set, которая будет записывать в массив только числа или созвращать ошибку

let numbers = []

numbers = new Proxy(numbers, {
    set(target, prop, value) {
        if (typeof value === 'number') {
            target[prop] = value
            return true
        } else {
            return false
        }
    }
})

numbers.push(1)
numbers.push(2)
console.log(numbers) // [1,2]
numbers.push('adfsdf') // TypeError