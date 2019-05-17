﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.2.5.0 (NJsonSchema v9.13.37.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ValuesClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getAll(): Promise<string[] | null> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: AxiosResponse): Promise<string[] | null> {
        const status = response.status;
        let _headers: any = {}; 
        if (response.headers && response.headers.forEach) { 
            response.headers.forEach((v: any, k: any) => _headers[k] = v);
        };
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(item);
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<string[] | null>(<any>null);
    }

    post(value: string): Promise<void> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(value);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {}; 
        if (response.headers && response.headers.forEach) { 
            response.headers.forEach((v: any, k: any) => _headers[k] = v);
        };
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(<any>null);
    }

    get(id: number): Promise<string | null> {
        let url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: AxiosResponse): Promise<string | null> {
        const status = response.status;
        let _headers: any = {}; 
        if (response.headers && response.headers.forEach) { 
            response.headers.forEach((v: any, k: any) => _headers[k] = v);
        };
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<string | null>(<any>null);
    }

    put(id: number, value: string): Promise<void> {
        let url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(value);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processPut(_response);
        });
    }

    protected processPut(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {}; 
        if (response.headers && response.headers.forEach) { 
            response.headers.forEach((v: any, k: any) => _headers[k] = v);
        };
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(<any>null);
    }

    delete(id: number): Promise<void> {
        let url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "DELETE",
            url: url_,
            headers: {
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processDelete(_response);
        });
    }

    protected processDelete(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {}; 
        if (response.headers && response.headers.forEach) { 
            response.headers.forEach((v: any, k: any) => _headers[k] = v);
        };
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(<any>null);
    }
}


export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}