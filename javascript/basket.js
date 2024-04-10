/*document.addEventListener('DOMContentLoaded', function() {
    displayBasketItems();

    function displayBasketItems() {
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        var basketItemsElement = document.getElementById('basket-items');
        basketItemsElement.innerHTML = '';

        basketItems.forEach(function(item, index) {
            var listItem = document.createElement('div');
            listItem.classList.add('basket-item');
            listItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>  ${item.price}</p>
                <button class="remove-button" onclick="removeItem(${index})">Remove</button> <!-- Add remove button -->
            `;
            basketItemsElement.appendChild(listItem);
        });
        updateTotalPrice(basketItems);
    }

    window.clearBasket = function() {
        localStorage.removeItem('basketItems');
        displayBasketItems();
    };

    window.removeItem = function(index) {
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.splice(index, 1);
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        displayBasketItems();
    };

    function updateTotalPrice(basketItems) {
        var totalPrice = basketItems.reduce((acc, curr) => acc + parseFloat(curr.price.replace('€', '')), 0);
        document.getElementById('total-price').textContent = `Total Price: €${totalPrice.toFixed(2)}`;
    }
});
*/
document.addEventListener('DOMContentLoaded', function() {
    displayBasketItems();

    function displayBasketItems() {
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        var basketItemsElement = document.getElementById('basket-items');
        basketItemsElement.innerHTML = '';

        basketItems.forEach(function(item, index) {
            var listItem = document.createElement('div');
            listItem.classList.add('basket-item');
            listItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="remove-button" onclick="removeItem(${index})">Remove</button>
            `;
            basketItemsElement.appendChild(listItem);
        });
        updateTotalPrice(basketItems);
    }

    window.clearBasket = function() {
        localStorage.removeItem('basketItems');
        displayBasketItems();
    };

    window.removeItem = function(index) {
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.splice(index, 1);
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        displayBasketItems();
    };

    function updateTotalPrice(basketItems) {
        var totalPrice = basketItems.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
        document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }
});
