import React from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/auth/Login'

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Login />} exact />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
