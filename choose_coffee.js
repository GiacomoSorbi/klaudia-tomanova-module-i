//Remove Items From Shopping Cart
let removeButtonBrazil = document.getElementById("btn-brazil");
let itemBrazil = document.getElementById("brazil");
let removeButtonJava = document.getElementById("btn-java");
let itemJava = document.getElementById("java");
let removeButtonColumbia = document.getElementById("btn-columbia");
let itemColumbia = document.getElementById("columbia");
let removeButtonItaly = document.getElementById("btn-italy");
let itemItaly = document.getElementById("italy");

function removeBrazilFromCart() {
  itemBrazil.remove();
}

function removeJavaFromCart() {
  itemJava.remove();
}

function removeColumbiaFromCart() {
  itemColumbia.remove();
}

function removeItalyFromCart() {
  itemItaly.remove();
}

removeButtonBrazil.onclick = removeBrazilFromCart;

removeButtonJava.onclick = removeJavaFromCart;

removeButtonColumbia.onclick = removeColumbiaFromCart;

removeButtonItaly.onclick = removeItalyFromCart;
//

//Add Items To Shopping Cart
//Brazil
let addBrazil = document.getElementById("add-brazil");

let addBrazilToCart = () => {
  document.getElementById("shopping-cart").appendChild(itemBrazil);
  itemBrazil.style.display = "flex";
};

addBrazil.onclick = addBrazilToCart;

//Java
let addJava = document.getElementById("add-java");

let addJavaToCart = () => {
  document.getElementById("shopping-cart").appendChild(itemJava);
  itemJava.style.display = "flex";
};

addJava.onclick = addJavaToCart;

//Columbia
let addColumbia = document.getElementById("add-columbia");

let addColumbiaToCart = () => {
  document.getElementById("shopping-cart").appendChild(itemColumbia);
  itemColumbia.style.display = "flex";
};

addColumbia.onclick = addColumbiaToCart;

//Italy
let addItaly = document.getElementById("add-italy");

let addItalyToCart = () => {
  document.getElementById("shopping-cart").appendChild(itemItaly);
  itemItaly.style.display = "flex";
};

addItaly.onclick = addItalyToCart;

//TOTAL $ update
let cartTotal = document.getElementById("cart-total");
let cartItem = document.getElementById("shopping-cart").childElement;

let updateCartTotal = () => {
  cartTotal.innerHTML = cartItem.value;
};
