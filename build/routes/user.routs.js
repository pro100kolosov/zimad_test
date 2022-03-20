"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = __importDefault(require("express"));
const userControlers_1 = require("../controllers/userControlers");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middleware/auth");
const upload_1 = require("../middleware/upload");
exports.routerUser = express_1.default.Router();
const controller = new userControlers_1.userControllers();
exports.routerUser.post('/registration', (0, express_validator_1.body)("id").isString(), (0, express_validator_1.body)("password").isString(), controller.registration);
exports.routerUser.post('/login', (0, express_validator_1.body)("id").isString(), (0, express_validator_1.body)("password").isString(), controller.login);
exports.routerUser.post('/logout', controller.logout);
exports.routerUser.post('/refresh', controller.refresh);
exports.routerUser.get('/users', auth_1.accessTokenVerification, controller.users);
exports.routerUser.post('/file/upload', upload_1.upl.single('filedata'), controller.upload);
