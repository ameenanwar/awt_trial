import React, { useState } from 'react';
import Top_bar from '../Top_bar/Top_bar';
import Side_bar from '../Side_bar/Side_bar';

const Az_clone = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div style={{ backgroundColor: '#f3f3f3', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* Top bar fixed at very top */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Top_bar />
      </div>

      {/* Menu button fixed below Top_bar */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: '60px', // below Top_bar
          left: 'auto',
          zIndex: 1100,
          backgroundColor: '#232f3e',
          color: 'white',
          border: 'none',
          width:"70px",
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ☰ 
      </button>

      {/* Sidebar fixed to the left */}
      <div
        style={{
          position: 'fixed',
          top: '60px', // same as menu button
          left: sidebarOpen ? '0' : '-200px', // hide/show
          width: '200px',
          height: '100%',
          backgroundColor: 'rgba(109, 75, 75, 0.95)',
          transition: 'left 0.3s ease',
          zIndex: 1000,
          paddingTop: '10px',
          overflowY: 'auto'
        }}
      >
        <Side_bar />
      </div>

      {/* Main content */}
      <div style={{ marginTop: '20px', marginLeft: '10px', paddingLeft: '220px' }}>
        {/* Carousel */}
        <div id="carouselExample" className="carousel slide mt-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x300?text=Banner+1"
                className="d-block w-100"
                alt="Banner 1"
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x300?text=Banner+2"
                className="d-block w-100"
                alt="Banner 2"
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Products */}
        <div className="container my-4">
          <h3 className="mb-3">Best Sellers</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product, idx) => (
              <div className="col" key={idx}>
                <div className="card h-100">
                  <img
                    src={`https://picsum.photos/200?random=${idx}`}
                    className="card-img-top"
                    alt={product}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product}</h5>
                    <p className="card-text">${(idx + 1) * 20}.99</p>
                    <p>⭐⭐⭐⭐☆</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          &copy; 2025 Amazon-style Demo
        </footer>
      </div>
    </div>
  );
};

export default Az_clone;
