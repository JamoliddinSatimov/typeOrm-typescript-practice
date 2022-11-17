"use strict";
exports.__esModule = true;
var express_1 = require("express");
var clubs_1 = require("./clubs");
var players_1 = require("./players");
var router = (0, express_1.Router)();
exports["default"] = router.use([players_1["default"], clubs_1["default"]]);
