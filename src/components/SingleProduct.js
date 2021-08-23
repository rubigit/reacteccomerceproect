import React, { useState, useContext, useEffect } from "react";
import ProductContext from "contexts/products";
import Footer from "components/Footer";
import Header from "components/Header";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const { slug } = useParams();

  const dataFromContext = useContext(ProductContext);
  const productsData = dataFromContext.data;

  
  let filteredProduct = productsData.filter(function (product) {
    return product.sku.includes(slug);
  });

  let regPrice = 0;
  let salePrice = 0;

  if (
    filteredProduct &&
    filteredProduct[0].price &&
    filteredProduct[0].price.regPrice
  ) {
    regPrice = filteredProduct[0].price.regPrice;
    salePrice = filteredProduct[0].price.salePrice;
  }
  if (filteredProduct[0] && filteredProduct[0].picture) {
    picture = filteredProduct[0].picture[0].default;
  }

  useEffect(() => {
    const loadPicture = function (urlPicture) {
      document.querySelector(`#mainPicture`).src = urlPicture;
    };

    //get the gallery containter
    const pictureGallery = document.querySelector(`#picList`);

    
    //populate the gallery containter
    //add the big gallery
    //   let sInnerHTML = `
    // <img id="mainPicture" src={filteredProduct[0].picture[0].default} alt={filteredProduct[0].picDescription} height="320" />`;
    //   pictureGallery.innerHTML = sInnerHTML;

    //create conainter for a list of small pictures
    const newUl = document.createElement(`ul`);
    newUl.classList.add(`prd-heading-pictures`);

    // for each picture of the product create new list item and insdie create a new img item
    filteredProduct[0].picture.forEach((img) => {
      const newLi = document.createElement(`li`);
      const newProduct = document.createElement(`img`);
      newProduct.setAttribute(`src`, `${img.default}`);
      newProduct.setAttribute(`alt`, `${filteredProduct[0].picDescription}`);
      newProduct.setAttribute(`height`, `"50"`);
      //to each img item send a click event  and send the function to load the picture
      newProduct.addEventListener(`click`, function () {
        loadPicture(`${img.default}`);
      });

      newLi.appendChild(newProduct);
      newUl.appendChild(newLi);
    });

    pictureGallery.appendChild(newUl);
  }, []);

  return (
    <>
      <Header />
      <main className="prd-product">
        <header id="picList" className="prd-heading">
          <img
            id="mainPicture"
            src={filteredProduct[0].picture[0].default}
            alt="${filteredProduct[0].picDescription}"
            height="320"
          />
        </header>
        <article className="prd-description">
          <h3 id="ProductTitle">{filteredProduct[0].name}</h3>

          <dl>
            <dd id="productRate"></dd>
          </dl>
          <data id="dataprice" value="salePrice">
            <del id="delPrice">${regPrice}.00</del>
            <ins id="insPrice">${salePrice}.00</ins>
          </data>

          <fieldset className="bulb-color-field">
            <h4>Light bulb color:</h4>
            <ul className="bulb-color-options">
              <li>
                <button className="bulb-white">White</button>
              </li>
              <li>
                <button className="bulb-yellow">Yellow</button>
              </li>
              <li>
                <button className="bulb-rainbow">Rainbow</button>
              </li>
            </ul>
          </fieldset>

          <fieldset className="qty-field">
            <legend>Qty</legend>
            <div className="qty-container">
              <ul className="qty-buttons">
                <li>
                  <button className="qty-minu">-</button>
                </li>
                <li>
                  <input
                    className="qty-ibox"
                    type="text"
                    name="qty-number"
                    id="qty-number "
                    placeholder="0"
                  />
                </li>
                <li>
                  <button className="qty-plus">+</button>
                </li>
              </ul>
              <button className="add-cart"> Add to cart</button>
            </div>
          </fieldset>
          <nav aria-label="Overview" className="overview">
            <h4>Product overview</h4>
            <ul className="overview-menu">
              <li className="overview-submenu">
                <a href="">Description</a>
                <ul id="description">
                  <li>
                    <span>{filteredProduct[0].overDescription}</span>
                  </li>
                </ul>
              </li>
              <li className="overview-submenu">
                <a href="">Shipping</a>
                <ul id="shipping">
                  <li>
                    <span>{filteredProduct[0].overShipping}</span>
                  </li>
                </ul>
              </li>
              <li className="overview-submenu">
                <a href="">Our guarantee</a>
                <ul id="guarantee">
                  <li>
                    <span>{filteredProduct[0].overGuarantee}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <fieldset className="rate-form">
            <legend>How would you rate this item?</legend>
            <ol className="rate-list">
              <li>
                <input type="radio" name="rate" value="4" id="Five" />
                <label htmlFor="Five">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <span>Love it</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rate" value="4" id="Four" />
                <label htmlFor="Four">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                  <span>Like it</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rate" value="3" id="Three" />
                <label htmlFor="Three">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <span>It&apos;s ok</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rate" value="2" id="Two" />
                <label htmlFor="Two">
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <span>Did&apos;nt like it</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rate" value="1" id="One" />
                <label htmlFor="One">
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <span>Hate it</span>
                </label>
              </li>
            </ol>
          </fieldset>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SingleProduct;
