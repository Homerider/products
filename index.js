// Поиск товаров с низким запасом
// Напишите функцию findLowStock(threshold), которая возвращает массив
// названий товаров, количество которых ниже определенного порога.
//     Используйте Object.entries() для работы с идентификатором и данными
// каждого товара.

let inventory = [
    { id: 1, name: "Apple", price: 0.50, quantity: 200 },
    { id: 2, name: "Banana", price: 0.30, quantity: 150 },
    { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
]

let findLowStock = (threshold) => {
    return inventory
        .filter(item => item.quantity < threshold)
        .map(item => item.name)
};

console.log(findLowStock(100))
