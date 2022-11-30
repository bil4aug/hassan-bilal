import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import First from './components/First';

import Bar from './components/AppLayout'
import Price from './components/Price';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import Login from './components/Login'

const App = () => {

  return(
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
      <Route path='/first' element={<First />} />
      <Route path='/bar' element={<Bar title='Admin panel'/>} />
      <Route path='/second' element={<Price />} />
      <Route path='/login' element={<Login/>} />
      </Routes>
  
      </Router>
      </StyledEngineProvider>
  )

}

export default App;
