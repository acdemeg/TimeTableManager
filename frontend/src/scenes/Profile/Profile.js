import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {
  OPEN_MODAL_PROFILE,
  CANCEL_MODAL_PROFILE,
  SUBMIT_MODAL_PROFILE,
  SHOW_ALERT,
} from '../../store/actions';
import Modal from './Modal';
import ProfileField from './ProfileField';
import RedactFields from './RedactField';
import { scenesEnum } from '../../constants';
import Notification from '../../components/Notification';

function Profile({
  isOpenModal,
  email,
  name,
  titleModal,
  typeModal,
  openModal,
  handleCancel,
  handleSubmit,
  notifications,
}) {
  return (
    <div>
      <div className="profile">
        <div className="profile-header">
          <b>My profile</b>
        </div>

        <div className="profile-container">
          <div style={{ float: 'left' }}>
            <ProfileField value={name} title="Name" icon="user" />
            <ProfileField value={email} title="Email" icon="envelope" />
          </div>

          <RedactFields openModal={openModal} />
        </div>
      </div>

      {!isOpenModal ? null : (
        <Modal
          title={titleModal}
          typeModal={typeModal}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}
      <Notification notifications={notifications} currentScene={scenesEnum.PROFILE} />
    </div>
  );
}

const mapStateToProps = ({
  profile: { isOpenModal, email, name, titleModal, typeModal },
  notifications,
}) => ({
  isOpenModal,
  email,
  name,
  titleModal,
  typeModal,
  notifications,
});

const mapDispatchToProps = dispatch => ({
  openModal: ({ type, title }) => dispatch(OPEN_MODAL_PROFILE(type, title)),
  handleCancel: () => dispatch(CANCEL_MODAL_PROFILE()),
  handleSubmit: (data, alertText) => {
    dispatch(SUBMIT_MODAL_PROFILE(data));
    dispatch(SHOW_ALERT(scenesEnum.PROFILE, alertText));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
