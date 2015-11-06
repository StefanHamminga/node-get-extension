/* get-extension

Project information & repository:
https://github.com/StefanHamminga/node-get-extension

Copyright (c) Stefan Hamminga <stefan@prjct.net>, All rights reserved.
This library is free software; you can redistribute it and/or modify it under
the terms of the GNU Lesser General Public License as published by the Free
Software Foundation; either version 3.0 of the License, or (at your option) any
later version.
This library is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
You should have received a copy of the GNU Lesser General Public License along
with this library.
*/

var strict  = /([^.\/\s\"']+)(\.([^.\/\s]+))?\.([^.\/\s]+)$/i
var pattern = /([^.\/\s\"']+)(\.([^.\/\s]+))?\.([^.\/\s]+)([\s\/\"']+)?$/i

var secondlevel = /^(aes|bz2|gz|lz4|lz|lzma|xz|z)$/i;
var testSecondLevel = false;

function simple(url) {
    "use strict"
    let result = pattern.exec(url);
    console.log(url);
    console.log(result);
    if (result) {
        return result[3];
    } else {
        return null;
    }
}

function normal(url) {
    "use strict"
    let result = pattern.exec(url);
    if (result) {
        if (result[3]) {
            if (testSecondLevel) {
                if (secondlevel.test(result[4])) {
                    return result[3] + "." + result[4];
                } else {
                    return null;
                }
            } else {
                return result[3] + "." + result[4];
            }
        } else {
            return result[4];
        }
    } else { return null; }
}

module.exports = function (config) {
    "use strict"
    if (config.strict && config.strict === true) {
        pattern = strict;
    }
    if (config.testSecondLevel) {
        testSecondLevel = config.testSecondLevel;
    }
    if (config.mode) {
        switch(config.mode) {
            case "simple":
                return simple;
                break;
            case "normal":
                return normal;
                break;
            default:
                return normal;
                break;
        }
    }
}
