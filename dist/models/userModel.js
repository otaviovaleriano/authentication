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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUserByUsername = exports.createUser = void 0;
const database_1 = require("../database");
// Create a new user
function createUser(username, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.openDb)();
        yield db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    });
}
exports.createUser = createUser;
// Get a user by name
function getUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.openDb)();
        return db.get('SELECT * FROM users WHERE username = ?', [username]);
    });
}
exports.getUserByUsername = getUserByUsername;
// Get a user by id
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.openDb)();
        return db.get('SELECT * FROM users WHERE id = ?', [id]);
    });
}
exports.getUserById = getUserById;
// Update/PUT user information
function updateUser(id, username, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.openDb)();
        yield db.run('UPDATE users SET username = ?, password = ? WHERE id = ?', [username, hashedPassword, id]);
    });
}
exports.updateUser = updateUser;
// Delete a user by id
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.openDb)();
        yield db.run('DELETE FROM users WHERE id = ?', [id]);
    });
}
exports.deleteUser = deleteUser;
// Get all users
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.openDb)();
        return db.all('SELECT * FROM users');
    });
}
exports.getAllUsers = getAllUsers;
