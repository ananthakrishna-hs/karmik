import React, { useEffect } from 'react';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import DashboardNav from 'components/DashboardNav/DashboardNav';
import Home from 'components/Home/Home';
import Leaderboard from 'components/Leaderboard/Leaderboard';
import New from 'components/New/New';

function Dashboard ({ users, loggedInUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!users || !loggedInUser) {
      navigate('/');
    }
  }, [users, loggedInUser, navigate])

  return (
    <React.Fragment>
      {
        Object.keys(users).length && (
          <React.Fragment>
            <DashboardNav username={users[loggedInUser].name} />

            <Routes>
              <Route path='' element={<Navigate to='home' replace />} />
              <Route path='home' element={<Home />} />
              <Route path='leaderboard' element={<Leaderboard />} />
              <Route path='new' element={<New />} />
            </Routes>
          </React.Fragment>
        )
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({ users, loggedInUser }) => ({
  users,
  loggedInUser
});

export default connect(mapStateToProps)(Dashboard);