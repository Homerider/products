// Отображение названий продуктов
// Получите все продукты и вывести их названия на консоль. Решение-1
let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]
for (let i = 0; i < inventory.length; i++) {
    console.log(`Продукты на складе: ${inventory[i].name}`)
}


// Отображение названий продуктов
// Получите все продукты и вывести их названия на консоль. Решение-2
let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]
let allProducts = inventory.map(i => {
    return i.name
})
console.log(`Продукты на складе: ${allProducts}`)


// Отображение названий продуктов
// Получите все продукты и вывести их названия на консоль. Решение-3
let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]
let allProductNames = inventory.map(products => products.name).join(`, `)
console.log(`Продукты на складе: ${allProductNames}`)