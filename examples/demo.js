var extension   = require('../')({ strict: false, testSecondLevel: true, mode: 'normal' });
var chalk       = require('chalk');

var urls = [
    ".hidden",
    "https://var/www/index.html",
    "file:///var/www/index.tar.xz",
    "file:///var/www/index.html",
];

for (var i = 0; i < urls.length; i++) {
    console.log("Extension for: '" + chalk.yellow.bold(urls[i]) + "': " + chalk.bold.green(extension(urls[i])));
}
