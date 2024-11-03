// 7 \\
const products = [
    {
        id: 1,
        title: "Smartphone",
        description: "A high-end smartphone with the latest features.",
        price: 799.99,
    },
    {
        id: 2,
        title: "Laptop",
        description: "Powerful laptop with a large screen and fast processor.",
        price: 1299.99,
    },
    {
        id: 3,
        title: "Coffee Maker",
        description: "An automatic coffee maker with a built-in grinder.",
        price: 99.99,
    },
    {
        id: 4,
        title: "Headphones",
        description: "Wireless over-ear headphones with noise-cancellation.",
        price: 199.99,
    },
    {
        id: 5,
        title: "Smart TV",
        description: "55-inch 4K Smart TV with streaming apps built-in.",
        price: 699.99,
    },
];

// 7.1 \\ product arrayindəki producların qiymətləri cəmini

let sum = 0

for (let i = 0; i < products.length; i++) {
    sum += products[i].price
}
console.log(sum);

// 7.2 \\ product arrayindəki producların qiymətləri  ortalamasını tapın

let sumOrta = 0

for (let j = 0; j < products.length; j++) {
    sumOrta += products[j].price
}
edediOrta = sum / products.length
console.log(edediOrta)
