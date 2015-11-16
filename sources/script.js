
onload = function()
{
	var webview = document.getElementById("webview");
	var indicator = document.querySelector(".indicator");

	var loadstart = function() { indicator.innerText = "loading..."; }
	var loadstop = function() { indicator.innerText = ""; }

	webview.addEventListener("did-start-loading", loadstart);
	webview.addEventListener("did-stop-loading", loadstop);

	webview.addEventListener('new-window', function(e)
	{
		  require('electron').shell.openExternal(e.url);
		//   require('shell').shell.openExternal(e.url);
	});
}
