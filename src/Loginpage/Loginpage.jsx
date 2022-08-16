import { useFormik } from 'formik';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from 'axios';
import { config } from '../config/config';

function Loginpage() {


let navigate=useNavigate()
  const formik = useFormik({
    initialValues :{
Email:"",
Password:""
    },
    onSubmit :async (values) => {
      try{
      const login = await axios.post(`${config().api}/login`, values);
      localStorage.setItem("react_app_token", login.data.token);
      
      alert(login.data.message);
      navigate(`/dashboard/${login.data.id}`);
    }
    catch(err){
      console.log(err);
    }
  }
  }) 







  return (
    <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div  className="col-lg-6 d-none d-lg-block bg-login-image"><img style={{height:"520px",width:"110%"}}  src='https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'/></div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                </div>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <div className="form-group p-2">
                    <input
                      type="email"
                      name = "Email"
                        onChange={formik.handleChange}   value={formik.values.Email}  
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address..."
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="password"
                      name = "Password"
                      onChange={formik.handleChange}   value={formik.values.Password}  
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                 
                  <div className="form-group p-2">
                    <div className="custom-control custom-checkbox small">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck"
                      />
                      <label className="custom-control-label ms-2" for="customCheck">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-user ms-2 btn-block"    >
                    Login
                  </button>
                  <hr />
                  <a
                    href="index.html"
                    className="btn btn-google btn-user  btn-block"
                  >
                    <i className="fab fa-google fa-fw"></i> Login with Google
                  </a>
                  <a
                    href="index.html"
                    className="btn btn-facebook btn-user btn-block"
                  >
                    <i className="fab fa-facebook-f fa-fw"></i> Login with
                    Facebook
                  </a>
                </form>
                <hr />
                <div className="text-center mb-3">
                  <Link to="/forgetpassword"   style={{textDecoration:"none"}} >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link style={{textDecoration:"none"}} to="/createaccount">
                    Create an Account!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Loginpage