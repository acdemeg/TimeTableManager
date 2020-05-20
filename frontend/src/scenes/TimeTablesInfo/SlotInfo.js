import style from './TimeTablesInfo.scss';
import Container from '../TimeTables/ContainerStyle';
import { timeTableTypeEnum } from '../../constants';

const SlotInfo = ({ order, slotSize }) => {
  const { startDate, endDate } = order;
  const startDateObj = new Date(Date.parse(startDate));
  const endDateObj = new Date(Date.parse(endDate));
  return (
    <div className={style.Slot}>
      <div className={style.slotTitle}>
        <p>
          <i>
            {slotSize === timeTableTypeEnum.HOUR
              ? `${startDateObj.getDate()}
            ${startDateObj.toLocaleString('eng', { month: 'long' })}
            ${startDateObj.getHours()}:00
            - 
            ${endDateObj.getHours()}:00`
              : `${startDateObj.getDate()}
            ${startDateObj.toLocaleString('eng', { month: 'long' })}`}
          </i>
        </p>
      </div>
      <Container>orders</Container>
    </div>
  );
};

export default SlotInfo;
