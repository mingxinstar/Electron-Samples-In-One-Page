'use strict';

import React from 'react';
import { RaisedButton } from 'material-ui';

const { shell } = electronRequire('electron');

const filePath = 'C:/Users/Administrator.XIN/Documents/GitHub/Electron-Samples-In-One-Page/src/scripts/main.js';
const btnStyle = {
    marginRight : 20
}

class Shell extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    _showItemFolder () {
        shell.showItemInFolder(filePath);
    }

    _openItem () {
        shell.openItem(filePath);
    }

    _openExternal () {
        shell.openExternal('http://www.imeme.tv');
    }

    render () {
        return (
            <div>
                <h1>Shell</h1>
                <p>FilePath : {filePath}</p>
                <RaisedButton label="Open In Folder" onClick={this._showItemFolder.bind(this)} style={btnStyle} />
                <RaisedButton label="Open Item" onClick={this._openItem.bind(this)} style={btnStyle} />
                <RaisedButton label="Open Url External" onClick={this._openExternal.bind(this)} style={btnStyle} />
            </div>
        )
    }
}

export default Shell;
