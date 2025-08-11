import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homepage";
import Signup from "./routes/signup";
import Popup from "./routes/popup";
import CartPage from "./routes/cartpage";
import CategoryPage from "./routes/categorypage";
import ProductDetail from "./routes/productdetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/popup" element={<Popup />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/categorypage" element={<CategoryPage />} />
      <Route path="/productdetail/:productId" element={<ProductDetail />} />
    </Routes>
  );
}
