import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { config } from '../config/config';
function Passwordreset() {
    let {id} = useParams();
 const formik = useFormik({
    initialValues : {

        Password :""
    },
    onSubmit :async(values)=> {
values.id = id
const newpassword=await axios.post(`${config().api}/newpassword`,values);
alert(newpassword.data.message);


    }
  })
  
    return (
    <div>
        <form onSubmit={formik.handleSubmit}>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Reset Password</label>
    <input type="password" name='Password' onChange={formik.handleChange}   value={formik.values.Password}  class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Passwordreset