'use strict';

import React from 'react';

const codeStr = '\
const {app, Menu, Tray} = require("electron")<br />\
<br />\
let tray = null<br />\
app.on("ready", () => {<br />\
  tray = new Tray("/path/to/my/icon")<br />\
  const contextMenu = Menu.buildFromTemplate([<br />\
    {label: "Item1", type: "radio"},<br />\
    {label: "Item2", type: "radio"},<br />\
    {label: "Item3", type: "radio", checked: true},<br />\
    {label: "Item4", type: "radio"}<br />\
    {type : "separator"},<br />\
    {label : "Item5", type : "checkbox"},<br />\
    {label : "Item6"}<br />\
])<br />\
  tray.setToolTip("This is my application.")<br />\
  tray.setContextMenu(contextMenu)<br />\
})<br />\
';

class Tray extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    _renderCode () {
        return codeStr.split('<br />').map((codeSnippet, index) => {
            return <span key={index}>{codeSnippet}<br /></span>
        });
    }

    render () {
        return (
            <div>
                <h1>Tray</h1>
                <p>Add icons and context menus to the system’s notification area.</p>
                <h4>Code:</h4>
                <pre>
                    <code>{this._renderCode()}</code>
                </pre>
            </div>
        )
    }
}

export default Tray;
