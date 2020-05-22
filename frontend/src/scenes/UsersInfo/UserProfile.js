import React from 'react';
import style from './UsersInfo.scss';
import header from '../TimeTables/TimeTables.scss';
import { orderStatusEnum } from '../../constants';

const UserProfile = ({ user, timeTables }) => {
  if (!user) {
    return (
      <div className={style.profileUser}>
        <div className={header.googleFont}>User Not Found</div>
      </div>
    );
  }
  let createdOrders = 0;
  let acceptedOrders = 0;
  let canceledOrdres = 0;

  timeTables.forEach(timeTable => {
    timeTable.orders.forEach(order => {
      if (order.authorId === user.id) {
        if (order.status === orderStatusEnum.ACCEPTED) {
          acceptedOrders += 1;
          return;
        }
        if (order.status === orderStatusEnum.CANCELED) {
          canceledOrdres += 1;
          return;
        }
        createdOrders += 1;
      }
    });
  });

  return (
    <div className={style.profileUser}>
      <div className={style.photoWrapper}>
        <div className={style.userPhoto}>
          <img alt="avatar" src={`/upload/${user.imagePath}`} width="300px" height="350px" />
        </div>
      </div>
      <div className={style.userInfo}>
        <div>
          <p>
            User name:&emsp;
            <i>{user.name}</i>
          </p>
        </div>
        <div>
          <p>
            User email:&emsp;
            <i>{user.email}</i>
          </p>
        </div>
        <div>
          <p>
            Created orders:&emsp;
            <i style={{ color: 'gray' }}>{createdOrders}</i>
          </p>
        </div>
        <div>
          <p>
            Accepted orders:&emsp;
            <i style={{ color: 'mediumspringgreen' }}>{acceptedOrders}</i>
          </p>
        </div>
        <div>
          <p>
            Canceled orders:&emsp;
            <i style={{ color: 'crimson' }}>{canceledOrdres}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
