import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "",
      description: "",
      name: "",
      price: 0,
      stock: 0,
      imageUrl: "",
      category: "",
    },
  ]);
  const [clickedProductId, setClickedProductId] = useState("");
  const [productDetailGlobal, setProductDetailGlobal] = useState({
    id: "",
    description: "",
    name: "",
    price: 0,
    stock: 0,
    imageUrl: "",
    category: "",
  });

  const handleChangeEditedProduct = (e, field) => {
    // uncomment the line below if you want to handle file uploads
    // const value = field === "picture" ? e.target.files[0] : e.target.value;
    const value = e.target.value;
    setProductDetailGlobal({
      ...productDetailGlobal,
      [field]: value,
    });
  };

  const [loading, setLoading] = useState(true);
  const apiEndpoint = `${import.meta.env.VITE_API_PRODUCT}`;

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add new product
  const addProduct = async (newProduct) => {
    try {
      // uncomment the line below if you want to handle file uploads
      // const formData = new FormData();
      // formData.append("name", newProduct.name);
      // formData.append("description", newProduct.description);
      // formData.append("price", newProduct.price);
      // formData.append("stock", newProduct.stock);
      // formData.append("category", newProduct.category);
      // formData.append("imageUrl", newProduct.picture);

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newProduct.name,
          description: newProduct.description,
          price: newProduct.price,
          stock: newProduct.stock,
          category: newProduct.category,
          imageUrl: newProduct.picture, // URL gambar
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      alert("Product added successfully!");

      const addedProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct.data]);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  // Edit product
  const editProduct = async (id, updatedProduct) => {
    try {
      // uncomment the line below if you want to handle file uploads
      // const formData = new FormData();
      // formData.append("name", updatedProduct.name);
      // formData.append("description", updatedProduct.description);
      // formData.append("price", updatedProduct.price);
      // formData.append("stock", updatedProduct.stock);
      // formData.append("category", updatedProduct.category);
      // if (updatedProduct.picture) {
      //   formData.append("imageUrl", updatedProduct.picture);
      // }

      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedProduct.name,
          description: updatedProduct.description,
          price: updatedProduct.price,
          stock: updatedProduct.stock,
          category: updatedProduct.category,
          imageUrl: updatedProduct.picture,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      alert("Product updated successfully!");

      const updatedProductData = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? updatedProductData.data : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        addProduct,
        editProduct,
        deleteProduct,
        clickedProductId,
        setClickedProductId,
        productDetailGlobal,
        setProductDetailGlobal,
        handleChangeEditedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
