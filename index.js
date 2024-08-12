// Отображение названий продуктов
// Получите все продукты и вывести их названия на консоль.
let inventory = [
    { id: 1, name: "Apple", price: 0.50, quantity: 200 },
    { id: 2, name: "Banana", price: 0.30, quantity: 150 },
    { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
]
let allProductNames = inventory.map(products => products.name).join(`, `)
console.log(`Продукты на складе: ${allProductNames}`)
