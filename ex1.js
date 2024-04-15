function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (let item of cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }
  let shoppingCart = [
    { name: "Apples", price: 2.5, quantity: 3 },
    { name: "Bananas", price: 1.5, quantity: 2 },
    { name: "Oranges", price: 3, quantity: 1 },
  ];
  console.log("Total price for shoppingCart1:", calculateTotalPrice(shoppingCart));

  