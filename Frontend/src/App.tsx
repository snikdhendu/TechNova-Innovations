// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home,About,Contact,Services} from './Pages';
import { Error } from './Pages/Error';


import "./App.css";



const App = () => {

  return (
    <Router>
      <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<Error />} />
         
      </Routes>
    </Router>
  );
}

export default App;

