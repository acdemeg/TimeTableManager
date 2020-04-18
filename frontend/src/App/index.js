import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TimeTables from '../scenes/TimeTables';
import Timeline from '../scenes/Timeline';
import Profile from '../scenes/Profile';
import Registration from '../scenes/Registration';
import SignIn from '../scenes/SignIn';
import Notificatons from '../scenes/Announcement';
import Navigation from '../components/Navbar';
import './styles.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={TimeTables} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/notifications" component={Notificatons} />
        <Route path="/profile" component={Profile} />
        <Route path="/registration" component={Registration} />
        <Route path="/signIn" component={SignIn} />
      </Switch>
    </>
  );
};

export default App;
