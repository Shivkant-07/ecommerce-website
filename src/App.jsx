import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryProducts from "./pages/CategoryProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoryProducts />} />
      </Routes>
    </BrowserRouter>
  );
}