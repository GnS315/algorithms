/*
* Пусть у нас есть некоторая функция которая производит некоторые вычисления и возвращает ответ.
* Мы решили закешировать её. И для этого заключим её в функцию-обертку, где и реализуем кеширование
* */

function someFunction(x) {
    // Какие-либо вычисления...
    return x
}

function cachingDecorator(func) {
    const cache = new Map()

    return function(x) {
        if (cache.has(x)) { // Если кеш содержит x
            return cache.get(x) // То достаем результат
        }

        let result = func(x)  // Иначе вызываем функцию, получаем результат

        cache.set(x, result) // И записываем в кэш
        return result
    }
}

someFunction = cachingDecorator(someFunction)

console.log(someFunction(100)) // Кешируем
console.log(someFunction(100)) // Достаем уже из кэша

/*
* В данном случае cachingDecorator - это декоратор, который принимает другую функцию и изменяет её поведение
* Мы можем переиспользовать декоратор с любой функцией и получать кеширующую обертку
* Результат вызова декоратора является оберткой, т.е. функция function(x) «оборачивает» вызов func(x) в кеширующую логику
* */