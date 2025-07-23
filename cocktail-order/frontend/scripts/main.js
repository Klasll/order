// This file contains the JavaScript code for the frontend application. 
// It handles user interactions and communicates with the backend.

document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const cocktailSelect = document.getElementById('cocktail-select');
    const orderStatus = document.getElementById('order-status');

    orderButton.addEventListener('click', () => {
        const selectedCocktail = cocktailSelect.value;
        if (selectedCocktail) {
            placeOrder(selectedCocktail);
        } else {
            orderStatus.textContent = 'Please select a cocktail.';
        }
    });

    function placeOrder(cocktail) {
        fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cocktail })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                orderStatus.textContent = 'Order placed successfully!';
            } else {
                orderStatus.textContent = 'Failed to place order. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            orderStatus.textContent = 'An error occurred. Please try again.';
        });
    }
});