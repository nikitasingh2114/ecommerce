// Select all "Add to Cart" buttons and add an event listener to each one
const addToCartButtons = document.querySelectorAll('button');
addToCartButtons.forEach(button => {
	button.addEventListener('click', addToCart);
});

// Function to add a product to the cart
function addToCart(event) {
	const button = event.target;
	const li = button.parentElement;
	const product = li.querySelector('h3').textContent;
	const price = 10; // hardcoded price for simplicity
	addItemToCart(product, price);
}

// Function to add an item to the cart
function addItemToCart(product, price) {
	const ul = document.querySelector('.cart ul');
	const li = document.createElement('li');
	li.innerHTML = `
		<span>${product}</span>
		<span>$${price}</span>
		<span><button>Remove</button></span>
	`;
	ul.appendChild(li);
	updateCartTotal();
	li.querySelector('button').addEventListener('click', removeItemFromCart);
}

// Function to remove an item from the cart
function removeItemFromCart(event) {
	const button = event.target;
	const li = button.parentElement.parentElement;
	li.remove();
	updateCartTotal();
}

// Function to update the cart total
function updateCartTotal() {
	const cartItems = document.querySelectorAll('.cart ul li');
	let total = 0;
	cartItems.forEach(item => {
		const price = parseFloat(item.querySelector('span:nth-child(2)').textContent.replace('$', ''));
		total += price;
	});
	const totalElement = document.querySelector('.cart .total span:nth-child(2)');
	totalElement.textContent = '$' + total.toFixed(2);
}
