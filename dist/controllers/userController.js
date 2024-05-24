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
exports.listUsers = exports.removeUser = exports.updateUserDetails = exports.getUserByName = exports.getUser = exports.createNewUser = void 0;
const userModel_1 = require("../models/userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function createNewUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = req.body;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        yield (0, userModel_1.createUser)(username, hashedPassword);
        res.status(201).json({ message: 'User created' });
    });
}
exports.createNewUser = createNewUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield (0, userModel_1.getUserById)(Number(id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    });
}
exports.getUser = getUser;
function getUserByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username } = req.params;
        const user = yield (0, userModel_1.getUserByUsername)(username);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    });
}
exports.getUserByName = getUserByName;
function updateUserDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { username, password } = req.body;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        yield (0, userModel_1.updateUser)(Number(id), username, hashedPassword);
        res.json({ message: 'User updated' });
    });
}
exports.updateUserDetails = updateUserDetails;
function removeUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield (0, userModel_1.deleteUser)(Number(id));
        res.json({ message: 'User deleted' });
    });
}
exports.removeUser = removeUser;
function listUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, userModel_1.getAllUsers)();
        res.json(users);
    });
}
exports.listUsers = listUsers;
