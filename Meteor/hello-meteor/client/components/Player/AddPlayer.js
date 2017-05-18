import React, { Component } from 'react';
import { Players } from '../../../imports/collections/players';

class AddPlayer extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const playerName = e.target.playerName.value;

    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({ name: playerName });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="player name here..." />
          <button>Add player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
