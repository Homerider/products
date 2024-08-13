// Вычислить общую стоимость запасов
// Напишите функцию totalInventoryValue(),
// которая вычисляет и возвращает общую стоимость запасов.
// Умножьте цену каждого товара на его количество и сложите эти значения. Решение-1

let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]

const totalInventoryValue = () => {
    let totalIValue = 0
    for (let i = 0; i < inventory.length; i++) {
        let allQuantity = inventory[i].quantity
        let allPrice = inventory[i].price
        if (allQuantity) {
            totalIValue += allQuantity * allPrice
        }
    }
    console.log(totalIValue)
}

totalInventoryValue()


// Вычислить общую стоимость запасов
// Напишите функцию totalInventoryValue(),
// которая вычисляет и возвращает общую стоимость запасов.
// Умножьте цену каждого товара на его количество и сложите эти значения. Решение-2

let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]

let totalInventoryValue = () => {
    return inventory.reduce((x, y) => {
        return x + (y.price * y.quantity)
    }, 0)
}

console.log(totalInventoryValue())
