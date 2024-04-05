const products = [
  {
    name: "Asus ROG 1",
    image: "images/image3.jpg",
    price: "$19999.99",
  },
  {
    name: "Acer aspire 5",
    image: "images/image4.jpg",
    price: "$24.99",
  },
  {
    name: "Acer aspire 8",
    image: "images/image5.jpg",
    price: "$29.99",
  },
  {
    name: "Hp pegasus",
    image: "images/image6.jpg",
    price: "$29.99",
  },
  {
    name: "alienware v1",
    image: "images/image7.jpg",
    price: "$2999.99",
  },
  {
    name: "dell p7",
    image: "images/image8.jpg",
    price: "$6999.99",
  },
  {
    name: "Acer aspire 9",
    image: "images/image5.jpg",
    price: "$7699.99",
  },
];

const productGrid = document.querySelector(".product-grid");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;

  productGrid.appendChild(productCard);
});
