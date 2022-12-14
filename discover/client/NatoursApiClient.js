"use strict";

/*!
                                                                  _\|/_
                                                                   (o o)
            +---------------------------------oOO-(_)-OOo---------------------------------+
            |           This class was automatically generated by an npm script                |
            |               Do not modify the content of this file manually                          |
            |       Refer to package.json to run the script for client regeneration         |
            +----------------------------------------------------------------------------------+
                                                                 (_| |_)
 */

const baseHttpClient = require("../../http/baseHttpClient");
const Ajv = require("ajv");
const logger = require("log4js").getLogger("NatoursApiClient");

/**
 * @typedef {Object} ClientOptions
 * @property {string} url - base url to connect
 * @property {number} timeout - connection timeout in ms, if not set default timeout is 3000ms
 * @property {number} retryCounter -the retry counter if retry strategy is enabled
 * @property {string|Buffer} sslCert - TLS client cert
 * @property {string|Buffer} sslKey - TLS client key (PKCS8)
 * @property {string} sslPass - TLS client key passphrase
 * @property {string|Buffer} sslCA - TLS ca certificate chain
 * @property {function} fnCbErrorInBody - [Optional] Function CallBack to determine if error in body response for monitoring.
 *
 * Natours API description
 * version: 1.0.0
 * @class NatoursApiClienttest
 */

class NatoursApiClient extends baseHttpClient {
    /**
     * Constructor
     * @param {ClientOptions} options - client options
     */
    constructor(options) {
        super("NatoursApiClient", options);

        this.swaggerSpecs = {
            "swagger": "2.0",
            "info": {
                "title": "Natours API",
                "description": "Natours API description",
                "termsOfService": "TODO",
                "contact": {
                    "name": "Natours Dev Team",
                    "url": "https://www.natours.com/support",
                    "email": "natours-dev@support.com"
                },
                "version": "1.0.0"
            },
            "host": "localhost:8001",
            "basePath": "/api/v1",
            "schemes": ["http", "https"],
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": {
                "Authorization": {
                    "name": "Authorization",
                    "in": "header",
                    "description": "Bearer acces token in JWT format",
                    "type": "string"
                }
            },
            "paths": {
                "/tours": {
                    "post": {
                        "description": "Create a new Tour",
                        "operationId": "createTour",
                        "parameters": [{
                            "$ref": "#/parameters/Authorization"
                        }, {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/definitions/createTourRequest"
                            }
                        }],
                        "responses": {
                            "200": {
                                "description": "Created"
                            }
                        },
                        "tags": ["Tours"]
                    },
                    "get": {
                        "description": "Query information from all available tours",
                        "operationId": "getAllTours",
                        "parameters": [{
                            "$ref": "#/parameters/Authorization"
                        }],
                        "responses": {
                            "200": {
                                "description": "OK"
                            }
                        },
                        "tags": ["Tours"]
                    }
                },
                "/tours/{tourId}": {
                    "get": {
                        "description": "Query information from tours individually",
                        "operationId": "getTour",
                        "parameters": [{
                            "name": "tourId",
                            "in": "path",
                            "description": "Unique value identifying a tour",
                            "required": true,
                            "type": "string"
                        }],
                        "responses": {
                            "200": {
                                "description": "OK"
                            }
                        },
                        "tags": ["Tours"]
                    },
                    "patch": {
                        "description": "Update tour details",
                        "operationId": "updateTour",
                        "parameters": [{
                            "$ref": "#/parameters/Authorization"
                        }, {
                            "name": "tourId",
                            "in": "path",
                            "description": "Unique value identifying a tour",
                            "required": true,
                            "type": "string"
                        }, {
                            "in": "body",
                            "name": "updateTourRequest",
                            "schema": {
                                "$ref": "#/definitions/createTourRequest"
                            }
                        }],
                        "responses": {
                            "200": {
                                "description": "OK"
                            }
                        },
                        "tags": ["Tours"]
                    },
                    "delete": {
                        "description": "Delete a tour record from data base",
                        "operationId": "deleteTour",
                        "parameters": [{
                            "$ref": "#/parameters/Authorization"
                        }, {
                            "name": "tourId",
                            "in": "path",
                            "description": "Unique value identifying a tour",
                            "required": true,
                            "type": "string"
                        }],
                        "responses": {
                            "204": {
                                "description": "No Content"
                            }
                        },
                        "tags": ["Tours"]
                    }
                }
            },
            "definitions": {
                "createTourRequest": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "description": "Tour name",
                            "example": "Zion National Park",
                            "type": "string"
                        },
                        "duration": {
                            "description": "Number of days the tour lasts",
                            "example": 3,
                            "type": "integer"
                        },
                        "maxGroupSize": {
                            "description": "Maximun number of people allowed in a group",
                            "example": 15,
                            "type": "integer"
                        },
                        "difficulty": {
                            "description": "How challenging is going on this trip",
                            "example": "easy",
                            "type": "string",
                            "enum": ["aesy", "medium", "difficult"]
                        },
                        "price": {
                            "description": "Tour price in dollars",
                            "example": 450,
                            "type": "number"
                        },
                        "raitingsAverage": {
                            "description": "Tour's rate average",
                            "example": 4.9,
                            "type": "number",
                            "default": 4.5
                        },
                        "summary": {
                            "description": "Brief description about tour details",
                            "example": "Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky.",
                            "type": "string"
                        },
                        "imageCover": {
                            "description": "background image displayed in UI",
                            "example": "zion_national_park.jpg",
                            "type": "string"
                        },
                        "startLocation": {
                            "$ref": "#/definitions/startLocation"
                        }
                    }
                },
                "startLocation": {
                    "properties": {
                        "description": {
                            "description": "Place where the adventure begins",
                            "example": "Zion Canyon Visitor Center",
                            "type": "string"
                        },
                        "coordinates": {
                            "description": "Georefrence express as latitude and longitude coordinates used to place starting point in a map",
                            "example": "37.20038717086271, -112.98651618883386",
                            "type": "array",
                            "items": {
                                "type": "number"
                            }
                        },
                        "address": {
                            "description": "Meeting point address",
                            "example": "Zion National Park, 1 Zion Park Blvd, Springdale, UT 84767",
                            "type": "string"
                        },
                        "guides": {
                            "description": "ID of the guide who will accompany you during the tour",
                            "example": "5c8a21d02f8fb814b56fa189",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "tags": [{
                "name": "Tours"
            }, {
                "name": "Users"
            }, {
                "name": "Reviews"
            }, {
                "name": "Bookings"
            }, {
                "name": "Authentication"
            }]
        };

        this.ajv = new Ajv({
            allErrors: true,
            jsonPointers: true,
            verbose: true,
            validateSchema: true,
            missingRefs: true,
            unknownFormats: ["base64"]
        });

        this.ajv.addSchema(this.swaggerSpecs, 'swaggerSpecs');
    }

    /**
     * Create a new Tour
     * @method
     * @name NatoursApiClient#createTour
     * @param {string} authorization - Bearer acces token in JWT format
     * @param {} body - Natours API description
     *
     */

    createTour(parameters = {}) {

        //    const baseUri = this.url;

        //let path = "/tours";

        let uri = 'http://localhost:8001/api/v1/tours';
        let body;
        const queryParameters = {};
        const headers = {};
        const form = {};

        headers["Accept"] = ['application/json'];
        headers["Content-Type"] = ['application/json'];

        if (parameters["authorization"] !== undefined) {
            headers["Authorization"] = parameters["authorization"];
        }

        if (parameters["body"] !== undefined) {
            body = parameters["body"];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                const parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
        }
        if (parameters.$headers) {
            Object.keys(parameters.$headers).forEach(function(headerName) {
                const header = parameters.$headers[headerName];
                headers[headerName] = header;
            });
        }
        //    const error = this._validateRequest("createTour", body);
        //    if(error){
        //        return error;
        //    }

        const requestOptions = {
            method: "POST",
            uri: uri,
            qs: queryParameters,
            headers,
            body
        };

        if (Object.keys(form).length > 0) {
            requestOptions.form = form;
        }

        console.log(`Request options: ${JSON.stringify(requestOptions)}`);

        return this._sendRequest(requestOptions);
    }
    /**
     * Query information from all available tours
     * @method
     * @name NatoursApiClient#getAllTours
     * @param {string} authorization - Bearer acces token in JWT format
     *
     */

    getAllTours(parameters = {}) {

        //    const baseUri = this.url;

        //let path = "/tours";

        let uri = 'http://localhost:8001/api/v1/tours';
        let body;
        const queryParameters = {};
        const headers = {};
        const form = {};

        headers["Accept"] = ['application/json'];
        headers["Content-Type"] = ['application/json'];

        if (parameters["authorization"] !== undefined) {
            headers["Authorization"] = parameters["authorization"];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                const parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
        }
        if (parameters.$headers) {
            Object.keys(parameters.$headers).forEach(function(headerName) {
                const header = parameters.$headers[headerName];
                headers[headerName] = header;
            });
        }
        //    const error = this._validateRequest("getAllTours", body);
        //    if(error){
        //        return error;
        //    }

        const requestOptions = {
            method: "GET",
            uri: uri,
            qs: queryParameters,
            headers,
            body
        };

        //        if ( this.operationsMetadata.getAllTours.produces && this.operationsMetadata.getAllTours.produces.includes("application/json")) {
        //            requestOptions.json=true;
        //        }

        if (Object.keys(form).length > 0) {
            requestOptions.form = form;
        }

        console.log(`Request options: ${JSON.stringify(requestOptions)}`);

        return this._sendRequest(requestOptions);
    }
    /**
     * Query information from tours individually
     * @method
     * @name NatoursApiClient#getTour
     * @param {string} tourId - Unique value identifying a tour
     *
     */

    getTour(parameters = {}) {

        //    const baseUri = this.url;

        //let path = "/tours/{tourId}";

        let uri = 'http://localhost:8001/api/v1/tours/{tourId}';
        let body;
        const queryParameters = {};
        const headers = {};
        const form = {};

        headers["Accept"] = ['application/json'];
        headers["Content-Type"] = ['application/json'];

        uri = uri.replace("{tourId}", parameters["tourId"]);

        if (parameters["tourId"] === undefined) {
            return Promise.reject(new Error("Missing required  parameter: tourId"));
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                const parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
        }
        if (parameters.$headers) {
            Object.keys(parameters.$headers).forEach(function(headerName) {
                const header = parameters.$headers[headerName];
                headers[headerName] = header;
            });
        }
        //    const error = this._validateRequest("getTour", body);
        //    if(error){
        //        return error;
        //    }

        const requestOptions = {
            method: "GET",
            uri: uri,
            qs: queryParameters,
            headers,
            body
        };

        //        if ( this.operationsMetadata.getTour.produces && this.operationsMetadata.getTour.produces.includes("application/json")) {
        //            requestOptions.json=true;
        //        }

        if (Object.keys(form).length > 0) {
            requestOptions.form = form;
        }

        console.log(`Request options: ${JSON.stringify(requestOptions)}`);

        return this._sendRequest(requestOptions);
    }
    /**
     * Update tour details
     * @method
     * @name NatoursApiClient#updateTour
     * @param {string} authorization - Bearer acces token in JWT format
     * @param {string} tourId - Unique value identifying a tour
     * @param {} updateTourRequest - Natours API description
     *
     */

    updateTour(parameters = {}) {

        //    const baseUri = this.url;

        //let path = "/tours/{tourId}";

        let uri = 'http://localhost:8001/api/v1/tours/{tourId}';
        let body;
        const queryParameters = {};
        const headers = {};
        const form = {};

        headers["Accept"] = ['application/json'];
        headers["Content-Type"] = ['application/json'];

        if (parameters["authorization"] !== undefined) {
            headers["Authorization"] = parameters["authorization"];
        }

        uri = uri.replace("{tourId}", parameters["tourId"]);

        if (parameters["tourId"] === undefined) {
            return Promise.reject(new Error("Missing required  parameter: tourId"));
        }

        if (parameters["updateTourRequest"] !== undefined) {
            body = parameters["updateTourRequest"];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                const parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
        }
        if (parameters.$headers) {
            Object.keys(parameters.$headers).forEach(function(headerName) {
                const header = parameters.$headers[headerName];
                headers[headerName] = header;
            });
        }
        //    const error = this._validateRequest("updateTour", body);
        //    if(error){
        //        return error;
        //    }

        const requestOptions = {
            method: "PATCH",
            uri: uri,
            qs: queryParameters,
            headers,
            body
        };

        if (Object.keys(form).length > 0) {
            requestOptions.form = form;
        }

        console.log(`Request options: ${JSON.stringify(requestOptions)}`);

        return this._sendRequest(requestOptions);
    }
    /**
     * Delete a tour record from data base
     * @method
     * @name NatoursApiClient#deleteTour
     * @param {string} authorization - Bearer acces token in JWT format
     * @param {string} tourId - Unique value identifying a tour
     *
     */

    deleteTour(parameters = {}) {

        //    const baseUri = this.url;

        //let path = "/tours/{tourId}";

        let uri = 'http://localhost:8001/api/v1/tours/{tourId}';
        let body;
        const queryParameters = {};
        const headers = {};
        const form = {};

        headers["Accept"] = ['application/json'];
        headers["Content-Type"] = ['application/json'];

        if (parameters["authorization"] !== undefined) {
            headers["Authorization"] = parameters["authorization"];
        }

        uri = uri.replace("{tourId}", parameters["tourId"]);

        if (parameters["tourId"] === undefined) {
            return Promise.reject(new Error("Missing required  parameter: tourId"));
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                const parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
        }
        if (parameters.$headers) {
            Object.keys(parameters.$headers).forEach(function(headerName) {
                const header = parameters.$headers[headerName];
                headers[headerName] = header;
            });
        }
        //    const error = this._validateRequest("deleteTour", body);
        //    if(error){
        //        return error;
        //    }

        const requestOptions = {
            method: "DELETE",
            uri: uri,
            qs: queryParameters,
            headers,
            body
        };

        if (Object.keys(form).length > 0) {
            requestOptions.form = form;
        }

        console.log(`Request options: ${JSON.stringify(requestOptions)}`);

        return this._sendRequest(requestOptions);
    }

    _validateRequest(methodName, body) {
        const validator = this.ajv.compile({
            $ref: 'swaggerSpecs#/definitions/' + methodName + 'Req'
        });
        const valid = validator(body);
        if (!valid) {
            logger.error("Validation errors on  for parameters %j : %j: ", body, validator.errors);
            return Promise.reject(new Error("Validation error: " + JSON.stringify(validator.errors)));
        }
    }
}
module.exports = NatoursApiClient;