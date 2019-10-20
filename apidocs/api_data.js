define({ "api": [
  {
    "type": "get",
    "url": "/auth/acm/count",
    "title": "Count",
    "version": "0.0.1",
    "name": "Count",
    "group": "ACM",
    "description": "<p>Counts acm by query</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Oid",
            "optional": true,
            "field": "subject",
            "defaultValue": "undefined",
            "description": "<ul> <li>Oid</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Object",
            "optional": true,
            "field": "accessControl",
            "defaultValue": "undefined",
            "description": "<ul> <li>Object1</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<ul> <li>Counts documents</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"count\" : 10\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/acm/count"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/acm.js",
    "groupTitle": "ACM"
  },
  {
    "type": "post",
    "url": "/auth/acm",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "ACM",
    "description": "<p>Creates new acm data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body (subject)",
          "content": "\n{\n   \"subject\": \"Admin 1\",\n   \"accessControl\": {\n       \"read\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n       \"update\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n       \"delete\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"]\n   }\n}",
          "type": "json"
        },
        {
          "title": "Body (object)",
          "content": "\n{\n   \"object\": \"5cee730bb2820d47582e9abd\",\n   \"schemaName\" : \"blog\",\n   \"accessControl\": {\n       \"read\": [ \"Admin 1\", \"Admin 2\", \"Admin 3\"],\n       \"update\": [ \"Admin 1\", \"Admin 2\"],\n       \"delete\": [ \"Admin 4\", \"Admin 5\"]\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"subject\"",
              "\"object\""
            ],
            "optional": true,
            "field": "createBy",
            "description": "<ul> <li>String</li> </ul>"
          }
        ],
        "Body-subject": [
          {
            "group": "Body-subject",
            "type": "Oid",
            "optional": false,
            "field": "subject",
            "description": "<ul> <li>subject</li> </ul>"
          }
        ],
        "Body-object": [
          {
            "group": "Body-object",
            "type": "Oid",
            "optional": false,
            "field": "object",
            "description": "<ul> <li>object</li> </ul>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "accessControl",
            "description": "<ul> <li>accessControl</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Oid",
            "optional": false,
            "field": "subject",
            "description": "<ul> <li>subject</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Oid",
            "optional": false,
            "field": "object",
            "description": "<ul> <li>object</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "accessControl",
            "description": "<ul> <li>accessControl</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body (Subject)",
          "content": "\n\n{\n   \"subject\": \"Admin 1\",\n   \"accessControl\": {\n       \"read\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n       \"update\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n       \"delete\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"]\n   },\n   \"__v\": \"47\",\n   \"firstModified\": \"2019-05-29T11:55:04.246Z\",\n   \"lastModified\": \"2019-05-29T11:55:04.246Z\",\n   \"_id\": \"5cee7318b2820d47582e9ace\"\n}",
          "type": "json"
        },
        {
          "title": "Body (Object)",
          "content": "\n\n{\n    \"acmSubjects\": [\n        {\n            \"accessControl\": {\n                \"read\": [\n                    \"123456\",\n                    \"12345677777\",\n                    \"5d5a802847f0d92a39d18de0\",\n                    \"5d5a81577222fe2b42755dca\"\n                ],\n                \"update\": [\n                    \"5d5a802847f0d92a39d18de0\",\n                    \"5d5a81577222fe2b42755dca\"\n                ],\n                \"delete\": [\n                    \"5d5a802847f0d92a39d18de0\",\n                    \"5d5a81577222fe2b42755dca\"\n                ]\n            },\n            \"_id\": \"5d5a7b5bd045dd26f7d39f93\",\n            \"subject\": \"Admin 1\",\n            \"firstModified\": \"2019-08-19T10:35:07.579Z\",\n            \"lastModified\": \"2019-08-19T11:11:19.684Z\",\n            \"__v\": 16\n        },\n        {\n            \"accessControl\": {\n                \"read\": [],\n                \"update\": [],\n                \"delete\": [\n                    \"5cee730bb2820d47582e9abd\"\n                ]\n            },\n            \"_id\": \"5d5a83d7503de22d1193bd80\",\n            \"subject\": \"Admin 5\",\n            \"firstModified\": \"2019-08-19T11:11:19.673Z\",\n            \"lastModified\": \"2019-08-19T11:11:19.673Z\",\n            \"__v\": 0\n        },\n        {\n            \"accessControl\": {\n                \"read\": [\n                    \"123456\",\n                    \"12345677777\",\n                    \"5d5a80ca7e4f972ab0bc904f\",\n                    \"5d5a819e58f0092ba38d5a1a\"\n                ],\n                \"update\": [\n                    \"5d5a80ca7e4f972ab0bc904f\",\n                    \"5d5a819e58f0092ba38d5a1a\"\n                ],\n                \"delete\": [\n                    \"123456\",\n                    \"12345677777\",\n                    \"5d5a80ca7e4f972ab0bc904f\",\n                    \"5d5a819e58f0092ba38d5a1a\"\n                ]\n            },\n            \"_id\": \"5d5a7b5bd045dd26f7d39f92\",\n            \"subject\": \"Admin 2\",\n            \"firstModified\": \"2019-08-19T10:35:07.579Z\",\n            \"lastModified\": \"2019-08-19T11:01:53.503Z\",\n            \"__v\": 15\n        },\n        {\n            \"accessControl\": {\n                \"read\": [\n                    \"5d5a804bdd36e52a69350c37\",\n                    \"5d5a813b9407332b14c3773a\",\n                    \"5d5a817fc9ad4b2b621a3f7e\",\n                    \"5d5a81e1ed8fe72bd75556b6\"\n                ],\n                \"update\": [\n                    \"5d5a804bdd36e52a69350c37\",\n                    \"5d5a813b9407332b14c3773a\",\n                    \"5d5a817fc9ad4b2b621a3f7e\",\n                    \"5d5a81e1ed8fe72bd75556b6\"\n                ],\n                \"delete\": [\n                    \"5d5a804bdd36e52a69350c37\",\n                    \"5d5a813b9407332b14c3773a\",\n                    \"5d5a817fc9ad4b2b621a3f7e\",\n                    \"5d5a81e1ed8fe72bd75556b6\"\n                ]\n            },\n            \"_id\": \"5d5a804edd36e52a69350c81\",\n            \"subject\": \"Admin 3\",\n            \"firstModified\": \"2019-08-19T10:56:14.862Z\",\n            \"lastModified\": \"2019-08-19T11:03:00.406Z\",\n            \"__v\": 9\n        },\n        {\n            \"accessControl\": {\n                \"read\": [\n                    \"5d5a8147a102592b329b3ce8\"\n                ],\n                \"update\": [\n                    \"5d5a8147a102592b329b3ce8\"\n                ],\n                \"delete\": [\n                    \"123456\",\n                    \"12345677777\",\n                    \"5d5a8147a102592b329b3ce8\",\n                    \"5cee730bb2820d47582e9abd\"\n                ]\n            },\n            \"_id\": \"5d5a7b5bd045dd26f7d39f95\",\n            \"subject\": \"Admin 4\",\n            \"firstModified\": \"2019-08-19T10:35:07.590Z\",\n            \"lastModified\": \"2019-08-19T11:00:36.877Z\",\n            \"__v\": 12\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/acm"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/acm.js",
    "groupTitle": "ACM"
  },
  {
    "type": "delete",
    "url": "/auth/acm",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "ACM",
    "description": "<p>Deletes acm data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Oid",
            "optional": true,
            "field": "subject",
            "defaultValue": "undefined",
            "description": "<ul> <li>Oid</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Object",
            "optional": true,
            "field": "accessControl",
            "defaultValue": "undefined",
            "description": "<ul> <li>Object</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/acm"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/acm.js",
    "groupTitle": "ACM"
  },
  {
    "type": "get",
    "url": "/auth/acm",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "ACM",
    "description": "<p>Retrieves acm data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\""
            ],
            "optional": true,
            "field": "all",
            "description": "<ul> <li>Returns all documents</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Oid",
            "optional": true,
            "field": "subject",
            "defaultValue": "undefined",
            "description": "<ul> <li>Oid</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Object",
            "optional": true,
            "field": "accessControl",
            "defaultValue": "undefined",
            "description": "<ul> <li>Object</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n            {\n                \"subject\": \"5cee730bb2820d47582e9abd\",\n                \"accessControl\": {\n                    \"read\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n                    \"update\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n                    \"delete\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"]\n                },\n                \"__v\": \"21\",\n                \"firstModified\": \"2019-05-29T11:55:04.247Z\",\n                \"lastModified\": \"2019-05-29T11:55:04.247Z\",\n                \"_id\": \"5cee7318b2820d47582e9acf\"\n            },\n\n            {\n                \"subject\": \"5cee730bb2820d47582e9abd\",\n                \"accessControl\": {\n                    \"read\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n                    \"update\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n                    \"delete\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"]\n                },\n                \"__v\": \"21\",\n                \"firstModified\": \"2019-05-29T11:55:04.247Z\",\n                \"lastModified\": \"2019-05-29T11:55:04.247Z\",\n                \"_id\": \"5cee7318b2820d47582e9acf\"\n            },\n\n            {\n                \"subject\": \"5cee730bb2820d47582e9abd\",\n                \"accessControl\": {\n                    \"read\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n                    \"update\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n                    \"delete\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"]\n                },\n                \"__v\": \"21\",\n                \"firstModified\": \"2019-05-29T11:55:04.247Z\",\n                \"lastModified\": \"2019-05-29T11:55:04.247Z\",\n                \"_id\": \"5cee7318b2820d47582e9acf\"\n            },\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/acm"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/acm.js",
    "groupTitle": "ACM"
  },
  {
    "type": "put",
    "url": "/auth/acm",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "ACM",
    "description": "<p>Updates new acm data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body (object)",
          "content": "\n{\n    \"subject\": \"5cee730bb2820d47582e9abd\",\n    \"accessControl\": {\n        \"read\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n        \"update\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"],\n        \"delete\": [ \"5cee7a0493f93a4e65b32633\", \"5cee7a0493f93a4e65b32631\", \"5cee7a0493f93a4e65b32632\", \"5cee7a0493f93a4e65b32634\"]\n    },\n    \"__v\": \"21\",\n    \"firstModified\": \"2019-05-29T11:55:04.247Z\",\n    \"lastModified\": \"2019-05-29T11:55:04.247Z\",\n    \"_id\": \"5cee7318b2820d47582e9acf\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Oid",
            "optional": true,
            "field": "subject",
            "defaultValue": "undefined",
            "description": "<ul> <li>Oid</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Object",
            "optional": true,
            "field": "accessControl",
            "defaultValue": "undefined",
            "description": "<ul> <li>Object</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"pull\"",
              "\"push\""
            ],
            "optional": true,
            "field": "operation",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "target",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "createOnNoModified",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/acm"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/acm.js",
    "groupTitle": "ACM"
  },
  {
    "type": "get",
    "url": "/auth/admin/count",
    "title": "Count",
    "version": "0.0.1",
    "name": "Count",
    "group": "Administrator",
    "description": "<p>Counts admin by query</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<ul> <li>email</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userName",
            "description": "<ul> <li>userName</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<ul> <li>role</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<ul> <li>Counts documents</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"count\" : 10\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/admin/count"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/admin.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "delete",
    "url": "/auth/admin",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "Administrator",
    "description": "<p>Delete admin data</p>",
    "permission": [
      {
        "name": "SuperAdmin"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userName",
            "description": "<ul> <li>userName</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/admin"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/admin.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/auth/admin",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "Administrator",
    "description": "<p>Retrieves admin data</p>",
    "permission": [
      {
        "name": "SuperAdmin"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\""
            ],
            "optional": true,
            "field": "all",
            "description": "<ul> <li>Returns all documents</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userName",
            "description": "<ul> <li>userName</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"docs\": [\n        {\n            \"role\": \"SuperAdmin\",\n            \"_id\": \"5d696b69500b327e4b6c918e\",\n            \"userName\": \"gennode\",\n            \"firstModified\": \"2019-08-30T18:31:05.767Z\",\n            \"lastModified\": \"2019-08-30T18:31:05.767Z\"\n        },\n        {\n            \"role\": 'Admin',\n            \"_id\": '5d6b75735077061659145816',\n            \"userName\": 'Bekele',\n            \"firstModified\": '2019-09-01T07:38:27.070Z',\n            \"lastModified\": '2019-09-01T07:38:27.070Z',\n        },\n        {\n            \"role\": 'Admin',\n            \"_id\": '5d6b75735077061659145816',\n            \"userName\": 'Chala',\n            \"firstModified\": '2019-09-01T07:38:27.070Z',\n            \"lastModified\": '2019-09-01T07:38:27.070Z',\n        }\n    ],\n    \"total\": 1,\n    \"limit\": 12,\n    \"page\": 1,\n    \"pages\": 1\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/admin"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/admin.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/auth/admin/login",
    "title": "Login",
    "version": "0.0.1",
    "name": "Login",
    "group": "Administrator",
    "description": "<p>Login's an admin and creates an access token</p>",
    "permission": [
      {
        "name": "Any"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    userName : 'Chala',\n    password : 'adminPassword'\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<ul> <li>Admin's userName</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>Admin's password</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<ul> <li>Assigned Token</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoiQ2hhbGEifSwiaWF0IjoxNTY3MzIzNTA3LCJleHAiOjE1NzI1MDc1MDd9.U4Dj-XmbfAn1oNGAU5Syj3wUzlBKhkvO4QsHjAsAHqg'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/admin/login"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/admin.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/auth/admin/signup",
    "title": "SignUp",
    "version": "0.0.1",
    "name": "SignUp",
    "group": "Administrator",
    "description": "<p>Sign's up a new admin</p>",
    "permission": [
      {
        "name": "SuperAdmin"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    userName : 'Chala',\n    password : 'adminPassword'\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<ul> <li>Admin's userName</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>Admin's password</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<ul> <li>Admin's role</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<ul> <li>Admin's userName</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    role: 'Admin',\n    _id: '5d6b75735077061659145816',\n    userName: 'Chala',\n    firstModified: '2019-09-01T07:38:27.070Z',\n    lastModified: '2019-09-01T07:38:27.070Z',\n    __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/admin/signup"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/admin.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "put",
    "url": "/auth/admin",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "Administrator",
    "description": "<p>Updates admin data</p>",
    "permission": [
      {
        "name": "SuperAdmin"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n   \"role\": \"SuperAdmin\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userName",
            "description": "<ul> <li>userName</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/admin"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/admin.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "delete",
    "url": "/auth/log",
    "title": "Flush",
    "version": "0.0.1",
    "name": "Flush",
    "group": "Log",
    "description": "<p>Flushes all log data</p>",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<ul> <li>Log flushed message</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    message: 'Logs flushed'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/log"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/log.js",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/auth/log",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "Log",
    "description": "<p>Retrieves log by query.</p>",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "from",
            "defaultValue": "30",
            "description": "<ul> <li>From, in day where the query should begin</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "to",
            "defaultValue": "0",
            "description": "<ul> <li>To, in day where the query should end</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of logs</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<ul> <li>Start from offset 0</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<ul> <li>Log order, either ascending or descending</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<ul> <li>Logs information</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{ info:\n   [ { service: 'Service A',\n       ip: '172.16.1.41',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/all',\n       method: 'PUT',\n       body: [Object],\n       objectId: '5cee7a0456f44a4e65b35532',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Denied',\n       level: 'warn',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.919Z' },\n     { service: 'Service T',\n       ip: '172.16.1.42',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/none',\n       method: 'PUT',\n       body: [Object],\n       objectId: '5cee7a0493f44a4e65b35532',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Denied',\n       level: 'warn',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.901Z' },\n     { service: 'Service T',\n       ip: '172.16.1.33',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/user',\n       method: 'PUT',\n       body: [Object],\n       objectId: '5cee7a0493f44a4e65b35532',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Granted',\n       level: 'info',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.894Z' },\n     { service: 'Service C',\n       ip: '172.16.1.44',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/all',\n       method: 'PUT',\n       body: [Object],\n       objectId: '5cee7a0493f44a4e65b35532',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Granted',\n       level: 'info',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.877Z' },\n     { service: 'Service A',\n       ip: '172.16.1.41',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/all',\n       method: 'DELETE',\n       body: [Object],\n       objectId: '5cee7a0493f44a4e65b32632',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Denied',\n       level: 'warn',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.862Z' },\n     { service: 'Service B',\n       ip: '172.16.1.42',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/all',\n       method: 'PUT',\n       body: [Object],\n       objectId: '5cee7a0493f44a4e65b32632',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Granted',\n       level: 'info',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.850Z' },\n     { service: 'Service A',\n       ip: '172.16.1.41',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/none',\n       method: 'POST',\n       body: [Object],\n       objectId: '5cefd27204d6a9685478ab72',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Denied',\n       level: 'warn',\n       message: '',\n       timestamp: '2019-09-01T08:13:55.831Z' },\n     { service: 'Service A',\n       ip: '172.16.1.41',\n       params: null,\n       path: 'http://sample/accessed/all',\n       query: null,\n       secure: true,\n       xhr: false,\n       route: 'http://sample/accessed/all',\n       method: 'POST',\n       body: [Object],\n       objectId: '5cefd27204d6a9685478ab72',\n       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3YTA0OTNmOTNhNGU2NWIzMjYzMiJ9LCJpYXQiOjE1NjczMjU2MzMsImV4cCI6MTU3MjUwOTYzM30.oQhBnCi1SOBTH4_dGCPImRK4DL9UEcM2Gn2c0UXvEBE',\n       userId: '5cee7a0493f93a4e65b32632',\n       status: 'Access Granted',\n       level: 'info',\n       message: '',\n       timestamp: '2019-09-01T08:13:53.803Z' } ] }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/log"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/log.js",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/auth/log/status",
    "title": "Status",
    "version": "0.0.1",
    "name": "Status",
    "group": "Log",
    "description": "<p>Responds with the overall server status</p>",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "memoryUsage",
            "description": "<ul> <li>Server's overall memory usage</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cpuUsage",
            "description": "<ul> <li>Server's overall cpu usage</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "upTime",
            "description": "<ul> <li>Server up time in millisecond</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"memoryUsage\": {\n        \"rss\": 93990912,\n        \"heapTotal\": 66248704,\n        \"heapUsed\": 43672032,\n        \"external\": 19428969\n    },\n    \"cpuUsage\": {\n        \"user\": 1084000,\n        \"system\": 60000\n    },\n    \"upTime\": 4.557\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/log/status"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/log.js",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/auth/role/count",
    "title": "Count",
    "version": "0.0.1",
    "name": "Count",
    "group": "Role",
    "description": "<p>Counts role by query</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<ul> <li>description</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "members",
            "description": "<ul> <li>members</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<ul> <li>Counts documents</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"count\" : 10\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/role/count"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/auth/role",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "Role",
    "description": "<p>Creates new role data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n {\n    \"name\": \"Role A\",\n    \"description\": \"Description for role a\",\n    \"members\": [\n        \"5cee7318b2820d47582e9aca\",\n        \"5cee7318b2820d47582e9acc\",\n        \"5cee7318b2820d47582e9ac3\",\n        \"5cee7318b2820d47582e9ac5\",\n    ],\n    \"accessRoutes\": [\n        { route : \"http://sample/route/1\", method : \"POST\" },\n        { route : \"http://sample/route/2\", method : \"DELETE\" },\n        { route : \"http://sample/route/3\", method : \"GET\" },\n        { route : \"http://sample/route/4\", method : \"PUT\" },\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>description</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "members",
            "description": "<ul> <li>members</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "accessRoutes",
            "description": "<ul> <li>accessRoutes</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>description</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members",
            "description": "<ul> <li>members</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "accessRoutes",
            "description": "<ul> <li>accessRoutes</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n {\n    \"name\": \"Role A\",\n    \"description\": \"Description for role a\",\n    \"members\": [\n        \"5cee7318b2820d47582e9aca\",\n        \"5cee7318b2820d47582e9acc\",\n        \"5cee7318b2820d47582e9ac3\",\n        \"5cee7318b2820d47582e9ac5\",\n    ],\n    \"accessRoutes\": [\n        { route : \"http://sample/route/1\", method : \"POST\" },\n        { route : \"http://sample/route/2\", method : \"DELETE\" },\n        { route : \"http://sample/route/3\", method : \"GET\" },\n        { route : \"http://sample/route/4\", method : \"PUT\" },\n    ]\n    \"__v\": \"53\",\n    \"firstModified\": \"2019-05-29T11:55:04.235Z\",\n    \"lastModified\": \"2019-05-29T11:55:04.235Z\",\n    \"_id\": \"5cee7318b2820d47582e9aca\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/role"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "delete",
    "url": "/auth/role",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "Role",
    "description": "<p>Deletes role data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Date",
            "optional": true,
            "field": "description",
            "defaultValue": "undefined",
            "description": "<ul> <li>Date</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "members",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "accessRoutes",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/role"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/auth/role",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "Role",
    "description": "<p>Retrieves role data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\""
            ],
            "optional": true,
            "field": "all",
            "description": "<ul> <li>Returns all documents</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Date",
            "optional": true,
            "field": "description",
            "defaultValue": "undefined",
            "description": "<ul> <li>Date</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "members",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "accessRoutes",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n            {\n                \"name\": \"Role A\",\n                \"description\": \"Description for role a\",\n                \"members\": [\n                    \"5cee7318b2820d47582e9aca\",\n                    \"5cee7318b2820d47582e9acc\",\n                    \"5cee7318b2820d47582e9ac3\",\n                    \"5cee7318b2820d47582e9ac5\",\n                ],\n                \"accessRoutes\": [\n                    { route : \"http://sample/route/1\", method : \"POST\" },\n                    { route : \"http://sample/route/2\", method : \"DELETE\" },\n                    { route : \"http://sample/route/3\", method : \"GET\" },\n                    { route : \"http://sample/route/4\", method : \"PUT\" },\n                ]\n                \"__v\": \"53\",\n                \"firstModified\": \"2019-05-29T11:55:04.235Z\",\n                \"lastModified\": \"2019-05-29T11:55:04.235Z\",\n                \"_id\": \"5cee7318b2820d47582e9aca\"\n            },\n\n            {\n                \"name\": \"Role A\",\n                \"description\": \"Description for role a\",\n                \"members\": [\n                    \"5cee7318b2820d47582e9aca\",\n                    \"5cee7318b2820d47582e9acc\",\n                    \"5cee7318b2820d47582e9ac3\",\n                    \"5cee7318b2820d47582e9ac5\",\n                ],\n                \"accessRoutes\": [\n                    { route : \"http://sample/route/1\", method : \"POST\" },\n                    { route : \"http://sample/route/2\", method : \"DELETE\" },\n                    { route : \"http://sample/route/3\", method : \"GET\" },\n                    { route : \"http://sample/route/4\", method : \"PUT\" },\n                ]\n                \"__v\": \"53\",\n                \"firstModified\": \"2019-05-29T11:55:04.235Z\",\n                \"lastModified\": \"2019-05-29T11:55:04.235Z\",\n                \"_id\": \"5cee7318b2820d47582e9aca\"\n            },\n\n            {\n                \"name\": \"Role A\",\n                \"description\": \"Description for role a\",\n                \"members\": [\n                    \"5cee7318b2820d47582e9aca\",\n                    \"5cee7318b2820d47582e9acc\",\n                    \"5cee7318b2820d47582e9ac3\",\n                    \"5cee7318b2820d47582e9ac5\",\n                ],\n                \"accessRoutes\": [\n                    { route : \"http://sample/route/1\", method : \"POST\" },\n                    { route : \"http://sample/route/2\", method : \"DELETE\" },\n                    { route : \"http://sample/route/3\", method : \"GET\" },\n                    { route : \"http://sample/route/4\", method : \"PUT\" },\n                ]\n                \"__v\": \"53\",\n                \"firstModified\": \"2019-05-29T11:55:04.235Z\",\n                \"lastModified\": \"2019-05-29T11:55:04.235Z\",\n                \"_id\": \"5cee7318b2820d47582e9aca\"\n            }\n\n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/role"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "put",
    "url": "/auth/role",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "Role",
    "description": "<p>Updates new role data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"name\": \"Role A\",\n    \"description\": \"Description for role a\",\n    \"members\": [\n        \"5cee7318b2820d47582e9aca\",\n        \"5cee7318b2820d47582e9acc\",\n        \"5cee7318b2820d47582e9ac3\",\n        \"5cee7318b2820d47582e9ac5\",\n    ],\n    \"accessRoutes\": [\n        { route : \"http://sample/route/1\", method : \"POST\" },\n        { route : \"http://sample/route/2\", method : \"DELETE\" },\n        { route : \"http://sample/route/3\", method : \"GET\" },\n        { route : \"http://sample/route/4\", method : \"PUT\" },\n    ]\n    \"__v\": \"53\",\n    \"firstModified\": \"2019-05-29T11:55:04.235Z\",\n    \"lastModified\": \"2019-05-29T11:55:04.235Z\",\n    \"_id\": \"5cee7318b2820d47582e9aca\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Date",
            "optional": true,
            "field": "description",
            "defaultValue": "undefined",
            "description": "<ul> <li>Date</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "members",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "accessRoutes",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"pull\"",
              "\"push\""
            ],
            "optional": true,
            "field": "operation",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "target",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/role"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/auth/schema/count",
    "title": "Count",
    "version": "0.0.1",
    "name": "Count",
    "group": "Schema",
    "description": "<p>Counts schema by query</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "schemaName",
            "description": "<ul> <li>schemaName</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<ul> <li>Counts documents</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"count\" : 10\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/schema/count"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/schema.js",
    "groupTitle": "Schema"
  },
  {
    "type": "delete",
    "url": "/auth/schema",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "Schema",
    "description": "<p>Deletes schema data</p>",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "schemaName",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceName",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/schema"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/schema.js",
    "groupTitle": "Schema"
  },
  {
    "type": "get",
    "url": "/auth/schema",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "Schema",
    "description": "<p>Retrieves schema data</p>",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\""
            ],
            "optional": true,
            "field": "all",
            "description": "<ul> <li>Returns all documents</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "schemaName",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceName",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"docs\": [\n        {\n            \"accessControl\": {\n                \"read\": [\n                    null\n                ],\n                \"update\": [\n                    \"Admin 2\",\n                    \"Admin 2\"\n                ],\n                \"delete\": [\n                    \"Admin 2\",\n                    \"Admin 2\",\n                    \"Admin 2\"\n                ]\n            },\n            \"documentIds\": [\n                \"5d6b8f3ff972d427e6e31af1\"\n            ],\n            \"_id\": \"5d6b8f43f972d427e6e31b3b\",\n            \"schemaName\": \"User\",\n            \"serviceName\": \"Service C\",\n            \"firstModified\": \"2019-09-01T09:28:35.427Z\",\n            \"lastModified\": \"2019-09-01T09:28:36.019Z\"\n        },\n\n                 {\n            \"accessControl\": {\n                \"read\": [\n                    null\n                ],\n                \"update\": [\n                    \"Admin 3\",\n                    \"Admin 3\"\n                ],\n                \"delete\": [\n                    \"Admin 4\",\n                    \"Admin 2\",\n                    \"Admin 5\"\n                ]\n            },\n            \"documentIds\": [\n                \"5d6b8f3ff972d427e6e31afc\"\n            ],\n            \"_id\": \"5d6b8f43f972d427e6e31b3c\",\n            \"schemaName\": \"Blog\",\n            \"serviceName\": \"Service A\",\n            \"firstModified\": \"2019-09-01T09:28:35.427Z\",\n            \"lastModified\": \"2019-09-01T09:28:36.019Z\"\n        }\n    ],\n    \"total\": 1,\n    \"limit\": 12,\n    \"page\": 1,\n    \"pages\": 1\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/schema"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/schema.js",
    "groupTitle": "Schema"
  },
  {
    "type": "put",
    "url": "/auth/schema",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "Schema",
    "description": "<p>Updates schema data</p>",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n   \"schemaName\": \"NewSchemaName\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "_id",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "schemaName",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceName",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/schema"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/schema.js",
    "groupTitle": "Schema"
  },
  {
    "type": "get",
    "url": "/auth/service/count",
    "title": "Count",
    "version": "0.0.1",
    "name": "Count",
    "group": "Service",
    "description": "<p>Counts service by query</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceId",
            "description": "<ul> <li>serviceId</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<ul> <li>Counts documents</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"count\" : 10\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/service/count"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/service.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/auth/service",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "Service",
    "description": "<p>Creates new service data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n   \"name\": \"Service Name\",\n   \"serviceId\": \"02.\",\n   \"routes\": [\n     {\n       \"method\": \"POST\",\n       \"route\": \"http://root/sample\",\n       \"group\": \"Company\",\n       \"name\": \"Create company\",\n       \"description\": \"Create company data.\"\n     },\n     {\n       \"method\": \"GET\",\n       \"route\": \"http://root/sample\",\n       \"group\": \"Company\",\n       \"name\": \"Retrieves company\",\n       \"description\": \"Retrieves company data.\"\n     },\n     {\n       \"method\": \"PUT\",\n       \"route\": \"http://root/sample\",\n       \"group\": \"Company\",\n       \"name\": \"Update company\",\n       \"description\": \"Updates company data.\"\n     },\n   ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "serviceId",
            "description": "<ul> <li>serviceId</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "routes",
            "description": "<ul> <li>routes</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>name</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceId",
            "description": "<ul> <li>serviceId</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "routes",
            "description": "<ul> <li>routes</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n {\n \"name\": \"Service Name\",\n \"serviceId\": \"02.\",\n \"routes\": [\n   {\n     \"method\": \"POST\",\n     \"route\": \"http://root/sample\",\n     \"group\": \"Company\",\n     \"name\": \"Create company\",\n     \"description\": \"Create company data.\"\n   },\n   {\n     \"method\": \"GET\",\n     \"route\": \"http://root/sample\",\n     \"group\": \"Company\",\n     \"name\": \"Retrieves company\",\n     \"description\": \"Retrieves company data.\"\n   },\n   {\n     \"method\": \"PUT\",\n     \"route\": \"http://root/sample\",\n     \"group\": \"Company\",\n     \"name\": \"Update company\",\n     \"description\": \"Updates company data.\"\n   },\n ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/service"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/service.js",
    "groupTitle": "Service"
  },
  {
    "type": "delete",
    "url": "/auth/service",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "Service",
    "description": "<p>Deletes service data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceId",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "routes",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/service"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/service.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/auth/service",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "Service",
    "description": "<p>Retrieves service data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\""
            ],
            "optional": true,
            "field": "all",
            "description": "<ul> <li>Returns all documents</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceId",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "routes",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n    {\n    \"name\": \"Service Name\",\n    \"serviceId\": \"02.\",\n    \"routes\": [\n      {\n        \"method\": \"POST\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Create company\",\n        \"description\": \"Create company data.\"\n      },\n      {\n        \"method\": \"GET\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Retrieves company\",\n        \"description\": \"Retrieves company data.\"\n      },\n      {\n        \"method\": \"PUT\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Update company\",\n        \"description\": \"Updates company data.\"\n      },\n    ]\n },\n\n {\n    \"name\": \"Service Name 4\",\n    \"serviceId\": \"04\",\n    \"routes\": [\n      {\n        \"method\": \"POST\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Create company\",\n        \"description\": \"Create company data.\"\n      },\n      {\n        \"method\": \"GET\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Retrieves company\",\n        \"description\": \"Retrieves company data.\"\n      },\n      {\n        \"method\": \"PUT\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Update company\",\n        \"description\": \"Updates company data.\"\n      },\n    ]\n },\n\n {\n    \"name\": \"Service Name 3\",\n    \"serviceId\": \"03\",\n    \"routes\": [\n      {\n        \"method\": \"POST\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Create company\",\n        \"description\": \"Create company data.\"\n      },\n      {\n        \"method\": \"GET\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Retrieves company\",\n        \"description\": \"Retrieves company data.\"\n      },\n      {\n        \"method\": \"PUT\",\n        \"route\": \"http://root/sample\",\n        \"group\": \"Company\",\n        \"name\": \"Update company\",\n        \"description\": \"Updates company data.\"\n      },\n    ]\n }\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/service"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/service.js",
    "groupTitle": "Service"
  },
  {
    "type": "put",
    "url": "/auth/service",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "Service",
    "description": "<p>Updates new service data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n       \"name\": \"Service Name\",\n       \"serviceId\": \"02.\"\n   }",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "serviceId",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Array",
            "optional": true,
            "field": "routes",
            "defaultValue": "undefined",
            "description": "<ul> <li>Array</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"pull\"",
              "\"push\""
            ],
            "optional": true,
            "field": "operation",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "target",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/service"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/service.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/auth/token/create",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "Token",
    "description": "<p>Creates new token data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"userId\": \"5cee730bb2820d47582e9abd\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Oid",
            "optional": false,
            "field": "userId",
            "description": "<ul> <li>userId</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<ul> <li>token</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<ul> <li>User data</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3MzBiYjI4MjBkNDc1ODJlOWFiZSJ9LCJpYXQiOjE1NzE1Njc5NzQsImV4cCI6MTU3Njc1MTk3NH0.2gH-eHgcpz7XYSIEKqjr5n2IxB377z-uGUVvyVT85dc\",\n   \"user\": {\n        \"_id\": \"5dac3966e045e048c247a661\",\n        \"userId\": \"5cee730bb2820d47582e9abe\",\n        \"firstModified\": \"2019-10-20T10:39:34.662Z\",\n        \"lastModified\": \"2019-10-20T10:39:34.662Z\",\n        \"__v\": 0\n       }\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/token/create"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/token.js",
    "groupTitle": "Token"
  },
  {
    "type": "post",
    "url": "/auth/token/validate",
    "title": "Validate",
    "version": "0.0.1",
    "name": "Validate",
    "group": "Token",
    "description": "<p>validates request object.</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"route\"    : \"http://awra/products/gets\",\n    \"method\"   : \"POST\",\n    \"body\"     : {\"one\" : \"one\"},\n    \"objectId\" : \"5cefd27204d6a9688478ab72\",\n    \"token\"    : \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVjZWU3MzBiYjI4MjBkNDc1ODJlOWFiZCJ9LCJpYXQiOjE1NTkyMzEyNTIsImV4cCI6MTU2MTgyMzI1Mn0.snOfyzFkyjcNS4NFt4btt64Sk9_8bIzqVTVuGDJLDxk\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "route",
            "description": "<ul> <li>Route</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<ul> <li>Method</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<ul> <li>body</li> </ul>"
          },
          {
            "group": "Body",
            "type": "Oid",
            "optional": false,
            "field": "objectId",
            "description": "<ul> <li>Object Id</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<ul> <li>Token</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<ul> <li>Message</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n    \"message\": \"Access Denied.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/token/validate"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/token.js",
    "groupTitle": "Token"
  },
  {
    "type": "get",
    "url": "/auth/user/count",
    "title": "Count",
    "version": "0.0.1",
    "name": "Count",
    "group": "User",
    "description": "<p>Counts user by query</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<ul> <li>userId</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<ul> <li>Counts documents</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"count\" : 10\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/user/count"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/auth/user",
    "title": "Create",
    "version": "0.0.1",
    "name": "Create",
    "group": "User",
    "description": "<p>Creates new user data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "With email",
          "content": "\n{\n    \"userId\": \"sample@email.com\"\n}",
          "type": "json"
        },
        {
          "title": "With Oid",
          "content": "\n{\n    \"userId\": \"5cee7318b2820d47582e9ac6\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<ul> <li>Any attribute that is unique to the user.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<ul> <li>Any attribute that is unique to the user.</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<ul> <li>Version</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<ul> <li>Id</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstModified",
            "description": "<ul> <li>First modified</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastModified",
            "description": "<ul> <li>Last modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n {\n    \"userId\"        : \"sample@email.com\",\n    \"__v\"           : \"93\",\n    \"firstModified\" : \"2019-05-29T11:55:04.214Z\",\n    \"lastModified\"  : \"2019-05-29T11:55:04.214Z\",\n    \"_id\"           : \"5cee7318b2820d47582e9ac6\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/user"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/auth/user",
    "title": "Delete",
    "version": "0.0.1",
    "name": "Delete",
    "group": "User",
    "description": "<p>Deletes user data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userId",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully deleted</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/user"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/auth/user",
    "title": "Get",
    "version": "0.0.1",
    "name": "Get",
    "group": "User",
    "description": "<p>Retrieves user data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<ul> <li>Page Number</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "id",
            "description": "<ul> <li>Sort order by</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "lean",
            "defaultValue": "false",
            "description": "<ul> <li>Lean</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "12",
            "description": "<ul> <li>Limit of return</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"true\""
            ],
            "optional": true,
            "field": "all",
            "description": "<ul> <li>Returns all documents</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userId",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "docs",
            "description": "<ul> <li>Documents array result</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<ul> <li>Total number of retrieved results</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<ul> <li>Limit of a single return</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n        \"docs\": [\n\n {\n    \"userId\"        : \"sample@email.com\",\n    \"__v\"           : \"93\",\n    \"firstModified\" : \"2019-05-29T11:55:04.214Z\",\n    \"lastModified\"  : \"2019-05-29T11:55:04.214Z\",\n    \"_id\"           : \"5cee7318b2820d47582e9ac6\"\n},\n\n {\n    \"userId\"        : \"sample2@email.com\",\n    \"__v\"           : \"93\",\n    \"firstModified\" : \"2019-05-29T11:55:04.214Z\",\n    \"lastModified\"  : \"2019-05-29T11:55:04.214Z\",\n    \"_id\"           : \"5cee7318b2820d47582e9ac4\"\n},\n\n {\n    \"userId\"        : \"sample2@email.com\",\n    \"__v\"           : \"93\",\n    \"firstModified\" : \"2019-05-29T11:55:04.214Z\",\n    \"lastModified\"  : \"2019-05-29T11:55:04.214Z\",\n    \"_id\"           : \"5cee7318b2820d47582e9ac2\"\n}\n            \n        ],\n        \"total\": 12,\n        \"limit\": 3,\n        \"offset\": 0\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/user"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/auth/user",
    "title": "Update",
    "version": "0.0.1",
    "name": "Update",
    "group": "User",
    "description": "<p>Updates new user data</p>",
    "permission": [
      {
        "name": "All"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Body",
          "content": "\n    {\n    \"userId\": \"Gravida morbi iaculis a fringilla.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "userId",
            "defaultValue": "undefined",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"pull\"",
              "\"push\""
            ],
            "optional": true,
            "field": "operation",
            "description": "<ul> <li>String</li> </ul>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "target",
            "description": "<ul> <li>String</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "n",
            "description": "<ul> <li>Number of objects manipulated</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nModified",
            "description": "<ul> <li>Number of objects modified based on query</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": "<ul> <li>Number of objects successfully modified</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "\n{\n     \"n\" : \"1\",\n     \"nModified\" : \"1\",\n     \"ok\" : \"1\"\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/auth/user"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_TYPE_NOT_ACCORD",
            "description": "<ul> <li>Authentication type is not according to constants.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "AUTHENTICATION_VALUE_NOT_SET",
            "description": "<ul> <li>Authentication values are not set.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "CAST_ERROR",
            "description": "<ul> <li>Possible casting error.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_QUERY_DATA",
            "description": "<ul> <li>No proper or no query data has been provided.Mainly could be caused by using wrong key in url.</li> </ul>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "NO_DATA_FOUND",
            "description": "<ul> <li>No data found in query.</li> </ul>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "UNAUTHORIZED_ACCESS",
            "description": "<ul> <li>Token is not authorized to access this route..</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_REVOKED",
            "description": "<ul> <li>Token is revoked.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<ul> <li>Token has expired.</li> </ul>"
          },
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "AUTHORIZED_SERVICE_ACCESS_DENIED",
            "description": "<ul> <li>Service has no been granted access.</li> </ul>"
          }
        ]
      }
    },
    "filename": "route/user.js",
    "groupTitle": "User"
  }
] });
