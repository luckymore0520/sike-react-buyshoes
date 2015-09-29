window.onload = function() {
  console.log("page loaded");
  initPerfectScrollBar();
}

function initPerfectScrollBar() {
  var cart = document.querySelector('.cart');
  Ps.initialize(cart);
}