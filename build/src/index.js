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
/* eslint-disable no-console */
const dotenv_1 = require("dotenv");
const App_1 = __importDefault(require("./app/App"));
const typeOrmConnection_1 = require("./helpers/typeOrmConnection");
(0, dotenv_1.config)();
const appPort = process.env.EXPRESS_PORT;
App_1.default.listen(appPort, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Listening on port ${appPort}`);
    (0, typeOrmConnection_1.createTypeOrmConnection)()
        .then(() => console.log('Database connection established...'))
        .catch((error) => {
        console.error(error.message);
    });
}));
