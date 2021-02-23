import { app, BrowserWindow } from "electron"

let win: BrowserWindow
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("./public/ui.html");
}

app.whenReady().then(createWindow)
console.log("app started")