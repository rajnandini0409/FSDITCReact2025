import React, { useEffect,useState } from 'react'

function Dashboard() {
const [data,setData]=useState([]);
  useEffect(()=>{
    async function getData(){
      const response=await fetch ("https://fakestoreapi.com/products");
      const resData=await response.json();
      setData(resData);
      console.log(resData);
    }
    getData();
  },[])
  
function addToCart(ele){
 alert(ele.title);
}


  return (
    <div> 
     {/* {JSON.stringify(data)} */}
     {
      data.length===0?(
        <h2>Data not found</h2>
      ):(
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', margin:'100px' }}>
         {
          data.map((ele)=>(
            <div style={{border:'2px solid red', height:'700px', width:'300px'}}>
              <img src={ele.image} height={100} width={100}/>
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
              <h4>{ele.price}</h4>
              <button onClick={()=>addToCart(ele)}>Add to Cart</button>
            </div>
          ))
         }
        </div>
      )
     }
    </div>
  )
}

export default Dashboard