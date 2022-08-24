
import './App.css';
import Loginpage from '../Loginpage/Loginpage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createaccount from '../Createaccount/Createaccount';
import Forgetpassword from '../Forgetpassword/Forgetpassword';
import Navbar from '../Navbar/Navbar';
import Mailverification from '../mailverification/Mailverification';
import Passwordreset from '../passwordreset/Passwordreset';
import Dashboard from '../Dashboard/Dashboard';
function App() {
  return (
   
      <BrowserRouter>
      <Routes>

  <Route path="/" element={<Loginpage></Loginpage>}/>
  <Route path="/createaccount" element={<Createaccount></Createaccount>}/>
  <Route path="/forgetpassword" element={<Forgetpassword></Forgetpassword>}/>
<Route path="/homepage" element={<Navbar></Navbar>}/>
<Route path="/userverification" element={<Mailverification></Mailverification>}/>
<Route path="passwordreset/:id" element={<Passwordreset></Passwordreset>}/>
<Route path="/dashboard/:id" element={<Dashboard></Dashboard>}/>

  </Routes>
  </BrowserRouter>
   
  );
}

export default App;
