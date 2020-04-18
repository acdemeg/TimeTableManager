import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {
  OPEN_MODAL_WINDOW,
  CANCEL_MODAL_WINDOW,
  SUBMIT_MODAL_WINDOW,
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
  isLoggedIn,
}) {
  console.log(`Profile: isLoggedIn = ${isLoggedIn}`);

  if (isLoggedIn) {
    return (
      <>
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

        <Modal
          title={titleModal}
          typeModal={typeModal}
          isOpenModal={isOpenModal}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />

        <Notification notifications={notifications} currentScene={scenesEnum.PROFILE} />
      </>
    );
  }

  return null;
}

const mapStateToProps = ({
  profile: { isOpenModal, email, name, titleModal, typeModal },
  authorization: { isLoggedIn, userId },
  notifications,
}) => ({
  isOpenModal,
  email,
  name,
  titleModal,
  typeModal,
  isLoggedIn,
  userId,
  notifications,
});

const mapDispatchToProps = dispatch => ({
  openModal: ({ type, title }) => dispatch(OPEN_MODAL_WINDOW(type, title)),
  handleCancel: () => dispatch(CANCEL_MODAL_WINDOW()),
  handleSubmit: (data, alertText) => {
    dispatch(SUBMIT_MODAL_WINDOW(data));
    dispatch(SHOW_ALERT(scenesEnum.PROFILE, alertText));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
