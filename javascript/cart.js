// JavaScript code for both pages

// Cart data stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.btn-buy');

// Event listener for "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');
        addToCart(name, price, image);
        alert(`${name} has been added to your cart successfully!`);
    });
});

// Function to add an item to the cart
function addToCart(name, price, image) {
    const item = { name, price, image };
    cart.push(item);
    saveCart();
}

// Function to remove an item from the cart
function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
    }
}

// Function to update the cart display
function updateCart() {
    const cartDiv = document.getElementById('cart');
    const totalSpan = document.getElementById('total');
    let cartHTML = '';

    let total = 0;

    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-from-cart" data-name="${item.name}">Remove</button>
            </div>
        `;

        total += item.price;
    });

    cartDiv.innerHTML = cartHTML;
    totalSpan.textContent = total.toFixed(2);

    // Add event listeners to "Remove" buttons
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            removeFromCart(name);
        });
    });
}

// Function to save the cart data to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Initial cart update
updateCart();