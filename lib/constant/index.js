/**
 * @author              Nathan Mersha
 * @name                hisab_authorization_service
 * @module              index.js
 * @description         Index for constants and errorCodes
 * @kind                Constants
 * @copyright           Copyright : 2019
 */


let
    accessRoutes = require('./accessRoutes'),
    constant     = require('./constant'),
    errorCodes   = require('./errorCodes');

module.exports = {
    accessRoutes : accessRoutes,
    constant     : constant,
    errorCodes   : errorCodes
};
