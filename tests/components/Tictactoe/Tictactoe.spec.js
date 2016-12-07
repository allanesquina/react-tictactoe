import React from 'react';
import AlertBox from 'components/Tictactoe/AlertBox';
import Tictactoe from 'components/Tictactoe';
import { shallow, mount } from 'enzyme';
import GameEngine from 'services/GameEngine';

describe('(Component) Tictactoe', () => {
  let wrapper;
  let props;
  let matrix = GameEngine.createMatrix();
  const player1 = 'John Doe';
  const player2 = 'John Snow';

  beforeEach(() => {
    props = {
      stop: sinon.spy(),
      setMatrix: sinon.spy(),
      players: { playerOne: player1, playerTwo: player2},
      matrix: matrix
    };

    wrapper = shallow(<Tictactoe {...props} />)
  })

  it('Should render as a <div>.', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should set the matrix and swith the player', () => {
    wrapper.instance().gameAction(2,1);
    expect(props.setMatrix).to.have.been.calledTwice;
    expect(wrapper.state().player).to.equal(4);
  })

  it('Should not set the matrix and swith the player.', () => {
    wrapper.instance().gameAction(2,1);
    expect(props.setMatrix).to.have.not.been.calledTwice;
    expect(wrapper.state().player).to.equal(1);
  })

  it('Should player one win.', () => {
    matrix[0][0] = 1;
    matrix[1][0] = 1;
    wrapper.instance().gameAction(2,0);
    expect(wrapper.state().endGame).to.be.true;
    expect(wrapper.state().winner).to.equal(player1);
  })

  it('Should player two win.', () => {
    matrix[2][1] = 0;
    matrix[2][0] = 0;

    matrix[0][0] = 4;
    matrix[1][0] = 4;
    wrapper.instance()._switchPlayer();
    wrapper.instance().gameAction(2,0);
    expect(wrapper.state().endGame).to.be.true;
    expect(wrapper.state().winner).to.equal(player2);
  })
})
