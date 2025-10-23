import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #e6f0ff 0%, #ffffff 100%)", 
      minHeight: "100vh", 
      paddingTop: "60px", 
      paddingBottom: "60px" 
    }}>
      <Container>
        <h2 className="text-center fw-bold mb-5 text-primary display-5">
          📚 Explore Our Book Collection
        </h2>

        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row className="g-4">
            {books.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Books;
