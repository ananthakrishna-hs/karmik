import React, { useEffect } from 'react';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { ConnectedDashboardNav } from 'components/DashboardNav/DashboardNav';
import Home from 'components/Home/Home';
import Leaderboard from 'components/Leaderboard/Leaderboard';
import New from 'components/New/New';
import QuestionDetail from 'components/QuestionDetail/QuestionDetail';
import NotFound from 'components/NotFound/NotFound';

function Dashboard ({ users, loggedInUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!users || !loggedInUser) {
      navigate('/', {
        state: {
          path: location.pathname
        }
      });
    }
  }, [users, loggedInUser, navigate, location])

  return (
    <React.Fragment>
      {
        Object.keys(users).length && (
          <React.Fragment>
            <ConnectedDashboardNav username={users[loggedInUser].name} 
              avatar={users[loggedInUser].avatarURL} />

            <Routes>
              <Route path='' element={<Navigate to='home' replace />} />
              <Route path='home' element={<Home />} />
              <Route path='leaderboard' element={<Leaderboard />} />
              <Route path='add' element={<New />} />
              <Route path='questions/:id' element={<QuestionDetail />} />
              <Route path='*' element={<NotFound />} />
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