import {Modify, ModifyDeep} from "api/API";
import {PLATFORM_IDS} from "api/rest/getGameList";
import {ePost} from "api/rest/getPosts";
import {tStatefulApiData} from "DigApi";
import {
    iDig_Comp_Category,
    iDig_Comp_Type,
    iDig_Competitions,
    iDig_Competitions_Meta,
    iDig_Game,
    iDig_Mode,
    iDig_Mode_Game,
    iDig_Parent_User,
    iDig_User_Allowed_Games,
    iDig_Wallet_Transactions,
    iDig_Subscription_Entry,
    iDig_Subscription_Model,
    iUsers,
    iUsermeta,
    iUm_Notifications,
    iDig_Chat_Global_Messages,
    iDig_Chat_Advertisements,
    iUm_Metadata,
    iDig_User_Team,
    iDig_Custom_Prize_Pool,
    iPosts,
    iDig_Comp_Tourneytype,
    iDig_Comp_Score,
    iDig_Team_Roster,
    iDig_Comp_Invitation,
    iDig_Match_Confirm,
    iDig_Results,
    iDig_Features,
    iDig_Groups,
    iDig_Group_References, iDig_Result_Upload, iDig_Comp_Evidence, iDig_Sub_Mode
} from "./C6";

import {ToastOptions} from "react-toastify";

export interface iMatch extends Location {
    params: any
}

export interface iChatMessages extends iDig_Chat_Global_Messages,
    iDig_Chat_Advertisements,
    iUm_Metadata,
    iUsers {
    profile_photo?: string
}

export interface iGroups extends iDig_Groups,
    Modify<iDig_Features, { feature_code?: string[] }>,
    Modify<iDig_Group_References, { allowed_to_grant_group_id?: number[] }>{
    feature_code?: string[],
    allowed_to_grant_group_id?: number[]
}

export interface iTeam
    extends iDig_User_Team {
    user_team_id: number,
    rosterAccepted?: number[],
    rosterPending?: number[],
    rosterDetails?: iDig_Team_Roster[],
    win?: string,
    lose?: string,
    cumulate_funds?: string
}


export interface iUser extends iUsers, iDig_Parent_User,
    ModifyDeep<iDig_Features, { feature_code?: string[] }>,
    ModifyDeep<iDig_Groups, { group_name?: string[] }>
{
    ID: number,
    familyName?: string,
    isParent?: boolean,
    isChild?: boolean,
    funds?: number,
    fundsToFixed?: string,
    friends?: number[],
    receivedFriendRequests?: number[],
    sentFriendRequests?: number[],
    following?: number[],
    followers?: number[],
    user_is_admin?: boolean,
    userMeta?: iUsermeta[] | null,
    umMeta?: iUm_Metadata[] | null,
    children?: number[],
    allowedGames?: iDig_User_Allowed_Games[]|null,
    history?: iDig_Wallet_Transactions[]|null,
    subscriptions?: iSubscription[]|null,
    profile_photo?: string,
    roles?: string[],
    activeSubscription?: any,
    competitions?: iCompetitions[]|null,
    teams?: iTeam[]|null,
    notifications?: iUm_Notifications[]|null,
}

export interface iSubscription extends iDig_Subscription_Model, iDig_Subscription_Entry {
    entry_active?: any
}

export interface iCompetitions extends iDig_Competitions,
    iDig_Comp_Category,
    iDig_Comp_Type,
    iDig_Competitions_Meta,
    iDig_Mode_Game,
    iDig_Game,
    iDig_Mode,
    iDig_Custom_Prize_Pool,
    iDig_Comp_Tourneytype,
    iPosts {
    comp_id: number,
    competition_title?: string,
    custom_buy_in?: string,
    competitionsMeta?: iDig_Competitions_Meta[],
    allowed_to_grant_group_id?: string;
    registered_users?: number[];
    sponsor_photo?: string;
    categories?: string;
    incomplete_teams?: number[],
    complete_teams?: number[],
    vendors?: string[],
    scores?: iDig_Comp_Score[],
    match_responses?: iDig_Match_Confirm[],
    match_dispute_evidence?: iDig_Comp_Evidence,
    match_dispute_uploads?: number[], // post ids
    score_uploads?: iDig_Result_Upload[],
    sub_mode?: iDig_Sub_Mode
}

// Only an offical interface because sorting is required. Will probably only be used in tournaments
export interface iTournamentScoring {
    teamId: number,
    scores: iDig_Comp_Score[],
    scoreTotal?: number
}


export interface iWpPost extends iPosts {
    categories: string[],
    postType: ePost,
}

export interface iGame extends iDig_Game,
    iDig_Mode_Game,
    iDig_Competitions {
    modes?: tStatefulApiData<(iDig_Mode & iDig_Mode_Game)>,
    count?: string, // todo - is this used, if so where & comment here
    [PLATFORM_IDS]?: ePLATFORM[]
}

export interface iInvitation extends iDig_Comp_Invitation {
    paid_by?: number
}

export interface iResult extends iDig_Results {
    time_delay?: number
    prize_percentage?: number
}

// Result uploads can be accessed by team, comp, or user, but by comp makes the most sense here (even if technically redundant)
export interface iResult_Upload {
    comp_id: number,
    uploads?: iDig_Result_Upload[]
}

export interface iComp_Evidence {
    comp_id: number,

}

// https://www.typescriptlang.org/docs/handbook/enums.html
export enum eCOMPETITION {
    ALL = 0,
    MATCHES = 1,
    TOURNAMENTS,
    BRACKETS
}

export enum eCOMPETITION_CATEGORY {
    ALL = 0,
    FREE = 1,
    SPECIAL = 2,
    PARTNERSHIPS = 5
}

export enum eCOMPETITION_TIMING {
    NOW,
    FUTURE,
    PAST,
    ALL
}

// gain insight file:///wp-content/themes/dropingaming/assets/react/web/assets/css/card.css
export enum eCOMPETITION_STATUS {
    WAITING,
    STARTED,
    COMPLETED,
    PAID,
    CANCELED
}

export const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
}

export enum ePLATFORM {
    PC = 1,
    PLAYSTATION = 2,
    XBOX = 3,
    SWITCH = 4,
    MOBILE = 5,
}

export enum eREGION {
    NA = 1,
    EU
}
