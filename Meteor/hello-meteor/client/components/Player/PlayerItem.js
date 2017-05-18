import React, { Component } from 'react';
import { Players } from '../../../imports/collections/players';

class PlayerItem extends Component {
  render() {
    const { player: { _id, name, score } } = this.props;
    return (
      <div key={_id}>
        {name} has {score}
        <button onClick={() => Players.update({ _id }, { $inc: { score: 1 } })}>+1</button>
        <button onClick={() => Players.update({ _id }, { $inc: { score: -1 } })}>-1</button>
        <button onClick={() => Players.remove({ _id })}>X</button>
      </div>
    );
  }
}

export default PlayerItem;
