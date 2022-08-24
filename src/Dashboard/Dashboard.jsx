import axios from 'axios'
import React, { useEffect } from 'react'
import { config } from '../config/config'
import { useState } from 'react';
import "./dashboard.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import {Link} from "react-router-dom"

function Dashboard() {

 var {id}=useParams();

let navigate = useNavigate();

const logout=()=>{
  alert("logged out")
  localStorage.removeItem('react_app_token');
navigate("/");

}

    const [users, setUser] = useState([]);
const [url,seturl]= useState([]);

    let fetchData = async () => {
        try {
          let res = await axios.get(`${config().api}/userpage/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("react_app_token")}`,
            },
          });

          let urls = await axios.get(`${config().api}/url/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("react_app_token")}`,
            },
          })
          seturl(urls.data);
          setUser(res.data.message);


        } catch (error) {
          console.log(error);
        }
      };   

useEffect(() => {
    fetchData();
},[])

const formik = useFormik({
  initialValues :{
url:"",

  },
  onSubmit :async (values) => {
    try{
    
  let url = await axios.post(`${config().api}/urlshortener/${id}`,values);
   alert(url.data.message);
  }
  catch(err){
    console.log(err);
  }
}
}) 



return (
    <div>

<h1>{`${users}`}</h1>
<button className="btn btn-danger" onClick={()=>{logout()}}>Logout</button>
<div className='container'><h1>Number of Short links generater : {url.length}</h1></div>
<div className="urlshortner">

  <form className="form-url" onSubmit={formik.handleSubmit} >
<input type="text" name='url' onChange={formik.handleChange} value={formik.values.url} className="form-control" placeholder="Submit urls"/>
<button className="btn btn-outline-info">Submit</button>
</form>
<div className='container '>
{url.map((x)=>{return(
  <div className='container url'>
  <h2>URL : {x.url }</h2>
  
 <p> Shortened url :<a href={x.shorturl} target="_blank">{x.string}</a></p>
</div>)
})}
</div>
</div>
    </div>
  )
}

export default Dashboard