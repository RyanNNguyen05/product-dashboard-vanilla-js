function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log(product.name);
        });
    })
    .catch((error) => {
        console.error("Error fetching products:", error);
    });
}
fetchProductsThen();

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML="";
    
    products.forEach((product, index) => {
        const furnitureNames = ["Couch", "Coffee Table", "Dresser", "Bed Frame"];
        const name = furnitureNames[index % furnitureNames.length];
        const card = document.createElement("div");
        card.className = "product-card"
        card.innerHTML = `
        <h3>${name}</h3>
        <p>Price: $${(product.price / 100).toFixed(2)}</p>
        <img src="${product.image}" alt="${name}" />
        `;
        container.appendChild(card);
    });
}
async function fetchProductAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}
function handleError(error) {
    console.error("Async fetch error:", error);
}
fetchProductAsync();