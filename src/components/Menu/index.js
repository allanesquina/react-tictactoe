import React from 'react';
import classes from './Menu.scss';
import TictactoeContainer from '../../containers/TictactoeContainer';
import StartMenu from './StartMenu';

export class Menu extends React.Component {
  constructor (props) {
    super(props);
    this.state = { players: [], gameStarted: false};
    this._startGame = this._startGame.bind(this);
    this._stopGame = this._stopGame.bind(this);
  }

  _startGame(players) {
    this.setState({gameStarted: true, players});
  }

  _stopGame() {
    this.setState({gameStarted: false});
  }

  render () {
    return this.state.gameStarted ?
      (<TictactoeContainer stop={this._stopGame} players={this.state.players} />) :
      (<StartMenu start={this._startGame} />);
  }
}

Menu.propTypes = {};

Menu.defaultProps = {};


export default Menu;
