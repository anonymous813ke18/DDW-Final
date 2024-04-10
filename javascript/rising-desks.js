$(document).ready(function() {
    $('.add-to-cart').click(function() {
        var name = $(this).data('name');
        var price = $(this).data('price');
        addToBasket(name, price);
        showMessageBox(); 
    });

    function addToBasket(name, price) {
        var item = {
            name: name,
            price: price
        };
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.push(item);
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
    }


    function showMessageBox() {
        /*var messageBox = document.getElementById('messageBox');
        messageBox.style.display = 'block';
        setTimeout(function() {
          messageBox.style.display = 'none'; 
        }, 2000);*/

        alert("Item has been added to the basket.")
    }
});
