const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // ✅ updated import
const app = express();
const mongoose=require("mongoose");
const User=require("./models/users.models")
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
/*mongoose.connect('mongodb://127.0.0.1:27017/zmart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { 
    console.log("✅ Connected to local MongoDB");
})
.catch((err) => {
    console.error("❌ Database connection error:", err);
});*/
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

// --------------------
// Start server
// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
