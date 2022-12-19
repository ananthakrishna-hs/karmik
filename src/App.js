import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Login from 'components/Login/Login';
import NotFound from 'components/NotFound/NotFound';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
