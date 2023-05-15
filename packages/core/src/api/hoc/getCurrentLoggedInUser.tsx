import DigApi from "DigApi";
import {iUser} from "variables/sharedInterfaces";


export default function () : iUser | undefined {

    const bootstrap = DigApi.digApi;

    return bootstrap.state.users?.find(user => user.ID === bootstrap.state.id)

}