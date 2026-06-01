const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
  { id: 3, name: "Mobile", price: 30000, category: "Electronics" },
  { id: 4, name: "T-Shirt", price: 1000, category: "Fashion" },
  { id: 5, name: "Headphones", price: 2500, category: "Electronics" }
];

const productNames = products.map(product => product.name);
console.log("productNames:");
console.log(productNames.join(","));

const discountedProducts = products.map(product => ({
  id: product.id,
  name: product.name,
  price: product.price * 0.9,
  category: product.category
}));
console.log("10% discount products");
discountedProducts.forEach(product => console.log(product));

const electronicsProducts = products.filter(
  product => product.category === "Electronics"
);

console.log("Electronics Products:");
electronicsProducts.forEach(product => console.log(product.name));

const costlyProducts = products.filter(
  product => product.price > 5000
);

console.log("more than 5000 products");
costlyProducts.forEach(product => console.log(product));

const totalPrice = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log("Total price :");
console.log(totalPrice);

const mostExpensiveProduct = products.reduce((max, product) =>
  product.price > max.price ? product : max
);

console.log("Most Expensive Product:");
console.log(
  `${mostExpensiveProduct.name} - ${mostExpensiveProduct.price}`
);

const electronicsNames = products
  .filter(product => product.category === "Electronics")
  .map(product => product.name);

console.log("Electronic products:" + electronicsNames);

const categoryCount = products.reduce((count, product) => {
  count[product.category] = (count[product.category] || 0) + 1;
  return count;
}, {});

console.log(categoryCount);