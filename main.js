// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, 
    },
  });

  // Load your main HTML file:
  mainWindow.loadFile(path.join(__dirname, 'flashcard.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // This triggers a background check for updates on GitHub
  autoUpdater.checkForUpdatesAndNotify();
});

// Below are some optional listeners to see what’s happening with updates
autoUpdater.on('update-available', (info) => {
  console.log('A new update is available:', info);
});

autoUpdater.on('update-not-available', () => {
  console.log('No update available.');
});

autoUpdater.on('update-downloaded', (info) => {
  console.log('Update downloaded; will install now:', info);
  // Automatically install and restart the app
  autoUpdater.quitAndInstall();
});

autoUpdater.on('error', (err) => {
  console.error('Auto-updater error:', err);
});

// On macOS, re-create the window if the dock icon is clicked
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
