const electron = require('electron')
    , app = electron.app
    , path = require('path')
    , url = require('url')

let mainWindow

app.on('ready', () => {
  mainWindow = new electron.BrowserWindow({ height: 600, width: 800 })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
