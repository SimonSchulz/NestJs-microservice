"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const headers_1 = __importDefault(require("../helpers/headers"));
const credit_controller_1 = __importDefault(require("../controllers/credit.controller"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = express_1.default.Router();
        this.set_config();
        this.creditController = new credit_controller_1.default(this.router);
    }
    set_config() {
        this.app.use(body_parser_1.default.json({ limit: '50mb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
        this.app.use((0, cors_1.default)());
        this.app.use(headers_1.default);
        this.app.use(express_1.default.static('static'));
        this.app.use('/api/v1', this.router);
    }
}
exports.default = new App().app;
