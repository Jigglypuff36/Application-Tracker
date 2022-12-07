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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.userController = void 0;
var express = require('express');
var model_1 = require("../models/model");
var bcrypt = require("bcrypt");
// let userId:number|undefined;
exports.userController = {
    createUser: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, name_1, username_1, email_1, password_1, saltRounds, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, name_1 = _a.name, username_1 = _a.username, email_1 = _a.email, password_1 = _a.password;
                    // const query = `SELECT username FROM user_info WHERE username = '${username}'`
                    console.log(name_1, username_1, email_1, password_1);
                    saltRounds = 10;
                    return [4 /*yield*/, bcrypt.genSalt(saltRounds, function (error, salt) {
                            bcrypt.hash(password_1, salt, function (errors, hash) { return __awaiter(void 0, void 0, void 0, function () {
                                var secondQuery, newUser;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Hashed password :', hash);
                                            secondQuery = "INSERT INTO user_info (username, email, password, name) \n                    VALUES ('".concat(username_1, "', '").concat(email_1, "', '").concat(hash, "', '").concat(name_1, "') RETURNING *;");
                                            return [4 /*yield*/, model_1.db.query(secondQuery)];
                                        case 1:
                                            newUser = _a.sent();
                                            res.locals.newUser = true;
                                            return [2 /*return*/, next()];
                                    }
                                });
                            }); });
                        })];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    return [2 /*return*/, next({
                            log: 'error in middleware create user',
                            message: err_1
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getInfo: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, query, result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('userId LINE 45:', res.locals.userInfo);
                    id = req.body.id;
                    query = "SELECT * FROM application WHERE application_id='".concat(id, "';");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model_1.db.query(query)];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    res.locals.userInfo = result.fields;
                    return [2 /*return*/, next()];
                case 3:
                    err_2 = _a.sent();
                    return [2 /*return*/, next({
                            log: 'error in middleware getinfo',
                            message: err_2
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    isLoggedIn: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, username, password, query, result, userId, compare, secondQuery, allInfo, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password;
                    query = "SELECT * FROM user_info WHERE username='".concat(username, "';");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, model_1.db.query(query)];
                case 2:
                    result = _b.sent();
                    console.log('result LINE 67 :', result.rows[0].user_id);
                    userId = result.rows[0].user_id;
                    return [4 /*yield*/, bcrypt.compare(password, result.rows[0].password)];
                case 3:
                    compare = _b.sent();
                    if (!!compare) return [3 /*break*/, 4];
                    res.locals.userInfo = false;
                    return [3 /*break*/, 6];
                case 4:
                    secondQuery = "SELECT * FROM application WHERE application_id='".concat(userId, "';");
                    return [4 /*yield*/, model_1.db.query(secondQuery)];
                case 5:
                    allInfo = _b.sent();
                    res.locals.userInfo = allInfo.rows;
                    _b.label = 6;
                case 6: return [2 /*return*/, next()];
                case 7:
                    err_3 = _b.sent();
                    return [2 /*return*/, next({
                            log: 'error in middleware isloggedin',
                            message: err_3
                        })];
                case 8: return [2 /*return*/];
            }
        });
    }); }
};
