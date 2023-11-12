import "./App.css";
import { Sidebar } from "./components/ui/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireSidebar } from "./require-sidebar";
import { ListPorduct } from "./components/list-product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireSidebar />}>
            <Route path="/" element={<ListPorduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
