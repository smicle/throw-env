"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var throwEnv = function (key) {
    var val = process.env[key];
    if (!val)
        throw new Error(key + " is not in environment variable.");
    return val;
};
exports["default"] = throwEnv;
