import { actionsEnum, typeModalEnum } from '../../constants';

const updateProfile = (state, action) => {
  if (state === undefined) {
    return {
      isOpenModal: false,
      email: 'My Email',
      name: 'My Profile',
      typeModal: undefined,
      titleModal: '',
    };
  }

  const updateInfo = () => {
    const { typeModal } = state.profile;

    if (typeModal === typeModalEnum.EMAIL) {
      return {
        ...state.profile,
        email: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.NAME) {
      return {
        ...state.profile,
        name: action.payload,
        isOpenModal: false,
      };
    }

    return state.profile;
  };

  const openNeedModal = () => ({
    isOpenModal: true,
    email: state.profile.email,
    name: state.profile.name,
    typeModal: action.payload.type,
    titleModal: action.payload.title,
  });

  const cancelModal = () => ({
    email: state.profile.email,
    name: state.profile.name,
    isOpenModal: false,
  });

  switch (action.type) {
    case actionsEnum.OPEN_MODAL_PROFILE:
      return openNeedModal(state, action);

    case actionsEnum.CANCEL_MODAL_PROFILE:
      return cancelModal();

    case actionsEnum.SUBMIT_MODAL_PROFILE:
      return updateInfo();

    case actionsEnum.PROFILE_LOADED:
      return {
        ...state.profile,
        name: action.payload.name,
        email: action.payload.email,
      };

    case actionsEnum.PROFILE_ERROR:
      return {
        ...state.profile,
      };

    default:
      return state.profile;
  }
};

export default updateProfile;
