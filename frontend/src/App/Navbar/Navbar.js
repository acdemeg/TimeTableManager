import React from 'react';
import { connect } from 'react-redux';
import styles from './Navbar.scss';
import NavigationForLogInUsers from './NavigationForLogInUsers';
import NavigationForUnLogInUsers from './NavigationForUnLogInUsers';

function Navigation({ isLoggedIn, name }) {
  let navBar;

  if (isLoggedIn) {
    navBar = <NavigationForLogInUsers userName={name} />;
  } else navBar = <NavigationForUnLogInUsers />;

  return (
    <div>
      <nav className={`panel-heading ${styles.navBar}`}>
        <div>
          <img src="/logo.png" alt="logo" width="50px" height="50px" />
        </div>
        <div className="tabs">{navBar}</div>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ authorization: { isLoggedIn }, profile: { name } }) => ({
  isLoggedIn,
  name,
});

export default connect(mapStateToProps, null)(Navigation);
