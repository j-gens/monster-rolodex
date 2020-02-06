import React from 'react';
import MonsterList from './monster-list/monster-list.component.jsx';
import Search from './search/search.component.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsterList: [],
      searchField: '',
      placeholder: 'search monsters'
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({monsterList: monsters}, () => console.log(this.state)))
  }

  handleSearch(e) {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsterList, searchField } = this.state;
    const filteredMonsterList = monsterList.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div>Monsters Rolodex</div>
        <Search placeholder={this.state.placeholder} handleSearch={this.handleSearch} />
        <MonsterList monsterList={filteredMonsterList} />
      </>
    )
  }
}

export default App;
