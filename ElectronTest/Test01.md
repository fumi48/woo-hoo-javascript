### メインプロセス
```main.js
'use strict'

const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

const url = require('url');
const path = require('path');

function createWindow(){
    mainWindow = new BrowserWindow({ width :400, height :300 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './src/index.html'),
        protocol: 'file',
        slashes:true
    }));

    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if(mainWindow === null ){
        createWindow();
    }
});
```

### BrowserWindowのプロパティ


### icp通信


### レンダラ―プロセスでrequireを使う
```javascript
var mainWindow = new BrowserWindow({
    webPreference: {
        nodeIntegration : true
    }
});
```
