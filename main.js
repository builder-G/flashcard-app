const { app, BrowserWindow } = require('electron');
const path = require('path');

// 1) If you want auto-updates:
const { autoUpdater } = require('electron-updater');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load your flashcard HTML
  mainWindow.loadFile('flashcard.html');
}

// Once Electron is ready:
app.whenReady().then(() => {
  createWindow();

  // 2) Check for updates if you're using autoUpdater
  autoUpdater.checkForUpdatesAndNotify();
});

// On macOS, re-open app if user clicks its dock icon
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  // On non-macOS, quit app
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
