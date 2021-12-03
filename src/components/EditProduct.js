import React, { useEffect } from 'react'
import {useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';
import {useFormik} from 'formik';
import * as yup from 'yup';

function EditProduct(props) {
    let navigate = useNavigate();
    let locatiom = useLocation();
    const {prodData} = locatiom.state;   
    const {index} = locatiom.state;        

    const formik = useFormik({
        initialValues:{
            ProductName:prodData.ProductName,
            Description:prodData.Description,
            companyname:prodData.companyname,
            Price:prodData.Price
        },
        validationSchema: yup.object({
            ProductName: yup.string().required("Required"),
            Description: yup.string().required("Description required"),
            companyname:yup.string(),
            Price:yup.string().required("Price Required")
        }),
        onSubmit:values=>{
            handleSave(values);
        }
    });

    let handleSave = async(dt) =>{        
        let val = await axios.put("https://61a1c7566c3b400017e69d99.mockapi.io/products/"+(index+1),dt);    
        navigate('/all-products');
    }
    return (
        <div>
            <h1 style={{color:'white'}}>Edit Product</h1>   
            <form onSubmit={formik.handleSubmit}>
            <label style={{color:'white'}} htmlFor="ProductName">Product Name</label>   
            <input 
                id="ProductName"
                name="ProductName"
                type="text"
                className='form-control'
                placeholder='enter product name'
                onChange={formik.handleChange}
                value={formik.values.ProductName}
                />
                {formik.touched.ProductName && formik.errors.ProductName ? (<div style={{color:'red'}}>{formik.errors.ProductName}</div>): null}

            <label style={{color:'white'}} htmlFor="Description">Description</label>   
            <input 
                id="Description"
                name="Description"
                type="text"
                className='form-control'
                placeholder='enter product description'
                onChange={formik.handleChange}
                value={formik.values.Description}
                />
                {formik.touched.Description && formik.errors.Description ? (<div style={{color:'red'}}>{formik.errors.Description}</div>): null}

                <label style={{color:'white'}} htmlFor="companyname">Company Name</label>   
            <input 
                id="companyname"
                name="companyname"
                type="text"
                className='form-control'
                placeholder='enter company name'
                onChange={formik.handleChange}
                value={formik.values.companyname}
                />
                {/* {formik.touched.companyname && formik.errors.companyname ? (<div style={{color:'red'}}>{formik.errors.companyname}</div>): null} */}

                
                <label style={{color:'white'}} htmlFor="Price">Price</label>   
            <input 
                id="Price"
                name="Price"
                type='text'
                className='form-control'
                placeholder='enter product name'
                onChange={formik.handleChange}
                value={formik.values.Price}
                />
                {formik.touched.Price && formik.errors.Price ? (<div style={{color:'red'}}>{formik.errors.Price}</div>): null}

                <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
        </div>
        
    )
}

export default EditProduct
