//     Вычислить общую стоимость запасов
// Напишите функцию totalInventoryValue(),
//     которая вычисляет и возвращает общую стоимость запасов.
//     Умножьте цену каждого товара на его количество и сложите эти значения.

let inventory = [
    { id: 1, name: "Apple", price: 0.50, quantity: 200 },
    { id: 2, name: "Banana", price: 0.30, quantity: 150 },
    { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
]
let totalInventoryValue = () => {
  return inventory.reduce((x, y) => {
    return x + (y.price * y.quantity)
  },0)
}

console.log(totalInventoryValue())
