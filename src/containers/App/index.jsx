import React, {Component, PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <nav>
          <IndexLink to="/">{config.app.title}</IndexLink>
          <span> | </span>
          <Link to="/about">About</Link>
        </nav>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
