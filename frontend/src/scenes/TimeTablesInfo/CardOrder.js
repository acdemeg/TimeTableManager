import React from 'react';
import styles from './TimeTablesInfo.scss';
import { orderStatusEnum } from '../../constants';
import ButtonSmall from '../../components/buttons/ButtonSmall';

const CartOrder = ({ order, attributes, removeOrder, orderUpdateStatus }) => {
  const { id, authorName, status, attributeValues } = order;

  const getMainAttr = () => {
    if (attributes.length > 0) {
      if (attributeValues.length > 0) {
        const [attr] = attributeValues;
        const [{ title }] = attributes;
        if (attr.value) {
          return (
            <p>
              {title}
              :&nbsp;
              <i>{attr.value}</i>
            </p>
          );
        }
        return null;
      }
      return null;
    }
    return null;
  };

  return (
    <div>
      <div className={styles.cartOrder}>
        <p>
          Author :&nbsp;
          <i>{authorName}</i>
        </p>
        <div>
          {getMainAttr()}
          <p>
            Status:&nbsp;
            <i
              style={{
                color: `${(() => {
                  if (status === orderStatusEnum.CANCELED) {
                    return 'crimson';
                  }
                  if (status === orderStatusEnum.ACCEPTED) {
                    return 'mediumspringgreen';
                  }
                  return 'black';
                })()}`,
              }}
            >
              <b>{status}</b>
            </i>
          </p>
        </div>
        <div className={styles.buttonsCartOrder}>
          <ButtonSmall title="remove" color="is-danger" handler={event => removeOrder(event, id)} />
          <ButtonSmall
            title="cancel"
            handler={event => orderUpdateStatus(event, id, orderStatusEnum.CANCELED)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
