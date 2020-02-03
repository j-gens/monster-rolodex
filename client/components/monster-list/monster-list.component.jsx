import React from 'react';
import MonsterListEntry from '../monster/monster.component.jsx';

const MonsterList = (props) => (
  <div>
    {props.monsterList.map(monster =>
      <MonsterListEntry monster={monster} key={monster.id} />
    )}
  </div>
)

export default MonsterList;
