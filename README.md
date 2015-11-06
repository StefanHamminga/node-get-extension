# get-extension
Parses a string for a file and returns its extension.

## Configuration

Property | Default | Description
---|---|---
`strict` | false | Loose string parsing tries to strip trailing whitespace & characters
`mode` | "normal" | Simple parsing (last `.` separated token) or 'normal', return two possible tokens (eg. 'tar.xz')
`testSecondLevel` | false | If `true`, test any two-token extension against a built-in whitelist

## Usage

```bash
npm install --save get-extension
```

```javascript
var getExt = require('get-extension')(config);

console.log(
  getExt('some/dir/file.tar.gz')
);
```

## Examples

Example files can be found in the `/examples` directory in this repository.

## Notes & license
This project is available on [GitHub](https://github.com/StefanHamminga/node-get-extension) and [npm](https://www.npmjs.com/package/get-extension).

The project is licensed as [LGPLv3](http://www.gnu.org/licenses/lgpl-3.0.html), the license file is included in the project directory.

Copyright 2015 [Stefan Hamminga](mailto:stefan@prjct.net) - [prjct.net](https://prjct.net)
