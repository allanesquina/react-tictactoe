import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Menu from '../components/Menu';

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Menu />
      </Provider>
    );
  }
}

export default AppContainer;
