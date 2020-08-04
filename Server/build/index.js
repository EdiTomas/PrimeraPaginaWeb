"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
//import { calculadoracontroller } from './Controller/CalculadoraController';   
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexroutes_1.default);
        this.app.get('/', function (req, res) {
            let json2 = {
                name: "Edi Yonani",
                carne: "201503608"
            };
            console.log("JUAN LUIS ROBLES MOLINA 201503608");
            return res.json(json2);
        });
        this.app.post('/calcular', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let digito1 = req.body.id1; // esto es la respuesta de cliente o requerimiento del cliente
                let digito2 = req.body.id2; // o del objecto del calcular de lado del cliente                   
                //  const calculado =calculadoracontroller.calcular(digito1,digito2);            
                const calculado = require('./Controller/CalculadoraController.js'); // le coloque js porque no traduce a ts
                const resultado = calculado.sumar(digito1, digito2);
                let json = {
                    respuesta: resultado,
                };
                return res.json(json);
            });
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
