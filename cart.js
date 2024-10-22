// Select all 'Add to cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
// Function to add product to the cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the product details from the current product container
        const productContainer = this.closest('.product');
        const product = {
            name: productContainer.querySelector('p').textContent,  // Get the product name
            image: productContainer.querySelector('img').src,       // Get the product image source
            discountPrice: productContainer.querySelector('.discount-price').textContent,  // Discount price
            originalPrice: productContainer.querySelector('.original-price').textContent,  // Original price
            quantity: 1  // Initial quantity
        };

        // Get cart from localStorage or create a new empty one
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            // If product exists, increase the quantity
            existingProduct.quantity += 1;
        } else {
            // If not, add the new product to the cart
            cart.push(product);
        }

        // Save updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Display updated cart
        alert('Product added to cart!');
    });
});

// Function to display cart items dynamically (optional if you want to show cart instantly)
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');

    // Clear previous cart content
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            // Create a div for each cart item
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p><strong>${item.name}</strong></p>
                <p>Discount Price: ${item.discountPrice}</p>
                <p>Original Price: ${item.originalPrice}</p>
                <p>Quantity: ${item.quantity}</p>
            `;

            // Append the item to the cart container
            cartItemsContainer.appendChild(productElement);
        });
    }
}

// Call this function on page load to display existing cart items (optional)
window.onload = displayCartItems;