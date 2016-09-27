'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from 'components/Base';
import HelloWorld from 'components/HelloWorld';
import DesktopCapture from 'components/DesktopCapture';
import Extra from 'components/Extra';
import Dialog from 'components/Dialog';
import Menu from 'components/Menu';
import Tray from 'components/Tray';
import Webview from 'components/Webview';

import 'styles/normalize.css';
import 'styles/skeleton.css';
import 'styles/base.scss';

injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={HelloWorld} />
            <Route path="hello world" component={HelloWorld} />
            <Route path="desktop capture" component={DesktopCapture} />
            <Route path="dialog" component={Dialog} />
            <Route path="menu" component={Menu} />
            <Route path="tray" component={Tray} />
            <Route path="extra" component={Extra} />
            <Route path="webview" component={Webview} />
        </Route>
    </Router>
), document.querySelector('#mainWrap'));
