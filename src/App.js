import logo from './logo.svg';
import './App.css';
// import './design.css'; BLUE
import Parent from './Parent';
import AuthError from './Dashboard/AuthError';
import LogAdmin from './Dashboard/LogAdmin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyHome from './Components/MyHome';
import MyProfile from './Components/MyProfile';
import ContactUs from './Components/ContactUs';
import MyMainForms from './MyMainForms/MyMainForms';
import BasicForm from './MyMainForms/BasicForms';
import ControlledInput from './MyMainForms/ControlledInput';
import Nav from './Components/Nav';



function App() {
 return(
    <Router>
      <Nav/>
      <div className="container">
          <Routes>
                  <Route path="/" element={<MyHome />} />
                  <Route path="/profile" element={<MyProfile />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/mymainforms/*" element={<MyMainForms />} />
                  <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
      </div>
  </Router>




 );
}


export default App;
