'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from 'components/Base';
import HelloWorld from 'components/HelloWorld';
import DesktopCapture from 'components/DesktopCapture';

import 'styles/base.scss';

injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <Route path="hello world" component={HelloWorld} />
            <Route path="desktop capture" component={DesktopCapture} />
        </Route>
    </Router>
), document.querySelector('#mainWrap'));
