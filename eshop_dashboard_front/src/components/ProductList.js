import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
const ProductList = () => {
    const [ data,setData] = useState([]);
    useEffect(async()=>{

        let result = await fetch("http://localhost:8000/api/list");
        result = result.json();
        setData(result);

    },[])
    console.log(data);
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
      </tr>
    </thead>
  
    { 
    data.map((item)=>{
        <tbody>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        {/* <td>Otto</td>
        <td>@mdo</td> */}
      </tr>
        </tbody>
    }  )
   }
   
    
  
  </Table>
  )
}

export default ProductList