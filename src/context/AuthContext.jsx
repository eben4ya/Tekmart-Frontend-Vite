import { createContext, useEffect, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Create Provider for AuthContext
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : { id: "", email: "", isAdmin: false };
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (checkIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // Update localStorage whenever `user` state changes
  useEffect(() => {
    if (user && user.id) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", true);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    if (name === "email") {
      setEmail(trimmedValue);
    } else if (name === "password") {
      setPassword(trimmedValue);
    }
  };

  // Register function
  const handleRegister = async () => {
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_REGISTER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setEmail("");
        setPassword("");
        alert("Registration successful! Please login.");
        window.location.href = "/login"; // redirect to login page
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
      const response = await fetch(`${import.meta.env.VITE_API_LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // send token cookie to server
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        setPassword("");
        setUser(data); // user state is updated, triggering useEffect
        setIsLoggedIn(true);
        alert("Login successful!");
        window.location.href = "/"; // redirect to home page
      } else {
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
      const response = await fetch(`${import.meta.env.VITE_API_LOGOUT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // send token cookie to server to remove it
      });

      if (response.ok) {
        setUser({ id: "", email: "", isAdmin: false }); // clear user state
        setIsLoggedIn(false);
        localStorage.removeItem("user");
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
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
