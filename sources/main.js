const app = require('app');
const browse_window = require('browser-window');
const ipc = require('ipc');
const tools = require('./tools');
const shell = require("shell");

app.on('ready', function()
{
	win = tools.open_win("file://" + __dirname + "/index.html");
});

app.on('window-all-closed', function()
{
	if (process.platform !== 'darwin'){
		app.quit();
	}
});
