"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class indexController {
    index(req, res) {
        // res.send('Hola mundo')
        res.json({ message: "Hola mundo" });
    }
}
exports.indexcontroller = new indexController();
