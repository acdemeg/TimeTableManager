import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import {
  OPEN_MODAL_ORDER,
  CANCEL_MODAL_ORDER,
  REJECT_MODAL_ORDER,
  SHOW_ALERT,
  CREATE_ORDER,
} from '../../store/actions';
import { scenesEnum } from '../../constants';

const Wrapped = (View, fetchAction) => {
  const WithData = props => {
    const { loading, error, fetchData } = props;

    useEffect(() => {
      fetchData();
    }, []);

    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <View {...props} />;
  };

  const mapStateToProps = ({
    timeTablesList: { timeTables, loading, error },
    orders: { isOpenModal, nameEvent, orderedBy, titleModal, typeModal },
    profile,
    notifications,
  }) => ({
    timeTables,
    loading,
    error,
    isOpenModal,
    titleModal,
    typeModal,
    nameEvent,
    orderedBy,
    notifications,
    profile,
  });

  const mapDispatchToProps = dispatch => ({
    fetchData: fetchAction(dispatch),
    openModal: ({ type, title, orderInfo }) => dispatch(OPEN_MODAL_ORDER(type, title, orderInfo)),
    handleCancel: () => dispatch(CANCEL_MODAL_ORDER()),
    orderSubmit: (event, alertText, attributes, profile, timeOrder, timeTableId, slotSize) =>
      CREATE_ORDER(
        event,
        alertText,
        attributes,
        profile,
        timeOrder,
        timeTableId,
        slotSize,
        dispatch,
      ),
    handleReject: alertText => {
      dispatch(REJECT_MODAL_ORDER());
      dispatch(SHOW_ALERT(scenesEnum.TIME_TABLE, alertText));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default Wrapped;
