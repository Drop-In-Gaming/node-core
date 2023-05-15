import {iUsermeta} from "variables/C6";
import {iUser} from "variables/sharedInterfaces";

export interface iAccessMeta {
    umeta_id: number;
    key: string;
    value?: string;
}

export function getMetaValue (user: iUser, key: string): iAccessMeta  {

    const userMeta: null|undefined|Array<iUsermeta> = user?.userMeta;

    const valueObject: undefined|iUsermeta = userMeta?.find(x => x.meta_key === key);

    return {
        umeta_id: valueObject?.umeta_id,
        key: key,
        value: valueObject?.meta_value  // this could be undefined
    } as iAccessMeta;

}