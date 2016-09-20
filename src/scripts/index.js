'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from 'components/Base';
import HelloWorld from 'components/HelloWorld';

import 'styles/base.scss';

injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={HelloWorld} />
        </Route>
    </Router>
), document.querySelector('#mainWrap'));
