import React from 'react';
import { connect } from 'react-redux';
import styles from './SignIn.scss';
import register from '../TimeTables/TimeTables.scss';
import InputIcon from '../../components/InputIcon';
import { LOGIN } from '../../store/actions';
import { scenesEnum } from '../../constants';
import Notification from '../../components/Notification';

const SignIn = ({ onLogin, notifications }) => {
  return (
    <form id="LogInForm" onSubmit={onLogin}>
      <div className={register.googleFont}>
        Sign In
        <div className={styles.signInForm}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="on"
              />
              <InputIcon side="left" icon="envelope" />
              <InputIcon side="right" icon="check" />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="on"
              />
              <InputIcon side="left" icon="lock" />
            </p>
          </div>
          <div>
            <button type="submit" className="button is-primary is-rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>
      <Notification notifications={notifications} currentScene={scenesEnum.LOG_IN} />
    </form>
  );
};

const mapStateToProps = ({ notifications }) => ({ notifications });

const mapDispatchToProps = dispatch => ({
  onLogin: event => {
    LOGIN(event, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
