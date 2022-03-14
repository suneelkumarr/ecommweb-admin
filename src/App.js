import React from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/auth/Login'
import Reset from './pages/auth/Reset'
import Master from './pages/master/Index'
import FourOFour from './pages/404/Index'
import ServerError from './pages/501/Index'

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Login />} exact />
         <Route path="/reset" element={<Reset />} exact />
         <Route path="/dashboard" element={<Master />} exact />
         <Route path="/501" element={<ServerError />} exact />
         <Route path="*" element={<FourOFour />} exact />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
