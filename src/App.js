import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import "./app.css";
import Product from "./Pages/Product";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
