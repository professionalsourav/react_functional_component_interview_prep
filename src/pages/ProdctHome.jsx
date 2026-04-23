import React, { useEffect, useState } from 'react'


const ProductHome = () => {

  const [data,setData] = useState([]);

  const [neda, setNeda] = useState([])

  


  useEffect(()=> {

    async function fetchData(){
      const value = await fetch("https://anapioficeandfire.com/api/books");

      const info = await value.json()
      setData(info)
      
    }
    fetchData()

  }, [])


  const handleClick = (value)=> {
    console.log(value)
    setNeda(value)
  }
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "1%", fontSize: "2rem" }}>
       fetching data
      </div>

{data.map((value, index)=> (
  <div key={index }>
    <div onClick={()=> {handleClick(value)}} style={{cursor: "pointer", margin: "2%"}}>{value.name}</div>
    
    
  </div>
  

))}


      

      
    </>
  );
}

export default ProductHome