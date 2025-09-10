const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // ✅ updated import

const app = express();

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
