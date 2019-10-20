/**
 * @author              Nathan Mersha
 * @name                hisab_authorization_service
 * @module              accessRoutes.js
 * @description         Open and close routes
 * @kind                Routes
 * @copyright           Copyright : 2019
 */


// NOTE : Don't end endpoint with "/"

const baseURL = "/auth";

module.exports = {
    openRoute   : [
        {method : "POST", endpoint : `${baseURL}/admin/login`}
    ],
    superAdmin  : [
        {method : "POST", endpoint : `${baseURL}/admin/signUp`},
        {method : "PUT",  endpoint : `${baseURL}/admin`},
        {method : "GET",  endpoint : `${baseURL}/admin`},
        {method : "DELETE", endpoint : `${baseURL}/admin`}
    ]
};