## lib

as of [npm2][0] [local-paths][1] have been implemented. the lib folder should only contain libraries you would
actually link within your `package.json` using the new `"dependencies": { "$module": "file:lib/$module", ..` notation.

[0]: https://www.npmjs.com/
[1]: https://docs.npmjs.com/files/package.json#local-paths
