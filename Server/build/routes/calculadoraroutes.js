"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { calculadoracontroller } from '../Controller/CalculadoraController';
class CalculadoraRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //       this.router.get('/',calculadoracontroller.index);
    }
}
const calcRouter = new CalculadoraRouter();
exports.default = calcRouter.router;
