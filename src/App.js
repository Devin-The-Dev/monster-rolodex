import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: 
      [
        { 
          id: '12e1231e',
          name: 'Devin', 
          num: 0
        },
        { 
          id: '12ed2dacas',
          name: 'Otis', 
          num: 0 
        },
        { 
          id: '1231e',
          name: 'Odie', 
          num: 0 
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {
          // 'monster' is our index. This is very much like a for-each loop. map() is the preferrred looping method for React
          this.state.monsters.map((monster) => {
            return <h1 key={ monster.id }>{ monster.name } { monster.num }</h1>;
          })
        }
      </div>
    );
  }
}

export default App;
