
var browse_window = require('browser-window');

module.exports =
{
	open_win: function(url)
	{
	    var main_win = new browse_window(
   		{
			'width' :900,
			'height' :600,
			'web-preferences':
			{
				'web-security' : false,
				'node-integration': false,
				'plugins' : true
			},
			'title' : 'Loading'
    });
    main_win.loadUrl(url,
    { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.52 Safari/537.36'}
	);
    return main_win;
	}

};
