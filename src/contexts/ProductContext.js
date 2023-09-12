import React, {createContext, useState, useEffect} from 'react';

//create Context
export const ProductContext = createContext();


const ProductProvider = ({children}) => {
  //Product state
  const [products, setProduct]  = useState([]);
  // fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [] )
  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
