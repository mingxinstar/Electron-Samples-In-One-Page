'use strict';

import React from 'react';

class HelloWorld extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is the most simple hello world page, All you need to do is follow my Main.js file and index.html then open Electron</p>
                <p>This sample is write with :</p>
                <ol>
                    <li>Electron</li>
                    <li>React</li>
                    <li>Material-ui</li>
                    <li>Skeleton</li>
                    <li>Webpack</li>
                    <li>Grunt</li>
                </ol>
                <h2>Electron</h2>
                <ol>
                    <li>
                        <a href="http://electron.atom.io/" target="_blank">Electron Website</a>
                    </li>
                    <li>
                        <a href="https://github.com/electron/electron-quick-start" target="_blank">Electron Quick Start</a>
                    </li>
                    <li>
                        <a href="http://electron.atom.io/apps/" target="_blank">Apps use Electron</a>
                    </li>
                </ol>
                <h4>Basic Concept:</h4>
                <ul>
                    <li>Main Process</li>
                    <li>Render Process</li>
                </ul>
                <h2>Material-ui</h2>
                <ol>
                    <li>
                        <a href="http://www.material-ui.com/#/" target="_blank">Material-ui Website</a>
                    </li>
                </ol>
            </div>
        )
    }
}

export default HelloWorld;
