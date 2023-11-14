import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireSidebar } from "./require-sidebar";
import { ListProductPages } from "./pages/list-product-pages";
import { AddProductPages } from "./pages/add-product-pages";
import { DetailProductPages } from "./pages/detail-product-pages";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<RequireSidebar />}>
            <Route path="products" element={<ListProductPages />} />
            <Route path="add-product" element={<AddProductPages />} />
            <Route path="/products/:id" element={<DetailProductPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
