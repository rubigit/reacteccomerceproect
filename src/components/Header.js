import React, { useContext } from "react";
import logo from "img/logo-landscape-light-03.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductContext from "contexts/products";

const Header = () => {
  const cartAndFav = useContext(ProductContext);
  const cartValue = cartAndFav.cart;
  const favValue = cartAndFav.fav;

  return (
    <>
      <header className="page-header">
        <Link to={`/`} className="logo">
          <img src={logo} alt="Lilights logo" height="55" />
        </Link>

        <button
          type="button"
          value="nav-toggle"
          className="nav-toggle openMenuBtn"
        ></button>

        <nav aria-label="Primary" className="navigation">
          <ul className="menu hide">
            <li className="light">
              <a href="#">
                <span>Lightning</span>
                <span>▾</span>
              </a>
              <ul className="submenu">
                <li>
                  <a href="#">Desk &amp; Table</a>
                </li>
                <li>
                  <a href="#">Floor</a>
                </li>
                <li>
                  <a href="#">Wall</a>
                </li>
                <li>
                  <a href="#">Chandelier</a>
                </li>
              </ul>
            </li>
            <li className="shop">
              <a href="#">
                <span>Shop</span>
                <span>▾</span>
              </a>
              <ul className="submenu">
                <li>
                  <a href="#">By style</a>
                </li>
                <li>
                  <a href="#">By room</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Search for a product (non-functional) -->
<!-- grid area 2 --> */}
        <form className="search">
          <label>
            <span>Search</span>
            <input
              className="ibox-srch"
              type="search"
              name="find"
              id="find"
              placeholder="Type to search.."
            />
          </label>
          <button id="btnSearch" type="button">
            <SearchIcon
              fontSize="large"
              style={{ color: "white" }}
              aria-label="Favourite items"
            ></SearchIcon>
          </button>
        </form>

        {/* <!-- grid area 3 --> */}
        <ul className="your-products">
          <li>
            <Link to={`/favPage`}>
              <FavoriteIcon
                fontSize="large"
                style={{ color: "white" }}
                aria-label="Favourite items"
              ></FavoriteIcon>
              <span style={{ color: "white" }}>{favValue}</span>
            </Link>
          </li>
          <li>
            <Link to={`/cartPage`}>
              <ShoppingCartIcon
                fontSize="large"
                style={{ color: "white" }}
                aria-label="Items in your cart"
              />
              <span style={{ color: "white" }}>{cartValue}</span>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
