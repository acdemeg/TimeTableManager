import React from 'react';
import styles from './Navbar.scss';
import NavLinkComponent from './NavLinkComponent';
import LogOut from '../LogIn/LogOut';

function NavigationForLogInUsers({ userName = 'username' }) {
  return (
    <>
      <ul>
        <NavLinkComponent path="/" title="Timetables" />
        <NavLinkComponent path="/timeline" title="Timeline" />
        <NavLinkComponent path="/notifications" title="Notificatons" />
      </ul>
      <ul className={styles.right}>
        <NavLinkComponent path="/profile" title={userName} />
        <LogOut />
      </ul>
    </>
  );
}

export default NavigationForLogInUsers;
