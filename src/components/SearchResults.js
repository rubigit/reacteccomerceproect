import React, { useContext, useEffect } from "react";
import ProductRow from "components/ProductRow";
import ProductContext from "contexts/products";

const SearchResults = ({ result }) => {
  let allProducts = [];

  const dataFromContext = useContext(ProductContext);
  const productsData = dataFromContext.data;

  allProducts = result.map(
    (
      {
        name,
        overDescription,
        overGuarantee,
        overShipping,
        picDescription,
        picture,
        price,
        rate,
        shortdescription,
        idCategory,
        color,
        category,
        bulbType,
        bulbColor,
        starString,
        sku,
        cart,
        favourites,
      },
      index
    ) => (
      <ProductRow
        key={index}
        name={name}
        overDescription={overDescription}
        overGuarantee={overGuarantee}
        overShipping={overShipping}
        picDescription={picDescription}
        picture={picture}
        price={price}
        rate={rate}
        shortdescription={shortdescription}
        idCategory={idCategory}
        color={color}
        category={category}
        bulbType={bulbType}
        bulbColor={bulbColor}
        starString={starString}
        sku={sku}
        cart={cart}
        favourites={favourites}
      />
    )
  );
  return (
    <>
      <section className="results" id="results">
        {allProducts}
      </section>
    </>
  );
};

export default SearchResults;
