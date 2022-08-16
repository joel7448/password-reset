import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {config} from '../config/config'
function Forgetpassword() {

const formik = useFormik({
    initialValues:{
      UserName : ""
    },
    onSubmit:async(values)=>{
      try{
       
      const verification =  await axios.post(`${config().api}/verificationmail`,values);
      alert(verification.data.message);
      }
      catch(error){
        console.log(error);
      }
    }
})


  return (
    <div className='container p-5'>
                <form onSubmit={formik.handleSubmit}>
         <div class="mb-3 m-5 ">
    
    <input type="text" name='UserName' placeholder='UserName' onChange={formik.handleChange} value={formik.values.UserName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <button type="submit" class="btn btn-outline-primary mt-5 ms-5">Reset Password</button>
   
      </form>
      </div>

   
  )
}

export default Forgetpassword