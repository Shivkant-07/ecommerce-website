import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import CategoryProducts from './pages/CategoryProducts'; // Men/Women wale products ke liye

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoryProducts />} />
      </Routes>
    </Router>
  );
}