import {AxiosInstance, AxiosResponse} from "axios";
import {toast} from "react-toastify";
import {TestRestfulResponse} from "api/hoc/TestRestfulResponse";
import {
    C6,
    C6RestfulModel,
    convertForRequestBody,
    RestShortTableNames,
    RestTableInterfaces,
    TABLES
} from "variables/C6";
import DropVariables from "variables/DropVariables";

// todo - untested
export function removeInvalidKeys<iRestObject>(request: any, c6Tables: (C6RestfulModel)[]): iRestObject {

    let intersection: iRestObject = {} as iRestObject

    let restfulObjectKeys: string[] = [];

    c6Tables.forEach(table => Object.values(table.COLUMNS).forEach(column => {

        if (false === restfulObjectKeys.includes(column)) {

            restfulObjectKeys.push(column)

        }

    }))

    Object.keys(request).forEach(key => {

        if (restfulObjectKeys.includes(key)) {

            intersection[key] = request[key]

        }

    });

    console.log('intersection', intersection)

    return intersection

}

export type Modify<T, R> = Omit<T, keyof R> & R;

// @link https://stackoverflow.com/questions/41285211/overriding-interface-property-type-defined-in-typescript-d-ts-file/55032655#55032655
export type ModifyDeep<A, B extends DeepPartialAny<A>> = {
    [K in keyof A | keyof B]?:          // For all keys in A and B:
    K extends keyof A                // ───┐
        ? K extends keyof B            // ───┼─ key K exists in both A and B
            ? A[K] extends AnyObject     //    │  ┴──┐
                ? B[K] extends AnyObject   //    │  ───┼─ both A and B are objects
                    ? ModifyDeep<A[K], B[K]> //    │     │  └─── We need to go deeper (recursively)
                    : B[K]                   //    │     ├─ B is a primitive 🠆 use B as the final type (new type)
                : B[K]                     //    │     └─ A is a primitive 🠆 use B as the final type (new type)
            : A[K]                       //    ├─ key only exists in A 🠆 use A as the final type (original type)
        : B[K]                         //    └─ key only exists in B 🠆 use B as the final type (new type)
}

type AnyObject = Record<string, any>

// This type is here only for some intellisense for the overrides object
type DeepPartialAny<T> = {
    /** Makes each property optional and turns each leaf property into any, allowing for type overrides by narrowing any. */
    [P in keyof T]?: T[P] extends AnyObject ? DeepPartialAny<T[P]> : any
}

export type iAPI<RequestType extends RestTableInterfaces> = RequestType & {
    dataInsertMultipleRows?: RequestType[],
    cacheResults?: boolean,
    fetchDependencies?: boolean,
    debug?: boolean,
    success?: string | ((r: AxiosResponse) => (string | void)),
    error?: string | ((r: AxiosResponse) => (string | void)),
    blocking?: boolean
}

interface iCacheAPI {
    request: string,
    response?: AxiosResponse,
    final?: boolean,
}


let apiRequestCache: iCacheAPI[] = [];

let userCustomClearCache: (() => void)[] = [];

let apiRequestInProgress: boolean = false;

interface iClearCache {
    ignoreWarning: boolean
}

function checkCache(cacheResult: iCacheAPI, requestMethod: string, tableName: RestShortTableNames | RestShortTableNames[], request: any) : false|undefined|null {

    if (undefined === cacheResult?.response) {

        console.groupCollapsed('%c API: The request on (' + tableName + ') is in cache and the response is undefined. The request has not finished. Returning null!', 'color: #0c0')

        console.log('%c ' + requestMethod + ' ' + tableName, 'color: #0c0')

        console.log('%c Request Data (note you may see the success and/or error prompt):', 'color: #0c0', request)

        console.groupEnd()

        return null;

    }

    if (true === cacheResult?.final) {

        console.group('%c API: rest api cache has reached the final result. Returning undefined!', 'color: #cc0')

        console.log('%c ' + requestMethod + ' ' + tableName, 'color: #cc0')

        console.log('%c Request Data (note you may see the success and/or error prompt):', 'color: #cc0', request)

        console.log('%c Response Data:', 'color: #cc0', cacheResult?.response?.data?.rest || cacheResult?.response?.data || cacheResult?.response)

        console.groupEnd()

        return undefined;

    }

    return false;
}


export function clearCache(props?: iClearCache) {

    if (false === props?.ignoreWarning) {

        console.warn('The rest api clearCache should only be used with extreme care! Avoid using this in favor of using `cacheResults : boolean`.')

    }

    userCustomClearCache.map((f) => 'function' === typeof f && f());

    userCustomClearCache = apiRequestCache = []

}

/**
 * the first argument ....
 *
 * Our api returns a zero argument function iff the method is get and the previous request reached the predefined limit.
 * This function can be aliased as GetNextPageOfResults(). If the end is reached undefined will be returned.
 *
 *
 * For POST, PUT, and DELETE requests one can expect the primary key of the new or modified index, or a boolean success
 * indication if no primary key exists.
 **/
export const POST = 'POST';

export const PUT = 'PUT';


export const GET = 'GET';


export const DELETE = 'DELETE';


export type AxiosPromise<Response> = Promise<AxiosResponse<Response>> | undefined | null;

// returning undefined means no more results are available, thus we've queried everything possible
// null means the request is currently being executed
export type apiReturn<Response> = (() => apiReturn<Response>) | AxiosPromise<Response>;


export type iRestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';


//wip
export type RequestGetPutDeleteBody = {
    SELECT?: any,
    WHERE?: any,
    JOIN?: {
        LEFT?: any,
        RIGHT?: any,
        INNER?: any,
    },
    PAGINATION?: {
        PAGE?: number,
        LIMIT?: number,
    }
}

export type RequestQueryBody<RequestType extends RestTableInterfaces> = iAPI<RequestType> | RequestGetPutDeleteBody;

export function isPromise(x : any) {
    return Object(x).constructor === Promise
}

interface iC6RestResponse<RestData> {
    rest: RestData,
    session?: any,
    sql?: any
}


interface iChangeC6Data {
    rowCount: number,
}

export interface iDeleteC6RestResponse<RestData = any> extends iChangeC6Data, iC6RestResponse<RestData>{
    deleted: boolean | number | string,
}

export interface iPostC6RestResponse<RestData = any> extends iC6RestResponse<RestData>{
    created: boolean | number | string,
}

export interface iPutC6RestResponse<RestData = any> extends iChangeC6Data, iC6RestResponse<RestData>{
    updated: boolean | number | string,
}

export type iGetC6RestResponse<ResponseDataType, ResponseDataOverrides = {}> = iC6RestResponse<Modify<ResponseDataType, ResponseDataOverrides>[]>

interface iRest<CustomAndRequiredFields extends {}, RequestTableTypes extends RestTableInterfaces = any, RequestTableOverrides = { [key in keyof RequestTableTypes]: any }, ResponseDataType = any> {
    axios: AxiosInstance,
    tableName: RestShortTableNames | RestShortTableNames[],
    requestMethod: iRestMethods,
    clearCache?: () => void,
    skipPrimaryCheck?: boolean,
    queryCallback: RequestQueryBody<Modify<RequestTableTypes, RequestTableOverrides>> | ((request: iAPI<Modify<RequestTableTypes, RequestTableOverrides>> & CustomAndRequiredFields) => (null|undefined|RequestQueryBody<Modify<RequestTableTypes, RequestTableOverrides>>)),
    responseCallback: (response: AxiosResponse<ResponseDataType>, request: iAPI<Modify<RequestTableTypes, RequestTableOverrides>> & CustomAndRequiredFields, id: string | number | boolean) => any // keep this set to any, it allows easy arrow functions and the results unused here
}

export default function restApi<CustomAndRequiredFields extends {}, RequestTableTypes extends RestTableInterfaces = any, RequestTableOverrides = any, ResponseDataType = any>(
    {
        axios,
        tableName,
        requestMethod = GET,
        queryCallback = {},
        responseCallback,
        skipPrimaryCheck = false,
        clearCache = undefined
    }: iRest<CustomAndRequiredFields, RequestTableTypes, RequestTableOverrides, ResponseDataType>
) {

    const fullTableList = Array.isArray(tableName) ? tableName : [tableName];

    const operatingTable = fullTableList[0];

    const tables = fullTableList.join(',')

    switch (requestMethod) {
        case GET:
        case POST:
        case PUT:
        case DELETE:
            break;
        default:
            throw Error('Bad request method passed to getApi')
    }

    if (null !== clearCache) {

        userCustomClearCache[tables + requestMethod] = clearCache;

    }

    return (request: iAPI<Modify<RequestTableTypes, RequestTableOverrides>> & CustomAndRequiredFields = {} as iAPI<Modify<RequestTableTypes, RequestTableOverrides>> & CustomAndRequiredFields) => {

        // an undefined query would indicate queryCallback returned undefined,
        // thus the request shouldn't fire as is in custom cache
        let query: RequestQueryBody<Modify<RequestTableTypes, RequestTableOverrides>> | undefined | null;

        if ('function' === typeof queryCallback) {

            query = queryCallback(request); // obj or obj[]

        } else {

            query = queryCallback;

        }

        if (undefined === query || null === query) {

            if (request.debug && DropVariables.isLocal) {

                toast.warning("DEV: queryCallback returned undefined, signaling in Custom Cache. (returning null)", DropVariables.toastOptionsDevs)

            }

            apiRequestInProgress = false;

            console.groupCollapsed('%c API: ('+requestMethod+') Request Query for ('+operatingTable+') undefined, returning null (will not fire ajax)!', 'color: #c00')

            console.log('%c Returning (undefined|null) for a query would indicate a custom cache hit (outside API.tsx), thus the request should not fire.', 'color: #c00')

            console.trace();

            console.groupEnd()

            return null;

        }

        if (C6.GET === requestMethod) {

            if (undefined === query[C6.PAGINATION]) {

                query[C6.PAGINATION] = {}

            }

            query[C6.PAGINATION][C6.PAGE] = query[C6.PAGINATION][C6.PAGE] || 1;

            query[C6.PAGINATION][C6.LIMIT] = query[C6.PAGINATION][C6.LIMIT] || 100;

        }

        // this could return itself with a new page number, or undefined if the end is reached
        function apiRequest(): apiReturn<ResponseDataType> {

            request.cacheResults ??= (C6.GET === requestMethod)

            if (C6.GET === requestMethod
                && undefined !== query?.[C6.PAGINATION]?.[C6.PAGE]
                && 1 !== query[C6.PAGINATION][C6.PAGE]) {

                console.group('Request on table (' + tableName + ') is firing for page (' + query[C6.PAGINATION][C6.PAGE] + '), please wait!')

                console.log('Request Data (note you may see the success and/or error prompt):', request)

                console.trace();

                console.groupEnd()

            }


            // should post | put | delete requests block by default...?
            if (apiRequestInProgress) {

                if (request.debug && DropVariables.isLocal) {

                    toast.warning("DEV: Api request already in progress! (return undefined)", DropVariables.toastOptionsDevs)

                }

                return undefined;

            } else if (true === (request?.blocking || false)) {

                apiRequestInProgress = true;

            }

            let querySerialized: string = tables + ' ' + JSON.stringify(query);

            let cacheResult: iCacheAPI | undefined = apiRequestCache.find(cache => cache.request === querySerialized);


            // determine if we need to paginate.
            if (requestMethod === C6.GET) {

                if (undefined === query?.[C6.PAGINATION]) {

                    if (undefined === query || null === query) {

                        query = {}

                    }

                    query[C6.PAGINATION] = {}

                }

                query[C6.PAGINATION][C6.PAGE] = query[C6.PAGINATION][C6.PAGE] || 1;

                query[C6.PAGINATION][C6.LIMIT] = query[C6.PAGINATION][C6.LIMIT] || 100;

                // this will evaluate true most the time
                if (true === request.cacheResults) {

                    // just find the next, non-fetched, page and return a function to request it
                    if (undefined !== cacheResult) {

                        do {

                            const cacheCheck = checkCache(cacheResult, requestMethod, tableName, request);

                            if (false !== cacheCheck) {

                                return cacheCheck;

                            }

                            // this line incrementing page is why we return recursively
                            ++query[C6.PAGINATION][C6.PAGE];

                            // this json stringify is to capture the new page number
                            querySerialized = tables + ' ' + JSON.stringify(query);

                            cacheResult = apiRequestCache.find(cache => cache.request === querySerialized)

                        } while (undefined !== cacheResult)

                        if (request.debug && DropVariables.isLocal) {

                            toast.warning("DEVS: Request in cache. (" + apiRequestCache.findIndex(cache => cache.request === querySerialized) + "). Returning function to request page (" + query[C6.PAGINATION][C6.PAGE] + ")", DropVariables.toastOptionsDevs);

                        }

                        // this is a global
                        apiRequestInProgress = false;

                        // @ts-ignore
                        return apiRequest;

                    }

                    apiRequestCache.push({
                        request: querySerialized
                    });

                } else {

                    if (request.debug && DropVariables.isLocal) {

                        toast.info("DEVS: Ignore cache was set to true.", DropVariables.toastOptionsDevs);

                    }

                }

                if (request.debug && DropVariables.isLocal) {

                    toast.success("DEVS: Request not in cache." + (requestMethod === C6.GET ? "Page (" + query[C6.PAGINATION][C6.PAGE] + ")." : '') + " Logging cache 2 console.", DropVariables.toastOptionsDevs);

                }

            } else if (request.cacheResults) { // if we are not getting, we are updating, deleting, or inserting

                if (cacheResult) {
                    const cacheCheck = checkCache(cacheResult, requestMethod, tableName, request);

                    if (false !== cacheCheck) {

                        return cacheCheck;

                    }
                }

                // push to cache so we do not repeat the request
                apiRequestCache.push({
                    request: querySerialized
                });

            }

            let addBackPK: (() => void) | undefined;

            let apiResponse: string | boolean | number | undefined;

            let returnGetNextPageFunction = false;

            let restRequestUri: string = DropVariables.restURI + operatingTable + '/';

            const needsConditionOrPrimaryCheck = (PUT === requestMethod || DELETE === requestMethod)
                && false === skipPrimaryCheck
                && (1 === TABLES[operatingTable]?.PRIMARY?.length ||
                    (undefined === query?.[C6.WHERE] ||
                        false === Array.isArray(query[C6.WHERE]) ||
                        query[C6.WHERE].length > 0));


            // check if PK exists in query, clone so pop does not affect the real data
            const primaryKey = structuredClone(TABLES[operatingTable]?.PRIMARY)?.pop()?.split('.')?.pop();

            if (undefined === primaryKey) {

                throw Error('Failed to parse primary key information')

            }

            if (needsConditionOrPrimaryCheck) {

                if (undefined === query || null === query
                    || false === primaryKey in query) {

                    if (true === request.debug && DropVariables.isLocal) {

                        toast.error('DEVS: The primary key (' + primaryKey + ') was not provided!!')

                    }

                    throw Error('You must provide the primary key (' + primaryKey + ') for table (' + operatingTable + '). Request (' + JSON.stringify(request, undefined, 4) + ')');

                }

                if (DropVariables.undefinedOrNull(query?.[primaryKey])) {

                    toast.error('The primary key (' + primaryKey + ') provided is undefined or null explicitly!!')

                    throw Error('The primary key (' + primaryKey + ') provided in the request was exactly equal to undefined.');

                }

            }

            if (undefined !== query && null !== query && primaryKey in query) {

                restRequestUri += query[primaryKey] + '/'

                const removedPkValue = query[primaryKey];

                addBackPK = () => {
                    query ??= {}
                    query[primaryKey] = removedPkValue
                }

                delete query[primaryKey]

            }

            try {

                console.groupCollapsed('%c API: ('+requestMethod+') Request Query for ('+operatingTable+') is about to fire, will return with promise!', 'color: #A020F0')

                console.log(request)

                console.log('%c If this is the first request for this datatype; thus the value being set is currently undefined, please remember to update the state to null.', 'color: #A020F0')

                console.log('%c Remember undefined indicated the request has not fired, null indicates the request is firing, an empty array would signal no data was returned for the sql stmt.', 'color: #A020F0')

                console.trace()

                console.groupEnd()

                const axiosActiveRequest = axios[requestMethod.toLowerCase()]<ResponseDataType>(
                    restRequestUri,
                    (() => {

                        // we had removed the value from the request to add to the URI.
                        addBackPK?.();  // adding back so post-processing methods work

                        if (requestMethod === GET) {

                            return {
                                params: query
                            }

                        } else if (requestMethod === POST) {

                            if (undefined !== request?.dataInsertMultipleRows) {

                                const insertMultiple: RestTableInterfaces[] = request.dataInsertMultipleRows.map(data =>
                                    convertForRequestBody(data as RestTableInterfaces, fullTableList, (message) => toast.error(message, DropVariables.toastOptions)))

                                return insertMultiple;

                            }

                            return convertForRequestBody(query as RestTableInterfaces, fullTableList, (message) => toast.error(message, DropVariables.toastOptions))

                        } else if (requestMethod === PUT) {

                            return convertForRequestBody(query as RestTableInterfaces, fullTableList, (message) => toast.error(message, DropVariables.toastOptions))

                        } else if (requestMethod === DELETE) {

                            return {
                                data: convertForRequestBody(query as RestTableInterfaces, fullTableList, (message) => toast.error(message, DropVariables.toastOptions))
                            }

                        }

                    })()
                );

                // https://rapidapi.com/guides/axios-async-await
                axiosActiveRequest.then(response => {

                    apiResponse = TestRestfulResponse(response, request?.success, request?.error || "An restful API error occurred!")

                    if (false !== apiResponse) {

                        responseCallback(response, request, apiResponse)

                        if (C6.GET === requestMethod) {

                            returnGetNextPageFunction = 1 !== query?.[C6.PAGINATION]?.[C6.LIMIT] &&
                                query?.[C6.PAGINATION]?.[C6.LIMIT] === response.data?.rest?.length

                            console.group('%c API: Response returned length (' + response.data?.rest?.length + ') of possible (' + query?.[C6.PAGINATION]?.[C6.LIMIT] + ') limit!', 'color: #0c0')

                            console.log('%c ' + requestMethod + ' ' + tableName, 'color: #0c0')

                            console.log('%c Request Data (note you may see the success and/or error prompt):', 'color: #0c0', request)

                            console.log('%c Response Data:', 'color: #0c0', response.data?.rest)

                            console.log('%c Will return get next page function:' + (1 !== query?.[C6.PAGINATION]?.[C6.LIMIT] ? '' : ' (Will not return with explicit limit 1 set)'), 'color: #0c0', true === returnGetNextPageFunction)

                            console.trace();

                            console.groupEnd()

                            if (false === returnGetNextPageFunction
                                && true === request.debug
                                && DropVariables.isLocal) {

                                toast.success("DEVS: Response returned length (" + response.data?.rest?.length + ") less than limit (" + query?.[C6.PAGINATION]?.[C6.LIMIT] + ").", DropVariables.toastOptionsDevs);

                            }

                        }

                    }

                    // only cache get method requests
                    if (requestMethod !== C6.GET) {

                        if (request.debug && DropVariables.isLocal) {

                            toast.success("DEVS: (" + requestMethod + ") request complete.", DropVariables.toastOptionsDevs);

                        }

                    } else {

                        apiRequestCache = [
                            ...apiRequestCache.filter(cache => cache.request !== querySerialized),
                            {
                                request: querySerialized,
                                response: response,
                                final: false === returnGetNextPageFunction
                            }
                        ];

                        if (request.debug && DropVariables.isLocal) {

                            toast.success("DEVS: Request complete.", DropVariables.toastOptionsDevs);

                        }

                    }

                    apiRequestInProgress = false;

                });

                return axiosActiveRequest

            } catch (error) {

                console.groupCollapsed('%c API: An error occurred in the try catch block. returning null!', 'color: #A020F0')

                console.log('%c ' + requestMethod + ' ' + tableName, 'color: #A020F0')

                console.warn(error)

                console.trace()

                console.groupEnd()

                TestRestfulResponse(error, request?.success, request?.error || "An restful API error occurred!")

                return null;

            }


        }

        return apiRequest()

    }


}

