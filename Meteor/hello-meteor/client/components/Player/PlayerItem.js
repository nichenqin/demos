import React, { Component } from 'react';

class PlayerItem extends Component {
  render() {
    const { player } = this.props;
    return (
      <div>
        {player.name}
      </div>
    );
  }
}

export default PlayerItem;
