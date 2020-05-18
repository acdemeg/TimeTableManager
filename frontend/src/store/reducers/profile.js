import { actionsEnum, typeModalEnum } from '../../constants';

const updateProfile = (state, action) => {
  if (state === undefined) {
    return {
      id: null,
      isOpenModal: false,
      email: 'My Email',
      name: 'My Profile',
      role: 'USER',
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
    id: state.profile.id,
    email: state.profile.email,
    name: state.profile.name,
    role: state.profile.role,
    typeModal: action.payload.type,
    titleModal: action.payload.title,
  });

  const cancelModal = () => ({
    id: state.profile.id,
    email: state.profile.email,
    name: state.profile.name,
    role: state.profile.role,
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
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
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
