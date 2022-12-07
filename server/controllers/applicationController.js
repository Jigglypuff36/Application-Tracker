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
exports.applicationController = void 0;
var express = require('express');
var model_1 = require("../models/model");
exports.applicationController = {
    addApplication: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _a, companyName, jobDescription, status, newDate, newApplication, text, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, companyName = _a.companyName, jobDescription = _a.jobDescription, status = _a.status;
                    newDate = new Date().toString();
                    console.log(newDate);
                    newApplication = [id, companyName, jobDescription, status, newDate];
                    text = "insert into application (application_id, company_name, job_description, status, date) values ('".concat(id, "', '").concat(companyName, "', '").concat(jobDescription, "', '").concat(status, "', '").concat(newDate, "')");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model_1.db.query(text)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, next()];
                case 3:
                    err_1 = _b.sent();
                    return [2 /*return*/, next({
                            log: "Error in application.addApplication: ".concat(err_1),
                            status: 500,
                            message: 'Error occured while adding application data'
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateApplication: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, id, appId, _b, companyName, jobDescription, status, editApplication, text, err_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.params, id = _a.id, appId = _a.appId;
                    _b = req.body, companyName = _b.companyName, jobDescription = _b.jobDescription, status = _b.status;
                    editApplication = [companyName, jobDescription, status];
                    text = "update application set company_name='".concat(companyName, "', job_description='").concat(jobDescription, "', status='").concat(status, "' where application_id=").concat(id, " and id=").concat(appId);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model_1.db.query(text)];
                case 2:
                    _c.sent();
                    return [2 /*return*/, next()];
                case 3:
                    err_2 = _c.sent();
                    return [2 /*return*/, next({
                            log: "Error in application.addApplication: ".concat(err_2),
                            status: 500,
                            message: 'Error occured while adding application data'
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getApplications: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, text, applications, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    console.log(id);
                    text = "select * from application where application_id=".concat(id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model_1.db.query(text)];
                case 2:
                    applications = _a.sent();
                    res.locals.applications = applications.rows;
                    return [2 /*return*/, next()];
                case 3:
                    err_3 = _a.sent();
                    return [2 /*return*/, next({
                            log: "Error in application.addApplication: ".concat(err_3),
                            status: 500,
                            message: 'Error occured while adding application data'
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    deleteApplication: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, id, appId, text, deleteApplications, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.params, id = _a.id, appId = _a.appId;
                    console.log(id);
                    text = "delete from application where application_id=".concat(id, " and id=").concat(appId);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model_1.db.query(text)];
                case 2:
                    deleteApplications = _b.sent();
                    return [2 /*return*/, next()];
                case 3:
                    err_4 = _b.sent();
                    return [2 /*return*/, next({
                            log: "Error in application.addApplication: ".concat(err_4),
                            status: 500,
                            message: 'Error occured while adding application data'
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); }
};
