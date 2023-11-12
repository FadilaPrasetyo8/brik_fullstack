import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireSidebar } from "./require-sidebar";
import { ListProductPages } from "./pages/list-product-pages";
import { AddProductPages } from "./pages/add-product-pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireSidebar />}>
            <Route path="/products" element={<ListProductPages />} />
            <Route path="/add-product" element={<AddProductPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
