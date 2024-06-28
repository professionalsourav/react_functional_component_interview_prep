import React from 'react'
import  "./component_styling/Loading.css";

const Loading = () => {
  return (
    <>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </>
  );
}

export default Loading