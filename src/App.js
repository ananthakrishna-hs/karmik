import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Login from 'components/Login/Login';
import NotFound from 'components/NotFound/NotFound';
import Dashboard from 'components/Dashboard/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
