
// var remote = require('remote');
// var app = remote.require('app');
// var ipc = require('ipc');
// var shell = require('shell');

var webview = document.getElementById("webview");

console.log(webview);

webview.addEventListener("dom-ready", function()
{
	webview.addEventListener('new-window', function(e)
	{
		require('remote').require('shell').shell.openExternal(e.url);
		// require('electron').shell.openExternal(e.url);
	});
});
