import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import {
  OPEN_MODAL_ORDER,
  CANCEL_MODAL_ORDER,
  CREATE_ORDER,
  REJECT_ORDER,
} from '../../store/actions';

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
    authorization: { isLoggedIn },
    orders,
    profile,
    notifications,
  }) => ({
    timeTables,
    loading,
    error,
    orders,
    notifications,
    profile,
    isLoggedIn,
  });

  const mapDispatchToProps = dispatch => ({
    fetchData: fetchAction(dispatch),
    openModal: ({ type, title, orderInfo }) => dispatch(OPEN_MODAL_ORDER(type, title, orderInfo)),
    handleCancel: event => {
      event.preventDefault();
      dispatch(CANCEL_MODAL_ORDER());
    },
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
    orderReject: (event, orderId) => REJECT_ORDER(event, orderId, dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default Wrapped;
