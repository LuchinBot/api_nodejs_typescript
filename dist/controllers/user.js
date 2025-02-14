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
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, email, password, avatar } = req.body;
    // Genero un hash para el password
    const passwordHash = yield bcrypt_1.default.hash(password, 10);
    // Creo el usuario
    user_1.User.create({
        name: name,
        lastname: lastname,
        email: email,
        password: passwordHash,
        avatar: avatar,
        status: 1
    });
    // Devuelvo el usuario creado
    res.json({
        msg: 'Usuario creado correctamente.'
    });
});
exports.register = register;
