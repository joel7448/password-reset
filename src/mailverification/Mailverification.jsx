import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { config } from '../config/config';
import { useNavigate } from 'react-router-dom';
function Mailverification() {

let navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
           
verification_code:"",
            
        },
        onSubmit:async(values) =>{
      const resetpassword = await axios.post(`${config().api}/resetpassword`,values);
      alert(resetpassword.data.message);
      if(resetpassword.data.message=="user verified"){
        
navigate(`/passwordreset/${resetpassword.data._id}`);

      }
     
        }
      })


  return (
    <div>
         <form className='p-5' onSubmit={formik.handleSubmit}>
            <div class="mt-5 mb-3">
    <label for="exampleInputEmail2" class="form-label">Enter Verification code</label>
    <input type="text" name='verification_code'   onChange={formik.handleChange}   value={formik.values.verification_code} class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
   
      </div>
      <button type="submit" className='btn btn-outline-info'>Reset Password</button>
      </form>
    </div>
  )
}

export default Mailverification