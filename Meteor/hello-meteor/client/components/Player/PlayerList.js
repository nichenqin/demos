import React, { Component } from 'react';

import PlayerItem from './PlayerItem';

class PlayerList extends Component {
  renderPlayer() {
    const { players } = this.props;
    return players.length
      ? players.map(player => <PlayerItem key={player._id} player={player} />)
      : <div>Add first player</div>;
  }

  render() {
    return (
      <div>
        {this.renderPlayer()}
      </div>
    );
  }
}

export default PlayerList;
