document.getElementById('sellForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your product has been listed!');
  // You can add AJAX or backend integration here
});
document.getElementById('sellForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productDescription = document.getElementById('productDescription').value;
  const productImage = document.getElementById('productImage').files[0];

  // Create a new product card
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const image = document.createElement('img');
  image.src = URL.createObjectURL(productImage);
  image.alt = productName;

  const title = document.createElement('h3');
  title.textContent = productName;

  const price = document.createElement('p');
  price.textContent = `$${productPrice}`;

  const buyButton = document.createElement('button');
  buyButton.classList.add('btn');
  buyButton.textContent = 'Buy Now';

  // Add a Delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'delete-btn');
  deleteButton.textContent = 'Delete';

  // Append elements to the product card
  productCard.appendChild(image);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(buyButton);
  productCard.appendChild(deleteButton);

  // Append the product card to the product grid
  document.getElementById('productGrid').appendChild(productCard);

  // Clear the form
  document.getElementById('sellForm').reset();

  // Add event listener to the Delete button
  deleteButton.addEventListener('click', function() {
    productCard.remove(); // Remove the product card from the DOM
  });
});
document.getElementById('sellForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productDescription = document.getElementById('productDescription').value;
  const productImage = document.getElementById('productImage').files[0];

  // Create a new product card
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const image = document.createElement('img');
  image.src = URL.createObjectURL(productImage);
  image.alt = productName;

  const title = document.createElement('h3');
  title.textContent = productName;

  const price = document.createElement('p');
  price.textContent = `$${productPrice}`;

  const buyButton = document.createElement('button');
  buyButton.classList.add('btn');
  buyButton.textContent = 'Buy Now';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'delete-btn');
  deleteButton.textContent = 'Delete';

  // Append elements to the product card
  productCard.appendChild(image);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(buyButton);
  productCard.appendChild(deleteButton);

  // Append the product card to the product grid
  document.getElementById('productGrid').appendChild(productCard);

  // Clear the form
  document.getElementById('sellForm').reset();

  // Add event listener to the Delete button
  deleteButton.addEventListener('click', function() {
    productCard.remove();
  });

  // Add event listener to the Buy Now button
  buyButton.addEventListener('click', function() {
    // Open the payment modal
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'block';

    // Generate QR code
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous QR code
    const qr = new QRCode(qrcodeContainer, {
      text: `https://example.com/pay?amount=${productPrice}`, // Dummy payment link
      width: 200,
      height: 200,
    });

    // Simulate payment success after 5 seconds
    setTimeout(() => {
      document.getElementById('paymentMessage').textContent = 'Payment Successful!';
      modal.style.display = 'none'; // Close the modal after payment
    }, 5000); // Simulate a 5-second delay for payment
  });
});

// Close the modal when the user clicks the close button
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('paymentModal').style.display = 'none';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', function(event) {
  const modal = document.getElementById('paymentModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});              