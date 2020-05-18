import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './CreateTimeTable.scss';
import creatTimeTableHeader from '../TimeTables/TimeTables.scss';
import TextInput from '../../components/inputs/TextInput';
import SelectInput from '../../components/inputs/SelectInput';
import DateInput from '../../components/inputs/DateInput';
import Attribute from '../../components/Attribute';
import Button from '../../components/buttons/Button';
import { getNewIdGenerator } from '../../utils';
import { CREATE_TIME_TABLE } from '../../store/actions';
import Notification from '../../components/Notification';
import { scenesEnum } from '../../constants';

const attributeKeysGen = getNewIdGenerator();
const attributeNumberGen = getNewIdGenerator();

const CreateTimeTable = ({ onCreateTimeTable, notifications }) => {
  const [attributes, setAttributes] = useState([
    <Attribute key={attributeKeysGen()} numField={attributeNumberGen()} />,
  ]);

  const addAttribute = () => {
    return setAttributes([
      ...attributes,
      <Attribute key={attributeKeysGen()} numField={attributeNumberGen()} />,
    ]);
  };

  return (
    <form id="CreateTimeTableForm" onSubmit={onCreateTimeTable}>
      <div className={creatTimeTableHeader.googleFont}>Create TimeTable</div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperSettings}>
          <p>Timetable settings</p>
          <TextInput labelName="Timetable name" nameForm="Timetable name" labeId="Timetable" />
          <DateInput labelName="Start range" nameForm="Start range" labeId="Start range" />
          <DateInput labelName="End range" nameForm="End range" labeId="End range" />
        </div>

        <div className={styles.wrapperSettings}>
          <p>Slot settings</p>
          <SelectInput
            type="timeTable"
            labelName="Slot size"
            nameForm="Slot size"
            labeId="Slot size"
          />
          <p>Slot attributes</p>
          {attributes}
          <Button title="+ Add attribute" handler={addAttribute} />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button title="Save" handler={() => {}} />
      </div>
      <Notification notifications={notifications} currentScene={scenesEnum.CREATE_TIME_TABLE} />
    </form>
  );
};

const mapStateToProps = ({ notifications }) => ({ notifications });

const mapDispatchToProps = dispatch => ({
  onCreateTimeTable: event => {
    CREATE_TIME_TABLE(event, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTimeTable);
