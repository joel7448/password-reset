import axios from 'axios'
import React, { useEffect } from 'react'
import { config } from '../config/config'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Dashboard() {

  let {id}=useParams();

let navigate = useNavigate();

const logout=()=>{
  alert("logged out")
  localStorage.removeItem('react_app_token');
navigate("/");

}

    const [users, setUser] = useState([]);

    let fetchData = async () => {
        try {
          let res = await axios.get(`${config().api}/userpage/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("react_app_token")}`,
            },
          });
          setUser(res.data.message);
        } catch (error) {
          console.log(error);
        }
      };   

useEffect(() => {
    fetchData();
},[])
console.log(users)
  return (
    <div>
<h1>{`${users}`}</h1>
<button onClick={()=>{logout()}}>Logout</button>
    </div>
  )
}

export default Dashboard