import isJsonString from "api/hoc/isJsonString";
import DigApi from "DigApi";
import WebSocketGlobalListeners from "components/WebSocket/WebSocketGlobalListeners";
import { toast } from 'react-toastify';
import DropVariables from "variables/DropVariables";


/**
 * @function connect
 * This function establishes a connection with the websocket and also ensures constant reconnection if connection closes
 **/
export default function TryWebSocket() {

    const bootstrap = DigApi.bootstrap;

    if (!("WebSocket" in window)) {

        // todo - store that this has been shown in the state
        toast.error('Browser does not support websockets, live updates may fail.');

    }

    if (false === DropVariables.undefinedOrNull(bootstrap.state.websocket)) {

        return;

    }

    let that = bootstrap; // setTimeout needs `that` as it runs in its own scope

    let connectInterval;

    console.log("Connecting websocket url", DropVariables.socketUrl);

    const websocket = new WebSocket(DropVariables.socketUrl);

    bootstrap.setState({
        websocket: websocket
    }, () => {

        websocket.onopen = () => {

            console.log('WebSocket Client Connected To :: ' + DropVariables.socketUrl);

            bootstrap.setState({websocket: websocket});

            that.websocketTimeout = 250; // reset timer to 250 on open of websocket connection

            clearTimeout(connectInterval); // clear Interval on open of websocket connection

        };

        websocket.onmessage = (message: MessageEvent<string> ) => {

            const parsedData = isJsonString(message?.data) ? JSON.parse(message?.data) : message?.data;

            bootstrap.setState((prevState: Readonly<any>) => ({
                websocketEvents: prevState.websocketEvents.concat(message),
                websocketData: prevState.websocketData.concat(parsedData), // JSON.parse no good - base64?
            }));

            WebSocketGlobalListeners(parsedData)

        };

        window.addEventListener("focus", () => TryWebSocket ());

        // websocket onclose event listener
        websocket.addEventListener('close', event => {

            let reason;

            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(10000, (bootstrap.websocketTimeout + bootstrap.websocketTimeout) / 1000)} second(s).`,
                event.reason, event);

            //increment retry interval
            that.websocketTimeout += that.websocketTimeout;

            // See https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1
            switch (event.code) {
                case 1000:
                    reason = "Normal closure, meaning that the purpose for which the connection was established has been fulfilled.";
                    break;
                case 1001:
                    connectInterval = setTimeout(() => TryWebSocket(), Math.min(10000, that.websocketTimeout)); //call check function after timeout
                    reason = "An endpoint is \"going away\", such as a server going down or a browser having navigated away from a page.";
                    break;
                case 1002:
                    reason = "An endpoint is terminating the connection due to a protocol error";
                    break;
                case 1003:
                    reason = "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).";
                    break;
                case 1004:
                    reason = "Reserved. The specific meaning might be defined in the future.";
                    break;
                case 1005:
                    reason = "No status code was actually present.";
                    break;
                case 1006:
                    reason = "The connection was closed abnormally, e.g., without sending or receiving a Close control frame";
                    break;
                case 1007:
                    reason = "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [https://www.rfc-editor.org/rfc/rfc3629] data within a text message).";
                    break;
                case 1008:
                    reason = "An endpoint is terminating the connection because it has received a message that \"violates its policy\". This reason is given either if there is no other suitable reason, or if there is a need to hide specific details about the policy.";
                    break;
                case 1009:
                    reason = "An endpoint is terminating the connection because it has received a message that is too big for it to process.";
                    break;
                case 1010:
                    reason = "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason;
                    break;
                case 1011:
                    reason = "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.";
                    break;
                case 1015:
                    reason = "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).";
                    break;
                default:
                    reason = "Unknown reason";
            }

            console.log("The connection was closed for reason: " + reason);

        });

        // websocket onerror event listener
        websocket.addEventListener('websocket error', (e: Event) => {
            console.error("Socket encountered error: ", e, JSON.stringify(e));
            websocket.close();
        });

    });

}