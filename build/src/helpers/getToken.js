"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getToken(request) {
    var _a;
    try {
        return (_a = request.headers) === null || _a === void 0 ? void 0 : _a.authorization.split(' ')[1];
    }
    catch (error) {
        throw Error('Incorrect authorization header');
    }
}
exports.default = getToken;
