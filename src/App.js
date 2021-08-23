import React, { useState, useEffect } from "react";
import Products from "pages/Products";
import SingleProduct from "components/SingleProduct";
import FourOhFour from "components/FourOhFour";
import Cart from "components/Cart";
import Fav from "components/Fav";
import ProductsContext from "contexts/products";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const shortProductDescription = `Here is a shot of this product that might entice a user to click and add it to their cart.`;
  const genericOverview = `aLorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos, ducimus sapiente est quaerat repellendus necessitatibus praesentium modi quo sequi ad quibusdam illum officia. Animi consectetur id omnis qui et.`;

  function importAllImages(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAllImages(
    require.context("img", false, /\.(png|jpg|svg|webp)$/)
  );

  //create products
  const products = [
    {
      sku: `lmp001`,
      name: `Vavi`,
      category: `Table-Desk Lamp`,
      idCategory: `desk`,
      color: `Black`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 66, salePrice: 55 },
      shortdescription: shortProductDescription,
      rate: `5`,
      picture: [
        images["desk-lamp-01-960w.jpg"],
        images[`chand-04-960w.jpg`],
        images[`floor-lamp-04-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `Two table lamps in a bedroom`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp002`,
      name: `Soroca`,
      category: `Table-Desk Lamp`,
      idCategory: `desk`,
      color: `white`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 93, salePrice: 82 },
      shortdescription: shortProductDescription,
      rate: `4.5`,
      picture: [
        images[`desk-lamp-02-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
        images[`chand-01-960w.jpg`],
        images[`chand-01-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `Clear wine glass beside white table lamp`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp003`,
      name: `Aalin`,
      category: `Floor Lamp`,
      idCategory: `floor`,
      color: `grey`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 78, salePrice: 67 },
      shortdescription: shortProductDescription,
      rate: `4`,
      picture: [
        images[`floor-lamp-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
      ],
      picDescription: `Floor lamp beside chair and desk`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp004`,
      name: `Aria`,
      category: `Floor Lamp`,
      idCategory: `floor`,
      color: `gold`,
      bulbType: `inc`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 74, salePrice: 63 },
      shortdescription: shortProductDescription,
      rate: `2.5`,
      picture: [
        images[`floor-lamp-02-960w.jpg`],
        images[`chand-03-960w.jpg`],
        images[`chand-04-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
      ],
      picDescription: `Floor lamp beside sofa and window`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp005`,
      name: `Mattia`,
      category: `Wall Lamp`,
      idCategory: `wall`,
      color: `brown`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 86, salePrice: 75 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`wall-lamp-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
      ],
      picDescription: `Wall lamp in a modern bright livingroom`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp006`,
      name: `Zoovi`,
      category: `Wall Lamp`,
      idCategory: `wall`,
      color: `black`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 98, salePrice: 87 },
      shortdescription: shortProductDescription,
      rate: `4.5`,
      picture: [
        images[`wall-lamp-02-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`chand-01-960w.jpg`],
        images[`floor-lamp-03-960w.jpg`],
        images[`floor-lamp-04-960w.jpg`],
      ],
      picDescription: `Two wall lamps in a bedroom`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp007`,
      name: `Anaro`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `Black`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 66, salePrice: 55 },
      shortdescription: shortProductDescription,
      rate: `5`,
      picture: [
        images[`chand-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
      ],
      picDescription: `Chandelier in a living room`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp008`,
      name: `Hayth`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `white`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 93, salePrice: 82 },
      shortdescription: shortProductDescription,
      rate: `5`,
      picture: [
        images[`chand-02-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `Chandelier and red and brown floral stair carpet`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp009`,
      name: `Juliss`,
      category: `Floor Lamp`,
      idCategory: `floor`,
      color: `grey`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 78, salePrice: 67 },
      shortdescription: shortProductDescription,
      rate: `4`,
      picture: [
        images[`floor-lamp-03-960w.jpg`],
        images[`chand-03-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `Bedroom interior with lamps near bed and mirror wall`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp010`,
      name: `Wynny`,
      category: `Floor Lamp`,
      idCategory: `floor`,
      color: `gold`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 74, salePrice: 63 },
      shortdescription: shortProductDescription,
      rate: `2.5`,
      picture: [
        images[`floor-lamp-04-960w.jpg`],
        images[`chand-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`floor-lamp-03-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
      ],
      picDescription: `Floor lamp and green sofa`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp011`,
      name: `Draki`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `brown`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 86, salePrice: 75 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`chand-03-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`chand-04-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
      ],
      picDescription: `Chandelier and grind curtains`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp012`,
      name: `Ronai`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `black`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 98, salePrice: 87 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`chand-04-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `white Chandelier and brown living room`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp013`,
      name: `Anaro`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `Black`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 66, salePrice: 55 },
      shortdescription: shortProductDescription,
      rate: `5`,
      picture: [
        images[`chand-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
      ],
      picDescription: `Chandelier in a living room`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp014`,
      name: `Hayth`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `white`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 93, salePrice: 82 },
      shortdescription: shortProductDescription,
      rate: `5`,
      picture: [
        images[`chand-02-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
        images[`desk-lamp-02-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `Chandelier and red and brown floral stair carpet`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp015`,
      name: `Juliss`,
      category: `Floor Lamp`,
      idCategory: `floor`,
      color: `grey`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 78, salePrice: 67 },
      shortdescription: shortProductDescription,
      rate: `4`,
      picture: [
        images[`floor-lamp-03-960w.jpg`],
        images[`chand-03-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `Bedroom interior with lamps near bed and mirror wall`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp016`,
      name: `Wynny`,
      category: `Floor Lamp`,
      idCategory: `floor`,
      color: `gold`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 74, salePrice: 63 },
      shortdescription: shortProductDescription,
      rate: `2.5`,
      picture: [
        images[`floor-lamp-04-960w.jpg`],
        images[`chand-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`floor-lamp-03-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
      ],
      picDescription: `Floor lamp and green sofa`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp017`,
      name: `Draki`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `brown`,
      bulbType: `Incandescent`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 86, salePrice: 75 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`chand-03-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`chand-04-960w.jpg`],
        images[`desk-lamp-01-960w.jpg`],
      ],
      picDescription: `Chandelier and grind curtains`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp018`,
      name: `Ronai`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `black`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 98, salePrice: 87 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`chand-04-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `white Chandelier and brown living room`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp019`,
      name: `Ronai`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `black`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 98, salePrice: 87 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`chand-04-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `white Chandelier and brown living room`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
    {
      sku: `lmp020`,
      name: `Ronai`,
      category: `Chandelier`,
      idCategory: `chandelier`,
      color: `black`,
      bulbType: `Led`,
      bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
      price: { regPrice: 98, salePrice: 87 },
      shortdescription: shortProductDescription,
      rate: `3.5`,
      picture: [
        images[`chand-04-960w.jpg`],
        images[`floor-lamp-01-960w.jpg`],
        images[`floor-lamp-02-960w.jpg`],
        images[`wall-lamp-02-960w.jpg`],
        images[`wall-lamp-01-960w.jpg`],
      ],
      picDescription: `white Chandelier and brown living room`,
      overDescription: genericOverview,
      overShipping: genericOverview,
      overGuarantee: genericOverview,
      cart: 0,
      favourites: false,
    },
  ];
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState(0);
  const [fav, setFav] = useState(0);
  useEffect(() => {
    setProductData(products);
  }, []);

  const addToCart = (sku) => {
    let updatedProducts = productData.map((product) => {
      if (product.sku === sku) {
        product.cart += 1;
      }
      return product;
    });
    setCart(cart + 1);
    setProductData(updatedProducts);
  };

  const removeFromCart = (sku) => {
    let updatedProducts = productData.map((product) => {
      if (product.sku === sku && product.cart > 0) {
        setCart(cart - 1);
        product.cart -= 1;
      }
      return product;
    });

    setProductData(updatedProducts);
  };

  const addToFav = (sku) => {
    let updatedProducts = productData.map((product) => {
      if (product.sku === sku) {
        product.favourites = true;
      }
      return product;
    });
    setFav(fav + 1);
    setProductData(updatedProducts);
  };

  const removeFromFav = (sku) => {
    let updatedProducts = productData.map((product) => {
      if (product.sku === sku) {
        product.favourites = false;
      }
      return product;
    });
    setFav(fav - 1);
    setProductData(updatedProducts);
  };

  return (
    <Router>
      <ProductsContext.Provider
        value={{
          data: productData,
          addToCart: addToCart,
          addToFav: addToFav,
          cart: cart,
          fav: fav,
          removeFromFav: removeFromFav,
          removeFromCart: removeFromCart,
        }}
      >
        <Switch>
          <Route exact path="/">
            <Products data={productData} />
          </Route>

          <Route exact path="/product/:slug" children={<SingleProduct />} />

          <Route exact path="/cartPage" children={<Cart />} />
          <Route exact path="/favPage" children={<Fav />} />

          <Route path="*">
            <FourOhFour />
          </Route>
          <Route path="/404">
            <FourOhFour />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </ProductsContext.Provider>
    </Router>
  );
};

export default App;
