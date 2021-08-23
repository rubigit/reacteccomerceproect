import React, { useContext } from "react";
import ProductContext from "contexts/products";
import Footer from "components/Footer";
import Header from "components/Header";
import styled from "styled-components";

const Cart = () => {
  const cartAndFav = useContext(ProductContext);
  const products = cartAndFav.data;
  const cartProducts = products.filter((product) => product.cart > 0);
  const cartValue = cartAndFav.cart;

  return (
    <>
      <Header />
      <Products className="productsInCart">
        {cartProducts &&
          cartProducts.map((product) => {
            if (cartValue) {
              return (
                <Item key={product.sku}>
                  <Image
                    src={product.picture[0].default}
                    alt={product.picDescription}
                  />
                  <p>
                    {product.name}, {product.color}
                  </p>
                  <p>${product.price.regPrice}.00</p>
                  <p>Qty: 1</p>
                </Item>
              );
            }
          })}
        {cartValue ? <></> : <NoItems>Oops, no items found!</NoItems>}
      </Products>
      <Footer />
    </>
  );
};

const Products = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 2em;
  box-sizing: border-box;
  min-height: 30em;
  height: auto;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: #f5e4ef;
  margin: 0 auto;
  width: 90%;
  max-width: 70em;
  padding: 1em;

  box-shadow: 0px 2px 4px #1f1c1f;
`;

const NoItems = styled.p`
margin: 0 auto;
max-width: 50em;
font-size: 2em;
  color: #7f187f;
  height:15em;
}`;

const Image = styled.img`
  width: 10em;
  margin-bottom: 1em;
`;

export default Cart;
