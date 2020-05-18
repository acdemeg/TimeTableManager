import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import TimeTables from '../scenes/TimeTables';
import TimeTable from '../scenes/TimeTable';
import CreateTimeTable from '../scenes/CreateTimeTable';
import Timeline from '../scenes/Timeline';
import Profile from '../scenes/Profile';
import Registration from '../scenes/Registration';
import SignIn from '../scenes/SignIn';
import Notificatons from '../scenes/Announcement';
import Navigation from './Navbar';
import './styles.css';

const App = ({ isLoggedIn, role, name }) => {
  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} role={role} name={name} />
      <Switch>
        <Route path="/" exact component={TimeTables} />
        <Route
          path="/createTimeTable"
          exact
          component={role === 'ADMIN' ? CreateTimeTable : null}
        />
        <Route path="/timeTable/:id" component={TimeTable} />
        <Route path="/timeline" component={isLoggedIn ? Timeline : null} />
        <Route
          path="/notifications"
          component={isLoggedIn && role === 'ADMIN' ? Notificatons : null}
        />
        <Route path="/profile" component={isLoggedIn ? Profile : null} />
        <Route path="/registration" component={Registration} />
        <Route path="/signIn" component={SignIn} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ authorization: { isLoggedIn }, profile: { name, role } }) => ({
  isLoggedIn,
  role,
  name,
});

export default connect(mapStateToProps, null)(App);
