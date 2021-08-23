import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import ProductContext from "contexts/products";

const ProductRow = ({ ...productDetails }) => {
  let product = { ...productDetails };

  const cartAndFav = useContext(ProductContext);
  const cartUpdate = cartAndFav.addToCart;
  const removeCart = cartAndFav.removeFromCart;

  const favUpdate = cartAndFav.addToFav;
  const removeFav = cartAndFav.removeFromFav;

  let regPrice = 0;
  let salePrice = 0;
  let picture;
  if (product && product.price && product.price.regPrice) {
    regPrice = product.price.regPrice;
    salePrice = product.price.salePrice;
  }
  if (product && product.picture) {
    picture = product.picture[0].default;
  }

  return (
    <article className="product">
      {product.name && (
        <>
          <header>
            <Link to={`/product/${product.sku}`}>
              {" "}
              <img
                style={{ cursor: "pointer" }}
                src={picture}
                alt={product.picDescription}
                height="320"
              />
            </Link>

            <div className="prod-name-price">
              <h3>
                {product.name} {product.category}
              </h3>
              <data value={salePrice}>
                <del>${regPrice}.00</del>
                <ins>${salePrice}.00</ins>
              </data>
            </div>
            <div className="prod-description-rate">
              <p>{product.shortdescription}</p>
            </div>

            <div className="ratings"></div>
          </header>
          {/*  */}
          <footer className="product-footer">
            {product.cart > 0 ? (
              <button
                type="button"
                className="main-button add-cart"
                onClick={() => removeCart(product.sku)}
              >
                <ShoppingCartIcon /> Remove from Cart
              </button>
            ) : (
              <button
                type="button"
                className="main-button add-cart"
                onClick={() => cartUpdate(product.sku)}
              >
                <ShoppingCartIcon /> Add to Cart
              </button>
            )}
            {product.favourites ? (
              <button
                type="button"
                className="main-button add-wishlist"
                style={{ color: "red" }}
                onClick={() => removeFav(product.sku)}
              >
                <FavoriteIcon />
              </button>
            ) : (
              <button
                type="button"
                className="main-button add-wishlist"
                onClick={() => favUpdate(product.sku)}
              >
                <FavoriteIcon />
              </button>
            )}
          </footer>
        </>
      )}
    </article>
  );
};

export default ProductRow;
