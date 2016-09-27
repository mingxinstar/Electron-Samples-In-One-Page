'use strict';

import React from 'react';

const { remote, shell } = electronRequire('electron');
const { Menu, MenuItem } = remote;

const template = [
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { shell.openExternal('http://electron.atom.io') }
      }
    ]
  }
];
const menu = Menu.buildFromTemplate(template);
const codeStr = '\
const {remote} = require("electron")<br />\
const {Menu, MenuItem} = remote<br />\
<br />\
const menu = new Menu()<br />\
menu.append(new MenuItem({label: "MenuItem1", click() { console.log("item 1 clicked") }}))<br />\
menu.append(new MenuItem({type: "separator"}))<br />\
menu.append(new MenuItem({label: "MenuItem2", type: "checkbox", checked: true}))<br />\
<br />\
window.addEventListener("contextmenu", (e) => {<br />\
  e.preventDefault()<br />\
  menu.popup(remote.getCurrentWindow())<br />\
}, false)<br />\
';
const showMenu = (e) => {
    e.preventDefault();

    menu.popup(remote.getCurrentWindow());
}

class EleMenu extends React.Component {
    constructor (props) {
        super (props);

        this.state = {};
    }

    componentDidMount () {
        window.addEventListener('contextmenu', showMenu);
    }

    componentWillUnmount () {
        window.removeEventListener('contextmenu', showMenu);
    }

    _renderCode () {
        return codeStr.split('<br />').map((codeSnippet, index) => {
            return <span key={index}>{codeSnippet}<br /></span>
        });
    }

    render () {
        return (
            <div>
                <h1>Menu</h1>
                <h4>Code:</h4>
                <pre>
                    <code>{this._renderCode()}</code>
                </pre>
                <h4>Demo: </h4>
                <p><strong>Right Click Now!</strong></p>
            </div>
        )
    }
}

export default EleMenu
