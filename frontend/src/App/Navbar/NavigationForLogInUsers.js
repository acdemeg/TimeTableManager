import React from 'react';
import styles from './Navbar.scss';
import NavLinkComponent from './NavLinkComponent';
import LogOut from './LogOut';
import { usersRoleEnum } from '../../constants';

function NavigationForLogInUsers({ userName = 'username', userRole }) {
  return (
    <>
      <ul>
        <NavLinkComponent path="/" title="Timetables" />
        <NavLinkComponent path="/timeline" title="Timeline" />
        {userRole === usersRoleEnum.ADMIN ? (
          <NavLinkComponent path="/timeTablesInfo" title="Orders" />
        ) : null}
      </ul>
      <ul className={styles.right}>
        <NavLinkComponent path="/profile" title={userName} />
        <LogOut />
      </ul>
    </>
  );
}

export default NavigationForLogInUsers;
