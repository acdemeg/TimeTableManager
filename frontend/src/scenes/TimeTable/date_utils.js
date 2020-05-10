import { timeTableTypeEnum } from '../../constants';

const millisecInHour = 3600000;
const millisecInDay = 86400000;
const millisecInWeek = 604800000;

class DateUtils {
  constructor(slotSize, period) {
    this.slotSize = slotSize;
    this.time = period;
  }

  getStartPeriodColumn() {
    return {
      string: `${this.time.getDate()}
              ${this.time.toLocaleString('eng', { month: 'long' })}
              ${this.time.getFullYear()}`,
      date: this.time,
    };
  }

  getEndPeriodColunm() {
    return {
      string: `${new Date(this.time.getTime() + millisecInWeek).getDate()}
              ${new Date(this.time.getTime() + millisecInWeek).toLocaleString('eng', {
                month: 'long',
              })}
              ${new Date(this.time.getTime() + millisecInWeek).getFullYear()}`,
      date: new Date(this.time.getTime() + millisecInWeek),
    };
  }

  getPeriodForColumns(currentCollumn) {
    if (this.slotSize === timeTableTypeEnum.HOUR) {
      if (currentCollumn === 1) {
        return this.getStartPeriodColumn();
      }
      this.time = new Date(this.time.getTime() + millisecInDay);
      return this.getStartPeriodColumn();
    }

    if (currentCollumn === 1) {
      return {
        string: `${this.getStartPeriodColumn().string}
                    -
                    ${this.getEndPeriodColunm().string}`,
        date: {
          start: this.getStartPeriodColumn().date,
          end: this.getEndPeriodColunm().date,
        },
      };
    }
    this.time = new Date(this.time.getTime() + millisecInWeek);
    return {
      string: `${this.getStartPeriodColumn().string}
                  -
                  ${this.getEndPeriodColunm().string}`,
      date: {
        start: this.getStartPeriodColumn().date,
        end: this.getEndPeriodColunm().date,
      },
    };
  }

  getPeriodForHour() {
    return {
      string: `${this.time.date.getDate()}
              ${this.time.date.toLocaleString('eng', { month: 'long' })}
              ${this.time.date.getFullYear()}
              ${this.time.date.getHours()}:00
              -
              ${new Date(this.time.date.getTime() + millisecInHour).getHours()}:00`,

      date: this.time.date,
    };
  }

  getPeriodForDay() {
    return {
      string: `${this.time.date.start.getDate()}
              ${this.time.date.start.toLocaleString('eng', { month: 'long' })}
              ${this.time.date.start.getFullYear()}`,

      date: this.time.date, // { date: { end, start } }
    };
  }

  getPeriodForCells(currentCell) {
    if (this.slotSize === timeTableTypeEnum.HOUR) {
      if (currentCell === 1) {
        return this.getPeriodForHour();
      }
      this.time.date = new Date(this.time.date.getTime() + millisecInHour * (currentCell - 1));
      return this.getPeriodForHour();
    }

    if (currentCell === 1) {
      return this.getPeriodForDay();
    }
    this.time.date.start = new Date(
      this.time.date.start.getTime() + millisecInDay * (currentCell - 1),
    );
    return this.getPeriodForDay();
  }
}

export default DateUtils;
