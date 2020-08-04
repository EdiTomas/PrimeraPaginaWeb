"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../Controller/indexController");
class Indexrouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexcontroller.index);
    }
}
const indexRouter = new Indexrouter();
exports.default = indexRouter.router;
