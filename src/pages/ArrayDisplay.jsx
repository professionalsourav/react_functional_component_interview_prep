import React, { useEffect, useState } from 'react'

const ArrayDisplay = () => {

    const [val, setVal] = useState([]);

    const arr = [
      { name: "book", delay: 4000 },
      { name: "note", delay: 2000 },
      { name: "text", delay: 6000 },
      { name: "word" },
    ];
    

    useEffect(()=> {

        // for (let i in arr) {
        //   console.log(arr[i].delay);
        // }
        setVal(arr)

        // setVal(val)
    },[])
  return (
   <>

   {val.map((value,index)=> (

<div key = {index}>
    {value}
</div>
   )
   )}
   </>
  )
}

export default ArrayDisplay