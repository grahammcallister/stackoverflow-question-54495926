const { app, BrowserWindow } = require('electron');

let mainWindow;
let url = "index.html";

app.on('ready', () => {
  createWindow(url);
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow(url);
  }
});

function createWindow(url) {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration : true
    }
  });
  mainWindow.loadFile(url);
  mainWindow.webContents.openDevTools({ mode: "undocked"});
}