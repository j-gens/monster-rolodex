import React from 'react';
import MonsterListEntry from './MonsterListEntry.jsx';

const MonsterList = (props) => (
  <div>
    {props.monsterList.map(monster =>
      <MonsterListEntry monster={monster} />
    )}
  </div>
)

export default MonsterList;
