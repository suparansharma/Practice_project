import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [data, setData] = useState([])
    const search = async (key) => {
        let result = await fetch(`http://localhost:8000/api/search/${key}`);
        result = await result.json();
        setData(result);

        console.log(key)
    }

    return (
        <>
            <div >
                <div className="col-sm-8 offset-sm-2" >
                    <h1 className='text-center'>SearchBar</h1>
                    <input type="text" name="" onChange={(e) => search(e.target.value)} className='form-control' id="" />
                </div>
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
                            data.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path} /></td>

                                </tr>

                            )
                        }
                    </tbody>


                </Table>
            </div>
        </>
    )
}

export default SearchBar