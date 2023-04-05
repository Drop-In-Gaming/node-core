import DigApi from "DigApi";


export default function isLoggedIn() {
    return DigApi.bootstrap.state.id !== 0
}