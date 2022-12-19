import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from 'components/DashboardNav/DashboardNav';
import Home from 'components/Home/Home';
import Leaderboard from 'components/Leaderboard/Leaderboard';
import New from 'components/New/New';

function Dashboard () {
  return (
    <React.Fragment>
      <Nav />

      <Routes>
        <Route path='' element={<Navigate to='home' replace />} />
        <Route path='home' element={<Home />} />
        <Route path='leaderboard' element={<Leaderboard />} />
        <Route path='new' element={<New />} />
      </Routes>
    </React.Fragment>
  )
}

export default Dashboard;