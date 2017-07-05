import { app, BrowserWindow } from 'electron'

const installExtensions = async () => {
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']
      , forceDownload = !!process.env.UPGRADE_EXTENSIONS
      , installer = require('electron-devtools-installer')

  return Promise
    .all(extensions.map(extension => installer.default(installer[extension], forceDownload)))
    .catch(console.log())
}

let mainWindow = null

app.on('ready', async () => {
  if (process.env.DEBUG_PROD === 'true' || process.env.NODE_ENV === 'development') {
    await installExtensions()
  }

  mainWindow = new BrowserWindow({
    height: 728,
    width: 1024
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('close', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

