import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div>
        <Helmet title="About"/>

        <h1>About</h1>

        <h3>Images</h3>

        <p>
          Would you like to see a kitten?

        <button
          onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}
          </button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
