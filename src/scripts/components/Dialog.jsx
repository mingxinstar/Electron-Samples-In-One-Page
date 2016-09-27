'use strict';

import React from 'react';
import { RaisedButton } from 'material-ui';

const { dialog } = electronRequire('electron').remote;

const msgBoxBtnStyle = {
    marginRight : '20px'
}

class Dialog extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    _showOpenDialog () {
        dialog.showOpenDialog({
            title : 'Demo ShowOpenDialog',
            properties: ['openFile', 'openDirectory', 'multiSelections']
        })
    }

    _showMessageBox (type) {
        dialog.showMessageBox({
            type : type,
            title : type,
            message : type,
            buttons : ['confirm']
        });
    }

    render () {
        return (
            <div>
                <h1>Dialog</h1>
                <h4>Open Dialog</h4>
                <code>dialog.showOpenDialog([browserWindow, ]options[, callback])</code>
                <br />
                <br />
                <RaisedButton label="Open Dialog" primary={true} onClick={this._showOpenDialog.bind(this)} />
                <br />
                <br />
                <h4>Message Box</h4>
                <code>dialog.showMessageBox([browserWindow, ]options[, callback])</code>
                <br />
                <br />
                <div>
                    <RaisedButton label="Open Info Dialog"
                                  primary={true}
                                  onClick={this._showMessageBox.bind(this, "info")}
                                  style={msgBoxBtnStyle} />
                    <RaisedButton label="Open Error Dialog"
                                  secondary={true}
                                  onClick={this._showMessageBox.bind(this, "error")}
                                  style={msgBoxBtnStyle} />
                    <RaisedButton label="Open Question Dialog"
                                  onClick={this._showMessageBox.bind(this, "question")}
                                  style={msgBoxBtnStyle} />
                </div>
            </div>
        )
    }
}

export default Dialog;
