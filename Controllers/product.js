
import mongoose from "mongoose";

// Define Product Schema
const productSchema = new mongoose.Schema({
    id:String,
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    sold: String,
    dateOFSale: String,
  });
  
const Product = mongoose.model("Product", productSchema);

const transactionSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
  });
const Transaction=mongoose.model("Transaction",transactionSchema);

function getPriceRange(price) {
    if (price <= 100) return '0 - 100';
    else if (price <= 200) return '101 - 200';
    else if (price <= 300) return '201 - 300';
    else if (price <= 400) return '301 - 400';
    else if (price <= 500) return '401 - 500';
    else if (price <= 600) return '501 - 600';
    else if (price <= 700) return '601 - 700';
    else if (price <= 800) return '701 - 800';
    else if (price <= 900) return '801 - 900';
    else return '901 - above';
}

export {Product,Transaction}
