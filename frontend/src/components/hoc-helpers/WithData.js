import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import {
  OPEN_MODAL_ORDERS,
  CANCEL_MODAL_ORDERS,
  SUBMIT_MODAL_ORDERS,
  REJECT_MODAL_ORDERS,
  SHOW_ALERT,
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
  });

  const mapDispatchToProps = dispatch => ({
    fetchData: fetchAction(dispatch),
    openModal: ({ type, title }) => dispatch(OPEN_MODAL_ORDERS(type, title)),
    handleCancel: () => dispatch(CANCEL_MODAL_ORDERS()),
    handleSubmit: (data, alertText) => {
      dispatch(SUBMIT_MODAL_ORDERS(data));
      dispatch(SHOW_ALERT(scenesEnum.TIME_TABLE, alertText));
    },
    handleReject: alertText => {
      dispatch(REJECT_MODAL_ORDERS());
      dispatch(SHOW_ALERT(scenesEnum.TIME_TABLE, alertText));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default Wrapped;
