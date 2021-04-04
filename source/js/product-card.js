var addToCartForm = document.querySelector(".add-to-cart-form");
var productCardBtn = document.querySelector(".product-card__link");
var overlay = document.querySelector(".overlay");

productCardBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  addToCartForm.classList.add("add-to-cart-form--show");
  overlay.classList.add("overlay--show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addToCartForm.classList.contains("add-to-cart-form--show")) {
      addToCartForm.classList.remove("add-to-cart-form--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

addToCartForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    addToCartForm.offsetWidth = addToCartForm.offsetWidth;
});

overlay.addEventListener("click", function() {
  addToCartForm.classList.remove("add-to-cart-form--show");
  overlay.classList.remove("overlay--show");
});
