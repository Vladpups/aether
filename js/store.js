// Открытие и закрытие корзины
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');

cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

closeCartModal.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Открытие и закрытие модального окна для продуктов
const products = document.querySelectorAll('.product');
const productModal = document.getElementById('product-modal');
const closeProductModal = document.getElementById('close-product-modal');
const productModalImage = document.getElementById('product-modal-image');
const productModalName = document.getElementById('product-modal-name');
const productModalPrice = document.getElementById('product-modal-price');

products.forEach(product => {
  product.addEventListener('click', () => {
    const productId = product.getAttribute('data-product-id');
    const productName = product.getAttribute('data-product-name');
    const productPrice = product.getAttribute('data-product-price');
    
    productModalImage.src = `product/${productId}.png`;
    productModalName.textContent = productName;
    productModalPrice.textContent = `$${productPrice}`;
    
    productModal.style.display = 'block';
  });
});

closeProductModal.addEventListener('click', () => {
  productModal.style.display = 'none';
});

// Добавление продукта в корзину
const cartItems = document.getElementById('cart-items');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const productSize = document.getElementById('product-size');

addToCartBtn.addEventListener('click', () => {
  const selectedSize = productSize.value;
  const itemName = productModalName.textContent;
  const itemPrice = productModalPrice.textContent;

  const li = document.createElement('li');
  li.textContent = `${itemName} - ${selectedSize} - ${itemPrice}`;
  
  cartItems.appendChild(li);
  
  productModal.style.display = 'none';
});

// Закрытие модальных окон при клике вне их
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = 'none';
  }
  if (event.target == productModal) {
    productModal.style.display = 'none';
  }
};
