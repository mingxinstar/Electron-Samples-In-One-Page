'use strict';

import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

const webviewStyle = {
    width : "auto",
    height : 600
}

class Webview extends React.Component {
    constructor (props) {
        super(props);

        this.state = { };
    }

    _reloadUrl () {
        this.refs.webview.loadURL(`http://${this.refs.websiteUrl.input.value}`);
    }

    _openDevTool () {
        this.refs.webview.openDevTools();
    }

    _findText () {
        this.refs.webview.findInPage(this.refs.websiteUrl.input.value);
    }

    render () {
        return (
            <div>
                <h1>Webview</h1>
                <div>
                    <TextField ref="websiteUrl" hintText="Website Url" style={{marginRight : 20}} />
                    <RaisedButton label="Go" primary={true} onClick={this._reloadUrl.bind(this)} style={{marginRight : 20}} />
                    <RaisedButton label="Open Webview Dev Tool" secondary={true} onClick={this._openDevTool.bind(this)} style={{marginRight : 20}} />
                    <RaisedButton label="Find Text" onClick={this._findText.bind(this)} />
                </div>
                <webview ref="webview"
                         src="http://www.imeme.tv/"
                         style={webviewStyle}></webview>
            </div>
        )
    }
}

export default Webview;
