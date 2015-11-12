
module.export =
{
    open: function() {
        var main_win = new browse_window(
        {
            'width' :900,
            'height' :600,
            'web-preferences': {
                'web-security' : false,
                'node-integration': false,
                'plugins' : true
            }

        })
        main_win.loadUrl("https://www.messenger.com/login/#")
        return main_win
    }
}

// function open_FB_messenger()
// {
//     var main_win = new browse_window(
//     {
//         'width' :900,
//         'height' :600,
//         'web-preferences': {
//             'web-security' : false,
//             'node-integration': false,
//             'plugins' : true
//         },
//         'title' : 'Loading'
//
//     })
//     main_win.loadUrl("https://web.whatsapp.com/",
//     { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.52 Safari/537.36'}
// );
//     // main_win.loadUrl("https://www.messenger.com/login/")
//     // mainWindow.loadUrl('file://' + __dirname + '/whatsapp/index.html');
//     return main_win;
// }
