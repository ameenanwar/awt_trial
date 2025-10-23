const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // ✅ updated import
const app = express();
const mongoose=require("mongoose");
const User=require("./models/users.models")
const { Grocery, Gadget, Book } = require("./models/products.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// establishign connection to db from my atlas
mongoose.connect('mongodb+srv://ameen:kingboss110@cluster1.wu5omt5.mongodb.net/zmart?retryWrites=true&w=majority&appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { 
    console.log("✅ Connected to MongoDB Atlas");
})
.catch((err) => {
    console.error("❌ Database connection error:", err);
});
app.post('/register', async (req,res)=>
  {
    try
          {
  const user= await User.create(req.body);
  res.render('home-zm');
  

          }
catch (err){
      res.status(400).json({ error: err.message });

           }
}
)

// --------------------
// Handlebars setup
// --------------------
app.engine('hbs', engine({ extname: '.hbs' })); // ✅ updated
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// --------------------
// Static files for Handlebars
// --------------------
app.use(express.static(path.join(__dirname, 'public')));

// --------------------
// React build setup
// --------------------
// React build setup
app.use(
  '/zmart',
  express.static(path.join(__dirname, 'react-app/zmart-products/dist')) // ✅ dist instead of build
);

// React Router fallback
app.get(/^\/zmart(\/.*)?$/, (req, res) => {
  res.sendFile(
    path.join(__dirname, 'react-app/zmart-products/dist', 'index.html')
  );
});

// --------------------
// Handlebars routes
// --------------------
const routes = require('./routes');
app.use('/', routes);


async function seedProducts() {
  try {
    const groceryCount = await Grocery.countDocuments();
    const gadgetCount = await Gadget.countDocuments();
    const bookCount = await Book.countDocuments();

    // Only insert if empty
   if (groceryCount === 0) {
  await Grocery.insertMany([
    { name: "Apples", seller: "FreshFarms", image: "/images/apple.jpg", reviews: 15, rating: 4.5 },
    { name: "Rice", seller: "GrainHouse", image: "/images/rice.jpg", reviews: 12, rating: 4.0 },
    { name: "Milk", seller: "DairyLand", image: "/images/milk.jpg", reviews: 8, rating: 4.2 },
    { name: "Bread", seller: "BakeHouse", image: "/images/bread.jpg", reviews: 20, rating: 4.6 },
    { name: "Eggs", seller: "FarmFresh", image: "/images/eggs.jpg", reviews: 10, rating: 4.1 }
  ]);
}

if (gadgetCount === 0) {
  await Gadget.insertMany([
    { name: "Wireless Mouse", seller: "TechStore", image: "/images/mouse.jpg", reviews: 50, rating: 4.4 },
    { name: "Bluetooth Speaker", seller: "AudioWorld", image: "/images/speaker.jpg", reviews: 35, rating: 4.3 },
    { name: "Smart Watch", seller: "GadgetKing", image: "/images/watches.jpg", reviews: 25, rating: 4.2 },
    { name: "Keyboard", seller: "TechStore", image: "/images/keyboard.jpg", reviews: 40, rating: 4.5 },
    { name: "Headphones", seller: "AudioWorld", image: "/images/headphones.jpg", reviews: 30, rating: 4.1 }
  ]);
}

if (bookCount === 0) {
  await Book.insertMany([
    { name: "The Alchemist", seller: "BookMart", image: "/images/alchemist.jpg", reviews: 18, rating: 4.7 },
    { name: "Atomic Habits", seller: "ReadMore", image: "/images/atomic_habits.jpg", reviews: 22, rating: 4.6 },
    { name: "Rich Dad Poor Dad", seller: "BookMart", image: "/images/rich_dad.jpg", reviews: 20, rating: 4.5 },
    { name: "The Power of Habit", seller: "ReadMore", image: "/images/power_habit.jpg", reviews: 15, rating: 4.4 },
    { name: "Thinking Fast and Slow", seller: "BookStore", image: "/images/thinking_fast.jpg", reviews: 12, rating: 4.3 }
  ]);
}

console.log("✅ Products seeded successfully!");


    console.log("✅ Products seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding products:", err);
  }
}

// Call the function once


seedProducts();



// Grocery products
app.get('/api/groceries', async (req, res) => {
  try {
    const products = await Grocery.find({});
    res.json(products);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// Gadget products
app.get('/api/gadgets', async (req, res) => {
  try {
    const products = await Gadget.find({});
    res.json(products);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// Book products
app.get('/api/books', async (req, res) => {
  try {
    const products = await Book.find({});
    res.json(products);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});


 

  
  
// --------------------
// Start server
// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
