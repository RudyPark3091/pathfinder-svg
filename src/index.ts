import { app, BrowserWindow } from "electron"

let win: BrowserWindow
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
  })
  win.loadFile("./public/index.html")
}

app.whenReady().then(createWindow)
console.log("app started")
