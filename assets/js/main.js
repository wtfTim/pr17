const productsContainer = document.querySelector('.products-container');
const productDetailsContainer = document.querySelector('.product-details-container');
const productDetails = document.querySelector('.product-details');
const productImage = document.querySelector('.product-image');
const productTitle = document.querySelector('.product-title');
const productPrice = document.querySelector('.product-price');
const productDescription = document.querySelector('.product-description');
const backButton = document.querySelector('.back-button');

async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
}

function displayProducts(products) {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.addEventListener('click', () => displayProductDetails(product));

    const productImage = document.createElement('img');
    productImage.src = product.thumbnail;
    productImage.alt = product.title;

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);

    productsContainer.appendChild(productCard);
  });
}

function displayProductDetails(product) {
  productDetailsContainer.style.display = 'flex';
  productsContainer.style.display = 'none';

  productImage.src = product.thumbnail;
  productImage.alt = product.title;
  productTitle.textContent = product.title;
  productPrice.textContent = `$${product.price}`;
  productDescription.textContent = product.description;
}

backButton.addEventListener('click', () => {
  productDetailsContainer.style.display = 'none';
  productsContainer.style.display = 'grid';
});

fetchProducts().then(products => displayProducts(products));