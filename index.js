"use strict";
var basename = require("path").basename;
var engine;

if (process.platform === "win32") {
    engine = basename(process.execPath).replace(/\.exe$/i,"").toLowerCase();
} else {
    engine = basename(process.execPath).toLowerCase();
}

module.exports = engine;
