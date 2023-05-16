/**
 * This file is used to parse the routes provided in the routing folder (material-ui)
 * This affects the URI of the browser for the routes but not the files they reference
 * To change the 'root' context for resource files you must edit the `homepage` variable
 * in package.json
 *
 * running `npm start` will allow you dev on localhost with a root dir of `/`
 *
 */
import {getRootStyleValue, mergeStyles} from "api/hoc/styleModules";
import moment from "moment-timezone";
import {ToastOptions} from "react-toastify";
import {isPromise} from "api/API";
import isTest from "api/hoc/isTest";
import AxiosContext from "variables/AxiosContext";
import axiosInterceptors from "api/hoc/axiosInterceptors";

// do not put axiosInterceptors in AxiosContext; the tests need the order of operations switched
axiosInterceptors(AxiosContext.axiosInstance)

// this is the only page that should import styles this way, please use getStyles() so styles are not repeated in the header
import BootstrapStyle from "variables/bootstrap.module.scss"
import DropInGamingStyles from "style.module.scss"
import isAppLocal from "variables/isAppLocal";

const isGG = location.hostname.includes("dropingaming.gg");

export enum eMONEY_OUTPUT_CONTEXT {
    PAY_OUT,
    BUY_IN,
    ENTRY_FEE

}

export const momentGeneralStringFormatForMysql =  "YYYY-MM-DD HH:mm:ss";

export const DropInGamingTimeZone = "US/Pacific";


const dropStyles = mergeStyles(BootstrapStyle, DropInGamingStyles);

type tBootstrap = typeof BootstrapStyle

type tDropInGaming = typeof DropInGamingStyles

export function getStyles<iCSS extends {}>(overrides: iCSS = {} as iCSS): tBootstrap & tDropInGaming & iCSS {

    if (0 === Object.keys(overrides).length) {
        return dropStyles as (typeof dropStyles) & iCSS
    }

    return mergeStyles(dropStyles, overrides)

}

export default {
    isTest: isTest,
    verbose: isTest,
    momentGeneralDateFormat: momentGeneralStringFormatForMysql,
    convertPstToLocal: (date: string|undefined): string => undefined === date ? '' : moment.tz(date, momentGeneralStringFormatForMysql, DropInGamingTimeZone)
        .utc().utcOffset(moment().utcOffset()).format('LLL') + ' ' + moment.tz(moment.tz.guess()).zoneAbbr(),
    unixTimeUntil: (date: string): number => moment.tz(date, momentGeneralStringFormatForMysql, DropInGamingTimeZone)
        .utc().utcOffset(moment().utcOffset()).unix() - moment().utc().utcOffset(moment().utcOffset()).unix(),
    undefinedOrNull: (value: any): boolean => undefined === value || null === value,
    objectLoading: (value: any): boolean => undefined === value || null === value || Object.keys(value).length <= 1 || isPromise(value),
    axios: AxiosContext.axiosInstance,
    contextHost: window.location.protocol + "//" + window.location.hostname + ('3000' === window.location.port ? ':' + window.location.port : ''), // + ":80",
    documentationVersion: 'react',
    documentationVersionURI: 'react',
    restURI: '/rest/',
    appLocal: isAppLocal,
    isLocal: isAppLocal,
    isGG: isGG,
    isProduction: window.location.host.split(".")[0] === "www",
    socketUrl: (window.location.protocol === 'http:' ? "ws://" : 'wss://') + window.location.hostname + (window.location.protocol === 'http:' ? ":8080" : '') + window.location.pathname ,
    toastOptions: {
        position: "bottom-left",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    } as ToastOptions,
    toastOptionsDevs: {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    } as ToastOptions,

    teamSizeToReadableText: (team_size_id) => {
        switch (parseInt(team_size_id)) {
            case 1:
                return 'Solo';
            case 2:
                return 'Duos';
            case 3:
                return 'Trios';
            case 4:
                return 'Squads';
            case 5:
                return 'Fives';
            default:
                throw Error('unexpected teamSizeToReadableText argument');
        }
    },
    formatMoney: (floatAmount: string | number | undefined, format?: eMONEY_OUTPUT_CONTEXT): string => {

        if (undefined === floatAmount) {

            return '';

        }

        const floatValue = 'string' === typeof floatAmount ? parseFloat(floatAmount) : floatAmount;

        const zeroValue = floatValue <= 0;

        const moneyFormatted = (isGG || '$') + floatValue.toFixed(isGG ? 0 : 2)

        if (zeroValue) {

            if (format === eMONEY_OUTPUT_CONTEXT.BUY_IN) {
                return 'Free Buy-in'
            }

            if (format === eMONEY_OUTPUT_CONTEXT.PAY_OUT) {
                return 'Bragging Rights'
            }

            if (format === eMONEY_OUTPUT_CONTEXT.ENTRY_FEE) {
                return 'Free Entry'
            }

        }

        if (format === eMONEY_OUTPUT_CONTEXT.BUY_IN) {
            return moneyFormatted + ' Buy-in'
        }

        if (format === eMONEY_OUTPUT_CONTEXT.PAY_OUT) {
            return moneyFormatted + ' Prize'
        }

        if (format === eMONEY_OUTPUT_CONTEXT.ENTRY_FEE) {
            return moneyFormatted + ' Entry Fee'
        }

        return moneyFormatted;
    },
    printFloatingMoney: (floatAmount: number) => floatAmount.toFixed(isGG ? 0 : 2),
    ordinalSuffix: (i) => {
        // @link https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
        const j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    },
    totalPrize: (competition): number => parseFloat(competition.prize) ||
        (parseFloat(competition.buy_in) * parseInt(competition.max_players)) *
        (competition.comp_type === '2' || competition.comp_type === '3' ? (1 - parseFloat(competition.comp_percentage)) : parseInt(competition.team_size)),
    hexToRgb: (hex) => {

        hex = hex.replace(/^#+/g, '');

        const bigint = parseInt(hex, 16);

        const r = (bigint >> 16) & 255;

        const g = (bigint >> 8) & 255;

        const b = bigint & 255;

        return r + "," + g + "," + b;

    },
    getStyles: getStyles,
    getRootStyles: getRootStyleValue,
    getPrimaryColor: ()=> {
        return getRootStyleValue()
    },
};

