remote = require 'remote'
app = remote.require 'app'
ipc = require 'ipc'
shell = require 'shell'

webview = document.getElementById("webview")
webview.addEventListener 'did-finish-load', ->
  webview.focus()
webview.addEventListener 'new-window', (e) ->
  e.preventDefault()
  shell.openExternal(e.url)
