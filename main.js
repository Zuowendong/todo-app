const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 500,
		height: 300,
		autoHideMenuBar: true,
		frame: false, // 隐藏默认外边框
		transparent: true,
		alwaysOnTop: true,
	});

	mainWindow.webContents.toggleDevTools(); // 打开开发者工具
	mainWindow.loadFile(path.resolve(__dirname, "index.html"));
};

app.whenReady().then(() => {
	createWindow();

	// 平台适配
	app.on("window-all-closed", () => {
		// mac 用户关闭之后不会直接退出
		if (process.platform != "darwin") app.quit();
	});

	app.on("activate", () => {
		createWindow();
	});
});
