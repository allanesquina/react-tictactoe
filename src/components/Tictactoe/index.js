import React from 'react';
import Arena from './Arena';
import AlertBox from './AlertBox';
import classNames from 'classnames';
import classes from './Tictactoe.scss';
import GameEngine from '../../services/GameEngine';

export class Tictactoe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      player: 1,
      players: props.players,
      endGame: false
    };

    props.setMatrix(GameEngine.createMatrix());
    this.handleHitArea = this.handleHitArea.bind(this);
    this.gameAction = this.gameAction.bind(this);
  }

  _switchPlayer() {
    this.setState({ player: this.state.player === 4 ? 1 : 4 });
  }

  _endGame() {
    this.setState({endGame: true});
  }

  _win(player) {
    const { playerOne, playerTwo } = this.state.players;
    const winner = player === 0 ? 'Draw' :
      player === 3 ? playerOne : playerTwo;

    this.setState({winner});
    this._endGame();
  }


  _nextTurn() {
    this._switchPlayer();
  }

  gameAction(x, y) {
    const process = GameEngine.turn(x, y, this.state.player, this.props.matrix);
    if (process) {
      this.props.setMatrix(process.matrix);

      switch (process.result) {
        case 2:
          this._nextTurn();
          break;
        case 3:
          this._win(3);
          break;
        case 12:
          this._win(12);
          break;
        case 0:
          this._win(0);
          break;
      }
    }
  }

  handleResetAction() {
    this.props.setMatrix(GameEngine.createMatrix());
    this.setState({player: 1});
  }

  handleHitArea(x,y) {
    this.gameAction(x, y);
  }

  render () {
    const playerOneClasses = classNames({
      [classes.userBox] : true,
      [classes.active]: this.state.player === 1
    });
    const playerTwoClasses = classNames({
      [classes.userBox] : true,
      [classes.active]: this.state.player === 4
    });
    return (
      <div className={classes.wrapper}>
        <div className={classes.menuBox}>
          <button className={classes.backBtn} onClick={() => this.handleResetAction()} >Reset</button>
          <button className={classes.backBtn} onClick={() => this.props.stop()} >Menu</button>
        </div>

        <div className={classes.informationBox}>
          <div className={playerOneClasses}>
              <span>X - {this.state.players.playerOne}</span>
          </div>
          <div className={playerTwoClasses}>
              <span>O - {this.state.players.playerTwo}</span>
          </div>
        </div>
          <Arena matrix={this.props.matrix} click={this.handleHitArea}  />
          {( this.state.endGame && <AlertBox winner={this.state.winner} stop={this.props.stop} /> )}
      </div>
    )
  }
}

Tictactoe.propTypes = {
  stop: React.PropTypes.func,
  setMatrix: React.PropTypes.func,
  players: React.PropTypes.object,
  matrix: React.PropTypes.array
}

Tictactoe.defaultProps = {};

export default Tictactoe;
