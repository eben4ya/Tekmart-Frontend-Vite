import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext();


// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      _id: uuidv4(),
      name: "Sample Product",
      description: "This is a sample product",
      price: 100,
      stock: 10,
      imageUrl: "https://via.placeholder.com/150",
      category: "Sample Category",
    },
  ]);

  // Add new product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, _id: uuidv4() },
    ]);
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
