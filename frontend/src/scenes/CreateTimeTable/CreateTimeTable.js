import React, { useState } from 'react';
import styles from './CreateTimeTable.scss';
import creatTimeTableHeader from '../TimeTables/TimeTables.scss';
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';
import DateInput from '../../components/DateInput';
import Attribute from '../../components/Attribute';
import Button from '../../components/Button';
import { getNewIdGenerator } from '../../utils';

const attributeKeysGen = getNewIdGenerator();

const CreateTimeTable = () => {
  const [attributes, setAttributes] = useState([<Attribute key={attributeKeysGen()} />]);

  const addAttribute = () => {
    return setAttributes([...attributes, <Attribute key={attributeKeysGen()} />]);
  };

  return (
    <div>
      <div className={creatTimeTableHeader.googleFont}>Create TimeTable</div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperSettings}>
          <p>Timetable settings</p>
          <TextInput labelName="Timetable name" labeId="Timetable" />
          <DateInput labelName="Start range" labeId="Start range" />
          <DateInput labelName="End range" labeId="End range" />
        </div>

        <div className={styles.wrapperSettings}>
          <p>Slot settings</p>
          <SelectInput labelName="Slot size" labeId="Slot size" />
          <p>Slot attributes</p>
          {attributes}
          <Button title="+ Add attribute" handler={addAttribute} />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button title="Save" />
        <Button title="Cancel" />
      </div>
    </div>
  );
};

export default CreateTimeTable;
