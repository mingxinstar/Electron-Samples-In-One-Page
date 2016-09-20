'use strict';

const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width : 800,
        height : 600
    });

    win.loadURL(`file://${__dirname}/../../dist/index.html`);

    win.webContents.openDevTools();

    win.on('close', () => {
        win = null;
    })
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
