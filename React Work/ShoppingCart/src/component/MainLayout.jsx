import React from 'react'
import { Link } from 'react-router-dom'
function Mainlayout({cartdata}) {
  return (
    <div>
      <nav style={{backgroundColor:'#db7a18',height:'300px',width:'500px',margin:'150px',paddingTop:'120px'}}>
      <Link style={{color:'white',fontsize:'20px',margin:'120px'}} to='/login'>Login</Link>
      <Link style={{color:'white',fontsize:'20px'}} to='/register'>Registration</Link>
      </nav>
    </div>
  )
}

export default Mainlayout