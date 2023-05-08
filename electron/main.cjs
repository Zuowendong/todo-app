const { BrowserWindow, app } = require("electron");

const createWin = () => {
	const win = new BrowserWindow({
		width: 500,
		height: 600,
		autoHideMenuBar: true,
		// frame: false, // 隐藏默认外边框
		transparent: true,
		alwaysOnTop: true,
	});
	win.webContents.toggleDevTools(); // 打开开发者工具
	win.loadURL("http://localhost:5173/");
};
app.whenReady().then(() => {
	createWin();
});
