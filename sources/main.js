var app = require('app');
var ipc = require('ipc');

var browse_window = require('browser-window');

var tools = require('./tools');

WHATSAPP = "https://web.whatsapp.com/";
FACEBOOK = "https://www.messenger.com/login/";

app.on('ready', function()
{
	tools.open_win("file://" + __dirname + "/index.html");
});

// API
ipc.on('do-native-action', function(event, action) {
	switch (action) {
		case 'quit':
			app.quit();
			break;

		case 'minimize':
			mainWindow.minimize();
			break;
	}
});
