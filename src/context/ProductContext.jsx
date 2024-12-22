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
  const [productDetail, setProductDetail] = useState({
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
    setProductDetail({
      ...productDetail,
      [field]: value,
    });
  };

  const [loading, setLoading] = useState(true);
  const apiEndpoint =
    "https://tekmart-backend-kholil-as-projects.vercel.app/api/product"; // Ganti dengan endpoint server Anda

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
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      const addedProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: "DELETE",
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
        deleteProduct,
        clickedProductId,
        setClickedProductId,
        productDetail,
        setProductDetail,
        handleChangeEditedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
