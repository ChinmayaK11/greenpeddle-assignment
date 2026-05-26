// Task2
const fs = require("fs");       // built in fs module for file reading

const data = fs.readFileSync("products.csv", "utf-8");   // reading the csv file
const lines = data.split("\n");                          // split into lines for the processing
const header = lines[0];                                // save the header separately for later use

console.log("Flagged rows with issues:");
console.log("==========================");

let goodRows = [];

for (let i = 1; i < lines.length; i++) {

    let line = lines[i].trim();

    if (line === "") continue;

    let parts = line.split(",");                       // split by comma for the each of values 

    // get the each value and clean it
    let name = parts[0].replace(/"/g, "").trim();
    let price = parts[1] ? parts[1].trim() : "";
    let category = parts[2] ? parts[2].trim() : "";
    let stock = parts[3] ? parts[3].trim() : "";
    let tag = parts[4] ? parts[4].trim() : "";

    name = name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");

    let problem = false;                            // checking for problems

    if (!price || price === "0") {
        console.log("Row " + i + " | " + name + " | problem: missing or zero price");
        problem = true;
    }

    if (!stock) {
        console.log("Row " + i + " | " + name + " | problem: missing stock");
        problem = true;
    }
   
    if (!problem) {
        goodRows.push(name + "," + price + "," + category + "," + stock + "," + tag);
    }
}

// write clean file with header
const cleanData = header + "\n" + goodRows.join("\n");
fs.writeFileSync("cleaned_products.csv", cleanData);

console.log("\nclean file saved as cleaned_products.csv");
console.log("valid rows:", goodRows.length);