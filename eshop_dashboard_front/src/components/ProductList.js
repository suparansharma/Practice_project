import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [ data,setData] = useState([]);
    console.log(data);
    useEffect(()=>{

      getdata();

    },[])

    const handleDelete= async (id)=>{
      let result = await fetch(`http://localhost:8000/api/delete/${id}`,
      {
        method:'DELETE'
      }
      )
      result = await result.json();
      console.log(result);
      getdata();
    }

    async function  getdata (){

      let result = await fetch("http://localhost:8000/api/list");
      result = await result.json();
      setData(result);
    }
    console.log(data);
  return (
    <div>
      <h3 className='text-center'>Product List</h3>
    <div className="col-sm-8 offset-sm-2 ">
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    { 
    data.map((item)=>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
        <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path}/></td>
        <td> <span onClick={()=>handleDelete(item.id)} className='delete'>Delete</span> </td>
        <td> 
          <Link to={`/update/${item.id}`} >
          <span  className='update'>Update</span>
          </Link>
           </td>
      </tr>
      
     )
   }
    </tbody>
    
  
  </Table>
  </div>
  </div>
  )
}

export default ProductList