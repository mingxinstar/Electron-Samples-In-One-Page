'use strict';

const { app, BrowserWindow, Menu, Tray } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width : 1200,
        height : 800
    });

    win.loadURL(`file://${__dirname}/../../dist/index.html`);

    win.webContents.openDevTools();

    win.on('close', () => {
        win = null;
    })

    initTray();
}

let tray;

const initTray = () => {
    tray = new Tray(`${__dirname}/../styles/icon.png`);
    const contextMenu = Menu.buildFromTemplate([
       {label: 'Item1', type: 'radio'},
       {label: 'Item2', type: 'radio'},
       {label: 'Item3', type: 'radio', checked: true},
       {label: 'Item4', type: 'radio'},
       {type : 'separator'},
       {label : 'Item5', type : 'checkbox'},
       {label : 'Item6'}
   ]);
   tray.setToolTip('Electron Sample App');
   tray.setContextMenu(contextMenu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})

app.on('activate', () => {
    if (!win) {
        createWindow();
    }
})
