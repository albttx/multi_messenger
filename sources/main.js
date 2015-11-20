var     app = require('app');
var     BrowserWindow = require('browser-window');
var     shell = require("shell");
const   ipc = require('ipc');

require('crash-reporter').start();

var mainWindow = null;

app.on('ready', function()
{
	mainWindow = new BrowserWindow(
	{
		width: 900,
		height: 600,
		'web-preferences':
		{
			'web-security' : false,
			'node-integration': true,
			'plugins' : true
		},
		'title' : 'Loading'
	});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	// mainWindow.webContents.openDevTools();
	mainWindow.on('closed', function() { mainWindow = null; });
});

app.on('window-all-closed', function()
{
	if (process.platform != 'darwin')
	{
		app.quit();
	}
});
