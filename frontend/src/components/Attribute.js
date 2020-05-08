import React from 'react';
import styled from '@emotion/styled';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { getNewIdGenerator } from '../utils';

const attributeKeysGen = getNewIdGenerator();

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 3% auto;
`;

const Attribute = () => {
  return (
    <Container>
      <TextInput labelName="Attribute name" labeId={`Attribute name ${attributeKeysGen()}`} />
      <SelectInput labelName="Attr type" labeId={`Attr type ${attributeKeysGen()}`} />
      <div style={{ marginLeft: '3%' }}>
        Required
        <input
          style={{
            display: 'block',
            margin: '20% auto',
            transform: 'scale(1.5)',
          }}
          type="checkbox"
        />
      </div>
    </Container>
  );
};

export default Attribute;
