import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import product from "../Styling/Product.module.css"

const Product = () => {
  return (
    <div>
      <div className={product.main}>
      
        <div className={product.center}>product info</div>
       
        <button className={product.btn}>
          <Link style={{ textDecoration: "none" ,color:"white"}} to="/">
            Back to Landing
          </Link>
        </button>
      </div>

      <Outlet />
    </div>
  );
}

export default Product