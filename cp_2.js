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

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    const furnitureNames = ["Couch", "Coffee Table", "Dresser", "Bed Frame"];
    const furnitureImages = [
        "https://i5.walmartimages.com/asr/af6213f4-536b-4605-a126-e87932b3a2a2.6ad906bfd54b00dbc885f25ea68f4431.jpeg",
        "https://tse4.mm.bing.net/th/id/OIP.g5WC72gffqWyJwQRDyLeHwHaGa?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://m.media-amazon.com/images/I/81qOnBNGs8L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/718Ov+tMhNL._AC_SL1500_.jpg"
    ];

    products.slice(0, 5).forEach((product, index) => {
        const name = furnitureNames[index % furnitureNames,length];
        const image = furnitureImages[index % furnitureImages.length];

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <h3>${name}</h3>
        <p>Price: $${(product.price / 100).toFixed(2)}</p>
        <img src="${image}" alt="${name}" />
        `;
        container.appendChild(card);
    });
}