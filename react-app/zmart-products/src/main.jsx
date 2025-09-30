import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import bootstrap CSS here, not inside a component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
