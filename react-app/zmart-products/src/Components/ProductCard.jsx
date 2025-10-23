import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  // Ensure image path always starts with '/images/' and fallback to placeholder
  const imagePath = product.image
    ? product.image.startsWith("/images/") 
      ? product.image 
      : `/images/${product.image.replace(/^\/?/, '')}` // remove leading slash if exists
    : "/images/placeholder.jpg";

  return (
    <Card className="shadow-sm product-card h-100">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          src={imagePath}
          alt={product.name}
          className="product-image"
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <div>
          <Card.Title className="fw-bold text-dark">{product.name}</Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            Seller: {product.seller}
          </Card.Subtitle>
          <div className="text-warning mb-2">
            ⭐ {product.rating} ({product.reviews} reviews)
          </div>
        </div>
        <Button variant="primary" className="mt-3">
          Add to Cart 🛒
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
