import {isTest} from "@drop-in-gaming/core";
import {iWithRouter, ExpandableBox} from "@drop-in-gaming/core";
import {getStyles} from "@drop-in-gaming/core";
import classNames from "classnames";

// @link https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
import requireContext from 'require-context.macro';

export const API_DOCUMENTATION_PATH = "api-documentation";

const all : any = {};

let context: __WebpackModuleApi.RequireContext;

// @link https://github.com/Drop-In-Gaming/react-web/actions/runs/4107768968/jobs/7087648207
// @todo we will need to mock the api documentation testing
if (false === isTest) {
    // @link https://github.com/webpack/webpack/issues/9300
    // do not pass only a variable to this function! (compile time oddity?)


    context = requireContext(__dirname + '/../../api/rest/validSQL', true, /.json$/)

    context.keys().forEach((key: any) => {

        const fileName = key.replace('./', '');

        if (fileName === '') {

            return;

        }

        const resource = require(`src/api/rest/validSQL/${fileName}`);

        const namespace = fileName.replace('.json', '');

        all[namespace] = JSON.parse(JSON.stringify(resource));

    });

}

interface iApiResponseLine {
    "method": "GET" | "PUT" | "POST" | "DELETE",
    "table": string,
    "CarbonPHP\\Restful\\RestSettings::$externalRestfulRequestsAPI": boolean,
    "argv": [
        any[],
        any,
        any
    ],
    "stmt": [
        string, // sql
        {
            [key: string]: string,
        }
    ]
}

let validExternalRequests : iApiResponseLine[] = []

Object.keys(all).forEach((fileName) => {

    Object.keys(all[fileName]).forEach(key => {

        Object.keys(all[fileName][key]).forEach(apiReqestInTestname => {

            if (false === Array.isArray(all[fileName][key][apiReqestInTestname])) {
                return;
            }

            all[fileName][key][apiReqestInTestname].forEach((sqlObj: any) => {

                if (true === sqlObj['CarbonPHP\\Restful\\RestSettings::$externalRestfulRequestsAPI']){
                    validExternalRequests.push(sqlObj)
                }

            });
        })

    });

})

// core components
export default function ApiDocumentation(props: iWithRouter) {

    const dig = getStyles()

    return <div className={classNames(dig.digMainBlogContent, dig.container)}>
        <div className={dig.row}>
            <div className={classNames(dig.colSm9, dig.mt5, dig.archive)}>
                <h1>Drop-In Gaming Developer API</h1>
                {validExternalRequests.map((apiResponse, index) => {


                    return <ExpandableBox startCollapsed={true} header={apiResponse.method + ': ' + apiResponse.table} key={index}>
                        <pre>
                            {JSON.stringify(apiResponse, undefined, 4)}
                        </pre>
                    </ExpandableBox>

                })}
            </div>
            <br/>
            <br/>
        </div>
    </div>
}
