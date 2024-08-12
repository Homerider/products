//     Обновление инвентаря
// Напишите функцию updateInventory(productId, amount),
//     которая обновляет количество определенного ID товара.
//     Сумма может быть положительной (добавление к инвентарю)
// или отрицательной (вычитание из инвентаря).
// Убедитесь, что функция не позволяет инвентарю опуститься ниже 0.

let inventory = [
    { id: 1, name: "Apple", price: 0.50, quantity: 200 },
    { id: 2, name: "Banana", price: 0.30, quantity: 150 },
    { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
]

let updateInventory = (productId, amount) => {
    let product = inventory.find(item => item.id === productId)
      if (product) {
        product.quantity = Math.max(0, product.quantity + amount)
    } else {
        console.log(`Товар с ID ${productId} не найден в инвентаре.`)
    }
}

updateInventory(1, -49)
console.log(inventory)
