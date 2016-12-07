import React from 'react';
import classes from './StartMenu.scss';

export class StartMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = { playerOne: 'Player One', playerTwo: 'Player Two'};
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
  }

  handleChangeOne(event) {
    this.setState({playerOne: event.target.value});
  }

  handleChangeTwo(event) {
    this.setState({playerTwo: event.target.value});
  }

  handleCancel() {
    this.setState({play: false});
  }

  componentDidMount() {
    this.refs.playerOneInput.focus();
  }

  handleClickStart() {
    let {playerOne, playerTwo} = this.state;
    playerOne = playerOne || 'Player One';
    playerTwo = playerTwo || 'Player Two';
    this.props.start({
        playerOne,
        playerTwo
    });
  }

  render () {
    return (
      <div className={classes.wrapper}>
        <h1>#Tic Tac Toe</h1>
        <p>Choose your names and enjoy! </p>
        <input maxLength={15} placeholder='Player 1' ref='playerOneInput' type='text' onChange={this.handleChangeOne} value={this.state.playerOne}/>
        <input maxLength={15} placeholder='Player 2' type='text' onChange={this.handleChangeTwo} value={this.state.playerTwo}/>
        <button onClick={() => this.handleClickStart()} >Start</button>
      </div>
    );
  }
}

StartMenu.propTypes = {};

StartMenu.defaultProps = {};

export default StartMenu;
