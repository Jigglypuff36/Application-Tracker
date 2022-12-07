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
var model = require('../models/model');
var userController = {
    // getUser: async (req: Request, res: Response, next: NextFunction) => {
    //     const text = `select * from user_info`
    //     try{
    //         const login = await model.query(text)
    //         console.log(login);
    //         res.locals.userInfo = login;
    //         return next();
    //     }
    //     catch (err) {
    //         return next({
    //             log: `Error in userController.getUser: ${err}`,
    //             status: 500,
    //             message: 'Error occured while retrieving user info',
    //           });
    //     }
    // },
    // verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    //     const { username, password } = req.body
    //     const text = `select name from user_info where username=${username}, password=${password}`
    //     try{
    //         const name = await model.query(text)
    //         console.log(name);
    //         res.locals.name = name;
    //         return next();
    //     }
    //     catch (err) {
    //         return next({
    //             log: `Error in userController.verifyUser: ${err}`,
    //             status: 500,
    //             message: 'Error occured while verifying user login',
    //           });
    //     }
    // },
    createUser: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, username, password, name, email, text, createUser, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password, name = _a.name, email = _a.email;
                    console.log(req.body);
                    text = "insert into user_info values (default, '".concat(username, "', '").concat(email, "', '").concat(password, "', default, '").concat(name, "')");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model.query(text)];
                case 2:
                    createUser = _b.sent();
                    console.log(createUser);
                    // res.locals.userInfo = login;
                    return [2 /*return*/, next()];
                case 3:
                    err_1 = _b.sent();
                    return [2 /*return*/, next({
                            log: "Error in userController.createUser: ".concat(err_1),
                            status: 500,
                            message: 'Error occured while creating new user'
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); }
    // sendUser: async (req: Request, res: Response, next: NextFunction) => {
    //     const { username } = req.body
    //     const text = `select * from user_info where username=${username}`
    //     try{
    //         const sendUserInfo = await model.query(text)
    //         console.log(sendUserInfo);
    //         res.locals.userInfo = sendUserInfo;
    //         return next();
    //     }
    //     catch (err) {
    //         return next({
    //             log: `Error in userController.sendUser: ${err}`,
    //             status: 500,
    //             message: 'Error occured while sending user info',
    //           });
    //     }
    // },
};
exports["default"] = userController;
