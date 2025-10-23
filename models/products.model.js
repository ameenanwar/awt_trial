const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },          // product name
  image: { type: String, required: true },         // image URL or path
  seller: { type: String, required: true },        // seller name
  reviews: { type: Number, default: 0 },           // number of reviews
  rating: { type: Number, default: 0 },            // rating out of 5
}, { timestamps: true });

// Export separate models for each collection
const Grocery = mongoose.model("Grocery", productSchema, "groceries");
const Gadget = mongoose.model("Gadget", productSchema, "gadgets");
const Book = mongoose.model("Book", productSchema, "books");

module.exports = { Grocery, Gadget, Book };
