
var webview = document.getElementById("webview");

webview.addEventListener("dom-ready", function()
{
	webview.addEventListener('new-window', function(e)
	{
		require('remote').require('shell').openExternal(e.url);
	});
});
