import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ConnectedLogin } from 'components/Login/Login';
import NotFound from 'components/NotFound/NotFound';
import Dashboard from 'components/Dashboard/Dashboard';
import { handleInitialData } from 'data/actions/shared';

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  })

  return (
    <React.Fragment>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<ConnectedLogin />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  )
}

export default connect()(App);
