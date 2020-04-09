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
let addBrazil = document.getElementById("add-brazil");

let addBrazilToCart = () => {
  itemBrazil.style.display = "flex";
};

addBrazil.onclick = addBrazilToCart;
