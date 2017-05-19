import React, { Component } from 'react';
import { Players } from '../../../imports/collections/players';

class PlayerItem extends Component {

  render() {
    const { player: { _id, name, score, rank, position } } = this.props;
    const classnames = `item item__position_${rank}`;
    return (
      <div key={_id} className={classnames}>
        <div className="player">
          <div className="player__desc">
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">{score} ({position}) point(s)</p>
          </div>
          <div className="player__actions">
            <button
              className="btn btn--round"
              onClick={() => Players.update({ _id }, { $inc: { score: 1 } })}>
              +1
          </button>
            <button
              className="btn btn--round"
              onClick={() => Players.update({ _id }, { $inc: { score: -1 } })}>
              -1
          </button>
            <button
              className="btn btn--round"
              onClick={() => Players.remove({ _id })}>
              X
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerItem;
