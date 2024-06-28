import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
// import Chap1 from "./pages/Hoc";
// import Product from "./pages/Product";
// import ProductHome from "./pages/ProdctHome";
// import Home from "./pages/Home";
// import Search from "./pages/Search";
import Loading from "./component/Loading";
const Search = React.lazy(() => import("./pages/Search"));
const ListLazy = React.lazy(() => import("./pages/List"));
const Home = React.lazy(() => import("./pages/Home"));
const LazyChap1 = React.lazy(() => import("./pages/Hoc"));
const LazyproductHome = React.lazy(() => import("./pages/ProdctHome"));
const LazyProduct = React.lazy(() => import("./pages/Product"));

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
          <Route
            path="/"
            element={<React.Suspense fallback={<Loading/>}>
              <Home/>
            </React.Suspense>}
          />
          <Route path="/higher_order_component" element={<React.Suspense fallback={<Loading/>}>
          <LazyChap1/>
          </React.Suspense>} />
          <Route path="product" element={<React.Suspense fallback={<Loading/>}><LazyProduct/></React.Suspense>}>
            <Route path="producthome" element={<React.Suspense fallback={<Loading/>}>
              <LazyproductHome/>
            </React.Suspense>} />
            <Route path="search" element={<React.Suspense fallback={<Loading/>}>
                <Search/>
            </React.Suspense>} />
            <Route
              path="list"
              element={
                <React.Suspense fallback={<Loading/>}>
                
                  <ListLazy />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
