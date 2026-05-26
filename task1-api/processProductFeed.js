// Task1
// Here the function takes product list and separates good ones from bad ones
function processProductFeed(data) {
  const available = [];
  const flagged = [];

  data.products.forEach(product => { // loop through each of the product

    // clean name and remove extra spaces
    const cleanName = product.name.trim().replace(/\w\S*/g, word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
     
    const reasons = [];
    // check each condition
    if (product.stock === 0) reasons.push("out of stock");
    if (product.price === 0) reasons.push("missing price");
    if (!product.verified) reasons.push("unverified");

    if (reasons.length === 0) {            // product passed all checkscd
        available.push({
        id: product.id,
        name: cleanName,
        price: product.price
      });
    } else {                            // product failed one or more checks
      flagged.push({
        id: product.id,
        name: cleanName,
        reason: reasons.join(", ")
      });
    }
  });

  // summary
  const summary = {
    total: data.products.length,
    available: available.length,
    flagged: flagged.length
  };
 
  return { available, flagged, summary };
}
// testing with the given data
const input = {
  status: "success",
  products: [
    { id: "P001", name: " Jute Tote Bag ", price: 299, stock: 5, verified: true },
    { id: "P002", name: "Neem Wood Comb", price: 89, stock: 0, verified: true },
    { id: "P003", name: "Beeswax Food Wrap", price: 0, stock: 12, verified: false },
    { id: "P004", name: "bamboo toothbrush", price: 149, stock: 3, verified: true },
    { id: "P005", name: "Recycled Notebook ", price: 199, stock: 0, verified: true }
  ]
};
const result = processProductFeed(input);
console.log("Available Products:", result.available);
console.log("Flagged Products:", result.flagged);
console.log("Summary:", result.summary);