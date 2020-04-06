import React from 'react';
import styles from './Navbar.scss';
import NavLinkComponent from './NavLinkComponent';

function NavigationForUnLogInUsers() {
  return (
    <>
      <ul>
        <NavLinkComponent path="/" title="Timetables" />
      </ul>
      <ul className={styles.profile}>
        <NavLinkComponent path="/authorization" title="Log In" />
      </ul>
    </>
  );
}

export default NavigationForUnLogInUsers;
