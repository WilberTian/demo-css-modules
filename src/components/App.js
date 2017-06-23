import React, { Component } from 'react';

import styles from './App.css';

export default class App extends Component {

  render() {
    return (
        <div>
            <div className={ styles.wrapper }>
                <p className={ styles.text }>Scoped Selectors</p>
            </div>

            <div className={ styles.wrapper }>
                <p className="text">Scoped Selectors</p>
            </div>

            <div className={ styles.wrapper }>
                <p className={ styles.textCenter }>Scoped Selectors</p>
            </div>
        </div>
    );
  }

};
