// Shopping List 
// https://www.codewars.com/kata/shopping-list/train/javascript 

var groceries = {
    'Orange Juice': { 'price': 1.5, 'discount': 10, 'bogof': false },
    'Chocolate': { 'price': 2, 'discount': 0, 'bogof': true },
    'Sweetcorn': { 'price': 4, 'discount': 20, 'bogof': true },
    'Apples': { 'price': 6, 'discount': 0, 'bogof': false },
    'Pears': { 'price': 2, 'discount': 50, 'bogof': false }
}


const shoppingListCost = (arr) => {
    let groceryList = { ...groceries }
    // let groceryList = {}
    let total = 0


    // Populate the full grocery list 
    for (let item in groceryList) {
        arr.forEach((innerArray) => {
            if (item === innerArray[0]) {
                let quantity = innerArray[1]
                // groceryList[item].quantity = quantity
                groceryList[item] = { ...groceryList[item], quantity }
            }
        })
    }

    for (let item in groceryList) {
        if (groceryList[item].quantity) {

            // Check if BOGO is in effect 
            if (groceryList[item].bogof) {
                if (groceryList[item].quantity % 2 === 0) {
                    // do this if quantity is even 
                    let newQuantity = groceryList[item].quantity / 2
                    groceryList[item].quantity = newQuantity
                } else {
                    // do this if quantity is odd 
                    let newQuantity = (groceryList[item].quantity + 1) / 2
                    groceryList[item].quantity = newQuantity
                }
            }

            // Get the subtotal for each item and keep adding to the total 
            let discount = (100 - groceryList[item].discount) / 100
            let subtotal = (groceryList[item].quantity * groceryList[item].price) * discount
            total += subtotal
        }
    }

    return total
}

console.log(shoppingListCost([["Chocolate", 3], ["Apples", 8], ["Orange Juice", 15], ["Pears", 1]])) // => 73.25
// console.log(shoppingListCost([["Orange Juice", 2], ["Chocolate", 4]])) // => 6.7 
// console.log(shoppingListCost([["Chocolate", 5], ["Orange Juice", 15]])) // => 26.25 
// console.log(shoppingListCost([["Pears", 4], ["Chocolate", 87], ["Sweetcorn", 3]])) // => 98.4
// console.log(shoppingListCost([["Orange Juice", 100]])) // => 135 

