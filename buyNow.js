// buyNow.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get all "Buy Now" buttons
    const buyButtons = document.querySelectorAll(".buy-now");
  
    // Add a click event listener to each button
    buyButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Get product details from the button's data attributes
        const productName = button.getAttribute("data-product");
        const productPrice = button.getAttribute("data-price");
  
        // Display a confirmation message
        const confirmation = confirm(`Do you want to buy ${productName} for $${productPrice}?`);
  
        // If the user confirms, proceed with the purchase
        if (confirmation) {
            window.location.href = `checkout.html?product=${productName}&price=${productPrice}`;
          // Here, you can add further logic like redirecting to a checkout page or sending data to a server
        } else {
          alert("Purchase canceled.");
        }
      });
    });
  });
  localStorage.setItem("lastPurchase", JSON.stringify({ product: productName, price: productPrice }));