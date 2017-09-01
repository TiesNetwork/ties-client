const { app, BrowserWindow } = require('electron');

const installExtensions = async () => {
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']
      , forceDownload = !!process.env.UPGRADE_EXTENSIONS
      , installer = require('electron-devtools-installer')

  return Promise
    .all(extensions.map(extension => installer.default(installer[extension], forceDownload)))
    .catch(console.log)
}

let mainWindow = null

app.on('ready', async () => {
  if (process.env.DEBUG_PROD === 'true' || process.env.NODE_ENV === 'development') {
    await installExtensions()
  }

  mainWindow = new BrowserWindow({
    height: 1080,
    width: 1920
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()

  mainWindow.on('close', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

