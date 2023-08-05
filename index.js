let cartCount = 0;

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCountSpan = document.getElementById("cart-count");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountSpan.innerText = cartCount;
  });
});
