let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");

iconCart.addEventListener("click", function() {
    body.classList.toggle("showCart")
})
closeCart.addEventListener("click", function(){
    body.classList.toggle("showCart")
})