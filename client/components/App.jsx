import React from 'react';
import MonsterList from './MonsterList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsterList: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({monsterList: monsters}, () => console.log(this.state)))
  }

  render() {
    return (
      <div>
        <div>Monsters Rolodex</div>
        {/* <Search /> */}
        <MonsterList monsterList={this.state.monsterList} />
      </div>
    )
  }
}

export default App;
