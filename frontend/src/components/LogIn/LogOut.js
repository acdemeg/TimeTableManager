import React from 'react';
import styles from './LogIn.scss';

function LogOut() {
  return (
    <li>
      <div className={styles.logout}>
        <img src="/logout.png" alt="logo" width="45px" height="45px" />
      </div>
    </li>
  );
}

export default LogOut;
