var app = require('app');
var browse_window = require('browser-window');
var ipc = require('ipc');

var main_win = null;

WHATSAPP = "https://web.whatsapp.com/";
FACEBOOK = "https://www.messenger.com/login/";

function open_messenger(url)
{
    var main_win = new browse_window(
    {
        'width' :900,
        'height' :600,
        'web-preferences': {
            'web-security' : false,
            'node-integration': false,
            'plugins' : true
        },
        'title' : 'Loading'
    })
    main_win.loadUrl(url,
    { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.52 Safari/537.36'}
);
    return main_win;
}

app.on('ready', function()
{
    open_messenger(FACEBOOK);
})

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
