import React, { useState } from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap';

const Add = () => {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const[description,setDescription] = useState("");
  const[file,setFile] = useState("");
 

  const submit = async()=>{
    console.log(name,price,description,file)
    const fromData = new FormData();
    fromData.append('name',name);
    fromData.append('price',price);
    fromData.append('description',description);
    fromData.append('file_path',file);

    let result = await fetch("http://localhost:8000/api/addProduct",{
      method : 'POST',
      body:fromData

    })

    alert("Data have save successfully")
  }
  return (
    <div>
      {/* <Header/> */}
      <div className='col-sm-6 offset-sm-3'><br />
        <input type="text" className='form-control' placeholder='name' name="" id="" onChange={(e)=>setName(e.target.value)}/> <br />
        <input type="text" className='form-control' placeholder='price' name="" id="" onChange={(e)=>setPrice(e.target.value)}/> <br />
        <input type="text" className='form-control' placeholder='description' name="" id="" onChange={(e)=>setDescription(e.target.value)} /> <br />
        <input type="file" className='form-control' placeholder='choise file' name="" id="" onChange={(e)=>setFile(e.target.files[0])} /> <br />
        <Button className='btn btn-primary' onClick={submit}>Upload</Button>
      </div>
    </div>
  )
}

export default Add