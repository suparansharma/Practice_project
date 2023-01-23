import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(async () => {
    let result = await fetch(`http://localhost:8000/api/productInfo/${id}`)
    result = await result.json();
    setData(result);
  },[id])
  return (
    <div className='col-sm-6 offset-sm-3'><br />
      <input type="text" className='form-control' placeholder='name' name="" id="" defaultValue={data.name}/> <br />
    <input type="text" className='form-control' placeholder='price' name="" id=""  defaultValue={data.price} /> <br />
    <input type="text" className='form-control' placeholder='description' name="" id="" defaultValue={data.description} /> <br /> 
      <input type="file" className='form-control' placeholder='choise file' name="" id="" defaultValue={data.file_path}  /> <br /> 
      <img style={{width:100}} src={`http://localhost:8000/${data.file_path}`} alt="" srcset="" />
      <Button className='btn btn-primary' >Updated</Button>
    </div>
  )
}

export default Update