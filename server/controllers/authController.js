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
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//need to import models
var model_1 = require("../models/model");
var dovenv = require('dotenv').config();
//save to config.env before commit 
var GOOGLE_CLIENT_ID = '423300255292-6bv81ekcrsb18ghje1iupihj2vgc18jo.apps.googleusercontent.com';
var GOOGLE_CLIENT_SECRET = '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';
var GOOGLE_CLIENT_URL = 'http://localhost:3000/api/oauth/google/callback';
// const googleUser = {
//   googleId: profile.id,
//   displayName: profile.displayName,
//   firstName: profile.name.givenName,
//   lastName: profile.name.familyName,
//   email: profile.emails[0].value
// }
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CLIENT_URL,
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, cb) { return __awaiter(void 0, void 0, void 0, function () {
    var text, user, text_1, insert, findUser, user_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                console.log('profile', profile.id);
                console.log(profile.emails[0].value);
                text = "select * from google_user where profile_id = ".concat(profile.id);
                return [4 /*yield*/, model_1.db.query(text)];
            case 1:
                user = _a.sent();
                if (!user.rows[0]) return [3 /*break*/, 2];
                return [2 /*return*/, cb(null, user)];
            case 2:
                text_1 = "insert into google_user (profile_id, email)  values (".concat(profile.id, ", '").concat(profile.emails[0].value, "')");
                return [4 /*yield*/, model_1.db.query(text_1)];
            case 3:
                insert = _a.sent();
                findUser = "select * from google_user where profile_id = ".concat(profile.id);
                return [4 /*yield*/, model_1.db.query(findUser)];
            case 4:
                user_1 = _a.sent();
                console.log('id', user_1.rows[0].profile_id);
                return [2 /*return*/, cb(null, user_1)];
            case 5: return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); }));
//create session token by grabbing the user data (id) and encode it and save it inside a cookie
passport.serializeUser(function (user, cb) {
    console.log('serializing user:', user);
    cb(null, user.rows[0].profile_id);
});
//user id encoded at the session/token
//grab session token and grab the id and check database if this id exist
//and then authenticate them
passport.deserializeUser(function (id, cb) { return __awaiter(void 0, void 0, void 0, function () {
    var text, userId, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                text = "select profile_id from google_user where profile_id = '".concat(id, "'");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model_1.db.query(text)];
            case 2:
                userId = _a.sent();
                if (userId)
                    cb(null, userId);
                console.log("Deserialized user:", userId);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                cb(err_2, null);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// export default authController;
