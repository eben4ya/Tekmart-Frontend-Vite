import { createContext, useEffect, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Create Provider for AuthContext
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (checkIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    if (name === "email") {
      setEmail(trimmedValue);
    } else if (name === "password") {
      setPassword(trimmedValue);
    }
  };

  // Register login
  const handleRegister = async () => {
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        setEmail("");
        setPassword("");
        alert("Registration successful! Please login.");
        // redirect to login page
        window.location.href = "/login";
      } else {
        const data = await response.json();
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed: Server error");
    }
  };

  // Login function
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include", // send token cookie to server
      });

      if (response.ok) {
        setEmail("");
        setPassword("");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        alert("Login successful!");
        // Redirect to order page
        window.location.href = "/products";
      } else {
        const data = await response.json();
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed: Server error");
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // send token cookie to server to remove it
      });

      if (response.ok) {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // remove token cookie in browser
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        alert("Logout successful!");
      } else {
        const data = await response.json();
        alert(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed: Server error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleRegister,
        handleLogout,
        email,
        password,
        handleInputChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
