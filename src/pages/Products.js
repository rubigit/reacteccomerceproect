import React, { useState } from "react";
import Layout from "components/Layout";
import SearchResults from "components/SearchResults";
import ProductRow from "components/ProductRow";
import filtericon from "img/filter-icon-01-01.png";
import logo from "img/logo-landscape-light-03.svg";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useEffect } from "react";

const Products = ({ data }) => {
  const [searchResult, updateResult] = useState([]);
  // console.log(data);
  let filteredArray = data;
  function getFilters() {
    // declare group of filter
    let filters = [];
    let category = [];
    let lampFinish = [];
    let bulbType = [];

    //CATEGORY
    let filterCategory = document.querySelector(`#filterCategory`).children;
    // Get category selected
    for (let i = 0; i < filterCategory.length; i++) {
      if (filterCategory[i].children[0].checked)
        category.push(filterCategory[i].children[0].value);
    }
    filters[0] = category;

    //LAMP FINISH
    let filterLampFinish = document.querySelector(`#filterLampFinish`).children;
    // Get lamp finish selected
    for (let i = 0; i < filterLampFinish.length; i++) {
      if (filterLampFinish[i].children[0].checked)
        lampFinish.push(filterLampFinish[i].children[0].value);
    }
    filters[1] = lampFinish;

    //BULB TYPE
    let filterBulbType = document.querySelector(`#filterBulbType`).children;
    // Get bulb type selected
    for (let i = 0; i < filterBulbType.length; i++) {
      if (filterBulbType[i].children[0].checked)
        bulbType.push(filterBulbType[i].children[0].value);
    }
    filters[2] = bulbType;

    if (document.querySelector(`#aboveFour`).checked) filters[3] = 4;
    else if (document.querySelector(`#aboveThree`).checked) filters[3] = 3;
    else if (document.querySelector(`#aboveTwo`).checked) filters[3] = 2;
    else filters[3] = 0;

    return filters;
  }

  const sortProducts = function (e) {
    let target = e.target.value;

    if (target == `high`) {
      filteredArray.sort(
        (firstItem, secondItem) =>
          secondItem.price.regPrice - firstItem.price.regPrice
      );
    } else if (target == `low`) {
      filteredArray.sort(
        (firstItem, secondItem) =>
          firstItem.price.regPrice - secondItem.price.regPrice
      );
    } else if (target == `rate`) {
      filteredArray.sort(
        (firstItem, secondItem) =>
          parseInt(secondItem.rate) - parseInt(firstItem.rate)
      );
    } else {
      filteredArray.sort(
        (firstItem, secondItem) => secondItem.name - firstItem.name
      );
    }
    updateResult(filteredArray);
  };
  const clearFilters = function () {
    var inputs = document.querySelectorAll("input:checked");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }

    //RATING FILTER
    document.querySelector(`#aboveFour`).checked = false;
    document.querySelector(`#aboveThree`).checked = false;
    document.querySelector(`#aboveTwo`).checked = false;
    document.querySelector(`#aboveOne`).checked = false;
  };

  const FilterAllProducts = (filterOptions) => {
    if (filterOptions[0].length > 0) {
      filteredArray = data.filter(function (product) {
        // console.log(filterOptions[0].join().includes(product.idCategory));
        return filterOptions[0].join().includes(product.idCategory);
      });
    }
    if (filterOptions[1].length > 0) {
      filteredArray = filteredArray.filter(function (product) {
        console.log(filterOptions[1].join().includes(product.color));
        return filterOptions[1].join().includes(product.color);
      });
    }

    if (filterOptions[2].length > 0) {
      if (filterOptions[2].join() == "inc") {
        filteredArray = filteredArray.filter(function (product) {
          return product.bulbType == "Incandescent";
        });
      } else if (filterOptions[2].join() == "led") {
        filteredArray = filteredArray.filter(function (product) {
          return product.bulbType == "Led";
        });
      }
    }

    if (filterOptions[3] > 0) {
      filteredArray = filteredArray.filter(function (product) {
        return parseInt(product.rate) >= filterOptions[3];
      });
    }

    updateResult(filteredArray);
  };

  const applyFilters = function () {
    let filters = getFilters();
    FilterAllProducts(filters);
    // LoadPage(
    //   filters,
    //   document.querySelector(`#sort`).value,
    //   document.querySelector(`#find`).value
    // );
  };

  function LoadPage(filters, sort, searchFilter) {
    const productTable = document.querySelector(`#results`);
    console.log("product table", productTable);
    // productTable.innerHTML = "";

    searchResult.sort(function (a, b) {
      let valueA;
      let valueB;

      if (sort == "high") {
        valueA = b.price.salePrice;
        valueB = a.price.salePrice;
      } else if (sort == "low") {
        valueA = a.price.salePrice;
        valueB = b.price.salePrice;
      } else if (sort == "rate") {
        valueA = a.rate;
        valueB = b.rate;
      } else {
        valueA = a.name;
        valueB = b.name;
      }

      if (valueA > valueB) {
        return 1;
      }
      if (valueA < valueB) {
        return -1;
      }

      return 0;
    });
  }
  function getFilters() {
    // declare group of filter
    let filters = [];
    let category = [];
    let lampFinish = [];
    let bulbType = [];

    //CATEGORY
    let filterCategory = document.querySelector(`#filterCategory`).children;
    // Get category selected
    for (let i = 0; i < filterCategory.length; i++) {
      if (filterCategory[i].children[0].children[0].checked)
        category.push(filterCategory[i].children[0].children[0].value);
    }
    filters[0] = category;

    //LAMP FINISH
    let filterLampFinish = document.querySelector(`#filterLampFinish`).children;

    // Get lamp finish selected
    for (let i = 0; i < filterLampFinish.length; i++) {
      if (filterLampFinish[i].children[0].children[0].checked)
        lampFinish.push(filterLampFinish[i].children[0].children[0].value);
    }
    filters[1] = lampFinish;

    //BULB TYPE
    let filterBulbType = document.querySelector(`#filterBulbType`).children;
    // Get bulb type selected
    for (let i = 0; i < filterBulbType.length; i++) {
      if (filterBulbType[i].children[0].children[0].checked)
        bulbType.push(filterBulbType[i].children[0].children[0].value);
    }
    filters[2] = bulbType;

    //RATING
    //get rating selected
    if (document.querySelector(`#aboveFour`).checked) filters[3] = 4;
    else if (document.querySelector(`#aboveThree`).checked) filters[3] = 3;
    else if (document.querySelector(`#aboveTwo`).checked) filters[3] = 2;
    else filters[3] = 0;

    //return the list of filters selected

    return filters;
  }

  const toggleFilters = function (e) {
    let filterButton = e.target;
    filterButton.classList.toggle(`closeFilter`);
    filterButton.classList.toggle(`FilterOpen`);
    //alert(document.querySelector(`.filters`))
    document.querySelector(`.filters`).classList.toggle(`makeFloat`);
    document.querySelector(`.filter-options`).classList.toggle(`hide`);
    document.querySelector(`.filter-btn-collectio`).classList.toggle(`hide`);

    let filters = getFilters();
    // LoadPage(
    //   filters,
    //   document.querySelector(`#sort`).value,
    //   document.querySelector(`#find`).value
    // );
  };

  return (
    <Layout>
      <h1> my onsale</h1>
      <div className="deleteclass"></div>
      <form className="filters">
        <button
          type="button"
          className="filter-opt-button Content FilterOpen"
          onClick={(e) => toggleFilters(e)}
        >
          Filter options
        </button>

        <div className="filter-btn-collectio hide">
          {" "}
          {/* hide */}
          <button
            type="button"
            id="btnClearFilter"
            className="clear-filter "
            onClick={(e) => clearFilters(e)}
          >
            Clear all filters
          </button>
          <button
            type="button"
            id="btnApplyFilter"
            className="aplly-filter "
            onClick={(e) => applyFilters(e)}
          >
            Apply Filters
          </button>
        </div>

        <div className="filter-options hide">
          <fieldset>
            <legend>Lamp category</legend>
            <ul id="filterCategory" className="filter-list">
              <li>
                <label className="custom-checkbox" htmlFor="desk">
                  <input type="checkbox" name="type" value="desk" id="desk" />
                  <span className="checkmark"> Desk &#38; table lamps</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="floor">
                  <input type="checkbox" name="type" value="floor" id="floor" />
                  <span className="checkmark"> Floor lamps</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="wall">
                  <input type="checkbox" name="type" value="wall" id="wall" />
                  <span className="checkmark"> Wall lamps</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="wall">
                  <input
                    type="checkbox"
                    name="type"
                    value="chandelier"
                    id="chandelier"
                  />
                  <span className="checkmark"> Chandelier</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Lamp finish</legend>
            <ul id="filterLampFinish" className="filter-list">
              <li>
                <label className="custom-checkbox" htmlFor="black">
                  <input
                    type="checkbox"
                    name="color"
                    value="black"
                    id="black"
                  />
                  <span className="checkmark">Black</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="white">
                  <input
                    type="checkbox"
                    name="color"
                    value="white"
                    id="white"
                  />
                  <span className="checkmark">White</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="grey">
                  <input type="checkbox" name="color" value="grey" id="grey" />
                  <span className="checkmark">Grey</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="gold">
                  <input type="checkbox" name="color" value="gold" id="gold" />
                  <span className="checkmark">Gold</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="brown">
                  <input
                    type="checkbox"
                    name="color"
                    value="brown"
                    id="brown"
                  />
                  <span className="checkmark">Brown</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Light bulb type</legend>
            <ol id="filterBulbType" className="filter-list">
              <li>
                <label className="custom-checkbox" htmlFor="inc">
                  <input type="checkbox" name="bulb" value="inc" id="inc" />
                  <span className="checkmark"> Incandescent</span>
                </label>
              </li>
              <li>
                <label className="custom-checkbox" htmlFor="led">
                  <input type="checkbox" name="bulb" value="led" id="led" />
                  <span className="checkmark"> Led</span>
                </label>
              </li>
            </ol>
          </fieldset>
          <fieldset>
            <legend>Ratings (above)</legend>
            <ol className="filter-list">
              <li>
                <label className="custom-radio" htmlFor="aboveFour">
                  <input type="radio" name="rating" value="4" id="aboveFour" />

                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                </label>
              </li>
              <li>
                <label className="custom-radio" htmlFor="aboveThree">
                  <input type="radio" name="rating" value="3" id="aboveThree" />

                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </label>
              </li>
              <li>
                <label className="custom-radio" htmlFor="aboveTwo">
                  <input type="radio" name="rating" value="2" id="aboveTwo" />

                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </label>
              </li>
              <li>
                <label className="custom-radio" htmlFor="aboveOne">
                  <input type="radio" name="rating" value="1" id="aboveOne" />
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
      </form>

      {/* <!-- Result section --> */}
      <section className="results">
        <div className="results-hding">
          <div className="results-subheading">
            <h2 className="subheading">Lightning</h2>
            <h3 className="qtyResults"></h3>
          </div>
          <div>
            {/* <!-- sort options --> */}
            <fieldset className="sort-options">
              <label className="sort-label" htmlFor="sort">
                Sort by
              </label>
              <select name="sort" id="sort" onChange={(e) => sortProducts(e)}>
                <option value="name">Name</option>
                <option value="high">Price, highest to lowest</option>
                <option value="low">Price, lowest to highest</option>
                <option value="rate">Rating</option>
              </select>
            </fieldset>
          </div>
        </div>
      </section>
      <ProductRow />
      {searchResult.length ? (
        <SearchResults result={searchResult} />
      ) : (
        <SearchResults result={data} />
      )}
    </Layout>
  );
};

export default Products;
