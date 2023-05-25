import { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';
import isTest from "variables/isTest";
import {addValidSQL} from "api/hoc/validSQL";
import DigApi from "DigApi";
import HandleResponseCodes from "components/HandleResponseCodes/HandleResponseCodes";
import DropVariables from "variables/DropVariables";
import isAppLocal from "variables/isAppLocal";


export default function axiosInterceptors(axios: AxiosInstance): void {

    function setCookies(cookies: string[]): void {

        cookies.map(cookie => {

            const newCookie = cookie.replace("HttpOnly", "")
                .replace("secure", "");

            console.log("Setting cookie: " + newCookie);

            document.cookie = newCookie

        });

    }

    if (isTest || isAppLocal) {
        setCookies([
            'dropDeveloper=346991; path=/',
            'XDEBUG_SESSION=start; path=/'
        ])
    }

    axios.interceptors.request.use(
        req => {

            req.headers ??= {} as AxiosRequestHeaders

            // this forces the cookie to be sent with every request, even cross-origin form this instance
            req.headers['Cookie'] = document.cookie;

            if (true === DropVariables.verbose) {

                console.log(req.method, req.url, req.data)

                console.debug(
                    "Every Axios request is logged in axiosInterceptors.tsx :: ",
                    JSON.stringify({
                        baseURL: req.baseURL,
                        url: req.url,
                        method: req.method,
                        headers: req.headers,
                        data: req.data,
                        params: req.params,
                    }, undefined, 4)
                );

            }

            return req;

        },
        error => {
            return Promise.reject(error);
        }
    );

    function logResponse(response: AxiosResponse | any) {

        if (true === DropVariables.verbose) {

            if (response?.response) {

                response = response.response;

            }

            if (DropVariables.isTest && response?.headers?.['set-cookie']) {

                setCookies(response?.headers?.['set-cookie'])

            }

            // JSON is so it prints completely in intellij run console
            console.debug(
                "Every Axios response is logged in axiosInterceptors.tsx :: ",
                JSON.stringify({
                    baseURL: response.config.baseURL,
                    uri: response.config.url,
                    status: response?.status,
                    statusText: response?.statusText,
                    headers: response?.headers,
                    data: response?.data,
                }, undefined, 4)
            );

        }

    }

    axios.interceptors.response.use(
        response => {

            logResponse(response);

            if (undefined !== response?.data?.TRACE) {

                DigApi.digApi.setState((previous) => (
                    {
                        backendThrowable: [
                            ...previous.backendThrowable,
                            response?.data]
                    }))

                return response;

            }

            if (response?.data?.alert) {

                console.log("alert ∈ response");

                HandleResponseCodes(response);

                const DropExceptions = 'DropInGaming\\\\PHP\\\\Errors\\\\DropException';

                const willReject = (response?.data?.alert?.error
                    || response?.data?.alert?.danger
                    || response?.data?.[DropExceptions]);

                if (willReject) {

                    return Promise.reject(response);

                }

            }

            if (isTest) {

                if (Array.isArray(response?.data?.sql)) {

                    addValidSQL(response.data.sql)

                }

            }

            return response;

        },
        async error => {

            console.log("Carbon Axios Caught A Response Error response :: ", error.response);

            logResponse(error);

            if (undefined !== error?.response?.data?.TRACE ||
                undefined === error?.response?.data?.alert) {

                console.log('backend throwable', error?.response?.data || error?.response)

                if (undefined !== error?.response?.data
                    && Array.isArray(error.response.data)) {

                    error.response.data.status = error?.response?.status

                }

                DigApi.digApi.setState((previous) => (
                    {
                        backendThrowable: [
                            ...previous.backendThrowable,
                            error?.response?.data || error?.response || error
                        ]
                    }))


                return Promise.reject(error);

            }

            /* Do something with response error
               this changes from project to project depending on how your server uses response codes.
               when you can control all errors universally from a single api, return Promise.reject(error);
               is the way to go.
            */
            HandleResponseCodes(error.response);

            return Promise.reject(error); // return error.response;

        });

}