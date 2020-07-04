if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName("btn-remove");
  console.log(removeCartItemButtons);
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("item-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  let addToCartButtons = document.getElementsByClassName("btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-checkout")[0]
    .addEventListener("click", checkoutClicked);
}

function checkoutClicked() {
  alert("Thank you for your purchase");
  let shoppingCartItems = document.getElementsByClassName(
    "shopping-cart-items"
  )[0];
  while (shoppingCartItems.hasChildNodes()) {
    shoppingCartItems.removeChild(shoppingCartItems.firstChild);
    updateCartTotal();
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("coffee-name")[0].innerText;
  let price = shopItem.getElementsByClassName("coffee-price")[0].innerText;
  let image = shopItem.getElementsByClassName("coffee-img")[0].src;
  console.log(title, price, image);
  addItemToCart(title, price, image);
  updateCartTotal();
}

function addItemToCart(title, price, image) {
  let cartRow = document.createElement("div");
  let cartItems = document.getElementsByClassName("shopping-cart-items")[0];
  let cartItemNames = cartItems.getElementsByClassName("cart-coffee-name");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerHTML == title) {
      alert("This item is already in your Shopping Cart");
      return;
    }
  }
  let cartRowContents = `
  <div class="cart-item">
  <div class="item-name">
    <img
      src="${image}"
    />
    <span class="cart-coffee-name">${title}</span>
  </div>
  <span class="coffee-price-cart">${price}</span>
  <div class="input">
    <input class="item-quantity" type="number" value="1" />
  </div>
  <button class="btn-remove" type="button">
    REMOVE
  </button>
</div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-remove")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("item-quantity")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName(
    "shopping-cart-items"
  )[0];
  let cartItems = cartItemContainer.getElementsByClassName("cart-item");
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i];
    let priceElement = cartItem.getElementsByClassName("coffee-price-cart")[0];
    let quantityElement = cartItem.getElementsByClassName("item-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementById("cart-total").innerText = "$" + total;
}
