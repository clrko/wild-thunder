import React from 'react';
import Cards from './components/Cards'
import './App.css';

const divStyle = [{
  background: '#0089BA',
  }, 
  {
  background: '#008E9B',
  },
  {
  background: '#845EC2',
  },
  {
  background: '#D65DB1',
  },
  {
  background: '#FF6F91',
  },
  {
    background: '#FF9671',
  },
  {
    background: '#FFC75F',
  },
  {
    background: '#B8E067',
  }
];

function App() {
  return (
    <div className="cards-list">
      <Cards divStyle={divStyle[0]} title="Rock"></Cards>
      <Cards divStyle={divStyle[1]} title="Pop"></Cards>
      <Cards divStyle={divStyle[2]} title="Electro"></Cards>
      <Cards divStyle={divStyle[3]} title="Latino"></Cards>
      <Cards divStyle={divStyle[4]} title="Country"></Cards>
      <Cards divStyle={divStyle[5]} title="Jazz"></Cards>
      <Cards divStyle={divStyle[6]} title="Variété Française"></Cards>
      <Cards divStyle={divStyle[7]} title="Classique"></Cards>
    </div>
  );
}


export default App
