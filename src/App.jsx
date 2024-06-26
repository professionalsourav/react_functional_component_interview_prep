import { useState } from "react";
import { BrowserRouter,Routes,Route ,Router, Link} from "react-router-dom";
import Chap1 from "./pages/Hoc";
import Product from "./pages/Product";
import ProductHome from "./pages/ProdctHome";
import Home from "./pages/Home";
import Search from "./pages/Search";
import List from "./pages/List";
function App() {


  return (
    <>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "10vh",
            background: "lightblue",
          }}
        >
          <Link
            to="/product/producthome"
            style={{ textDecoration: "none", color: "black", margin: "1rem" }}
          >
           home
          </Link>
          <Link
            to="/product/search"
            style={{ textDecoration: "none", color: "black", margin: "1rem" }}
          >
            search
          </Link>
          <Link
            to="/product/list"
            style={{ textDecoration: "none", color: "black", margin: "1rem" }}
          >
            list
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/higher_order_component" element={<Chap1 />} />
          <Route path="product" element={<Product />}>
            <Route path="producthome" element={<ProductHome />} />
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
