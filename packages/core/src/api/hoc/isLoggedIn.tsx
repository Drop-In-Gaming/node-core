import DigApi from "DigApi";


export default function isLoggedIn() {
    return DigApi.digApi.state.id !== 0
}