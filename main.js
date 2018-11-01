const { app, BrowserWindow } = require('electron'),
    path = require('path');
let win = BrowserWindow;

function createWindow() {
    win = new BrowserWindow({
        /* Linux
        width: 1030,
        height: 454,
        */
        width: 1030,
        height: 454,
        minWidth: 300,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'icon.png'),
        show: false
    });
    win.loadFile('./index.html');
    win.on('closed', () => win = null);
    win.once('ready-to-show', () => {
        win.show();
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
app.on('activate', () => {
    if (app === null)
        createWindow();
});