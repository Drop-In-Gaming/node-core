import getCurrentLoggedInUser from "api/hoc/getCurrentLoggedInUser";
import postUserMeta from "api/rest/postUserMeta";
import putUserMeta from "api/rest/putUserMeta";
import {iUser} from "variables/sharedInterfaces";


export default async function postUpdateMetaValue(
    {
        currentEditUser,
        umeta_id,
        metaKey,
        metaValue,
    }: { currentEditUser?: iUser, umeta_id?: number, metaKey: string, metaValue: string}): Promise<boolean> {

    currentEditUser ??= getCurrentLoggedInUser();

    if (undefined === currentEditUser) {

        return false;

    }

    let success;

    // does not exist yet in meta table; add new
    if (undefined === umeta_id) {

        success = await postUserMeta({
            user_id: currentEditUser.ID,
            meta_key: metaKey,
            meta_value: metaValue,
        })

        return success.rest.created;

    }

    await putUserMeta({
        user_id: currentEditUser.ID,
        umeta_id: umeta_id,
        meta_key: metaKey,
        meta_value: metaValue,
    })

    return success

}
