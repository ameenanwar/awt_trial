const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const mongoose = require("mongoose");
const validator = require("validator"); // ✅ npm install validator
const User = require("./models/users.models");
const { Grocery, Gadget, Book } = require("./models/products.model");
const session = require("express-session");

app.use(session({
  secret: "zmart_secret_key", // change this to a strong secret
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // ✅ change to true if using HTTPS
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --------------------
// MongoDB connection
// --------------------
mongoose.connect('mongodb+srv://ameen:kingboss110@cluster1.wu5omt5.mongodb.net/zmart?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ Database connection error:", err));


// --------------------
// REGISTER Route
// --------------------
app.post('/register', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // 1️⃣ Basic checks
    if (!email || !password || !username) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // 2️⃣ Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // 3️⃣ Strong password check
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      return res.status(400).json({
        error: "Password must contain uppercase, lowercase, number, and special character.",
      });
    }

    // 4️⃣ Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered." });
    }

    // 5️⃣ Create user
    const user = await User.create({ email, password, username });
    console.log("✅ User registered:", user.email);

req.session.user = { id: user._id, username: user.username, email: user.email };
res.redirect("/");
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(400).json({ error: err.message });
  }
});


// --------------------
// LOGIN Route
// --------------------
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No account found with this email." });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    console.log(`✅ ${user.username} logged in successfully.`);
    // Render home page with username
req.session.user = { id: user._id, username: user.username, email: user.email };
res.redirect("/");
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ error: "Server error during login." });
  }
});


// --------------------
// Handlebars setup
// --------------------
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// --------------------
// React build setup
// --------------------
app.use(
  '/zmart',
  express.static(path.join(__dirname, 'react-app/zmart-products/dist'))
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


// --------------------
// Seed products if empty
// --------------------
async function seedProducts() {
  try {
    const groceryCount = await Grocery.countDocuments();
    const gadgetCount = await Gadget.countDocuments();
    const bookCount = await Book.countDocuments();

    if (groceryCount === 0) {
      await Grocery.insertMany([
        { name: "Apples", seller: "FreshFarms", image: "/images/apple.jpg", reviews: 15, rating: 4.5 },
        { name: "Rice", seller: "GrainHouse", image: "/images/rice.jpg", reviews: 12, rating: 4.0 },
        { name: "Milk", seller: "DairyLand", image: "/images/milk.jpg", reviews: 8, rating: 4.2 },
        { name: "Bread", seller: "BakeHouse", image: "/images/bread.jpg", reviews: 20, rating: 4.6 },
        { name: "Eggs", seller: "FarmFresh", image: "/images/eggs.jpg", reviews: 10, rating: 4.1 },
      ]);
    }

    if (gadgetCount === 0) {
      await Gadget.insertMany([
        { name: "Wireless Mouse", seller: "TechStore", image: "/images/mouse.jpg", reviews: 50, rating: 4.4 },
        { name: "Bluetooth Speaker", seller: "AudioWorld", image: "/images/speaker.jpg", reviews: 35, rating: 4.3 },
        { name: "Smart Watch", seller: "GadgetKing", image: "/images/watches.jpg", reviews: 25, rating: 4.2 },
        { name: "Keyboard", seller: "TechStore", image: "/images/keyboard.jpg", reviews: 40, rating: 4.5 },
        { name: "Headphones", seller: "AudioWorld", image: "/images/headphones.jpg", reviews: 30, rating: 4.1 },
      ]);
    }

    if (bookCount === 0) {
      await Book.insertMany([
        { name: "The Alchemist", seller: "BookMart", image: "/images/alchemist.jpg", reviews: 18, rating: 4.7 },
        { name: "Atomic Habits", seller: "ReadMore", image: "/images/atomic_habits.jpg", reviews: 22, rating: 4.6 },
        { name: "Rich Dad Poor Dad", seller: "BookMart", image: "/images/rich_dad.jpg", reviews: 20, rating: 4.5 },
        { name: "The Power of Habit", seller: "ReadMore", image: "/images/power_habit.jpg", reviews: 15, rating: 4.4 },
        { name: "Thinking Fast and Slow", seller: "BookStore", image: "/images/thinking_fast.jpg", reviews: 12, rating: 4.3 },
      ]);
    }

    console.log("✅ Products seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding products:", err);
  }
}
seedProducts();


// --------------------
// Product APIs
// --------------------
app.get('/api/groceries', async (req, res) => {
  try {
    const products = await Grocery.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/gadgets', async (req, res) => {
  try {
    const products = await Gadget.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/books', async (req, res) => {
  try {
    const products = await Book.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login"); // redirect if not logged in
  }
  res.render("profile", { user: req.session.user });
});

app.get("/edit", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  res.render("edit", { user: req.session.user });
});

// Save profile changes
app.post("/edit", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    const { username, email, location, phone } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.session.user.id,
      { username, email, location, phone },
      { new: true, runValidators: true }
    );

    // Update session
    req.session.user = {
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      location: updatedUser.location,
      phone: updatedUser.phone,
    };

    res.redirect("/profile");
  } catch (err) {
    console.error("❌ Error updating profile:", err);
    res.status(500).send("Error updating profile.");
  }
});



// --------------------
// Start Server
// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
