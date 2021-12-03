import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function AllProducts() {   
    let [data,setData] = useState([]);
    
    useEffect(()=>{
        getData();
    },[])

    let getData = async()=>{
        let d = await axios.get("https://61a1c7566c3b400017e69d99.mockapi.io/products").then(res=>{setData(res.data)});
        
    }

    let deleteData = async(id)=>{
        let d = await axios.delete("https://61a1c7566c3b400017e69d99.mockapi.io/products/"+id);        
        getData();
    }

    
    return (
        <div>
    <table className="table table-striped">
        <thead>
            <tr style={{color:'white'}}>
            <th scope="col">Product ID</th>   
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Company Name</th>        
            <th scope="col">Price</th>            
            <th scope="col">Options</th>
            </tr>
        </thead>

        <tbody>
            {
                data.map((val, i)=>{
                    return <tr style={{color:'white'}} key={i}>
                        <th scope="row">{val.id}</th>
                        <td>{val.ProductName}</td>
                        <td>{val.Description}</td>
                        <td>{val.companyname}</td>
                        <td>{val.Price}</td>                        
                        <td>
                            <Link to='/edit-product' state={{prodData: val, index: i}}> 
                                <button className="btn btn-primary">Edit</button>
                            </Link>
                            &nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={()=>{deleteData(val.id)}}>Delete</button></td>                  
                    </tr>
                })
            }
        </tbody>
        </table>
</div>
    )
}

export default AllProducts
