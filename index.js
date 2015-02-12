"use strict";
var engine = require("path").basename(process.execPath).toLowerCase();
module.exports = process.platform === "win32" ? engine.replace(/\.exe$/,"") : engine;
