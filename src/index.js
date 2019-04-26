import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';
import Game from './components/Game/index';

ReactDOM.render(<Game />, document.getElementById('root'));
serviceWorker.unregister();
