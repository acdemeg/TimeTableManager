import React from 'react';
import { connect } from 'react-redux';
import styles from './Registration.scss';
import register from '../TimeTables/TimeTables.scss';
import InputIcon from '../../components/InputIcon';
import { REGISTER } from '../../store/actions';
import { scenesEnum } from '../../constants';
import Notification from '../../components/Notification';

const Registration = ({ onReg, notifications }) => {
  return (
    <form id="RegForm" onSubmit={onReg}>
      <div className={register.googleFont}>
        Registration
        <div className={styles.regForm}>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Username"
                autoComplete="on"
              />
              <InputIcon side="left" icon="user" />
            </p>
          </div>
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
      <Notification notifications={notifications} currentScene={scenesEnum.REG} />
    </form>
  );
};

const mapStateToProps = ({ notifications }) => ({
  notifications,
});

const mapDispatchToProps = dispatch => ({
  onReg: event => {
    REGISTER(event, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
