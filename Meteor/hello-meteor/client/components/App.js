import React from 'react';
import Header from './Header/Header';
import PlyerList from './Player/PlayerList';
import AddPlayer from './Player/AddPlayer';

const App = (props) => {
  const { players } = props;

  return (
    <div>
      <Header />
      <PlyerList players={players} />
      <AddPlayer players={players} />
    </div>
  );
};

export default App;
