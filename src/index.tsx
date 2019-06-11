import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from 'serviceWorker';
import App from '@shared/Provider';
import Router from '@shared/Router'
import Provider from '@shared/Provider'
import Play from '@shared/Play'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
