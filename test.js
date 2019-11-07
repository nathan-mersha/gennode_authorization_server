let _ = require('underscore');

let initArray =

    { "members": [ "5cee7318b2820d47582e9aca", "5cee7318b2820d47582e9acc" ],
    "_id": "5dc3e0117af5b53b255b8778",
    "name": 'Role A',
    "description": 'Description for role a',
    "accessRoutes":
        [
            { "_id": "5dc3e0117af5b53b255b877a",
            "method": 'POST',
            "route": '/heroAcademia/teacher',
            "group": '/heroAcademia/teacher',
            "name": '/heroAcademia/teacher POST',
            "description": 'POST method for route : /heroAcademia/teacher, for service : heroAcademia' },
            {
                "_id": "5dc3e0117af5b53b255b8779",
                "method" : 'POST',
                "route": '/heroAcademia/teacher',
                "group": '/heroAcademia/teacher',
                "name": '/heroAcademia/teacher GET',
                "description": 'GET method for route : /heroAcademia/teacher, for service : heroAcademia' }
        ],
    "firstModified": "2019-11-07T09:12:49.028Z",
    "lastModified": "2019-11-07T09:40:23.817Z",
    "__v": 4 };


let modifiedArray = _.without(initArray.accessRoutes, _.where(initArray.accessRoutes, {"method" : "POST"}));

let findWhere = _.where(initArray.accessRoutes, {"method" : "POST"});
console.log(findWhere)
