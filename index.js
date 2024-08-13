// Поиск товаров с низким запасом  Решение-1
// Напишите функцию findLowStock(threshold), которая возвращает массив
// названий товаров, количество которых ниже определенного порога.
// Используйте Object.entries() для работы с идентификатором и данными
// каждого товара.

let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]

const findLowStock = (threshold) => {
    let products = inventory
        .filter(i => i.quantity < threshold)
        .map(i => i.name)
    if (products.length > 0) {
        console.log(`Товары с низким запасом: ${products}. Количество ниже ${threshold}`)
    } else {
        console.log(`Нет товаров ниже утанановленного порога ${threshold}`)
    }
    return products // тут есть 'пробел'. знаю для чего нужен 'return', но никак не уложиться в голове почему
    // иногда пишется вначале, а иногла в конце
}

findLowStock(70)


// Поиск товаров с низким запасом  Решение-2
// Напишите функцию findLowStock(threshold), которая возвращает массив
// названий товаров, количество которых ниже определенного порога.
// Используйте Object.entries() для работы с идентификатором и данными
// каждого товара.

let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]

let findLowStock = (threshold) => {
    return inventory // тут есть 'пробел'. знаю для чего нужен 'return', но никак не уложиться в голове почему
        // иногда пишется вначале, а иногла в конце
        .filter(item => item.quantity < threshold)
        .map(item => item.name)
};

console.log(findLowStock(100))

