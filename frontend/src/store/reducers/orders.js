import { actionsEnum, typeModalEnum } from '../../constants';

const updateOrders = (state, action) => {
  if (state === undefined) {
    return {
      isOpenModal: false,
      orderedBy: '',
      nameEvent: 'New event',
      typeModal: undefined,
      titleModal: '',
    };
  }

  const updateInfo = () => {
    const { typeModal } = state.orders;

    if (typeModal === typeModalEnum.CREATE_ORDER) {
      return {
        ...state.orders,
        orderedBy: action.payload.orderedBy,
        nameEvent: action.payload.nameEvent,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.ACCEPT_ORDER) {
      return {
        ...state.orders,
        isOpenModal: false,
      };
    }

    return state.orders;
  };

  const openNeedModal = () => ({
    isOpenModal: true,
    orderedBy: state.orders.orderedBy,
    nameEvent: state.orders.nameEvent,
    typeModal: action.payload.type,
    titleModal: action.payload.title,
  });

  const cancelModal = () => ({
    orderedBy: state.orders.orderedBy,
    nameEvent: state.orders.nameEvent,
    isOpenModal: false,
  });

  switch (action.type) {
    case actionsEnum.OPEN_MODAL_ORDERS:
      return openNeedModal(state, action);

    case actionsEnum.CANCEL_MODAL_ORDERS:
      return cancelModal();

    case actionsEnum.SUBMIT_MODAL_ORDERS:
      return updateInfo();

    case actionsEnum.REJECT_MODAL_ORDERS:
      return {
        isOpenModal: false,
        orderedBy: '',
        nameEvent: 'New event',
        typeModal: undefined,
        titleModal: '',
      };

    case actionsEnum.ORDERS_LOADED:
      return {
        ...state.orders,
        nameEvent: action.payload.nameEvent,
        orderedBy: action.payload.orderedBy,
      };

    case actionsEnum.ORDERS_ERROR:
      return {
        ...state.orders,
      };

    default:
      return state.orders;
  }
};

export default updateOrders;
