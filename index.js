var util = require('util');

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
