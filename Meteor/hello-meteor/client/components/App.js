import React from 'react';
import Header from './Header/Header';
import PlyerList from './Player/PlayerList';
import AddPlayer from './Player/AddPlayer';

const App = (props) => {
  const { players } = props;
  console.log(players);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <PlyerList players={players} />
        <AddPlayer players={players} />
      </div>
    </div>
  );
};

export default App;
