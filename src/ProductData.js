import React from "react";
import ProductCard from "./ProductCard";

const ProductData = () => {
  const productlist = [
    { id: 1, name: "laptop", discription: "apple laptop", price: "rs 7000" },
    { id: 2, name: "mobile", discription: "apple mobile", price: "rs 3000" },
  ];
  return (
    <main>
      <grid container justify="center" spacing={4}>
        {productlist.map((product) => (
          <grid itm key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard Productlist={productlist} />
          </grid>
        ))}
      </grid>
    </main>
  );
};

export default ProductData;
