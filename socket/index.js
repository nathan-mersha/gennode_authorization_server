/**
 * @author              Nathan Mersha
 * @name                hisab_authorization_service
 * @module              index.js
 * @description         Index file for socket controller.
 * @kind                Controller
 * @copyright           Copyright : 2019
 */


let logs = require('./log');

// todo : define which socket emitters and listeners should be implemented.
module.exports = function () {
    logs.streamLog();
};