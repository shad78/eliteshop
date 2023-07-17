import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const { pageNumber } = useParams();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <ProductCarousel />
      <h1 className="mt-4">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm="12" md="6" lg="4" xl="3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page} />
        </>
      )}
    </>
  );
}
