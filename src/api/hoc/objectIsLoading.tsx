import {isPromise} from "api/API";

export default function objectIsLoading(value: any): boolean {
    return undefined === value || null === value || Object.keys(value).length <= 1 || isPromise(value)
}