"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorStatus = exports.OrderStatus = exports.CardStatus = exports.CalculationMode = void 0;
var CalculationMode;
(function (CalculationMode) {
    CalculationMode["DIFFERENTIATED"] = "DIFFERENTIATED";
    CalculationMode["ANNUITY"] = "ANNUITY";
})(CalculationMode = exports.CalculationMode || (exports.CalculationMode = {}));
var CardStatus;
(function (CardStatus) {
    CardStatus["BLOCKED"] = "BLOCKED";
    CardStatus["ACTIVE"] = "ACTIVE";
    CardStatus["EXPIRED"] = "EXPIRED";
})(CardStatus = exports.CardStatus || (exports.CardStatus = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["REJECTED"] = "REJECTED";
    OrderStatus["INDIVIDUAL_CONDITIONS"] = "INDIVIDUAL_CONDITIONS";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var ErrorStatus;
(function (ErrorStatus) {
    ErrorStatus["SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(ErrorStatus = exports.ErrorStatus || (exports.ErrorStatus = {}));
