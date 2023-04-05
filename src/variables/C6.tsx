
export interface stringMap {
    [key: string]: string;
}

export interface stringNumberMap {
    [key: string]: string | number;
}

export interface RegExpMap {
    [key: string]: RegExp | RegExpMap;
}

export interface complexMap {
    [key: string]: stringMap | stringNumberMap | stringMap[] | RegExpMap;
}

export interface iTypeValidation {
    MYSQL_TYPE: string,
    MAX_LENGTH: string,
    AUTO_INCREMENT: boolean,
    SKIP_COLUMN_IN_POST: boolean
}

export type RestTableNames = 'wp_zesv6j_carbon_carbons'
	| 'wp_zesv6j_carbon_comments'
	| 'wp_zesv6j_carbon_feature_group_references'
	| 'wp_zesv6j_carbon_features'
	| 'wp_zesv6j_carbon_group_references'
	| 'wp_zesv6j_carbon_groups'
	| 'wp_zesv6j_carbon_history_logs'
	| 'wp_zesv6j_carbon_location_references'
	| 'wp_zesv6j_carbon_locations'
	| 'wp_zesv6j_carbon_photos'
	| 'wp_zesv6j_carbon_reports'
	| 'wp_zesv6j_carbon_sessions'
	| 'wp_zesv6j_carbon_user_followers'
	| 'wp_zesv6j_carbon_user_groups'
	| 'wp_zesv6j_carbon_user_messages'
	| 'wp_zesv6j_carbon_user_sessions'
	| 'wp_zesv6j_carbon_user_tasks'
	| 'wp_zesv6j_carbon_users'
	| 'wp_zesv6j_commentmeta'
	| 'wp_zesv6j_comments'
	| 'wp_zesv6j_dig_advertiser_cards'
	| 'wp_zesv6j_dig_aws_servers'
	| 'wp_zesv6j_dig_categories'
	| 'wp_zesv6j_dig_chat_advertisements'
	| 'wp_zesv6j_dig_chat_global_messages'
	| 'wp_zesv6j_dig_chat_group_members'
	| 'wp_zesv6j_dig_chat_group_messages'
	| 'wp_zesv6j_dig_chat_groups'
	| 'wp_zesv6j_dig_comp_category'
	| 'wp_zesv6j_dig_competitions'
	| 'wp_zesv6j_dig_comp_evidence'
	| 'wp_zesv6j_users'
	| 'wp_zesv6j_dig_user_team'
	| 'wp_zesv6j_posts'
	| 'wp_zesv6j_dig_comp_invitation'
	| 'wp_zesv6j_dig_comp_platform'
	| 'wp_zesv6j_dig_platform'
	| 'wp_zesv6j_dig_comp_region'
	| 'wp_zesv6j_dig_region'
	| 'wp_zesv6j_dig_comp_registration'
	| 'wp_zesv6j_dig_vendor'
	| 'wp_zesv6j_dig_comp_score'
	| 'wp_zesv6j_dig_comp_single_use_passwords'
	| 'wp_zesv6j_dig_comp_team_names'
	| 'wp_zesv6j_dig_comp_tourneytype'
	| 'wp_zesv6j_dig_tourney_type'
	| 'wp_zesv6j_dig_comp_type'
	| 'wp_zesv6j_dig_mode_game'
	| 'wp_zesv6j_dig_competitions_meta'
	| 'wp_zesv6j_dig_contact_support'
	| 'wp_zesv6j_dig_custom_buy_in'
	| 'wp_zesv6j_dig_custom_prize_pool'
	| 'wp_zesv6j_dig_debit_audit'
	| 'wp_zesv6j_dig_discord_login_info'
	| 'wp_zesv6j_dig_dispute_posts'
	| 'wp_zesv6j_dig_facebook_login_info'
	| 'wp_zesv6j_dig_feature_group_references'
	| 'wp_zesv6j_dig_features'
	| 'wp_zesv6j_dig_game'
	| 'wp_zesv6j_dig_group_references'
	| 'wp_zesv6j_dig_groups'
	| 'wp_zesv6j_dig_history_logs'
	| 'wp_zesv6j_dig_match_confirm'
	| 'wp_zesv6j_dig_match_results'
	| 'wp_zesv6j_dig_mode'
	| 'wp_zesv6j_dig_nonce'
	| 'wp_zesv6j_dig_parent_user'
	| 'wp_zesv6j_dig_payout_table'
	| 'wp_zesv6j_dig_result_type'
	| 'wp_zesv6j_dig_result_upload'
	| 'wp_zesv6j_dig_results'
	| 'wp_zesv6j_dig_reward'
	| 'wp_zesv6j_dig_reward_type'
	| 'wp_zesv6j_dig_reward_challenge'
	| 'wp_zesv6j_dig_reward_origin'
	| 'wp_zesv6j_dig_reward_type_origin'
	| 'wp_zesv6j_dig_socket_channel_members'
	| 'wp_zesv6j_dig_socket_channel_messages'
	| 'wp_zesv6j_dig_socket_channels'
	| 'wp_zesv6j_dig_socket_system_messages'
	| 'wp_zesv6j_dig_sub_mode'
	| 'wp_zesv6j_dig_subscription_entry'
	| 'wp_zesv6j_dig_subscription_model'
	| 'wp_zesv6j_dig_subscription_extras'
	| 'wp_zesv6j_dig_team_size'
	| 'wp_zesv6j_dig_team_roster'
	| 'wp_zesv6j_dig_temp_invite'
	| 'wp_zesv6j_dig_tournament_payout_table'
	| 'wp_zesv6j_dig_transaction_log'
	| 'wp_zesv6j_dig_twitch_login_info'
	| 'wp_zesv6j_dig_user_allowed_games'
	| 'wp_zesv6j_dig_user_channels'
	| 'wp_zesv6j_dig_user_groups'
	| 'wp_zesv6j_dig_user_referral'
	| 'wp_zesv6j_dig_user_stats_meta'
	| 'wp_zesv6j_dig_user_team_meta'
	| 'wp_zesv6j_dig_vendor_game'
	| 'wp_zesv6j_dig_wallet_deposit_type'
	| 'wp_zesv6j_dig_wallet_transactions'
	| 'wp_zesv6j_dig_wallet_withdrawal_requests'
	| 'wp_zesv6j_dig_wallet_withdrawal_type'
	| 'wp_zesv6j_links'
	| 'wp_zesv6j_options'
	| 'wp_zesv6j_postmeta'
	| 'wp_zesv6j_term_relationships'
	| 'wp_zesv6j_term_taxonomy'
	| 'wp_zesv6j_terms'
	| 'wp_zesv6j_um_followers'
	| 'wp_zesv6j_um_friends'
	| 'wp_zesv6j_um_metadata'
	| 'wp_zesv6j_um_notifications'
	| 'wp_zesv6j_usermeta';

export type RestShortTableNames = 'carbon_carbons'
	| 'carbon_comments'
	| 'carbon_feature_group_references'
	| 'carbon_features'
	| 'carbon_group_references'
	| 'carbon_groups'
	| 'carbon_history_logs'
	| 'carbon_location_references'
	| 'carbon_locations'
	| 'carbon_photos'
	| 'carbon_reports'
	| 'carbon_sessions'
	| 'carbon_user_followers'
	| 'carbon_user_groups'
	| 'carbon_user_messages'
	| 'carbon_user_sessions'
	| 'carbon_user_tasks'
	| 'carbon_users'
	| 'commentmeta'
	| 'comments'
	| 'dig_advertiser_cards'
	| 'dig_aws_servers'
	| 'dig_categories'
	| 'dig_chat_advertisements'
	| 'dig_chat_global_messages'
	| 'dig_chat_group_members'
	| 'dig_chat_group_messages'
	| 'dig_chat_groups'
	| 'dig_comp_category'
	| 'dig_competitions'
	| 'dig_comp_evidence'
	| 'users'
	| 'dig_user_team'
	| 'posts'
	| 'dig_comp_invitation'
	| 'dig_comp_platform'
	| 'dig_platform'
	| 'dig_comp_region'
	| 'dig_region'
	| 'dig_comp_registration'
	| 'dig_vendor'
	| 'dig_comp_score'
	| 'dig_comp_single_use_passwords'
	| 'dig_comp_team_names'
	| 'dig_comp_tourneytype'
	| 'dig_tourney_type'
	| 'dig_comp_type'
	| 'dig_mode_game'
	| 'dig_competitions_meta'
	| 'dig_contact_support'
	| 'dig_custom_buy_in'
	| 'dig_custom_prize_pool'
	| 'dig_debit_audit'
	| 'dig_discord_login_info'
	| 'dig_dispute_posts'
	| 'dig_facebook_login_info'
	| 'dig_feature_group_references'
	| 'dig_features'
	| 'dig_game'
	| 'dig_group_references'
	| 'dig_groups'
	| 'dig_history_logs'
	| 'dig_match_confirm'
	| 'dig_match_results'
	| 'dig_mode'
	| 'dig_nonce'
	| 'dig_parent_user'
	| 'dig_payout_table'
	| 'dig_result_type'
	| 'dig_result_upload'
	| 'dig_results'
	| 'dig_reward'
	| 'dig_reward_type'
	| 'dig_reward_challenge'
	| 'dig_reward_origin'
	| 'dig_reward_type_origin'
	| 'dig_socket_channel_members'
	| 'dig_socket_channel_messages'
	| 'dig_socket_channels'
	| 'dig_socket_system_messages'
	| 'dig_sub_mode'
	| 'dig_subscription_entry'
	| 'dig_subscription_model'
	| 'dig_subscription_extras'
	| 'dig_team_size'
	| 'dig_team_roster'
	| 'dig_temp_invite'
	| 'dig_tournament_payout_table'
	| 'dig_transaction_log'
	| 'dig_twitch_login_info'
	| 'dig_user_allowed_games'
	| 'dig_user_channels'
	| 'dig_user_groups'
	| 'dig_user_referral'
	| 'dig_user_stats_meta'
	| 'dig_user_team_meta'
	| 'dig_vendor_game'
	| 'dig_wallet_deposit_type'
	| 'dig_wallet_transactions'
	| 'dig_wallet_withdrawal_requests'
	| 'dig_wallet_withdrawal_type'
	| 'links'
	| 'options'
	| 'postmeta'
	| 'term_relationships'
	| 'term_taxonomy'
	| 'terms'
	| 'um_followers'
	| 'um_friends'
	| 'um_metadata'
	| 'um_notifications'
	| 'usermeta';

export interface C6RestfulModel {
    TABLE_NAME: RestShortTableNames,
    PRIMARY: string[],
    COLUMNS: stringMap,
    REGEX_VALIDATION: RegExpMap,
    TYPE_VALIDATION: {[key: string]: iTypeValidation},
}



export interface  iCarbon_Carbons {
      'entity_pk'?: string;
      'entity_fk'?: string;
      'entity_tag'?: string;
}

interface iDefineCarbon_Carbons {
      'ENTITY_PK': string;
      'ENTITY_FK': string;
      'ENTITY_TAG': string;
}

export const carbon_carbons : C6RestfulModel & iDefineCarbon_Carbons = {
    TABLE_NAME:'carbon_carbons',
    ENTITY_PK: 'wp_zesv6j_carbon_carbons.entity_pk',
    ENTITY_FK: 'wp_zesv6j_carbon_carbons.entity_fk',
    ENTITY_TAG: 'wp_zesv6j_carbon_carbons.entity_tag',
    PRIMARY: [
        'wp_zesv6j_carbon_carbons.entity_pk',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_carbons.entity_pk':'entity_pk',
      'wp_zesv6j_carbon_carbons.entity_fk':'entity_fk',
      'wp_zesv6j_carbon_carbons.entity_tag':'entity_tag',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_carbons.entity_pk': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_carbons.entity_fk': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_carbons.entity_tag': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Comments {
      'parent_id'?: string;
      'comment_id'?: string;
      'user_id'?: string;
      'comment'?: string;
}

interface iDefineCarbon_Comments {
      'PARENT_ID': string;
      'COMMENT_ID': string;
      'USER_ID': string;
      'COMMENT': string;
}

export const carbon_comments : C6RestfulModel & iDefineCarbon_Comments = {
    TABLE_NAME:'carbon_comments',
    PARENT_ID: 'wp_zesv6j_carbon_comments.parent_id',
    COMMENT_ID: 'wp_zesv6j_carbon_comments.comment_id',
    USER_ID: 'wp_zesv6j_carbon_comments.user_id',
    COMMENT: 'wp_zesv6j_carbon_comments.comment',
    PRIMARY: [
        'wp_zesv6j_carbon_comments.comment_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_comments.parent_id':'parent_id',
      'wp_zesv6j_carbon_comments.comment_id':'comment_id',
      'wp_zesv6j_carbon_comments.user_id':'user_id',
      'wp_zesv6j_carbon_comments.comment':'comment',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_comments.parent_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_comments.comment_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_comments.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_comments.comment': { 
            MYSQL_TYPE: 'blob', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Feature_Group_References {
      'feature_entity_id'?: string;
      'group_entity_id'?: string;
}

interface iDefineCarbon_Feature_Group_References {
      'FEATURE_ENTITY_ID': string;
      'GROUP_ENTITY_ID': string;
}

export const carbon_feature_group_references : C6RestfulModel & iDefineCarbon_Feature_Group_References = {
    TABLE_NAME:'carbon_feature_group_references',
    FEATURE_ENTITY_ID: 'wp_zesv6j_carbon_feature_group_references.feature_entity_id',
    GROUP_ENTITY_ID: 'wp_zesv6j_carbon_feature_group_references.group_entity_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_feature_group_references.feature_entity_id':'feature_entity_id',
      'wp_zesv6j_carbon_feature_group_references.group_entity_id':'group_entity_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_feature_group_references.feature_entity_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_feature_group_references.group_entity_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Features {
      'feature_entity_id'?: string;
      'feature_code'?: string;
      'feature_creation_date'?: string;
}

interface iDefineCarbon_Features {
      'FEATURE_ENTITY_ID': string;
      'FEATURE_CODE': string;
      'FEATURE_CREATION_DATE': string;
}

export const carbon_features : C6RestfulModel & iDefineCarbon_Features = {
    TABLE_NAME:'carbon_features',
    FEATURE_ENTITY_ID: 'wp_zesv6j_carbon_features.feature_entity_id',
    FEATURE_CODE: 'wp_zesv6j_carbon_features.feature_code',
    FEATURE_CREATION_DATE: 'wp_zesv6j_carbon_features.feature_creation_date',
    PRIMARY: [
        'wp_zesv6j_carbon_features.feature_entity_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_features.feature_entity_id':'feature_entity_id',
      'wp_zesv6j_carbon_features.feature_code':'feature_code',
      'wp_zesv6j_carbon_features.feature_creation_date':'feature_creation_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_features.feature_entity_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_features.feature_code': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '30', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_features.feature_creation_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Group_References {
      'group_id'?: string;
      'allowed_to_grant_group_id'?: string;
}

interface iDefineCarbon_Group_References {
      'GROUP_ID': string;
      'ALLOWED_TO_GRANT_GROUP_ID': string;
}

export const carbon_group_references : C6RestfulModel & iDefineCarbon_Group_References = {
    TABLE_NAME:'carbon_group_references',
    GROUP_ID: 'wp_zesv6j_carbon_group_references.group_id',
    ALLOWED_TO_GRANT_GROUP_ID: 'wp_zesv6j_carbon_group_references.allowed_to_grant_group_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_group_references.group_id':'group_id',
      'wp_zesv6j_carbon_group_references.allowed_to_grant_group_id':'allowed_to_grant_group_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_group_references.group_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_group_references.allowed_to_grant_group_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Groups {
      'group_name'?: string;
      'entity_id'?: string;
      'created_by'?: string;
      'creation_date'?: string;
}

interface iDefineCarbon_Groups {
      'GROUP_NAME': string;
      'ENTITY_ID': string;
      'CREATED_BY': string;
      'CREATION_DATE': string;
}

export const carbon_groups : C6RestfulModel & iDefineCarbon_Groups = {
    TABLE_NAME:'carbon_groups',
    GROUP_NAME: 'wp_zesv6j_carbon_groups.group_name',
    ENTITY_ID: 'wp_zesv6j_carbon_groups.entity_id',
    CREATED_BY: 'wp_zesv6j_carbon_groups.created_by',
    CREATION_DATE: 'wp_zesv6j_carbon_groups.creation_date',
    PRIMARY: [
        'wp_zesv6j_carbon_groups.entity_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_groups.group_name':'group_name',
      'wp_zesv6j_carbon_groups.entity_id':'entity_id',
      'wp_zesv6j_carbon_groups.created_by':'created_by',
      'wp_zesv6j_carbon_groups.creation_date':'creation_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_groups.group_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_groups.entity_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_groups.created_by': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_groups.creation_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_History_Logs {
      'history_uuid'?: string;
      'history_table'?: string;
      'history_type'?: string;
      'history_data'?: string;
      'history_original_query'?: string;
      'history_time'?: string;
}

interface iDefineCarbon_History_Logs {
      'HISTORY_UUID': string;
      'HISTORY_TABLE': string;
      'HISTORY_TYPE': string;
      'HISTORY_DATA': string;
      'HISTORY_ORIGINAL_QUERY': string;
      'HISTORY_TIME': string;
}

export const carbon_history_logs : C6RestfulModel & iDefineCarbon_History_Logs = {
    TABLE_NAME:'carbon_history_logs',
    HISTORY_UUID: 'wp_zesv6j_carbon_history_logs.history_uuid',
    HISTORY_TABLE: 'wp_zesv6j_carbon_history_logs.history_table',
    HISTORY_TYPE: 'wp_zesv6j_carbon_history_logs.history_type',
    HISTORY_DATA: 'wp_zesv6j_carbon_history_logs.history_data',
    HISTORY_ORIGINAL_QUERY: 'wp_zesv6j_carbon_history_logs.history_original_query',
    HISTORY_TIME: 'wp_zesv6j_carbon_history_logs.history_time',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_history_logs.history_uuid':'history_uuid',
      'wp_zesv6j_carbon_history_logs.history_table':'history_table',
      'wp_zesv6j_carbon_history_logs.history_type':'history_type',
      'wp_zesv6j_carbon_history_logs.history_data':'history_data',
      'wp_zesv6j_carbon_history_logs.history_original_query':'history_original_query',
      'wp_zesv6j_carbon_history_logs.history_time':'history_time',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_history_logs.history_uuid': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_history_logs.history_table': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_history_logs.history_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_history_logs.history_data': { 
            MYSQL_TYPE: 'json', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_history_logs.history_original_query': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '1024', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_history_logs.history_time': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Location_References {
      'entity_reference'?: string;
      'location_reference'?: string;
      'location_time'?: string;
}

interface iDefineCarbon_Location_References {
      'ENTITY_REFERENCE': string;
      'LOCATION_REFERENCE': string;
      'LOCATION_TIME': string;
}

export const carbon_location_references : C6RestfulModel & iDefineCarbon_Location_References = {
    TABLE_NAME:'carbon_location_references',
    ENTITY_REFERENCE: 'wp_zesv6j_carbon_location_references.entity_reference',
    LOCATION_REFERENCE: 'wp_zesv6j_carbon_location_references.location_reference',
    LOCATION_TIME: 'wp_zesv6j_carbon_location_references.location_time',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_location_references.entity_reference':'entity_reference',
      'wp_zesv6j_carbon_location_references.location_reference':'location_reference',
      'wp_zesv6j_carbon_location_references.location_time':'location_time',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_location_references.entity_reference': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_location_references.location_reference': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_location_references.location_time': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Locations {
      'entity_id'?: string;
      'latitude'?: string;
      'longitude'?: string;
      'street'?: string;
      'city'?: string;
      'state'?: string;
      'elevation'?: string;
      'zip'?: number;
}

interface iDefineCarbon_Locations {
      'ENTITY_ID': string;
      'LATITUDE': string;
      'LONGITUDE': string;
      'STREET': string;
      'CITY': string;
      'STATE': string;
      'ELEVATION': string;
      'ZIP': string;
}

export const carbon_locations : C6RestfulModel & iDefineCarbon_Locations = {
    TABLE_NAME:'carbon_locations',
    ENTITY_ID: 'wp_zesv6j_carbon_locations.entity_id',
    LATITUDE: 'wp_zesv6j_carbon_locations.latitude',
    LONGITUDE: 'wp_zesv6j_carbon_locations.longitude',
    STREET: 'wp_zesv6j_carbon_locations.street',
    CITY: 'wp_zesv6j_carbon_locations.city',
    STATE: 'wp_zesv6j_carbon_locations.state',
    ELEVATION: 'wp_zesv6j_carbon_locations.elevation',
    ZIP: 'wp_zesv6j_carbon_locations.zip',
    PRIMARY: [
        'wp_zesv6j_carbon_locations.entity_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_locations.entity_id':'entity_id',
      'wp_zesv6j_carbon_locations.latitude':'latitude',
      'wp_zesv6j_carbon_locations.longitude':'longitude',
      'wp_zesv6j_carbon_locations.street':'street',
      'wp_zesv6j_carbon_locations.city':'city',
      'wp_zesv6j_carbon_locations.state':'state',
      'wp_zesv6j_carbon_locations.elevation':'elevation',
      'wp_zesv6j_carbon_locations.zip':'zip',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_locations.entity_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_locations.latitude': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_locations.longitude': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_locations.street': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_locations.city': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '40', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_locations.state': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '10', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_locations.elevation': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '40', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_locations.zip': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Photos {
      'parent_id'?: string;
      'photo_id'?: string;
      'user_id'?: string;
      'photo_path'?: string;
      'photo_description'?: string;
}

interface iDefineCarbon_Photos {
      'PARENT_ID': string;
      'PHOTO_ID': string;
      'USER_ID': string;
      'PHOTO_PATH': string;
      'PHOTO_DESCRIPTION': string;
}

export const carbon_photos : C6RestfulModel & iDefineCarbon_Photos = {
    TABLE_NAME:'carbon_photos',
    PARENT_ID: 'wp_zesv6j_carbon_photos.parent_id',
    PHOTO_ID: 'wp_zesv6j_carbon_photos.photo_id',
    USER_ID: 'wp_zesv6j_carbon_photos.user_id',
    PHOTO_PATH: 'wp_zesv6j_carbon_photos.photo_path',
    PHOTO_DESCRIPTION: 'wp_zesv6j_carbon_photos.photo_description',
    PRIMARY: [
        'wp_zesv6j_carbon_photos.parent_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_photos.parent_id':'parent_id',
      'wp_zesv6j_carbon_photos.photo_id':'photo_id',
      'wp_zesv6j_carbon_photos.user_id':'user_id',
      'wp_zesv6j_carbon_photos.photo_path':'photo_path',
      'wp_zesv6j_carbon_photos.photo_description':'photo_description',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_photos.parent_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_photos.photo_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_photos.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_photos.photo_path': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_photos.photo_description': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Reports {
      'log_level'?: string;
      'report'?: string;
      'date'?: string;
      'call_trace'?: string;
}

interface iDefineCarbon_Reports {
      'LOG_LEVEL': string;
      'REPORT': string;
      'DATE': string;
      'CALL_TRACE': string;
}

export const carbon_reports : C6RestfulModel & iDefineCarbon_Reports = {
    TABLE_NAME:'carbon_reports',
    LOG_LEVEL: 'wp_zesv6j_carbon_reports.log_level',
    REPORT: 'wp_zesv6j_carbon_reports.report',
    DATE: 'wp_zesv6j_carbon_reports.date',
    CALL_TRACE: 'wp_zesv6j_carbon_reports.call_trace',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_reports.log_level':'log_level',
      'wp_zesv6j_carbon_reports.report':'report',
      'wp_zesv6j_carbon_reports.date':'date',
      'wp_zesv6j_carbon_reports.call_trace':'call_trace',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_reports.log_level': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_reports.report': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_reports.date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_reports.call_trace': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Sessions {
      'user_id'?: string;
      'user_ip'?: string;
      'session_id'?: string;
      'session_expires'?: string;
      'session_data'?: string;
      'user_online_status'?: number;
}

interface iDefineCarbon_Sessions {
      'USER_ID': string;
      'USER_IP': string;
      'SESSION_ID': string;
      'SESSION_EXPIRES': string;
      'SESSION_DATA': string;
      'USER_ONLINE_STATUS': string;
}

export const carbon_sessions : C6RestfulModel & iDefineCarbon_Sessions = {
    TABLE_NAME:'carbon_sessions',
    USER_ID: 'wp_zesv6j_carbon_sessions.user_id',
    USER_IP: 'wp_zesv6j_carbon_sessions.user_ip',
    SESSION_ID: 'wp_zesv6j_carbon_sessions.session_id',
    SESSION_EXPIRES: 'wp_zesv6j_carbon_sessions.session_expires',
    SESSION_DATA: 'wp_zesv6j_carbon_sessions.session_data',
    USER_ONLINE_STATUS: 'wp_zesv6j_carbon_sessions.user_online_status',
    PRIMARY: [
        'wp_zesv6j_carbon_sessions.session_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_sessions.user_id':'user_id',
      'wp_zesv6j_carbon_sessions.user_ip':'user_ip',
      'wp_zesv6j_carbon_sessions.session_id':'session_id',
      'wp_zesv6j_carbon_sessions.session_expires':'session_expires',
      'wp_zesv6j_carbon_sessions.session_data':'session_data',
      'wp_zesv6j_carbon_sessions.user_online_status':'user_online_status',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_sessions.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_sessions.user_ip': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_sessions.session_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_sessions.session_expires': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_sessions.session_data': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_sessions.user_online_status': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_User_Followers {
      'follower_table_id'?: string;
      'follows_user_id'?: string;
      'user_id'?: string;
}

interface iDefineCarbon_User_Followers {
      'FOLLOWER_TABLE_ID': string;
      'FOLLOWS_USER_ID': string;
      'USER_ID': string;
}

export const carbon_user_followers : C6RestfulModel & iDefineCarbon_User_Followers = {
    TABLE_NAME:'carbon_user_followers',
    FOLLOWER_TABLE_ID: 'wp_zesv6j_carbon_user_followers.follower_table_id',
    FOLLOWS_USER_ID: 'wp_zesv6j_carbon_user_followers.follows_user_id',
    USER_ID: 'wp_zesv6j_carbon_user_followers.user_id',
    PRIMARY: [
        'wp_zesv6j_carbon_user_followers.follower_table_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_user_followers.follower_table_id':'follower_table_id',
      'wp_zesv6j_carbon_user_followers.follows_user_id':'follows_user_id',
      'wp_zesv6j_carbon_user_followers.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_user_followers.follower_table_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_followers.follows_user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_followers.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_User_Groups {
      'group_id'?: string;
      'user_id'?: string;
}

interface iDefineCarbon_User_Groups {
      'GROUP_ID': string;
      'USER_ID': string;
}

export const carbon_user_groups : C6RestfulModel & iDefineCarbon_User_Groups = {
    TABLE_NAME:'carbon_user_groups',
    GROUP_ID: 'wp_zesv6j_carbon_user_groups.group_id',
    USER_ID: 'wp_zesv6j_carbon_user_groups.user_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_user_groups.group_id':'group_id',
      'wp_zesv6j_carbon_user_groups.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_user_groups.group_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_groups.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_User_Messages {
      'message_id'?: string;
      'from_user_id'?: string;
      'to_user_id'?: string;
      'message'?: string;
      'message_read'?: number;
      'creation_date'?: string;
}

interface iDefineCarbon_User_Messages {
      'MESSAGE_ID': string;
      'FROM_USER_ID': string;
      'TO_USER_ID': string;
      'MESSAGE': string;
      'MESSAGE_READ': string;
      'CREATION_DATE': string;
}

export const carbon_user_messages : C6RestfulModel & iDefineCarbon_User_Messages = {
    TABLE_NAME:'carbon_user_messages',
    MESSAGE_ID: 'wp_zesv6j_carbon_user_messages.message_id',
    FROM_USER_ID: 'wp_zesv6j_carbon_user_messages.from_user_id',
    TO_USER_ID: 'wp_zesv6j_carbon_user_messages.to_user_id',
    MESSAGE: 'wp_zesv6j_carbon_user_messages.message',
    MESSAGE_READ: 'wp_zesv6j_carbon_user_messages.message_read',
    CREATION_DATE: 'wp_zesv6j_carbon_user_messages.creation_date',
    PRIMARY: [
        'wp_zesv6j_carbon_user_messages.message_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_user_messages.message_id':'message_id',
      'wp_zesv6j_carbon_user_messages.from_user_id':'from_user_id',
      'wp_zesv6j_carbon_user_messages.to_user_id':'to_user_id',
      'wp_zesv6j_carbon_user_messages.message':'message',
      'wp_zesv6j_carbon_user_messages.message_read':'message_read',
      'wp_zesv6j_carbon_user_messages.creation_date':'creation_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_user_messages.message_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_messages.from_user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_messages.to_user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_messages.message': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_messages.message_read': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_messages.creation_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_User_Sessions {
      'user_id'?: string;
      'user_ip'?: string;
      'session_id'?: string;
      'session_expires'?: string;
      'session_data'?: string;
      'user_online_status'?: number;
}

interface iDefineCarbon_User_Sessions {
      'USER_ID': string;
      'USER_IP': string;
      'SESSION_ID': string;
      'SESSION_EXPIRES': string;
      'SESSION_DATA': string;
      'USER_ONLINE_STATUS': string;
}

export const carbon_user_sessions : C6RestfulModel & iDefineCarbon_User_Sessions = {
    TABLE_NAME:'carbon_user_sessions',
    USER_ID: 'wp_zesv6j_carbon_user_sessions.user_id',
    USER_IP: 'wp_zesv6j_carbon_user_sessions.user_ip',
    SESSION_ID: 'wp_zesv6j_carbon_user_sessions.session_id',
    SESSION_EXPIRES: 'wp_zesv6j_carbon_user_sessions.session_expires',
    SESSION_DATA: 'wp_zesv6j_carbon_user_sessions.session_data',
    USER_ONLINE_STATUS: 'wp_zesv6j_carbon_user_sessions.user_online_status',
    PRIMARY: [
        'wp_zesv6j_carbon_user_sessions.session_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_user_sessions.user_id':'user_id',
      'wp_zesv6j_carbon_user_sessions.user_ip':'user_ip',
      'wp_zesv6j_carbon_user_sessions.session_id':'session_id',
      'wp_zesv6j_carbon_user_sessions.session_expires':'session_expires',
      'wp_zesv6j_carbon_user_sessions.session_data':'session_data',
      'wp_zesv6j_carbon_user_sessions.user_online_status':'user_online_status',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_user_sessions.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_sessions.user_ip': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_sessions.session_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_sessions.session_expires': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_sessions.session_data': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_sessions.user_online_status': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_User_Tasks {
      'task_id'?: string;
      'user_id'?: string;
      'from_id'?: string;
      'task_name'?: string;
      'task_description'?: string;
      'percent_complete'?: number;
      'start_date'?: string;
      'end_date'?: string;
}

interface iDefineCarbon_User_Tasks {
      'TASK_ID': string;
      'USER_ID': string;
      'FROM_ID': string;
      'TASK_NAME': string;
      'TASK_DESCRIPTION': string;
      'PERCENT_COMPLETE': string;
      'START_DATE': string;
      'END_DATE': string;
}

export const carbon_user_tasks : C6RestfulModel & iDefineCarbon_User_Tasks = {
    TABLE_NAME:'carbon_user_tasks',
    TASK_ID: 'wp_zesv6j_carbon_user_tasks.task_id',
    USER_ID: 'wp_zesv6j_carbon_user_tasks.user_id',
    FROM_ID: 'wp_zesv6j_carbon_user_tasks.from_id',
    TASK_NAME: 'wp_zesv6j_carbon_user_tasks.task_name',
    TASK_DESCRIPTION: 'wp_zesv6j_carbon_user_tasks.task_description',
    PERCENT_COMPLETE: 'wp_zesv6j_carbon_user_tasks.percent_complete',
    START_DATE: 'wp_zesv6j_carbon_user_tasks.start_date',
    END_DATE: 'wp_zesv6j_carbon_user_tasks.end_date',
    PRIMARY: [
        'wp_zesv6j_carbon_user_tasks.task_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_user_tasks.task_id':'task_id',
      'wp_zesv6j_carbon_user_tasks.user_id':'user_id',
      'wp_zesv6j_carbon_user_tasks.from_id':'from_id',
      'wp_zesv6j_carbon_user_tasks.task_name':'task_name',
      'wp_zesv6j_carbon_user_tasks.task_description':'task_description',
      'wp_zesv6j_carbon_user_tasks.percent_complete':'percent_complete',
      'wp_zesv6j_carbon_user_tasks.start_date':'start_date',
      'wp_zesv6j_carbon_user_tasks.end_date':'end_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_user_tasks.task_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_tasks.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_tasks.from_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_tasks.task_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '40', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_user_tasks.task_description': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_tasks.percent_complete': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_tasks.start_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_user_tasks.end_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCarbon_Users {
      'user_username'?: string;
      'user_password'?: string;
      'user_id'?: string;
      'user_type'?: string;
      'user_sport'?: string;
      'user_session_id'?: string;
      'user_facebook_id'?: string;
      'user_first_name'?: string;
      'user_last_name'?: string;
      'user_profile_pic'?: string;
      'user_profile_uri'?: string;
      'user_cover_photo'?: string;
      'user_birthday'?: string;
      'user_gender'?: string;
      'user_about_me'?: string;
      'user_rank'?: number;
      'user_email'?: string;
      'user_email_code'?: string;
      'user_email_confirmed'?: number;
      'user_generated_string'?: string;
      'user_membership'?: number;
      'user_deactivated'?: number;
      'user_last_login'?: string;
      'user_ip'?: string;
      'user_education_history'?: string;
      'user_location'?: string;
      'user_creation_date'?: string;
}

interface iDefineCarbon_Users {
      'USER_USERNAME': string;
      'USER_PASSWORD': string;
      'USER_ID': string;
      'USER_TYPE': string;
      'USER_SPORT': string;
      'USER_SESSION_ID': string;
      'USER_FACEBOOK_ID': string;
      'USER_FIRST_NAME': string;
      'USER_LAST_NAME': string;
      'USER_PROFILE_PIC': string;
      'USER_PROFILE_URI': string;
      'USER_COVER_PHOTO': string;
      'USER_BIRTHDAY': string;
      'USER_GENDER': string;
      'USER_ABOUT_ME': string;
      'USER_RANK': string;
      'USER_EMAIL': string;
      'USER_EMAIL_CODE': string;
      'USER_EMAIL_CONFIRMED': string;
      'USER_GENERATED_STRING': string;
      'USER_MEMBERSHIP': string;
      'USER_DEACTIVATED': string;
      'USER_LAST_LOGIN': string;
      'USER_IP': string;
      'USER_EDUCATION_HISTORY': string;
      'USER_LOCATION': string;
      'USER_CREATION_DATE': string;
}

export const carbon_users : C6RestfulModel & iDefineCarbon_Users = {
    TABLE_NAME:'carbon_users',
    USER_USERNAME: 'wp_zesv6j_carbon_users.user_username',
    USER_PASSWORD: 'wp_zesv6j_carbon_users.user_password',
    USER_ID: 'wp_zesv6j_carbon_users.user_id',
    USER_TYPE: 'wp_zesv6j_carbon_users.user_type',
    USER_SPORT: 'wp_zesv6j_carbon_users.user_sport',
    USER_SESSION_ID: 'wp_zesv6j_carbon_users.user_session_id',
    USER_FACEBOOK_ID: 'wp_zesv6j_carbon_users.user_facebook_id',
    USER_FIRST_NAME: 'wp_zesv6j_carbon_users.user_first_name',
    USER_LAST_NAME: 'wp_zesv6j_carbon_users.user_last_name',
    USER_PROFILE_PIC: 'wp_zesv6j_carbon_users.user_profile_pic',
    USER_PROFILE_URI: 'wp_zesv6j_carbon_users.user_profile_uri',
    USER_COVER_PHOTO: 'wp_zesv6j_carbon_users.user_cover_photo',
    USER_BIRTHDAY: 'wp_zesv6j_carbon_users.user_birthday',
    USER_GENDER: 'wp_zesv6j_carbon_users.user_gender',
    USER_ABOUT_ME: 'wp_zesv6j_carbon_users.user_about_me',
    USER_RANK: 'wp_zesv6j_carbon_users.user_rank',
    USER_EMAIL: 'wp_zesv6j_carbon_users.user_email',
    USER_EMAIL_CODE: 'wp_zesv6j_carbon_users.user_email_code',
    USER_EMAIL_CONFIRMED: 'wp_zesv6j_carbon_users.user_email_confirmed',
    USER_GENERATED_STRING: 'wp_zesv6j_carbon_users.user_generated_string',
    USER_MEMBERSHIP: 'wp_zesv6j_carbon_users.user_membership',
    USER_DEACTIVATED: 'wp_zesv6j_carbon_users.user_deactivated',
    USER_LAST_LOGIN: 'wp_zesv6j_carbon_users.user_last_login',
    USER_IP: 'wp_zesv6j_carbon_users.user_ip',
    USER_EDUCATION_HISTORY: 'wp_zesv6j_carbon_users.user_education_history',
    USER_LOCATION: 'wp_zesv6j_carbon_users.user_location',
    USER_CREATION_DATE: 'wp_zesv6j_carbon_users.user_creation_date',
    PRIMARY: [
        'wp_zesv6j_carbon_users.user_id',
    ],
    COLUMNS: {
      'wp_zesv6j_carbon_users.user_username':'user_username',
      'wp_zesv6j_carbon_users.user_password':'user_password',
      'wp_zesv6j_carbon_users.user_id':'user_id',
      'wp_zesv6j_carbon_users.user_type':'user_type',
      'wp_zesv6j_carbon_users.user_sport':'user_sport',
      'wp_zesv6j_carbon_users.user_session_id':'user_session_id',
      'wp_zesv6j_carbon_users.user_facebook_id':'user_facebook_id',
      'wp_zesv6j_carbon_users.user_first_name':'user_first_name',
      'wp_zesv6j_carbon_users.user_last_name':'user_last_name',
      'wp_zesv6j_carbon_users.user_profile_pic':'user_profile_pic',
      'wp_zesv6j_carbon_users.user_profile_uri':'user_profile_uri',
      'wp_zesv6j_carbon_users.user_cover_photo':'user_cover_photo',
      'wp_zesv6j_carbon_users.user_birthday':'user_birthday',
      'wp_zesv6j_carbon_users.user_gender':'user_gender',
      'wp_zesv6j_carbon_users.user_about_me':'user_about_me',
      'wp_zesv6j_carbon_users.user_rank':'user_rank',
      'wp_zesv6j_carbon_users.user_email':'user_email',
      'wp_zesv6j_carbon_users.user_email_code':'user_email_code',
      'wp_zesv6j_carbon_users.user_email_confirmed':'user_email_confirmed',
      'wp_zesv6j_carbon_users.user_generated_string':'user_generated_string',
      'wp_zesv6j_carbon_users.user_membership':'user_membership',
      'wp_zesv6j_carbon_users.user_deactivated':'user_deactivated',
      'wp_zesv6j_carbon_users.user_last_login':'user_last_login',
      'wp_zesv6j_carbon_users.user_ip':'user_ip',
      'wp_zesv6j_carbon_users.user_education_history':'user_education_history',
      'wp_zesv6j_carbon_users.user_location':'user_location',
      'wp_zesv6j_carbon_users.user_creation_date':'user_creation_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_carbon_users.user_username': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_password': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_sport': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_session_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_facebook_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_first_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_last_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_profile_pic': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_profile_uri': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_cover_photo': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_birthday': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '9', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_gender': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_about_me': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_rank': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '50', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_email_code': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '225', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_email_confirmed': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_generated_string': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '200', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_membership': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_deactivated': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_last_login': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_ip': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_carbon_users.user_education_history': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '200', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_location': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_carbon_users.user_creation_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iCommentmeta {
      'meta_id'?: number;
      'comment_id'?: number;
      'meta_key'?: string;
      'meta_value'?: string;
}

interface iDefineCommentmeta {
      'META_ID': string;
      'COMMENT_ID': string;
      'META_KEY': string;
      'META_VALUE': string;
}

export const commentmeta : C6RestfulModel & iDefineCommentmeta = {
    TABLE_NAME:'commentmeta',
    META_ID: 'wp_zesv6j_commentmeta.meta_id',
    COMMENT_ID: 'wp_zesv6j_commentmeta.comment_id',
    META_KEY: 'wp_zesv6j_commentmeta.meta_key',
    META_VALUE: 'wp_zesv6j_commentmeta.meta_value',
    PRIMARY: [
        'wp_zesv6j_commentmeta.meta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_commentmeta.meta_id':'meta_id',
      'wp_zesv6j_commentmeta.comment_id':'comment_id',
      'wp_zesv6j_commentmeta.meta_key':'meta_key',
      'wp_zesv6j_commentmeta.meta_value':'meta_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_commentmeta.meta_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_commentmeta.comment_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_commentmeta.meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_commentmeta.meta_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iComments {
      'comment_ID'?: number;
      'comment_post_ID'?: number;
      'comment_author'?: string;
      'comment_author_email'?: string;
      'comment_author_url'?: string;
      'comment_author_IP'?: string;
      'comment_date'?: string;
      'comment_date_gmt'?: string;
      'comment_content'?: string;
      'comment_karma'?: number;
      'comment_approved'?: string;
      'comment_agent'?: string;
      'comment_type'?: string;
      'comment_parent'?: number;
      'user_id'?: number;
}

interface iDefineComments {
      'COMMENT_ID': string;
      'COMMENT_POST_ID': string;
      'COMMENT_AUTHOR': string;
      'COMMENT_AUTHOR_EMAIL': string;
      'COMMENT_AUTHOR_URL': string;
      'COMMENT_AUTHOR_IP': string;
      'COMMENT_DATE': string;
      'COMMENT_DATE_GMT': string;
      'COMMENT_CONTENT': string;
      'COMMENT_KARMA': string;
      'COMMENT_APPROVED': string;
      'COMMENT_AGENT': string;
      'COMMENT_TYPE': string;
      'COMMENT_PARENT': string;
      'USER_ID': string;
}

export const comments : C6RestfulModel & iDefineComments = {
    TABLE_NAME:'comments',
    COMMENT_ID: 'wp_zesv6j_comments.comment_ID',
    COMMENT_POST_ID: 'wp_zesv6j_comments.comment_post_ID',
    COMMENT_AUTHOR: 'wp_zesv6j_comments.comment_author',
    COMMENT_AUTHOR_EMAIL: 'wp_zesv6j_comments.comment_author_email',
    COMMENT_AUTHOR_URL: 'wp_zesv6j_comments.comment_author_url',
    COMMENT_AUTHOR_IP: 'wp_zesv6j_comments.comment_author_IP',
    COMMENT_DATE: 'wp_zesv6j_comments.comment_date',
    COMMENT_DATE_GMT: 'wp_zesv6j_comments.comment_date_gmt',
    COMMENT_CONTENT: 'wp_zesv6j_comments.comment_content',
    COMMENT_KARMA: 'wp_zesv6j_comments.comment_karma',
    COMMENT_APPROVED: 'wp_zesv6j_comments.comment_approved',
    COMMENT_AGENT: 'wp_zesv6j_comments.comment_agent',
    COMMENT_TYPE: 'wp_zesv6j_comments.comment_type',
    COMMENT_PARENT: 'wp_zesv6j_comments.comment_parent',
    USER_ID: 'wp_zesv6j_comments.user_id',
    PRIMARY: [
        'wp_zesv6j_comments.comment_ID',
    ],
    COLUMNS: {
      'wp_zesv6j_comments.comment_ID':'comment_ID',
      'wp_zesv6j_comments.comment_post_ID':'comment_post_ID',
      'wp_zesv6j_comments.comment_author':'comment_author',
      'wp_zesv6j_comments.comment_author_email':'comment_author_email',
      'wp_zesv6j_comments.comment_author_url':'comment_author_url',
      'wp_zesv6j_comments.comment_author_IP':'comment_author_IP',
      'wp_zesv6j_comments.comment_date':'comment_date',
      'wp_zesv6j_comments.comment_date_gmt':'comment_date_gmt',
      'wp_zesv6j_comments.comment_content':'comment_content',
      'wp_zesv6j_comments.comment_karma':'comment_karma',
      'wp_zesv6j_comments.comment_approved':'comment_approved',
      'wp_zesv6j_comments.comment_agent':'comment_agent',
      'wp_zesv6j_comments.comment_type':'comment_type',
      'wp_zesv6j_comments.comment_parent':'comment_parent',
      'wp_zesv6j_comments.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_comments.comment_ID': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_post_ID': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_author': { 
            MYSQL_TYPE: 'tinytext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_comments.comment_author_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_author_url': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '200', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_author_IP': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_date_gmt': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_content': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_comments.comment_karma': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_approved': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_agent': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.comment_parent': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_comments.user_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Advertiser_Cards {
      'id'?: number;
      'photo'?: string;
      'link'?: string;
      'description'?: string;
      'position'?: number;
      'start'?: string;
      'end'?: string;
      'comp_type_ids'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Advertiser_Cards {
      'ID': string;
      'PHOTO': string;
      'LINK': string;
      'DESCRIPTION': string;
      'POSITION': string;
      'START': string;
      'END': string;
      'COMP_TYPE_IDS': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_advertiser_cards : C6RestfulModel & iDefineDig_Advertiser_Cards = {
    TABLE_NAME:'dig_advertiser_cards',
    ID: 'wp_zesv6j_dig_advertiser_cards.id',
    PHOTO: 'wp_zesv6j_dig_advertiser_cards.photo',
    LINK: 'wp_zesv6j_dig_advertiser_cards.link',
    DESCRIPTION: 'wp_zesv6j_dig_advertiser_cards.description',
    POSITION: 'wp_zesv6j_dig_advertiser_cards.position',
    START: 'wp_zesv6j_dig_advertiser_cards.start',
    END: 'wp_zesv6j_dig_advertiser_cards.end',
    COMP_TYPE_IDS: 'wp_zesv6j_dig_advertiser_cards.comp_type_ids',
    CREATED: 'wp_zesv6j_dig_advertiser_cards.created',
    UPDATED: 'wp_zesv6j_dig_advertiser_cards.updated',
    PRIMARY: [
        'wp_zesv6j_dig_advertiser_cards.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_advertiser_cards.id':'id',
      'wp_zesv6j_dig_advertiser_cards.photo':'photo',
      'wp_zesv6j_dig_advertiser_cards.link':'link',
      'wp_zesv6j_dig_advertiser_cards.description':'description',
      'wp_zesv6j_dig_advertiser_cards.position':'position',
      'wp_zesv6j_dig_advertiser_cards.start':'start',
      'wp_zesv6j_dig_advertiser_cards.end':'end',
      'wp_zesv6j_dig_advertiser_cards.comp_type_ids':'comp_type_ids',
      'wp_zesv6j_dig_advertiser_cards.created':'created',
      'wp_zesv6j_dig_advertiser_cards.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_advertiser_cards.id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_advertiser_cards.photo': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_advertiser_cards.link': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_advertiser_cards.description': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_advertiser_cards.position': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_advertiser_cards.start': { 
            MYSQL_TYPE: 'date', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_advertiser_cards.end': { 
            MYSQL_TYPE: 'date', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_advertiser_cards.comp_type_ids': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_advertiser_cards.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_advertiser_cards.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Aws_Servers {
      'server_instance_id'?: string;
      'server_version'?: string;
      'server_ami_id'?: string;
      'server_recipe_version'?: string;
      'server_vpc_id'?: string;
      'server_account'?: string;
      'server_environment'?: string;
      'server_instance_profile_name'?: string;
      'server_min_size'?: number;
      'server_max_size'?: number;
      'server_desired_capacity'?: number;
      'server_demand_base_capacity'?: number;
      'server_demand_percent_above_base'?: number;
      'server_ec2_avail_zone'?: string;
      'server_ec2_region'?: string;
      'server_main'?: number;
      'server_document_root'?: string;
      'server_created'?: string;
      'server_modified'?: string;
      'server_public_ipv4'?: string;
      'server_private_ipv4'?: string;
      'server_active'?: number;
}

interface iDefineDig_Aws_Servers {
      'SERVER_INSTANCE_ID': string;
      'SERVER_VERSION': string;
      'SERVER_AMI_ID': string;
      'SERVER_RECIPE_VERSION': string;
      'SERVER_VPC_ID': string;
      'SERVER_ACCOUNT': string;
      'SERVER_ENVIRONMENT': string;
      'SERVER_INSTANCE_PROFILE_NAME': string;
      'SERVER_MIN_SIZE': string;
      'SERVER_MAX_SIZE': string;
      'SERVER_DESIRED_CAPACITY': string;
      'SERVER_DEMAND_BASE_CAPACITY': string;
      'SERVER_DEMAND_PERCENT_ABOVE_BASE': string;
      'SERVER_EC2_AVAIL_ZONE': string;
      'SERVER_EC2_REGION': string;
      'SERVER_MAIN': string;
      'SERVER_DOCUMENT_ROOT': string;
      'SERVER_CREATED': string;
      'SERVER_MODIFIED': string;
      'SERVER_PUBLIC_IPV4': string;
      'SERVER_PRIVATE_IPV4': string;
      'SERVER_ACTIVE': string;
}

export const dig_aws_servers : C6RestfulModel & iDefineDig_Aws_Servers = {
    TABLE_NAME:'dig_aws_servers',
    SERVER_INSTANCE_ID: 'wp_zesv6j_dig_aws_servers.server_instance_id',
    SERVER_VERSION: 'wp_zesv6j_dig_aws_servers.server_version',
    SERVER_AMI_ID: 'wp_zesv6j_dig_aws_servers.server_ami_id',
    SERVER_RECIPE_VERSION: 'wp_zesv6j_dig_aws_servers.server_recipe_version',
    SERVER_VPC_ID: 'wp_zesv6j_dig_aws_servers.server_vpc_id',
    SERVER_ACCOUNT: 'wp_zesv6j_dig_aws_servers.server_account',
    SERVER_ENVIRONMENT: 'wp_zesv6j_dig_aws_servers.server_environment',
    SERVER_INSTANCE_PROFILE_NAME: 'wp_zesv6j_dig_aws_servers.server_instance_profile_name',
    SERVER_MIN_SIZE: 'wp_zesv6j_dig_aws_servers.server_min_size',
    SERVER_MAX_SIZE: 'wp_zesv6j_dig_aws_servers.server_max_size',
    SERVER_DESIRED_CAPACITY: 'wp_zesv6j_dig_aws_servers.server_desired_capacity',
    SERVER_DEMAND_BASE_CAPACITY: 'wp_zesv6j_dig_aws_servers.server_demand_base_capacity',
    SERVER_DEMAND_PERCENT_ABOVE_BASE: 'wp_zesv6j_dig_aws_servers.server_demand_percent_above_base',
    SERVER_EC2_AVAIL_ZONE: 'wp_zesv6j_dig_aws_servers.server_ec2_avail_zone',
    SERVER_EC2_REGION: 'wp_zesv6j_dig_aws_servers.server_ec2_region',
    SERVER_MAIN: 'wp_zesv6j_dig_aws_servers.server_main',
    SERVER_DOCUMENT_ROOT: 'wp_zesv6j_dig_aws_servers.server_document_root',
    SERVER_CREATED: 'wp_zesv6j_dig_aws_servers.server_created',
    SERVER_MODIFIED: 'wp_zesv6j_dig_aws_servers.server_modified',
    SERVER_PUBLIC_IPV4: 'wp_zesv6j_dig_aws_servers.server_public_ipv4',
    SERVER_PRIVATE_IPV4: 'wp_zesv6j_dig_aws_servers.server_private_ipv4',
    SERVER_ACTIVE: 'wp_zesv6j_dig_aws_servers.server_active',
    PRIMARY: [
        'wp_zesv6j_dig_aws_servers.server_instance_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_aws_servers.server_instance_id':'server_instance_id',
      'wp_zesv6j_dig_aws_servers.server_version':'server_version',
      'wp_zesv6j_dig_aws_servers.server_ami_id':'server_ami_id',
      'wp_zesv6j_dig_aws_servers.server_recipe_version':'server_recipe_version',
      'wp_zesv6j_dig_aws_servers.server_vpc_id':'server_vpc_id',
      'wp_zesv6j_dig_aws_servers.server_account':'server_account',
      'wp_zesv6j_dig_aws_servers.server_environment':'server_environment',
      'wp_zesv6j_dig_aws_servers.server_instance_profile_name':'server_instance_profile_name',
      'wp_zesv6j_dig_aws_servers.server_min_size':'server_min_size',
      'wp_zesv6j_dig_aws_servers.server_max_size':'server_max_size',
      'wp_zesv6j_dig_aws_servers.server_desired_capacity':'server_desired_capacity',
      'wp_zesv6j_dig_aws_servers.server_demand_base_capacity':'server_demand_base_capacity',
      'wp_zesv6j_dig_aws_servers.server_demand_percent_above_base':'server_demand_percent_above_base',
      'wp_zesv6j_dig_aws_servers.server_ec2_avail_zone':'server_ec2_avail_zone',
      'wp_zesv6j_dig_aws_servers.server_ec2_region':'server_ec2_region',
      'wp_zesv6j_dig_aws_servers.server_main':'server_main',
      'wp_zesv6j_dig_aws_servers.server_document_root':'server_document_root',
      'wp_zesv6j_dig_aws_servers.server_created':'server_created',
      'wp_zesv6j_dig_aws_servers.server_modified':'server_modified',
      'wp_zesv6j_dig_aws_servers.server_public_ipv4':'server_public_ipv4',
      'wp_zesv6j_dig_aws_servers.server_private_ipv4':'server_private_ipv4',
      'wp_zesv6j_dig_aws_servers.server_active':'server_active',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_aws_servers.server_instance_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_aws_servers.server_version': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '10', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_ami_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_recipe_version': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_vpc_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_account': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_environment': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_instance_profile_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_min_size': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_max_size': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_desired_capacity': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_demand_base_capacity': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_demand_percent_above_base': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_ec2_avail_zone': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_ec2_region': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_main': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_document_root': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_public_ipv4': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '15', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_private_ipv4': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '15', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_aws_servers.server_active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Categories {
      'id'?: number;
      'category_name'?: string;
      'category_code'?: string;
      'description'?: string;
      'cat_order'?: number;
      'parent'?: number;
      'header_background_image'?: string;
      'featured_image'?: string;
      'card_image'?: string;
      'metadata'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Categories {
      'ID': string;
      'CATEGORY_NAME': string;
      'CATEGORY_CODE': string;
      'DESCRIPTION': string;
      'CAT_ORDER': string;
      'PARENT': string;
      'HEADER_BACKGROUND_IMAGE': string;
      'FEATURED_IMAGE': string;
      'CARD_IMAGE': string;
      'METADATA': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_categories : C6RestfulModel & iDefineDig_Categories = {
    TABLE_NAME:'dig_categories',
    ID: 'wp_zesv6j_dig_categories.id',
    CATEGORY_NAME: 'wp_zesv6j_dig_categories.category_name',
    CATEGORY_CODE: 'wp_zesv6j_dig_categories.category_code',
    DESCRIPTION: 'wp_zesv6j_dig_categories.description',
    CAT_ORDER: 'wp_zesv6j_dig_categories.cat_order',
    PARENT: 'wp_zesv6j_dig_categories.parent',
    HEADER_BACKGROUND_IMAGE: 'wp_zesv6j_dig_categories.header_background_image',
    FEATURED_IMAGE: 'wp_zesv6j_dig_categories.featured_image',
    CARD_IMAGE: 'wp_zesv6j_dig_categories.card_image',
    METADATA: 'wp_zesv6j_dig_categories.metadata',
    CREATED: 'wp_zesv6j_dig_categories.created',
    UPDATED: 'wp_zesv6j_dig_categories.updated',
    PRIMARY: [
        'wp_zesv6j_dig_categories.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_categories.id':'id',
      'wp_zesv6j_dig_categories.category_name':'category_name',
      'wp_zesv6j_dig_categories.category_code':'category_code',
      'wp_zesv6j_dig_categories.description':'description',
      'wp_zesv6j_dig_categories.cat_order':'cat_order',
      'wp_zesv6j_dig_categories.parent':'parent',
      'wp_zesv6j_dig_categories.header_background_image':'header_background_image',
      'wp_zesv6j_dig_categories.featured_image':'featured_image',
      'wp_zesv6j_dig_categories.card_image':'card_image',
      'wp_zesv6j_dig_categories.metadata':'metadata',
      'wp_zesv6j_dig_categories.created':'created',
      'wp_zesv6j_dig_categories.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_categories.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.category_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_categories.category_code': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_categories.description': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_categories.cat_order': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_categories.parent': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.header_background_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.featured_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.card_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.metadata': { 
            MYSQL_TYPE: 'json', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_categories.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Chat_Advertisements {
      'advertisement_id'?: number;
      'advertisement_image'?: string;
      'advertisement_link'?: string;
      'created_at'?: string;
      'modified_at'?: string;
      'last_shown_at'?: string;
      'advertisement_active'?: number;
      'advertisement_alt_text'?: string;
      'advertisement_increment'?: number;
}

interface iDefineDig_Chat_Advertisements {
      'ADVERTISEMENT_ID': string;
      'ADVERTISEMENT_IMAGE': string;
      'ADVERTISEMENT_LINK': string;
      'CREATED_AT': string;
      'MODIFIED_AT': string;
      'LAST_SHOWN_AT': string;
      'ADVERTISEMENT_ACTIVE': string;
      'ADVERTISEMENT_ALT_TEXT': string;
      'ADVERTISEMENT_INCREMENT': string;
}

export const dig_chat_advertisements : C6RestfulModel & iDefineDig_Chat_Advertisements = {
    TABLE_NAME:'dig_chat_advertisements',
    ADVERTISEMENT_ID: 'wp_zesv6j_dig_chat_advertisements.advertisement_id',
    ADVERTISEMENT_IMAGE: 'wp_zesv6j_dig_chat_advertisements.advertisement_image',
    ADVERTISEMENT_LINK: 'wp_zesv6j_dig_chat_advertisements.advertisement_link',
    CREATED_AT: 'wp_zesv6j_dig_chat_advertisements.created_at',
    MODIFIED_AT: 'wp_zesv6j_dig_chat_advertisements.modified_at',
    LAST_SHOWN_AT: 'wp_zesv6j_dig_chat_advertisements.last_shown_at',
    ADVERTISEMENT_ACTIVE: 'wp_zesv6j_dig_chat_advertisements.advertisement_active',
    ADVERTISEMENT_ALT_TEXT: 'wp_zesv6j_dig_chat_advertisements.advertisement_alt_text',
    ADVERTISEMENT_INCREMENT: 'wp_zesv6j_dig_chat_advertisements.advertisement_increment',
    PRIMARY: [
        'wp_zesv6j_dig_chat_advertisements.advertisement_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_chat_advertisements.advertisement_id':'advertisement_id',
      'wp_zesv6j_dig_chat_advertisements.advertisement_image':'advertisement_image',
      'wp_zesv6j_dig_chat_advertisements.advertisement_link':'advertisement_link',
      'wp_zesv6j_dig_chat_advertisements.created_at':'created_at',
      'wp_zesv6j_dig_chat_advertisements.modified_at':'modified_at',
      'wp_zesv6j_dig_chat_advertisements.last_shown_at':'last_shown_at',
      'wp_zesv6j_dig_chat_advertisements.advertisement_active':'advertisement_active',
      'wp_zesv6j_dig_chat_advertisements.advertisement_alt_text':'advertisement_alt_text',
      'wp_zesv6j_dig_chat_advertisements.advertisement_increment':'advertisement_increment',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_chat_advertisements.advertisement_id': { 
            MYSQL_TYPE: 'smallint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_advertisements.advertisement_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_advertisements.advertisement_link': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_advertisements.created_at': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_advertisements.modified_at': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_advertisements.last_shown_at': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_advertisements.advertisement_active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_advertisements.advertisement_alt_text': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_advertisements.advertisement_increment': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Chat_Global_Messages {
      'global_message_id'?: string;
      'global_message_from_user'?: number;
      'global_message'?: string;
      'global_message_datetime'?: string;
      'global_message_advertisement'?: number;
}

interface iDefineDig_Chat_Global_Messages {
      'GLOBAL_MESSAGE_ID': string;
      'GLOBAL_MESSAGE_FROM_USER': string;
      'GLOBAL_MESSAGE': string;
      'GLOBAL_MESSAGE_DATETIME': string;
      'GLOBAL_MESSAGE_ADVERTISEMENT': string;
}

export const dig_chat_global_messages : C6RestfulModel & iDefineDig_Chat_Global_Messages = {
    TABLE_NAME:'dig_chat_global_messages',
    GLOBAL_MESSAGE_ID: 'wp_zesv6j_dig_chat_global_messages.global_message_id',
    GLOBAL_MESSAGE_FROM_USER: 'wp_zesv6j_dig_chat_global_messages.global_message_from_user',
    GLOBAL_MESSAGE: 'wp_zesv6j_dig_chat_global_messages.global_message',
    GLOBAL_MESSAGE_DATETIME: 'wp_zesv6j_dig_chat_global_messages.global_message_datetime',
    GLOBAL_MESSAGE_ADVERTISEMENT: 'wp_zesv6j_dig_chat_global_messages.global_message_advertisement',
    PRIMARY: [
        'wp_zesv6j_dig_chat_global_messages.global_message_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_chat_global_messages.global_message_id':'global_message_id',
      'wp_zesv6j_dig_chat_global_messages.global_message_from_user':'global_message_from_user',
      'wp_zesv6j_dig_chat_global_messages.global_message':'global_message',
      'wp_zesv6j_dig_chat_global_messages.global_message_datetime':'global_message_datetime',
      'wp_zesv6j_dig_chat_global_messages.global_message_advertisement':'global_message_advertisement',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_chat_global_messages.global_message_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_global_messages.global_message_from_user': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_global_messages.global_message': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_global_messages.global_message_datetime': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_global_messages.global_message_advertisement': { 
            MYSQL_TYPE: 'smallint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
        'wp_zesv6j_dig_chat_global_messages.global_message': {
            '': /^(?!fuck)/i,
        }
    }

}

  

export interface  iDig_Chat_Group_Members {
      'group_id'?: string;
      'user_id'?: number;
}

interface iDefineDig_Chat_Group_Members {
      'GROUP_ID': string;
      'USER_ID': string;
}

export const dig_chat_group_members : C6RestfulModel & iDefineDig_Chat_Group_Members = {
    TABLE_NAME:'dig_chat_group_members',
    GROUP_ID: 'wp_zesv6j_dig_chat_group_members.group_id',
    USER_ID: 'wp_zesv6j_dig_chat_group_members.user_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_dig_chat_group_members.group_id':'group_id',
      'wp_zesv6j_dig_chat_group_members.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_chat_group_members.group_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_group_members.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Chat_Group_Messages {
      'group_message_id'?: string;
      'group_message_from_user'?: number;
      'group_message_to_group'?: string;
      'group_message'?: string;
}

interface iDefineDig_Chat_Group_Messages {
      'GROUP_MESSAGE_ID': string;
      'GROUP_MESSAGE_FROM_USER': string;
      'GROUP_MESSAGE_TO_GROUP': string;
      'GROUP_MESSAGE': string;
}

export const dig_chat_group_messages : C6RestfulModel & iDefineDig_Chat_Group_Messages = {
    TABLE_NAME:'dig_chat_group_messages',
    GROUP_MESSAGE_ID: 'wp_zesv6j_dig_chat_group_messages.group_message_id',
    GROUP_MESSAGE_FROM_USER: 'wp_zesv6j_dig_chat_group_messages.group_message_from_user',
    GROUP_MESSAGE_TO_GROUP: 'wp_zesv6j_dig_chat_group_messages.group_message_to_group',
    GROUP_MESSAGE: 'wp_zesv6j_dig_chat_group_messages.group_message',
    PRIMARY: [
        'wp_zesv6j_dig_chat_group_messages.group_message_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_chat_group_messages.group_message_id':'group_message_id',
      'wp_zesv6j_dig_chat_group_messages.group_message_from_user':'group_message_from_user',
      'wp_zesv6j_dig_chat_group_messages.group_message_to_group':'group_message_to_group',
      'wp_zesv6j_dig_chat_group_messages.group_message':'group_message',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_chat_group_messages.group_message_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_group_messages.group_message_from_user': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_group_messages.group_message_to_group': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_group_messages.group_message': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Chat_Groups {
      'group_id'?: string;
      'group_name'?: string;
      'group_active'?: number;
}

interface iDefineDig_Chat_Groups {
      'GROUP_ID': string;
      'GROUP_NAME': string;
      'GROUP_ACTIVE': string;
}

export const dig_chat_groups : C6RestfulModel & iDefineDig_Chat_Groups = {
    TABLE_NAME:'dig_chat_groups',
    GROUP_ID: 'wp_zesv6j_dig_chat_groups.group_id',
    GROUP_NAME: 'wp_zesv6j_dig_chat_groups.group_name',
    GROUP_ACTIVE: 'wp_zesv6j_dig_chat_groups.group_active',
    PRIMARY: [
        'wp_zesv6j_dig_chat_groups.group_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_chat_groups.group_id':'group_id',
      'wp_zesv6j_dig_chat_groups.group_name':'group_name',
      'wp_zesv6j_dig_chat_groups.group_active':'group_active',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_chat_groups.group_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_chat_groups.group_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '42', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_chat_groups.group_active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Category {
      'id'?: number;
      'comp_id'?: number;
      'cat_id'?: number;
}

interface iDefineDig_Comp_Category {
      'ID': string;
      'COMP_ID': string;
      'CAT_ID': string;
}

export const dig_comp_category : C6RestfulModel & iDefineDig_Comp_Category = {
    TABLE_NAME:'dig_comp_category',
    ID: 'wp_zesv6j_dig_comp_category.id',
    COMP_ID: 'wp_zesv6j_dig_comp_category.comp_id',
    CAT_ID: 'wp_zesv6j_dig_comp_category.cat_id',
    PRIMARY: [
        'wp_zesv6j_dig_comp_category.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_category.id':'id',
      'wp_zesv6j_dig_comp_category.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_category.cat_id':'cat_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_category.id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_category.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_category.cat_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Competitions {
      'comp_id'?: number;
      'comp_type_id'?: number;
      'mode_game_id'?: number;
      'best_of'?: number;
      'now_flag'?: number;
      'datetime'?: string;
      'public'?: number;
      'pin'?: number;
      'organizer_id'?: number;
      'status'?: number;
      'deleted'?: number;
      'created'?: string;
      'modified'?: string;
      'buy_in'?: string;
      'parent_comp'?: number;
}

interface iDefineDig_Competitions {
      'COMP_ID': string;
      'COMP_TYPE_ID': string;
      'MODE_GAME_ID': string;
      'BEST_OF': string;
      'NOW_FLAG': string;
      'DATETIME': string;
      'PUBLIC': string;
      'PIN': string;
      'ORGANIZER_ID': string;
      'STATUS': string;
      'DELETED': string;
      'CREATED': string;
      'MODIFIED': string;
      'BUY_IN': string;
      'PARENT_COMP': string;
}

export const dig_competitions : C6RestfulModel & iDefineDig_Competitions = {
    TABLE_NAME:'dig_competitions',
    COMP_ID: 'wp_zesv6j_dig_competitions.comp_id',
    COMP_TYPE_ID: 'wp_zesv6j_dig_competitions.comp_type_id',
    MODE_GAME_ID: 'wp_zesv6j_dig_competitions.mode_game_id',
    BEST_OF: 'wp_zesv6j_dig_competitions.best_of',
    NOW_FLAG: 'wp_zesv6j_dig_competitions.now_flag',
    DATETIME: 'wp_zesv6j_dig_competitions.datetime',
    PUBLIC: 'wp_zesv6j_dig_competitions.public',
    PIN: 'wp_zesv6j_dig_competitions.pin',
    ORGANIZER_ID: 'wp_zesv6j_dig_competitions.organizer_id',
    STATUS: 'wp_zesv6j_dig_competitions.status',
    DELETED: 'wp_zesv6j_dig_competitions.deleted',
    CREATED: 'wp_zesv6j_dig_competitions.created',
    MODIFIED: 'wp_zesv6j_dig_competitions.modified',
    BUY_IN: 'wp_zesv6j_dig_competitions.buy_in',
    PARENT_COMP: 'wp_zesv6j_dig_competitions.parent_comp',
    PRIMARY: [
        'wp_zesv6j_dig_competitions.comp_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_competitions.comp_id':'comp_id',
      'wp_zesv6j_dig_competitions.comp_type_id':'comp_type_id',
      'wp_zesv6j_dig_competitions.mode_game_id':'mode_game_id',
      'wp_zesv6j_dig_competitions.best_of':'best_of',
      'wp_zesv6j_dig_competitions.now_flag':'now_flag',
      'wp_zesv6j_dig_competitions.datetime':'datetime',
      'wp_zesv6j_dig_competitions.public':'public',
      'wp_zesv6j_dig_competitions.pin':'pin',
      'wp_zesv6j_dig_competitions.organizer_id':'organizer_id',
      'wp_zesv6j_dig_competitions.status':'status',
      'wp_zesv6j_dig_competitions.deleted':'deleted',
      'wp_zesv6j_dig_competitions.created':'created',
      'wp_zesv6j_dig_competitions.modified':'modified',
      'wp_zesv6j_dig_competitions.buy_in':'buy_in',
      'wp_zesv6j_dig_competitions.parent_comp':'parent_comp',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_competitions.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.comp_type_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_competitions.mode_game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_competitions.best_of': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.now_flag': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.datetime': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_competitions.public': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.pin': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_competitions.organizer_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_competitions.status': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.deleted': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.buy_in': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions.parent_comp': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Evidence {
      'comp_id'?: number;
      'user_id'?: number;
      'team_id'?: number;
      'evidence_post'?: number;
      'evidence_desc'?: string;
      'evidence_external_url'?: string;
}

interface iDefineDig_Comp_Evidence {
      'COMP_ID': string;
      'USER_ID': string;
      'TEAM_ID': string;
      'EVIDENCE_POST': string;
      'EVIDENCE_DESC': string;
      'EVIDENCE_EXTERNAL_URL': string;
}

export const dig_comp_evidence : C6RestfulModel & iDefineDig_Comp_Evidence = {
    TABLE_NAME:'dig_comp_evidence',
    COMP_ID: 'wp_zesv6j_dig_comp_evidence.comp_id',
    USER_ID: 'wp_zesv6j_dig_comp_evidence.user_id',
    TEAM_ID: 'wp_zesv6j_dig_comp_evidence.team_id',
    EVIDENCE_POST: 'wp_zesv6j_dig_comp_evidence.evidence_post',
    EVIDENCE_DESC: 'wp_zesv6j_dig_comp_evidence.evidence_desc',
    EVIDENCE_EXTERNAL_URL: 'wp_zesv6j_dig_comp_evidence.evidence_external_url',
    PRIMARY: [
        'wp_zesv6j_dig_comp_evidence.comp_id',
        'wp_zesv6j_dig_comp_evidence.user_id',
        'wp_zesv6j_dig_comp_evidence.team_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_evidence.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_evidence.user_id':'user_id',
      'wp_zesv6j_dig_comp_evidence.team_id':'team_id',
      'wp_zesv6j_dig_comp_evidence.evidence_post':'evidence_post',
      'wp_zesv6j_dig_comp_evidence.evidence_desc':'evidence_desc',
      'wp_zesv6j_dig_comp_evidence.evidence_external_url':'evidence_external_url',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_evidence.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_evidence.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_evidence.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_evidence.evidence_post': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_evidence.evidence_desc': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '2048', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_evidence.evidence_external_url': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '2048', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iUsers {
      'ID'?: number;
      'user_login'?: string;
      'user_pass'?: string;
      'user_nicename'?: string;
      'user_email'?: string;
      'user_url'?: string;
      'user_registered'?: string;
      'user_activation_key'?: string;
      'user_status'?: number;
      'display_name'?: string;
}

interface iDefineUsers {
      'ID': string;
      'USER_LOGIN': string;
      'USER_PASS': string;
      'USER_NICENAME': string;
      'USER_EMAIL': string;
      'USER_URL': string;
      'USER_REGISTERED': string;
      'USER_ACTIVATION_KEY': string;
      'USER_STATUS': string;
      'DISPLAY_NAME': string;
}

export const users : C6RestfulModel & iDefineUsers = {
    TABLE_NAME:'users',
    ID: 'wp_zesv6j_users.ID',
    USER_LOGIN: 'wp_zesv6j_users.user_login',
    USER_PASS: 'wp_zesv6j_users.user_pass',
    USER_NICENAME: 'wp_zesv6j_users.user_nicename',
    USER_EMAIL: 'wp_zesv6j_users.user_email',
    USER_URL: 'wp_zesv6j_users.user_url',
    USER_REGISTERED: 'wp_zesv6j_users.user_registered',
    USER_ACTIVATION_KEY: 'wp_zesv6j_users.user_activation_key',
    USER_STATUS: 'wp_zesv6j_users.user_status',
    DISPLAY_NAME: 'wp_zesv6j_users.display_name',
    PRIMARY: [
        'wp_zesv6j_users.ID',
    ],
    COLUMNS: {
      'wp_zesv6j_users.ID':'ID',
      'wp_zesv6j_users.user_login':'user_login',
      'wp_zesv6j_users.user_pass':'user_pass',
      'wp_zesv6j_users.user_nicename':'user_nicename',
      'wp_zesv6j_users.user_email':'user_email',
      'wp_zesv6j_users.user_url':'user_url',
      'wp_zesv6j_users.user_registered':'user_registered',
      'wp_zesv6j_users.user_activation_key':'user_activation_key',
      'wp_zesv6j_users.user_status':'user_status',
      'wp_zesv6j_users.display_name':'display_name',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_users.ID': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_login': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '60', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_pass': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_nicename': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '50', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_url': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_registered': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_activation_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.user_status': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_users.display_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '250', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
        'wp_zesv6j_users.user_pass': {
            'Your password must contain at least one lowercase letter!': /^.*[a-z].*$/,
'Your password must contain at least one uppercase letter!': /^.*[A-Z].*$/,
'Your password must contain at least one digit (0-9)!': /^.*[0-9].*$/,
'Your password must contain at least one special symbol (-!@#$%^&amp;*[])!': /^.*[!\-@#$%^&amp;*[\]].*$/,
'Your password must be at least 8 characters long!': /^.{8,}$/,
        }
    }

}

  

export interface  iDig_User_Team {
      'user_team_id'?: number;
      'uid'?: number;
      'team_name'?: string;
      'team_desc'?: string;
      'team_picture'?: string;
      'team_type'?: number;
      'hide'?: number;
      'team_size_id'?: number;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_User_Team {
      'USER_TEAM_ID': string;
      'UID': string;
      'TEAM_NAME': string;
      'TEAM_DESC': string;
      'TEAM_PICTURE': string;
      'TEAM_TYPE': string;
      'HIDE': string;
      'TEAM_SIZE_ID': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_user_team : C6RestfulModel & iDefineDig_User_Team = {
    TABLE_NAME:'dig_user_team',
    USER_TEAM_ID: 'wp_zesv6j_dig_user_team.user_team_id',
    UID: 'wp_zesv6j_dig_user_team.uid',
    TEAM_NAME: 'wp_zesv6j_dig_user_team.team_name',
    TEAM_DESC: 'wp_zesv6j_dig_user_team.team_desc',
    TEAM_PICTURE: 'wp_zesv6j_dig_user_team.team_picture',
    TEAM_TYPE: 'wp_zesv6j_dig_user_team.team_type',
    HIDE: 'wp_zesv6j_dig_user_team.hide',
    TEAM_SIZE_ID: 'wp_zesv6j_dig_user_team.team_size_id',
    CREATED: 'wp_zesv6j_dig_user_team.created',
    UPDATED: 'wp_zesv6j_dig_user_team.updated',
    PRIMARY: [
        'wp_zesv6j_dig_user_team.user_team_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_team.user_team_id':'user_team_id',
      'wp_zesv6j_dig_user_team.uid':'uid',
      'wp_zesv6j_dig_user_team.team_name':'team_name',
      'wp_zesv6j_dig_user_team.team_desc':'team_desc',
      'wp_zesv6j_dig_user_team.team_picture':'team_picture',
      'wp_zesv6j_dig_user_team.team_type':'team_type',
      'wp_zesv6j_dig_user_team.hide':'hide',
      'wp_zesv6j_dig_user_team.team_size_id':'team_size_id',
      'wp_zesv6j_dig_user_team.created':'created',
      'wp_zesv6j_dig_user_team.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_team.user_team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_team.uid': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_team.team_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_team.team_desc': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_team.team_picture': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_team.team_type': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_team.hide': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_team.team_size_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_team.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_team.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iPosts {
      'ID'?: number;
      'post_author'?: number;
      'post_date'?: string;
      'post_date_gmt'?: string;
      'post_content'?: string;
      'post_title'?: string;
      'post_excerpt'?: string;
      'post_status'?: string;
      'comment_status'?: string;
      'ping_status'?: string;
      'post_password'?: string;
      'post_name'?: string;
      'to_ping'?: string;
      'pinged'?: string;
      'post_modified'?: string;
      'post_modified_gmt'?: string;
      'post_content_filtered'?: string;
      'post_parent'?: number;
      'guid'?: string;
      'menu_order'?: number;
      'post_type'?: string;
      'post_mime_type'?: string;
      'comment_count'?: number;
}

interface iDefinePosts {
      'ID': string;
      'POST_AUTHOR': string;
      'POST_DATE': string;
      'POST_DATE_GMT': string;
      'POST_CONTENT': string;
      'POST_TITLE': string;
      'POST_EXCERPT': string;
      'POST_STATUS': string;
      'COMMENT_STATUS': string;
      'PING_STATUS': string;
      'POST_PASSWORD': string;
      'POST_NAME': string;
      'TO_PING': string;
      'PINGED': string;
      'POST_MODIFIED': string;
      'POST_MODIFIED_GMT': string;
      'POST_CONTENT_FILTERED': string;
      'POST_PARENT': string;
      'GUID': string;
      'MENU_ORDER': string;
      'POST_TYPE': string;
      'POST_MIME_TYPE': string;
      'COMMENT_COUNT': string;
}

export const posts : C6RestfulModel & iDefinePosts = {
    TABLE_NAME:'posts',
    ID: 'wp_zesv6j_posts.ID',
    POST_AUTHOR: 'wp_zesv6j_posts.post_author',
    POST_DATE: 'wp_zesv6j_posts.post_date',
    POST_DATE_GMT: 'wp_zesv6j_posts.post_date_gmt',
    POST_CONTENT: 'wp_zesv6j_posts.post_content',
    POST_TITLE: 'wp_zesv6j_posts.post_title',
    POST_EXCERPT: 'wp_zesv6j_posts.post_excerpt',
    POST_STATUS: 'wp_zesv6j_posts.post_status',
    COMMENT_STATUS: 'wp_zesv6j_posts.comment_status',
    PING_STATUS: 'wp_zesv6j_posts.ping_status',
    POST_PASSWORD: 'wp_zesv6j_posts.post_password',
    POST_NAME: 'wp_zesv6j_posts.post_name',
    TO_PING: 'wp_zesv6j_posts.to_ping',
    PINGED: 'wp_zesv6j_posts.pinged',
    POST_MODIFIED: 'wp_zesv6j_posts.post_modified',
    POST_MODIFIED_GMT: 'wp_zesv6j_posts.post_modified_gmt',
    POST_CONTENT_FILTERED: 'wp_zesv6j_posts.post_content_filtered',
    POST_PARENT: 'wp_zesv6j_posts.post_parent',
    GUID: 'wp_zesv6j_posts.guid',
    MENU_ORDER: 'wp_zesv6j_posts.menu_order',
    POST_TYPE: 'wp_zesv6j_posts.post_type',
    POST_MIME_TYPE: 'wp_zesv6j_posts.post_mime_type',
    COMMENT_COUNT: 'wp_zesv6j_posts.comment_count',
    PRIMARY: [
        'wp_zesv6j_posts.ID',
    ],
    COLUMNS: {
      'wp_zesv6j_posts.ID':'ID',
      'wp_zesv6j_posts.post_author':'post_author',
      'wp_zesv6j_posts.post_date':'post_date',
      'wp_zesv6j_posts.post_date_gmt':'post_date_gmt',
      'wp_zesv6j_posts.post_content':'post_content',
      'wp_zesv6j_posts.post_title':'post_title',
      'wp_zesv6j_posts.post_excerpt':'post_excerpt',
      'wp_zesv6j_posts.post_status':'post_status',
      'wp_zesv6j_posts.comment_status':'comment_status',
      'wp_zesv6j_posts.ping_status':'ping_status',
      'wp_zesv6j_posts.post_password':'post_password',
      'wp_zesv6j_posts.post_name':'post_name',
      'wp_zesv6j_posts.to_ping':'to_ping',
      'wp_zesv6j_posts.pinged':'pinged',
      'wp_zesv6j_posts.post_modified':'post_modified',
      'wp_zesv6j_posts.post_modified_gmt':'post_modified_gmt',
      'wp_zesv6j_posts.post_content_filtered':'post_content_filtered',
      'wp_zesv6j_posts.post_parent':'post_parent',
      'wp_zesv6j_posts.guid':'guid',
      'wp_zesv6j_posts.menu_order':'menu_order',
      'wp_zesv6j_posts.post_type':'post_type',
      'wp_zesv6j_posts.post_mime_type':'post_mime_type',
      'wp_zesv6j_posts.comment_count':'comment_count',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_posts.ID': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_author': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_date_gmt': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_content': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_posts.post_title': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_posts.post_excerpt': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_posts.post_status': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.comment_status': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.ping_status': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_password': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '200', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.to_ping': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_posts.pinged': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_posts.post_modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_modified_gmt': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_content_filtered': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_posts.post_parent': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.guid': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.menu_order': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.post_mime_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_posts.comment_count': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Invitation {
      'invitation_id'?: number;
      'user_id'?: number;
      'comp_id'?: number;
      'team_id'?: number;
      'sender_id'?: number;
      'invitation_type'?: string;
      'token'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Comp_Invitation {
      'INVITATION_ID': string;
      'USER_ID': string;
      'COMP_ID': string;
      'TEAM_ID': string;
      'SENDER_ID': string;
      'INVITATION_TYPE': string;
      'TOKEN': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_comp_invitation : C6RestfulModel & iDefineDig_Comp_Invitation = {
    TABLE_NAME:'dig_comp_invitation',
    INVITATION_ID: 'wp_zesv6j_dig_comp_invitation.invitation_id',
    USER_ID: 'wp_zesv6j_dig_comp_invitation.user_id',
    COMP_ID: 'wp_zesv6j_dig_comp_invitation.comp_id',
    TEAM_ID: 'wp_zesv6j_dig_comp_invitation.team_id',
    SENDER_ID: 'wp_zesv6j_dig_comp_invitation.sender_id',
    INVITATION_TYPE: 'wp_zesv6j_dig_comp_invitation.invitation_type',
    TOKEN: 'wp_zesv6j_dig_comp_invitation.token',
    CREATED: 'wp_zesv6j_dig_comp_invitation.created',
    UPDATED: 'wp_zesv6j_dig_comp_invitation.updated',
    PRIMARY: [
        'wp_zesv6j_dig_comp_invitation.invitation_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_invitation.invitation_id':'invitation_id',
      'wp_zesv6j_dig_comp_invitation.user_id':'user_id',
      'wp_zesv6j_dig_comp_invitation.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_invitation.team_id':'team_id',
      'wp_zesv6j_dig_comp_invitation.sender_id':'sender_id',
      'wp_zesv6j_dig_comp_invitation.invitation_type':'invitation_type',
      'wp_zesv6j_dig_comp_invitation.token':'token',
      'wp_zesv6j_dig_comp_invitation.created':'created',
      'wp_zesv6j_dig_comp_invitation.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_invitation.invitation_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_invitation.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.sender_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.invitation_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.token': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_invitation.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Platform {
      'comp_id'?: number;
      'platform_id'?: number;
}

interface iDefineDig_Comp_Platform {
      'COMP_ID': string;
      'PLATFORM_ID': string;
}

export const dig_comp_platform : C6RestfulModel & iDefineDig_Comp_Platform = {
    TABLE_NAME:'dig_comp_platform',
    COMP_ID: 'wp_zesv6j_dig_comp_platform.comp_id',
    PLATFORM_ID: 'wp_zesv6j_dig_comp_platform.platform_id',
    PRIMARY: [
        'wp_zesv6j_dig_comp_platform.comp_id',
        'wp_zesv6j_dig_comp_platform.platform_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_platform.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_platform.platform_id':'platform_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_platform.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_platform.platform_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Platform {
      'platform_id'?: number;
      'platform_name'?: string;
}

interface iDefineDig_Platform {
      'PLATFORM_ID': string;
      'PLATFORM_NAME': string;
}

export const dig_platform : C6RestfulModel & iDefineDig_Platform = {
    TABLE_NAME:'dig_platform',
    PLATFORM_ID: 'wp_zesv6j_dig_platform.platform_id',
    PLATFORM_NAME: 'wp_zesv6j_dig_platform.platform_name',
    PRIMARY: [
        'wp_zesv6j_dig_platform.platform_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_platform.platform_id':'platform_id',
      'wp_zesv6j_dig_platform.platform_name':'platform_name',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_platform.platform_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_platform.platform_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Region {
      'region_id'?: number;
      'comp_id'?: number;
}

interface iDefineDig_Comp_Region {
      'REGION_ID': string;
      'COMP_ID': string;
}

export const dig_comp_region : C6RestfulModel & iDefineDig_Comp_Region = {
    TABLE_NAME:'dig_comp_region',
    REGION_ID: 'wp_zesv6j_dig_comp_region.region_id',
    COMP_ID: 'wp_zesv6j_dig_comp_region.comp_id',
    PRIMARY: [
        'wp_zesv6j_dig_comp_region.region_id',
        'wp_zesv6j_dig_comp_region.comp_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_region.region_id':'region_id',
      'wp_zesv6j_dig_comp_region.comp_id':'comp_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_region.region_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_region.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Region {
      'region_id'?: number;
      'region_name'?: string;
}

interface iDefineDig_Region {
      'REGION_ID': string;
      'REGION_NAME': string;
}

export const dig_region : C6RestfulModel & iDefineDig_Region = {
    TABLE_NAME:'dig_region',
    REGION_ID: 'wp_zesv6j_dig_region.region_id',
    REGION_NAME: 'wp_zesv6j_dig_region.region_name',
    PRIMARY: [
        'wp_zesv6j_dig_region.region_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_region.region_id':'region_id',
      'wp_zesv6j_dig_region.region_name':'region_name',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_region.region_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_region.region_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '50', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Registration {
      'comp_registration_id'?: number;
      'user_id'?: number;
      'competitions_id'?: number;
      'team_id'?: number;
      'position'?: number;
      'created'?: string;
      'updated'?: string;
      'vendor_id'?: number;
      'vendor_gamertag'?: string;
      'streaming_platform'?: string;
      'streaming_url'?: string;
      'team_full_timestamp'?: string;
}

interface iDefineDig_Comp_Registration {
      'COMP_REGISTRATION_ID': string;
      'USER_ID': string;
      'COMPETITIONS_ID': string;
      'TEAM_ID': string;
      'POSITION': string;
      'CREATED': string;
      'UPDATED': string;
      'VENDOR_ID': string;
      'VENDOR_GAMERTAG': string;
      'STREAMING_PLATFORM': string;
      'STREAMING_URL': string;
      'TEAM_FULL_TIMESTAMP': string;
}

export const dig_comp_registration : C6RestfulModel & iDefineDig_Comp_Registration = {
    TABLE_NAME:'dig_comp_registration',
    COMP_REGISTRATION_ID: 'wp_zesv6j_dig_comp_registration.comp_registration_id',
    USER_ID: 'wp_zesv6j_dig_comp_registration.user_id',
    COMPETITIONS_ID: 'wp_zesv6j_dig_comp_registration.competitions_id',
    TEAM_ID: 'wp_zesv6j_dig_comp_registration.team_id',
    POSITION: 'wp_zesv6j_dig_comp_registration.position',
    CREATED: 'wp_zesv6j_dig_comp_registration.created',
    UPDATED: 'wp_zesv6j_dig_comp_registration.updated',
    VENDOR_ID: 'wp_zesv6j_dig_comp_registration.vendor_id',
    VENDOR_GAMERTAG: 'wp_zesv6j_dig_comp_registration.vendor_gamertag',
    STREAMING_PLATFORM: 'wp_zesv6j_dig_comp_registration.streaming_platform',
    STREAMING_URL: 'wp_zesv6j_dig_comp_registration.streaming_url',
    TEAM_FULL_TIMESTAMP: 'wp_zesv6j_dig_comp_registration.team_full_timestamp',
    PRIMARY: [
        'wp_zesv6j_dig_comp_registration.comp_registration_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_registration.comp_registration_id':'comp_registration_id',
      'wp_zesv6j_dig_comp_registration.user_id':'user_id',
      'wp_zesv6j_dig_comp_registration.competitions_id':'competitions_id',
      'wp_zesv6j_dig_comp_registration.team_id':'team_id',
      'wp_zesv6j_dig_comp_registration.position':'position',
      'wp_zesv6j_dig_comp_registration.created':'created',
      'wp_zesv6j_dig_comp_registration.updated':'updated',
      'wp_zesv6j_dig_comp_registration.vendor_id':'vendor_id',
      'wp_zesv6j_dig_comp_registration.vendor_gamertag':'vendor_gamertag',
      'wp_zesv6j_dig_comp_registration.streaming_platform':'streaming_platform',
      'wp_zesv6j_dig_comp_registration.streaming_url':'streaming_url',
      'wp_zesv6j_dig_comp_registration.team_full_timestamp':'team_full_timestamp',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_registration.comp_registration_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_registration.competitions_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_registration.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_registration.position': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_registration.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.vendor_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.vendor_gamertag': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.streaming_platform': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '40', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.streaming_url': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_registration.team_full_timestamp': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Vendor {
      'vendor_id'?: number;
      'vendor_name'?: string;
}

interface iDefineDig_Vendor {
      'VENDOR_ID': string;
      'VENDOR_NAME': string;
}

export const dig_vendor : C6RestfulModel & iDefineDig_Vendor = {
    TABLE_NAME:'dig_vendor',
    VENDOR_ID: 'wp_zesv6j_dig_vendor.vendor_id',
    VENDOR_NAME: 'wp_zesv6j_dig_vendor.vendor_name',
    PRIMARY: [
        'wp_zesv6j_dig_vendor.vendor_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_vendor.vendor_id':'vendor_id',
      'wp_zesv6j_dig_vendor.vendor_name':'vendor_name',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_vendor.vendor_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_vendor.vendor_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Score {
      'comp_id'?: number;
      'user_id'?: number;
      'team_id'?: number;
      'score'?: number;
      'scorebox'?: number;
      'created'?: string;
}

interface iDefineDig_Comp_Score {
      'COMP_ID': string;
      'USER_ID': string;
      'TEAM_ID': string;
      'SCORE': string;
      'SCOREBOX': string;
      'CREATED': string;
}

export const dig_comp_score : C6RestfulModel & iDefineDig_Comp_Score = {
    TABLE_NAME:'dig_comp_score',
    COMP_ID: 'wp_zesv6j_dig_comp_score.comp_id',
    USER_ID: 'wp_zesv6j_dig_comp_score.user_id',
    TEAM_ID: 'wp_zesv6j_dig_comp_score.team_id',
    SCORE: 'wp_zesv6j_dig_comp_score.score',
    SCOREBOX: 'wp_zesv6j_dig_comp_score.scorebox',
    CREATED: 'wp_zesv6j_dig_comp_score.created',
    PRIMARY: [
        'wp_zesv6j_dig_comp_score.comp_id',
        'wp_zesv6j_dig_comp_score.user_id',
        'wp_zesv6j_dig_comp_score.team_id',
        'wp_zesv6j_dig_comp_score.scorebox',
        'wp_zesv6j_dig_comp_score.created',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_score.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_score.user_id':'user_id',
      'wp_zesv6j_dig_comp_score.team_id':'team_id',
      'wp_zesv6j_dig_comp_score.score':'score',
      'wp_zesv6j_dig_comp_score.scorebox':'scorebox',
      'wp_zesv6j_dig_comp_score.created':'created',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_score.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_score.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_score.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_score.score': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_score.scorebox': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_score.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Single_Use_Passwords {
      'password_id'?: number;
      'comp_id'?: number;
      'comp_password'?: string;
      'comp_password_taken'?: number;
      'comp_team_id'?: number;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Comp_Single_Use_Passwords {
      'PASSWORD_ID': string;
      'COMP_ID': string;
      'COMP_PASSWORD': string;
      'COMP_PASSWORD_TAKEN': string;
      'COMP_TEAM_ID': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_comp_single_use_passwords : C6RestfulModel & iDefineDig_Comp_Single_Use_Passwords = {
    TABLE_NAME:'dig_comp_single_use_passwords',
    PASSWORD_ID: 'wp_zesv6j_dig_comp_single_use_passwords.password_id',
    COMP_ID: 'wp_zesv6j_dig_comp_single_use_passwords.comp_id',
    COMP_PASSWORD: 'wp_zesv6j_dig_comp_single_use_passwords.comp_password',
    COMP_PASSWORD_TAKEN: 'wp_zesv6j_dig_comp_single_use_passwords.comp_password_taken',
    COMP_TEAM_ID: 'wp_zesv6j_dig_comp_single_use_passwords.comp_team_id',
    CREATED: 'wp_zesv6j_dig_comp_single_use_passwords.created',
    MODIFIED: 'wp_zesv6j_dig_comp_single_use_passwords.modified',
    PRIMARY: [
        'wp_zesv6j_dig_comp_single_use_passwords.password_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_single_use_passwords.password_id':'password_id',
      'wp_zesv6j_dig_comp_single_use_passwords.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_single_use_passwords.comp_password':'comp_password',
      'wp_zesv6j_dig_comp_single_use_passwords.comp_password_taken':'comp_password_taken',
      'wp_zesv6j_dig_comp_single_use_passwords.comp_team_id':'comp_team_id',
      'wp_zesv6j_dig_comp_single_use_passwords.created':'created',
      'wp_zesv6j_dig_comp_single_use_passwords.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_single_use_passwords.password_id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_single_use_passwords.comp_id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_single_use_passwords.comp_password': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_single_use_passwords.comp_password_taken': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_single_use_passwords.comp_team_id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_single_use_passwords.created': { 
            MYSQL_TYPE: 'timestamp', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_single_use_passwords.modified': { 
            MYSQL_TYPE: 'timestamp', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Team_Names {
      'team_id'?: number;
      'team_name'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Comp_Team_Names {
      'TEAM_ID': string;
      'TEAM_NAME': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_comp_team_names : C6RestfulModel & iDefineDig_Comp_Team_Names = {
    TABLE_NAME:'dig_comp_team_names',
    TEAM_ID: 'wp_zesv6j_dig_comp_team_names.team_id',
    TEAM_NAME: 'wp_zesv6j_dig_comp_team_names.team_name',
    CREATED: 'wp_zesv6j_dig_comp_team_names.created',
    UPDATED: 'wp_zesv6j_dig_comp_team_names.updated',
    PRIMARY: [
        'wp_zesv6j_dig_comp_team_names.team_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_team_names.team_id':'team_id',
      'wp_zesv6j_dig_comp_team_names.team_name':'team_name',
      'wp_zesv6j_dig_comp_team_names.created':'created',
      'wp_zesv6j_dig_comp_team_names.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_team_names.team_id': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_team_names.team_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_team_names.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_team_names.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Tourneytype {
      'id'?: number;
      'comp_id'?: number;
      'tourney_type_id'?: number;
      'bracket'?: string;
}

interface iDefineDig_Comp_Tourneytype {
      'ID': string;
      'COMP_ID': string;
      'TOURNEY_TYPE_ID': string;
      'BRACKET': string;
}

export const dig_comp_tourneytype : C6RestfulModel & iDefineDig_Comp_Tourneytype = {
    TABLE_NAME:'dig_comp_tourneytype',
    ID: 'wp_zesv6j_dig_comp_tourneytype.id',
    COMP_ID: 'wp_zesv6j_dig_comp_tourneytype.comp_id',
    TOURNEY_TYPE_ID: 'wp_zesv6j_dig_comp_tourneytype.tourney_type_id',
    BRACKET: 'wp_zesv6j_dig_comp_tourneytype.bracket',
    PRIMARY: [
        'wp_zesv6j_dig_comp_tourneytype.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_tourneytype.id':'id',
      'wp_zesv6j_dig_comp_tourneytype.comp_id':'comp_id',
      'wp_zesv6j_dig_comp_tourneytype.tourney_type_id':'tourney_type_id',
      'wp_zesv6j_dig_comp_tourneytype.bracket':'bracket',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_tourneytype.id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_tourneytype.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_tourneytype.tourney_type_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_comp_tourneytype.bracket': { 
            MYSQL_TYPE: 'json', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Tourney_Type {
      'id'?: number;
      'name'?: string;
      'percentage'?: string;
      'comp_type_id'?: number;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Tourney_Type {
      'ID': string;
      'NAME': string;
      'PERCENTAGE': string;
      'COMP_TYPE_ID': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_tourney_type : C6RestfulModel & iDefineDig_Tourney_Type = {
    TABLE_NAME:'dig_tourney_type',
    ID: 'wp_zesv6j_dig_tourney_type.id',
    NAME: 'wp_zesv6j_dig_tourney_type.name',
    PERCENTAGE: 'wp_zesv6j_dig_tourney_type.percentage',
    COMP_TYPE_ID: 'wp_zesv6j_dig_tourney_type.comp_type_id',
    CREATED: 'wp_zesv6j_dig_tourney_type.created',
    UPDATED: 'wp_zesv6j_dig_tourney_type.updated',
    PRIMARY: [
        'wp_zesv6j_dig_tourney_type.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_tourney_type.id':'id',
      'wp_zesv6j_dig_tourney_type.name':'name',
      'wp_zesv6j_dig_tourney_type.percentage':'percentage',
      'wp_zesv6j_dig_tourney_type.comp_type_id':'comp_type_id',
      'wp_zesv6j_dig_tourney_type.created':'created',
      'wp_zesv6j_dig_tourney_type.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_tourney_type.id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_tourney_type.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_tourney_type.percentage': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '5,2', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_tourney_type.comp_type_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_tourney_type.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_tourney_type.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Comp_Type {
      'comp_type_id'?: number;
      'comp_type'?: string;
      'comp_percentage'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Comp_Type {
      'COMP_TYPE_ID': string;
      'COMP_TYPE': string;
      'COMP_PERCENTAGE': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_comp_type : C6RestfulModel & iDefineDig_Comp_Type = {
    TABLE_NAME:'dig_comp_type',
    COMP_TYPE_ID: 'wp_zesv6j_dig_comp_type.comp_type_id',
    COMP_TYPE: 'wp_zesv6j_dig_comp_type.comp_type',
    COMP_PERCENTAGE: 'wp_zesv6j_dig_comp_type.comp_percentage',
    CREATED: 'wp_zesv6j_dig_comp_type.created',
    UPDATED: 'wp_zesv6j_dig_comp_type.updated',
    PRIMARY: [
        'wp_zesv6j_dig_comp_type.comp_type_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_comp_type.comp_type_id':'comp_type_id',
      'wp_zesv6j_dig_comp_type.comp_type':'comp_type',
      'wp_zesv6j_dig_comp_type.comp_percentage':'comp_percentage',
      'wp_zesv6j_dig_comp_type.created':'created',
      'wp_zesv6j_dig_comp_type.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_comp_type.comp_type_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_type.comp_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_type.comp_percentage': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '5,2', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_type.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_comp_type.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Mode_Game {
      'mode_game_id'?: number;
      'game_id'?: number;
      'mode_id'?: number;
      'rules_post_id'?: number;
}

interface iDefineDig_Mode_Game {
      'MODE_GAME_ID': string;
      'GAME_ID': string;
      'MODE_ID': string;
      'RULES_POST_ID': string;
}

export const dig_mode_game : C6RestfulModel & iDefineDig_Mode_Game = {
    TABLE_NAME:'dig_mode_game',
    MODE_GAME_ID: 'wp_zesv6j_dig_mode_game.mode_game_id',
    GAME_ID: 'wp_zesv6j_dig_mode_game.game_id',
    MODE_ID: 'wp_zesv6j_dig_mode_game.mode_id',
    RULES_POST_ID: 'wp_zesv6j_dig_mode_game.rules_post_id',
    PRIMARY: [
        'wp_zesv6j_dig_mode_game.mode_game_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_mode_game.mode_game_id':'mode_game_id',
      'wp_zesv6j_dig_mode_game.game_id':'game_id',
      'wp_zesv6j_dig_mode_game.mode_id':'mode_id',
      'wp_zesv6j_dig_mode_game.rules_post_id':'rules_post_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_mode_game.mode_game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_mode_game.game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_mode_game.mode_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_mode_game.rules_post_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Competitions_Meta {
      'meta_id'?: number;
      'comp_id'?: number;
      'meta_key'?: string;
      'meta_value'?: string;
}

interface iDefineDig_Competitions_Meta {
      'META_ID': string;
      'COMP_ID': string;
      'META_KEY': string;
      'META_VALUE': string;
}

export const dig_competitions_meta : C6RestfulModel & iDefineDig_Competitions_Meta = {
    TABLE_NAME:'dig_competitions_meta',
    META_ID: 'wp_zesv6j_dig_competitions_meta.meta_id',
    COMP_ID: 'wp_zesv6j_dig_competitions_meta.comp_id',
    META_KEY: 'wp_zesv6j_dig_competitions_meta.meta_key',
    META_VALUE: 'wp_zesv6j_dig_competitions_meta.meta_value',
    PRIMARY: [
        'wp_zesv6j_dig_competitions_meta.meta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_competitions_meta.meta_id':'meta_id',
      'wp_zesv6j_dig_competitions_meta.comp_id':'comp_id',
      'wp_zesv6j_dig_competitions_meta.meta_key':'meta_key',
      'wp_zesv6j_dig_competitions_meta.meta_value':'meta_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_competitions_meta.meta_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions_meta.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_competitions_meta.meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_competitions_meta.meta_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Contact_Support {
      'support_ticket_id'?: number;
      'support_from_user_id'?: number;
      'support_name'?: string;
      'support_email'?: string;
      'support_callback_requested'?: number;
      'support_category'?: string;
      'support_message'?: string;
      'support_phone_number'?: string;
}

interface iDefineDig_Contact_Support {
      'SUPPORT_TICKET_ID': string;
      'SUPPORT_FROM_USER_ID': string;
      'SUPPORT_NAME': string;
      'SUPPORT_EMAIL': string;
      'SUPPORT_CALLBACK_REQUESTED': string;
      'SUPPORT_CATEGORY': string;
      'SUPPORT_MESSAGE': string;
      'SUPPORT_PHONE_NUMBER': string;
}

export const dig_contact_support : C6RestfulModel & iDefineDig_Contact_Support = {
    TABLE_NAME:'dig_contact_support',
    SUPPORT_TICKET_ID: 'wp_zesv6j_dig_contact_support.support_ticket_id',
    SUPPORT_FROM_USER_ID: 'wp_zesv6j_dig_contact_support.support_from_user_id',
    SUPPORT_NAME: 'wp_zesv6j_dig_contact_support.support_name',
    SUPPORT_EMAIL: 'wp_zesv6j_dig_contact_support.support_email',
    SUPPORT_CALLBACK_REQUESTED: 'wp_zesv6j_dig_contact_support.support_callback_requested',
    SUPPORT_CATEGORY: 'wp_zesv6j_dig_contact_support.support_category',
    SUPPORT_MESSAGE: 'wp_zesv6j_dig_contact_support.support_message',
    SUPPORT_PHONE_NUMBER: 'wp_zesv6j_dig_contact_support.support_phone_number',
    PRIMARY: [
        'wp_zesv6j_dig_contact_support.support_ticket_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_contact_support.support_ticket_id':'support_ticket_id',
      'wp_zesv6j_dig_contact_support.support_from_user_id':'support_from_user_id',
      'wp_zesv6j_dig_contact_support.support_name':'support_name',
      'wp_zesv6j_dig_contact_support.support_email':'support_email',
      'wp_zesv6j_dig_contact_support.support_callback_requested':'support_callback_requested',
      'wp_zesv6j_dig_contact_support.support_category':'support_category',
      'wp_zesv6j_dig_contact_support.support_message':'support_message',
      'wp_zesv6j_dig_contact_support.support_phone_number':'support_phone_number',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_contact_support.support_ticket_id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_contact_support.support_from_user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_contact_support.support_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_contact_support.support_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_contact_support.support_callback_requested': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_contact_support.support_category': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_contact_support.support_message': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_contact_support.support_phone_number': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Custom_Buy_In {
      'buyin_id'?: number;
      'comp_id'?: number;
      'mode_id'?: number;
      'buy_in'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Custom_Buy_In {
      'BUYIN_ID': string;
      'COMP_ID': string;
      'MODE_ID': string;
      'BUY_IN': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_custom_buy_in : C6RestfulModel & iDefineDig_Custom_Buy_In = {
    TABLE_NAME:'dig_custom_buy_in',
    BUYIN_ID: 'wp_zesv6j_dig_custom_buy_in.buyin_id',
    COMP_ID: 'wp_zesv6j_dig_custom_buy_in.comp_id',
    MODE_ID: 'wp_zesv6j_dig_custom_buy_in.mode_id',
    BUY_IN: 'wp_zesv6j_dig_custom_buy_in.buy_in',
    CREATED: 'wp_zesv6j_dig_custom_buy_in.created',
    UPDATED: 'wp_zesv6j_dig_custom_buy_in.updated',
    PRIMARY: [
        'wp_zesv6j_dig_custom_buy_in.buyin_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_custom_buy_in.buyin_id':'buyin_id',
      'wp_zesv6j_dig_custom_buy_in.comp_id':'comp_id',
      'wp_zesv6j_dig_custom_buy_in.mode_id':'mode_id',
      'wp_zesv6j_dig_custom_buy_in.buy_in':'buy_in',
      'wp_zesv6j_dig_custom_buy_in.created':'created',
      'wp_zesv6j_dig_custom_buy_in.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_custom_buy_in.buyin_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_custom_buy_in.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_buy_in.mode_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_buy_in.buy_in': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_buy_in.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_buy_in.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Custom_Prize_Pool {
      'id'?: number;
      'comp_id'?: number;
      'prize'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Custom_Prize_Pool {
      'ID': string;
      'COMP_ID': string;
      'PRIZE': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_custom_prize_pool : C6RestfulModel & iDefineDig_Custom_Prize_Pool = {
    TABLE_NAME:'dig_custom_prize_pool',
    ID: 'wp_zesv6j_dig_custom_prize_pool.id',
    COMP_ID: 'wp_zesv6j_dig_custom_prize_pool.comp_id',
    PRIZE: 'wp_zesv6j_dig_custom_prize_pool.prize',
    CREATED: 'wp_zesv6j_dig_custom_prize_pool.created',
    UPDATED: 'wp_zesv6j_dig_custom_prize_pool.updated',
    PRIMARY: [
        'wp_zesv6j_dig_custom_prize_pool.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_custom_prize_pool.id':'id',
      'wp_zesv6j_dig_custom_prize_pool.comp_id':'comp_id',
      'wp_zesv6j_dig_custom_prize_pool.prize':'prize',
      'wp_zesv6j_dig_custom_prize_pool.created':'created',
      'wp_zesv6j_dig_custom_prize_pool.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_custom_prize_pool.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_custom_prize_pool.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_prize_pool.prize': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_prize_pool.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_custom_prize_pool.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Debit_Audit {
      'id'?: number;
      'user_id'?: number;
      'debit_amount'?: string;
      'debit_action'?: string;
      'debit_comment'?: string;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Debit_Audit {
      'ID': string;
      'USER_ID': string;
      'DEBIT_AMOUNT': string;
      'DEBIT_ACTION': string;
      'DEBIT_COMMENT': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_debit_audit : C6RestfulModel & iDefineDig_Debit_Audit = {
    TABLE_NAME:'dig_debit_audit',
    ID: 'wp_zesv6j_dig_debit_audit.id',
    USER_ID: 'wp_zesv6j_dig_debit_audit.user_id',
    DEBIT_AMOUNT: 'wp_zesv6j_dig_debit_audit.debit_amount',
    DEBIT_ACTION: 'wp_zesv6j_dig_debit_audit.debit_action',
    DEBIT_COMMENT: 'wp_zesv6j_dig_debit_audit.debit_comment',
    CREATED: 'wp_zesv6j_dig_debit_audit.created',
    MODIFIED: 'wp_zesv6j_dig_debit_audit.modified',
    PRIMARY: [
        'wp_zesv6j_dig_debit_audit.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_debit_audit.id':'id',
      'wp_zesv6j_dig_debit_audit.user_id':'user_id',
      'wp_zesv6j_dig_debit_audit.debit_amount':'debit_amount',
      'wp_zesv6j_dig_debit_audit.debit_action':'debit_action',
      'wp_zesv6j_dig_debit_audit.debit_comment':'debit_comment',
      'wp_zesv6j_dig_debit_audit.created':'created',
      'wp_zesv6j_dig_debit_audit.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_debit_audit.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_debit_audit.user_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_debit_audit.debit_amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_debit_audit.debit_action': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_debit_audit.debit_comment': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_debit_audit.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_debit_audit.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Discord_Login_Info {
      'discord_user_id'?: string;
      'discord_user_name'?: string;
      'discord_access_token'?: string;
      'discord_user_email'?: string;
      'discord_meta_key'?: string;
      'user_id'?: number;
}

interface iDefineDig_Discord_Login_Info {
      'DISCORD_USER_ID': string;
      'DISCORD_USER_NAME': string;
      'DISCORD_ACCESS_TOKEN': string;
      'DISCORD_USER_EMAIL': string;
      'DISCORD_META_KEY': string;
      'USER_ID': string;
}

export const dig_discord_login_info : C6RestfulModel & iDefineDig_Discord_Login_Info = {
    TABLE_NAME:'dig_discord_login_info',
    DISCORD_USER_ID: 'wp_zesv6j_dig_discord_login_info.discord_user_id',
    DISCORD_USER_NAME: 'wp_zesv6j_dig_discord_login_info.discord_user_name',
    DISCORD_ACCESS_TOKEN: 'wp_zesv6j_dig_discord_login_info.discord_access_token',
    DISCORD_USER_EMAIL: 'wp_zesv6j_dig_discord_login_info.discord_user_email',
    DISCORD_META_KEY: 'wp_zesv6j_dig_discord_login_info.discord_meta_key',
    USER_ID: 'wp_zesv6j_dig_discord_login_info.user_id',
    PRIMARY: [
        'wp_zesv6j_dig_discord_login_info.discord_user_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_discord_login_info.discord_user_id':'discord_user_id',
      'wp_zesv6j_dig_discord_login_info.discord_user_name':'discord_user_name',
      'wp_zesv6j_dig_discord_login_info.discord_access_token':'discord_access_token',
      'wp_zesv6j_dig_discord_login_info.discord_user_email':'discord_user_email',
      'wp_zesv6j_dig_discord_login_info.discord_meta_key':'discord_meta_key',
      'wp_zesv6j_dig_discord_login_info.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_discord_login_info.discord_user_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_discord_login_info.discord_user_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_discord_login_info.discord_access_token': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_discord_login_info.discord_user_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_discord_login_info.discord_meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_discord_login_info.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Dispute_Posts {
      'comp_id'?: number;
      'post_id'?: number;
}

interface iDefineDig_Dispute_Posts {
      'COMP_ID': string;
      'POST_ID': string;
}

export const dig_dispute_posts : C6RestfulModel & iDefineDig_Dispute_Posts = {
    TABLE_NAME:'dig_dispute_posts',
    COMP_ID: 'wp_zesv6j_dig_dispute_posts.comp_id',
    POST_ID: 'wp_zesv6j_dig_dispute_posts.post_id',
    PRIMARY: [
        'wp_zesv6j_dig_dispute_posts.comp_id',
        'wp_zesv6j_dig_dispute_posts.post_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_dispute_posts.comp_id':'comp_id',
      'wp_zesv6j_dig_dispute_posts.post_id':'post_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_dispute_posts.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_dispute_posts.post_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Facebook_Login_Info {
      'facebook_user_id'?: string;
      'facebook_first_name'?: string;
      'facebook_access_token'?: string;
      'facebook_user_email'?: string;
      'facebook_meta_key'?: string;
      'user_id'?: number;
}

interface iDefineDig_Facebook_Login_Info {
      'FACEBOOK_USER_ID': string;
      'FACEBOOK_FIRST_NAME': string;
      'FACEBOOK_ACCESS_TOKEN': string;
      'FACEBOOK_USER_EMAIL': string;
      'FACEBOOK_META_KEY': string;
      'USER_ID': string;
}

export const dig_facebook_login_info : C6RestfulModel & iDefineDig_Facebook_Login_Info = {
    TABLE_NAME:'dig_facebook_login_info',
    FACEBOOK_USER_ID: 'wp_zesv6j_dig_facebook_login_info.facebook_user_id',
    FACEBOOK_FIRST_NAME: 'wp_zesv6j_dig_facebook_login_info.facebook_first_name',
    FACEBOOK_ACCESS_TOKEN: 'wp_zesv6j_dig_facebook_login_info.facebook_access_token',
    FACEBOOK_USER_EMAIL: 'wp_zesv6j_dig_facebook_login_info.facebook_user_email',
    FACEBOOK_META_KEY: 'wp_zesv6j_dig_facebook_login_info.facebook_meta_key',
    USER_ID: 'wp_zesv6j_dig_facebook_login_info.user_id',
    PRIMARY: [
        'wp_zesv6j_dig_facebook_login_info.facebook_user_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_facebook_login_info.facebook_user_id':'facebook_user_id',
      'wp_zesv6j_dig_facebook_login_info.facebook_first_name':'facebook_first_name',
      'wp_zesv6j_dig_facebook_login_info.facebook_access_token':'facebook_access_token',
      'wp_zesv6j_dig_facebook_login_info.facebook_user_email':'facebook_user_email',
      'wp_zesv6j_dig_facebook_login_info.facebook_meta_key':'facebook_meta_key',
      'wp_zesv6j_dig_facebook_login_info.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_facebook_login_info.facebook_user_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_facebook_login_info.facebook_first_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_facebook_login_info.facebook_access_token': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_facebook_login_info.facebook_user_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_facebook_login_info.facebook_meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_facebook_login_info.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Feature_Group_References {
      'feature_entity_id'?: number;
      'group_entity_id'?: number;
}

interface iDefineDig_Feature_Group_References {
      'FEATURE_ENTITY_ID': string;
      'GROUP_ENTITY_ID': string;
}

export const dig_feature_group_references : C6RestfulModel & iDefineDig_Feature_Group_References = {
    TABLE_NAME:'dig_feature_group_references',
    FEATURE_ENTITY_ID: 'wp_zesv6j_dig_feature_group_references.feature_entity_id',
    GROUP_ENTITY_ID: 'wp_zesv6j_dig_feature_group_references.group_entity_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_dig_feature_group_references.feature_entity_id':'feature_entity_id',
      'wp_zesv6j_dig_feature_group_references.group_entity_id':'group_entity_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_feature_group_references.feature_entity_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_feature_group_references.group_entity_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Features {
      'feature_entity_id'?: number;
      'feature_code'?: string;
      'feature_creation_date'?: string;
}

interface iDefineDig_Features {
      'FEATURE_ENTITY_ID': string;
      'FEATURE_CODE': string;
      'FEATURE_CREATION_DATE': string;
}

export const dig_features : C6RestfulModel & iDefineDig_Features = {
    TABLE_NAME:'dig_features',
    FEATURE_ENTITY_ID: 'wp_zesv6j_dig_features.feature_entity_id',
    FEATURE_CODE: 'wp_zesv6j_dig_features.feature_code',
    FEATURE_CREATION_DATE: 'wp_zesv6j_dig_features.feature_creation_date',
    PRIMARY: [
        'wp_zesv6j_dig_features.feature_entity_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_features.feature_entity_id':'feature_entity_id',
      'wp_zesv6j_dig_features.feature_code':'feature_code',
      'wp_zesv6j_dig_features.feature_creation_date':'feature_creation_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_features.feature_entity_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_features.feature_code': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '30', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_features.feature_creation_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Game {
      'game_id'?: number;
      'name'?: string;
      'code'?: string;
      'vendor'?: string;
      'game_logo_image'?: string;
      'header_background_image'?: string;
      'description'?: string;
      'featured_image'?: string;
      'created'?: string;
      'modified'?: string;
      'is_crossplay'?: number;
      'game_order'?: number;
      'game_meta_title'?: string;
      'game_meta_desc'?: string;
}

interface iDefineDig_Game {
      'GAME_ID': string;
      'NAME': string;
      'CODE': string;
      'VENDOR': string;
      'GAME_LOGO_IMAGE': string;
      'HEADER_BACKGROUND_IMAGE': string;
      'DESCRIPTION': string;
      'FEATURED_IMAGE': string;
      'CREATED': string;
      'MODIFIED': string;
      'IS_CROSSPLAY': string;
      'GAME_ORDER': string;
      'GAME_META_TITLE': string;
      'GAME_META_DESC': string;
}

export const dig_game : C6RestfulModel & iDefineDig_Game = {
    TABLE_NAME:'dig_game',
    GAME_ID: 'wp_zesv6j_dig_game.game_id',
    NAME: 'wp_zesv6j_dig_game.name',
    CODE: 'wp_zesv6j_dig_game.code',
    VENDOR: 'wp_zesv6j_dig_game.vendor',
    GAME_LOGO_IMAGE: 'wp_zesv6j_dig_game.game_logo_image',
    HEADER_BACKGROUND_IMAGE: 'wp_zesv6j_dig_game.header_background_image',
    DESCRIPTION: 'wp_zesv6j_dig_game.description',
    FEATURED_IMAGE: 'wp_zesv6j_dig_game.featured_image',
    CREATED: 'wp_zesv6j_dig_game.created',
    MODIFIED: 'wp_zesv6j_dig_game.modified',
    IS_CROSSPLAY: 'wp_zesv6j_dig_game.is_crossplay',
    GAME_ORDER: 'wp_zesv6j_dig_game.game_order',
    GAME_META_TITLE: 'wp_zesv6j_dig_game.game_meta_title',
    GAME_META_DESC: 'wp_zesv6j_dig_game.game_meta_desc',
    PRIMARY: [
        'wp_zesv6j_dig_game.game_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_game.game_id':'game_id',
      'wp_zesv6j_dig_game.name':'name',
      'wp_zesv6j_dig_game.code':'code',
      'wp_zesv6j_dig_game.vendor':'vendor',
      'wp_zesv6j_dig_game.game_logo_image':'game_logo_image',
      'wp_zesv6j_dig_game.header_background_image':'header_background_image',
      'wp_zesv6j_dig_game.description':'description',
      'wp_zesv6j_dig_game.featured_image':'featured_image',
      'wp_zesv6j_dig_game.created':'created',
      'wp_zesv6j_dig_game.modified':'modified',
      'wp_zesv6j_dig_game.is_crossplay':'is_crossplay',
      'wp_zesv6j_dig_game.game_order':'game_order',
      'wp_zesv6j_dig_game.game_meta_title':'game_meta_title',
      'wp_zesv6j_dig_game.game_meta_desc':'game_meta_desc',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_game.game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.code': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.vendor': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.game_logo_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_game.header_background_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.description': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_game.featured_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.is_crossplay': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.game_order': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.game_meta_title': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_game.game_meta_desc': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Group_References {
      'group_id'?: number;
      'allowed_to_grant_group_id'?: number;
}

interface iDefineDig_Group_References {
      'GROUP_ID': string;
      'ALLOWED_TO_GRANT_GROUP_ID': string;
}

export const dig_group_references : C6RestfulModel & iDefineDig_Group_References = {
    TABLE_NAME:'dig_group_references',
    GROUP_ID: 'wp_zesv6j_dig_group_references.group_id',
    ALLOWED_TO_GRANT_GROUP_ID: 'wp_zesv6j_dig_group_references.allowed_to_grant_group_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_dig_group_references.group_id':'group_id',
      'wp_zesv6j_dig_group_references.allowed_to_grant_group_id':'allowed_to_grant_group_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_group_references.group_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_group_references.allowed_to_grant_group_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Groups {
      'group_name'?: string;
      'entity_id'?: number;
      'created_by'?: number;
      'creation_date'?: string;
}

interface iDefineDig_Groups {
      'GROUP_NAME': string;
      'ENTITY_ID': string;
      'CREATED_BY': string;
      'CREATION_DATE': string;
}

export const dig_groups : C6RestfulModel & iDefineDig_Groups = {
    TABLE_NAME:'dig_groups',
    GROUP_NAME: 'wp_zesv6j_dig_groups.group_name',
    ENTITY_ID: 'wp_zesv6j_dig_groups.entity_id',
    CREATED_BY: 'wp_zesv6j_dig_groups.created_by',
    CREATION_DATE: 'wp_zesv6j_dig_groups.creation_date',
    PRIMARY: [
        'wp_zesv6j_dig_groups.entity_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_groups.group_name':'group_name',
      'wp_zesv6j_dig_groups.entity_id':'entity_id',
      'wp_zesv6j_dig_groups.created_by':'created_by',
      'wp_zesv6j_dig_groups.creation_date':'creation_date',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_groups.group_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_groups.entity_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_groups.created_by': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_groups.creation_date': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_History_Logs {
      'history_uuid'?: string;
      'history_uri'?: string;
      'history_table'?: string;
      'history_type'?: string;
      'history_request'?: string;
      'history_response'?: string;
      'history_query'?: string;
      'history_time'?: string;
      'history_updated'?: string;
}

interface iDefineDig_History_Logs {
      'HISTORY_UUID': string;
      'HISTORY_URI': string;
      'HISTORY_TABLE': string;
      'HISTORY_TYPE': string;
      'HISTORY_REQUEST': string;
      'HISTORY_RESPONSE': string;
      'HISTORY_QUERY': string;
      'HISTORY_TIME': string;
      'HISTORY_UPDATED': string;
}

export const dig_history_logs : C6RestfulModel & iDefineDig_History_Logs = {
    TABLE_NAME:'dig_history_logs',
    HISTORY_UUID: 'wp_zesv6j_dig_history_logs.history_uuid',
    HISTORY_URI: 'wp_zesv6j_dig_history_logs.history_uri',
    HISTORY_TABLE: 'wp_zesv6j_dig_history_logs.history_table',
    HISTORY_TYPE: 'wp_zesv6j_dig_history_logs.history_type',
    HISTORY_REQUEST: 'wp_zesv6j_dig_history_logs.history_request',
    HISTORY_RESPONSE: 'wp_zesv6j_dig_history_logs.history_response',
    HISTORY_QUERY: 'wp_zesv6j_dig_history_logs.history_query',
    HISTORY_TIME: 'wp_zesv6j_dig_history_logs.history_time',
    HISTORY_UPDATED: 'wp_zesv6j_dig_history_logs.history_updated',
    PRIMARY: [
        'wp_zesv6j_dig_history_logs.history_uuid',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_history_logs.history_uuid':'history_uuid',
      'wp_zesv6j_dig_history_logs.history_uri':'history_uri',
      'wp_zesv6j_dig_history_logs.history_table':'history_table',
      'wp_zesv6j_dig_history_logs.history_type':'history_type',
      'wp_zesv6j_dig_history_logs.history_request':'history_request',
      'wp_zesv6j_dig_history_logs.history_response':'history_response',
      'wp_zesv6j_dig_history_logs.history_query':'history_query',
      'wp_zesv6j_dig_history_logs.history_time':'history_time',
      'wp_zesv6j_dig_history_logs.history_updated':'history_updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_history_logs.history_uuid': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_history_logs.history_uri': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_history_logs.history_table': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_history_logs.history_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_history_logs.history_request': { 
            MYSQL_TYPE: 'json', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_history_logs.history_response': { 
            MYSQL_TYPE: 'json', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_history_logs.history_query': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_history_logs.history_time': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_history_logs.history_updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Match_Confirm {
      'comp_id'?: number;
      'team_id'?: number;
      'agreement'?: number;
}

interface iDefineDig_Match_Confirm {
      'COMP_ID': string;
      'TEAM_ID': string;
      'AGREEMENT': string;
}

export const dig_match_confirm : C6RestfulModel & iDefineDig_Match_Confirm = {
    TABLE_NAME:'dig_match_confirm',
    COMP_ID: 'wp_zesv6j_dig_match_confirm.comp_id',
    TEAM_ID: 'wp_zesv6j_dig_match_confirm.team_id',
    AGREEMENT: 'wp_zesv6j_dig_match_confirm.agreement',
    PRIMARY: [
        'wp_zesv6j_dig_match_confirm.comp_id',
        'wp_zesv6j_dig_match_confirm.team_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_match_confirm.comp_id':'comp_id',
      'wp_zesv6j_dig_match_confirm.team_id':'team_id',
      'wp_zesv6j_dig_match_confirm.agreement':'agreement',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_match_confirm.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_match_confirm.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_match_confirm.agreement': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Match_Results {
      'user_id'?: number;
      'team_id'?: number;
      'comp_id'?: number;
      'selected_winning_team'?: number;
      'created'?: string;
}

interface iDefineDig_Match_Results {
      'USER_ID': string;
      'TEAM_ID': string;
      'COMP_ID': string;
      'SELECTED_WINNING_TEAM': string;
      'CREATED': string;
}

export const dig_match_results : C6RestfulModel & iDefineDig_Match_Results = {
    TABLE_NAME:'dig_match_results',
    USER_ID: 'wp_zesv6j_dig_match_results.user_id',
    TEAM_ID: 'wp_zesv6j_dig_match_results.team_id',
    COMP_ID: 'wp_zesv6j_dig_match_results.comp_id',
    SELECTED_WINNING_TEAM: 'wp_zesv6j_dig_match_results.selected_winning_team',
    CREATED: 'wp_zesv6j_dig_match_results.created',
    PRIMARY: [
        'wp_zesv6j_dig_match_results.user_id',
        'wp_zesv6j_dig_match_results.comp_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_match_results.user_id':'user_id',
      'wp_zesv6j_dig_match_results.team_id':'team_id',
      'wp_zesv6j_dig_match_results.comp_id':'comp_id',
      'wp_zesv6j_dig_match_results.selected_winning_team':'selected_winning_team',
      'wp_zesv6j_dig_match_results.created':'created',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_match_results.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_match_results.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_match_results.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_match_results.selected_winning_team': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_match_results.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Mode {
      'mode_id'?: number;
      'name'?: string;
      'comp_type_id'?: number;
      'max_players'?: number;
      'team_size'?: number;
      'created'?: string;
      'modified'?: string;
      'archived'?: number;
}

interface iDefineDig_Mode {
      'MODE_ID': string;
      'NAME': string;
      'COMP_TYPE_ID': string;
      'MAX_PLAYERS': string;
      'TEAM_SIZE': string;
      'CREATED': string;
      'MODIFIED': string;
      'ARCHIVED': string;
}

export const dig_mode : C6RestfulModel & iDefineDig_Mode = {
    TABLE_NAME:'dig_mode',
    MODE_ID: 'wp_zesv6j_dig_mode.mode_id',
    NAME: 'wp_zesv6j_dig_mode.name',
    COMP_TYPE_ID: 'wp_zesv6j_dig_mode.comp_type_id',
    MAX_PLAYERS: 'wp_zesv6j_dig_mode.max_players',
    TEAM_SIZE: 'wp_zesv6j_dig_mode.team_size',
    CREATED: 'wp_zesv6j_dig_mode.created',
    MODIFIED: 'wp_zesv6j_dig_mode.modified',
    ARCHIVED: 'wp_zesv6j_dig_mode.archived',
    PRIMARY: [
        'wp_zesv6j_dig_mode.mode_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_mode.mode_id':'mode_id',
      'wp_zesv6j_dig_mode.name':'name',
      'wp_zesv6j_dig_mode.comp_type_id':'comp_type_id',
      'wp_zesv6j_dig_mode.max_players':'max_players',
      'wp_zesv6j_dig_mode.team_size':'team_size',
      'wp_zesv6j_dig_mode.created':'created',
      'wp_zesv6j_dig_mode.modified':'modified',
      'wp_zesv6j_dig_mode.archived':'archived',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_mode.mode_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_mode.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_mode.comp_type_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_mode.max_players': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_mode.team_size': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_mode.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_mode.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_mode.archived': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Nonce {
      'nonce_key'?: string;
      'nonce_value'?: string;
      'nonce_user_id'?: number;
      'nonce_session_id'?: string;
      'nonce_created'?: string;
      'nonce_expires'?: string;
}

interface iDefineDig_Nonce {
      'NONCE_KEY': string;
      'NONCE_VALUE': string;
      'NONCE_USER_ID': string;
      'NONCE_SESSION_ID': string;
      'NONCE_CREATED': string;
      'NONCE_EXPIRES': string;
}

export const dig_nonce : C6RestfulModel & iDefineDig_Nonce = {
    TABLE_NAME:'dig_nonce',
    NONCE_KEY: 'wp_zesv6j_dig_nonce.nonce_key',
    NONCE_VALUE: 'wp_zesv6j_dig_nonce.nonce_value',
    NONCE_USER_ID: 'wp_zesv6j_dig_nonce.nonce_user_id',
    NONCE_SESSION_ID: 'wp_zesv6j_dig_nonce.nonce_session_id',
    NONCE_CREATED: 'wp_zesv6j_dig_nonce.nonce_created',
    NONCE_EXPIRES: 'wp_zesv6j_dig_nonce.nonce_expires',
    PRIMARY: [
        'wp_zesv6j_dig_nonce.nonce_key',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_nonce.nonce_key':'nonce_key',
      'wp_zesv6j_dig_nonce.nonce_value':'nonce_value',
      'wp_zesv6j_dig_nonce.nonce_user_id':'nonce_user_id',
      'wp_zesv6j_dig_nonce.nonce_session_id':'nonce_session_id',
      'wp_zesv6j_dig_nonce.nonce_created':'nonce_created',
      'wp_zesv6j_dig_nonce.nonce_expires':'nonce_expires',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_nonce.nonce_key': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_nonce.nonce_value': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_nonce.nonce_user_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_nonce.nonce_session_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '100', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_nonce.nonce_created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_nonce.nonce_expires': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Parent_User {
      'parent_user_id'?: number;
      'child_user_id'?: number;
      'child_active'?: number;
}

interface iDefineDig_Parent_User {
      'PARENT_USER_ID': string;
      'CHILD_USER_ID': string;
      'CHILD_ACTIVE': string;
}

export const dig_parent_user : C6RestfulModel & iDefineDig_Parent_User = {
    TABLE_NAME:'dig_parent_user',
    PARENT_USER_ID: 'wp_zesv6j_dig_parent_user.parent_user_id',
    CHILD_USER_ID: 'wp_zesv6j_dig_parent_user.child_user_id',
    CHILD_ACTIVE: 'wp_zesv6j_dig_parent_user.child_active',
    PRIMARY: [
        'wp_zesv6j_dig_parent_user.parent_user_id',
        'wp_zesv6j_dig_parent_user.child_user_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_parent_user.parent_user_id':'parent_user_id',
      'wp_zesv6j_dig_parent_user.child_user_id':'child_user_id',
      'wp_zesv6j_dig_parent_user.child_active':'child_active',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_parent_user.parent_user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_parent_user.child_user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_parent_user.child_active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Payout_Table {
      'id'?: number;
      'label'?: string;
      'percentage'?: string;
}

interface iDefineDig_Payout_Table {
      'ID': string;
      'LABEL': string;
      'PERCENTAGE': string;
}

export const dig_payout_table : C6RestfulModel & iDefineDig_Payout_Table = {
    TABLE_NAME:'dig_payout_table',
    ID: 'wp_zesv6j_dig_payout_table.id',
    LABEL: 'wp_zesv6j_dig_payout_table.label',
    PERCENTAGE: 'wp_zesv6j_dig_payout_table.percentage',
    PRIMARY: [
        'wp_zesv6j_dig_payout_table.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_payout_table.id':'id',
      'wp_zesv6j_dig_payout_table.label':'label',
      'wp_zesv6j_dig_payout_table.percentage':'percentage',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_payout_table.id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_payout_table.label': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_payout_table.percentage': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Result_Type {
      'result_type_id'?: number;
      'comp_type_id'?: number;
      'position'?: number;
      'prize_percentage'?: string;
      'label'?: string;
      'time_delay'?: number;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Result_Type {
      'RESULT_TYPE_ID': string;
      'COMP_TYPE_ID': string;
      'POSITION': string;
      'PRIZE_PERCENTAGE': string;
      'LABEL': string;
      'TIME_DELAY': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_result_type : C6RestfulModel & iDefineDig_Result_Type = {
    TABLE_NAME:'dig_result_type',
    RESULT_TYPE_ID: 'wp_zesv6j_dig_result_type.result_type_id',
    COMP_TYPE_ID: 'wp_zesv6j_dig_result_type.comp_type_id',
    POSITION: 'wp_zesv6j_dig_result_type.position',
    PRIZE_PERCENTAGE: 'wp_zesv6j_dig_result_type.prize_percentage',
    LABEL: 'wp_zesv6j_dig_result_type.label',
    TIME_DELAY: 'wp_zesv6j_dig_result_type.time_delay',
    CREATED: 'wp_zesv6j_dig_result_type.created',
    UPDATED: 'wp_zesv6j_dig_result_type.updated',
    PRIMARY: [
        'wp_zesv6j_dig_result_type.result_type_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_result_type.result_type_id':'result_type_id',
      'wp_zesv6j_dig_result_type.comp_type_id':'comp_type_id',
      'wp_zesv6j_dig_result_type.position':'position',
      'wp_zesv6j_dig_result_type.prize_percentage':'prize_percentage',
      'wp_zesv6j_dig_result_type.label':'label',
      'wp_zesv6j_dig_result_type.time_delay':'time_delay',
      'wp_zesv6j_dig_result_type.created':'created',
      'wp_zesv6j_dig_result_type.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_result_type.result_type_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_type.comp_type_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_result_type.position': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_result_type.prize_percentage': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '5,2', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_result_type.label': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_type.time_delay': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_type.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_type.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Result_Upload {
      'comp_id'?: number;
      'user_id'?: number;
      'team_id'?: number;
      'created'?: string;
      'post_id'?: number;
      'scorebox'?: number;
}

interface iDefineDig_Result_Upload {
      'COMP_ID': string;
      'USER_ID': string;
      'TEAM_ID': string;
      'CREATED': string;
      'POST_ID': string;
      'SCOREBOX': string;
}

export const dig_result_upload : C6RestfulModel & iDefineDig_Result_Upload = {
    TABLE_NAME:'dig_result_upload',
    COMP_ID: 'wp_zesv6j_dig_result_upload.comp_id',
    USER_ID: 'wp_zesv6j_dig_result_upload.user_id',
    TEAM_ID: 'wp_zesv6j_dig_result_upload.team_id',
    CREATED: 'wp_zesv6j_dig_result_upload.created',
    POST_ID: 'wp_zesv6j_dig_result_upload.post_id',
    SCOREBOX: 'wp_zesv6j_dig_result_upload.scorebox',
    PRIMARY: [
        'wp_zesv6j_dig_result_upload.comp_id',
        'wp_zesv6j_dig_result_upload.user_id',
        'wp_zesv6j_dig_result_upload.created',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_result_upload.comp_id':'comp_id',
      'wp_zesv6j_dig_result_upload.user_id':'user_id',
      'wp_zesv6j_dig_result_upload.team_id':'team_id',
      'wp_zesv6j_dig_result_upload.created':'created',
      'wp_zesv6j_dig_result_upload.post_id':'post_id',
      'wp_zesv6j_dig_result_upload.scorebox':'scorebox',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_result_upload.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_result_upload.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_result_upload.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_upload.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_upload.post_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_result_upload.scorebox': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Results {
      'result_id'?: number;
      'comp_id'?: number;
      'user_id'?: number;
      'position'?: number;
      'team_id'?: number;
      'paid'?: number;
      'dispute_status'?: number;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Results {
      'RESULT_ID': string;
      'COMP_ID': string;
      'USER_ID': string;
      'POSITION': string;
      'TEAM_ID': string;
      'PAID': string;
      'DISPUTE_STATUS': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_results : C6RestfulModel & iDefineDig_Results = {
    TABLE_NAME:'dig_results',
    RESULT_ID: 'wp_zesv6j_dig_results.result_id',
    COMP_ID: 'wp_zesv6j_dig_results.comp_id',
    USER_ID: 'wp_zesv6j_dig_results.user_id',
    POSITION: 'wp_zesv6j_dig_results.position',
    TEAM_ID: 'wp_zesv6j_dig_results.team_id',
    PAID: 'wp_zesv6j_dig_results.paid',
    DISPUTE_STATUS: 'wp_zesv6j_dig_results.dispute_status',
    CREATED: 'wp_zesv6j_dig_results.created',
    UPDATED: 'wp_zesv6j_dig_results.updated',
    PRIMARY: [
        'wp_zesv6j_dig_results.result_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_results.result_id':'result_id',
      'wp_zesv6j_dig_results.comp_id':'comp_id',
      'wp_zesv6j_dig_results.user_id':'user_id',
      'wp_zesv6j_dig_results.position':'position',
      'wp_zesv6j_dig_results.team_id':'team_id',
      'wp_zesv6j_dig_results.paid':'paid',
      'wp_zesv6j_dig_results.dispute_status':'dispute_status',
      'wp_zesv6j_dig_results.created':'created',
      'wp_zesv6j_dig_results.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_results.result_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_results.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_results.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_results.position': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_results.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_results.paid': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_results.dispute_status': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_results.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_results.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Reward {
      'reward_id'?: number;
      'user_id'?: number;
      'challenge_id'?: number;
      'redeemed_status'?: number;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Reward {
      'REWARD_ID': string;
      'USER_ID': string;
      'CHALLENGE_ID': string;
      'REDEEMED_STATUS': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_reward : C6RestfulModel & iDefineDig_Reward = {
    TABLE_NAME:'dig_reward',
    REWARD_ID: 'wp_zesv6j_dig_reward.reward_id',
    USER_ID: 'wp_zesv6j_dig_reward.user_id',
    CHALLENGE_ID: 'wp_zesv6j_dig_reward.challenge_id',
    REDEEMED_STATUS: 'wp_zesv6j_dig_reward.redeemed_status',
    CREATED: 'wp_zesv6j_dig_reward.created',
    MODIFIED: 'wp_zesv6j_dig_reward.modified',
    PRIMARY: [
        'wp_zesv6j_dig_reward.reward_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_reward.reward_id':'reward_id',
      'wp_zesv6j_dig_reward.user_id':'user_id',
      'wp_zesv6j_dig_reward.challenge_id':'challenge_id',
      'wp_zesv6j_dig_reward.redeemed_status':'redeemed_status',
      'wp_zesv6j_dig_reward.created':'created',
      'wp_zesv6j_dig_reward.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_reward.reward_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_reward.challenge_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_reward.redeemed_status': { 
            MYSQL_TYPE: 'smallint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Reward_Type {
      'reward_type_id'?: number;
      'name'?: string;
      'active'?: number;
      'conversion'?: string;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Reward_Type {
      'REWARD_TYPE_ID': string;
      'NAME': string;
      'ACTIVE': string;
      'CONVERSION': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_reward_type : C6RestfulModel & iDefineDig_Reward_Type = {
    TABLE_NAME:'dig_reward_type',
    REWARD_TYPE_ID: 'wp_zesv6j_dig_reward_type.reward_type_id',
    NAME: 'wp_zesv6j_dig_reward_type.name',
    ACTIVE: 'wp_zesv6j_dig_reward_type.active',
    CONVERSION: 'wp_zesv6j_dig_reward_type.conversion',
    CREATED: 'wp_zesv6j_dig_reward_type.created',
    MODIFIED: 'wp_zesv6j_dig_reward_type.modified',
    PRIMARY: [
        'wp_zesv6j_dig_reward_type.reward_type_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_reward_type.reward_type_id':'reward_type_id',
      'wp_zesv6j_dig_reward_type.name':'name',
      'wp_zesv6j_dig_reward_type.active':'active',
      'wp_zesv6j_dig_reward_type.conversion':'conversion',
      'wp_zesv6j_dig_reward_type.created':'created',
      'wp_zesv6j_dig_reward_type.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_reward_type.reward_type_id': { 
            MYSQL_TYPE: 'smallint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_type.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_type.active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_type.conversion': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_type.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_type.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Reward_Challenge {
      'challenge_id'?: number;
      'reward_origin_id'?: number;
      'active'?: number;
      'fixed'?: number;
      'reward_amount'?: string;
      'query'?: string;
      'description'?: string;
}

interface iDefineDig_Reward_Challenge {
      'CHALLENGE_ID': string;
      'REWARD_ORIGIN_ID': string;
      'ACTIVE': string;
      'FIXED': string;
      'REWARD_AMOUNT': string;
      'QUERY': string;
      'DESCRIPTION': string;
}

export const dig_reward_challenge : C6RestfulModel & iDefineDig_Reward_Challenge = {
    TABLE_NAME:'dig_reward_challenge',
    CHALLENGE_ID: 'wp_zesv6j_dig_reward_challenge.challenge_id',
    REWARD_ORIGIN_ID: 'wp_zesv6j_dig_reward_challenge.reward_origin_id',
    ACTIVE: 'wp_zesv6j_dig_reward_challenge.active',
    FIXED: 'wp_zesv6j_dig_reward_challenge.fixed',
    REWARD_AMOUNT: 'wp_zesv6j_dig_reward_challenge.reward_amount',
    QUERY: 'wp_zesv6j_dig_reward_challenge.query',
    DESCRIPTION: 'wp_zesv6j_dig_reward_challenge.description',
    PRIMARY: [
        'wp_zesv6j_dig_reward_challenge.challenge_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_reward_challenge.challenge_id':'challenge_id',
      'wp_zesv6j_dig_reward_challenge.reward_origin_id':'reward_origin_id',
      'wp_zesv6j_dig_reward_challenge.active':'active',
      'wp_zesv6j_dig_reward_challenge.fixed':'fixed',
      'wp_zesv6j_dig_reward_challenge.reward_amount':'reward_amount',
      'wp_zesv6j_dig_reward_challenge.query':'query',
      'wp_zesv6j_dig_reward_challenge.description':'description',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_reward_challenge.challenge_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_challenge.reward_origin_id': { 
            MYSQL_TYPE: 'smallint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_reward_challenge.active': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_challenge.fixed': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_challenge.reward_amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_challenge.query': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_reward_challenge.description': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Reward_Origin {
      'reward_origin_id'?: number;
      'name'?: string;
}

interface iDefineDig_Reward_Origin {
      'REWARD_ORIGIN_ID': string;
      'NAME': string;
}

export const dig_reward_origin : C6RestfulModel & iDefineDig_Reward_Origin = {
    TABLE_NAME:'dig_reward_origin',
    REWARD_ORIGIN_ID: 'wp_zesv6j_dig_reward_origin.reward_origin_id',
    NAME: 'wp_zesv6j_dig_reward_origin.name',
    PRIMARY: [
        'wp_zesv6j_dig_reward_origin.reward_origin_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_reward_origin.reward_origin_id':'reward_origin_id',
      'wp_zesv6j_dig_reward_origin.name':'name',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_reward_origin.reward_origin_id': { 
            MYSQL_TYPE: 'smallint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_origin.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Reward_Type_Origin {
      'reward_type_id'?: number;
      'reward_origin_id'?: number;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Reward_Type_Origin {
      'REWARD_TYPE_ID': string;
      'REWARD_ORIGIN_ID': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_reward_type_origin : C6RestfulModel & iDefineDig_Reward_Type_Origin = {
    TABLE_NAME:'dig_reward_type_origin',
    REWARD_TYPE_ID: 'wp_zesv6j_dig_reward_type_origin.reward_type_id',
    REWARD_ORIGIN_ID: 'wp_zesv6j_dig_reward_type_origin.reward_origin_id',
    CREATED: 'wp_zesv6j_dig_reward_type_origin.created',
    MODIFIED: 'wp_zesv6j_dig_reward_type_origin.modified',
    PRIMARY: [
        'wp_zesv6j_dig_reward_type_origin.reward_type_id',
        'wp_zesv6j_dig_reward_type_origin.reward_origin_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_reward_type_origin.reward_type_id':'reward_type_id',
      'wp_zesv6j_dig_reward_type_origin.reward_origin_id':'reward_origin_id',
      'wp_zesv6j_dig_reward_type_origin.created':'created',
      'wp_zesv6j_dig_reward_type_origin.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_reward_type_origin.reward_type_id': { 
            MYSQL_TYPE: 'smallint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_reward_type_origin.reward_origin_id': { 
            MYSQL_TYPE: 'smallint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_reward_type_origin.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_reward_type_origin.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Socket_Channel_Members {
      'channel_id'?: string;
      'user_id'?: number;
}

interface iDefineDig_Socket_Channel_Members {
      'CHANNEL_ID': string;
      'USER_ID': string;
}

export const dig_socket_channel_members : C6RestfulModel & iDefineDig_Socket_Channel_Members = {
    TABLE_NAME:'dig_socket_channel_members',
    CHANNEL_ID: 'wp_zesv6j_dig_socket_channel_members.channel_id',
    USER_ID: 'wp_zesv6j_dig_socket_channel_members.user_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_dig_socket_channel_members.channel_id':'channel_id',
      'wp_zesv6j_dig_socket_channel_members.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_socket_channel_members.channel_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_channel_members.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Socket_Channel_Messages {
      'channel_message_id'?: string;
      'channel_message_from_user'?: number;
      'channel_message_to_channel_id'?: string;
      'channel_message'?: string;
}

interface iDefineDig_Socket_Channel_Messages {
      'CHANNEL_MESSAGE_ID': string;
      'CHANNEL_MESSAGE_FROM_USER': string;
      'CHANNEL_MESSAGE_TO_CHANNEL_ID': string;
      'CHANNEL_MESSAGE': string;
}

export const dig_socket_channel_messages : C6RestfulModel & iDefineDig_Socket_Channel_Messages = {
    TABLE_NAME:'dig_socket_channel_messages',
    CHANNEL_MESSAGE_ID: 'wp_zesv6j_dig_socket_channel_messages.channel_message_id',
    CHANNEL_MESSAGE_FROM_USER: 'wp_zesv6j_dig_socket_channel_messages.channel_message_from_user',
    CHANNEL_MESSAGE_TO_CHANNEL_ID: 'wp_zesv6j_dig_socket_channel_messages.channel_message_to_channel_id',
    CHANNEL_MESSAGE: 'wp_zesv6j_dig_socket_channel_messages.channel_message',
    PRIMARY: [
        'wp_zesv6j_dig_socket_channel_messages.channel_message_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_socket_channel_messages.channel_message_id':'channel_message_id',
      'wp_zesv6j_dig_socket_channel_messages.channel_message_from_user':'channel_message_from_user',
      'wp_zesv6j_dig_socket_channel_messages.channel_message_to_channel_id':'channel_message_to_channel_id',
      'wp_zesv6j_dig_socket_channel_messages.channel_message':'channel_message',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_socket_channel_messages.channel_message_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_channel_messages.channel_message_from_user': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_channel_messages.channel_message_to_channel_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_channel_messages.channel_message': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Socket_Channels {
      'channel_id'?: string;
      'channel_name'?: string;
      'channel_active'?: number;
      'channel_public'?: number;
      'channel_created_by'?: string;
}

interface iDefineDig_Socket_Channels {
      'CHANNEL_ID': string;
      'CHANNEL_NAME': string;
      'CHANNEL_ACTIVE': string;
      'CHANNEL_PUBLIC': string;
      'CHANNEL_CREATED_BY': string;
}

export const dig_socket_channels : C6RestfulModel & iDefineDig_Socket_Channels = {
    TABLE_NAME:'dig_socket_channels',
    CHANNEL_ID: 'wp_zesv6j_dig_socket_channels.channel_id',
    CHANNEL_NAME: 'wp_zesv6j_dig_socket_channels.channel_name',
    CHANNEL_ACTIVE: 'wp_zesv6j_dig_socket_channels.channel_active',
    CHANNEL_PUBLIC: 'wp_zesv6j_dig_socket_channels.channel_public',
    CHANNEL_CREATED_BY: 'wp_zesv6j_dig_socket_channels.channel_created_by',
    PRIMARY: [
        'wp_zesv6j_dig_socket_channels.channel_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_socket_channels.channel_id':'channel_id',
      'wp_zesv6j_dig_socket_channels.channel_name':'channel_name',
      'wp_zesv6j_dig_socket_channels.channel_active':'channel_active',
      'wp_zesv6j_dig_socket_channels.channel_public':'channel_public',
      'wp_zesv6j_dig_socket_channels.channel_created_by':'channel_created_by',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_socket_channels.channel_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_channels.channel_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '42', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_socket_channels.channel_active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_socket_channels.channel_public': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_socket_channels.channel_created_by': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Socket_System_Messages {
      'message_query'?: string;
      'message_id'?: string;
      'message_executed'?: number;
      'message_seconds_wait_to_run'?: number;
      'message_inserted_timestamp'?: string;
      'message_seconds_wait_to_rerun'?: number;
}

interface iDefineDig_Socket_System_Messages {
      'MESSAGE_QUERY': string;
      'MESSAGE_ID': string;
      'MESSAGE_EXECUTED': string;
      'MESSAGE_SECONDS_WAIT_TO_RUN': string;
      'MESSAGE_INSERTED_TIMESTAMP': string;
      'MESSAGE_SECONDS_WAIT_TO_RERUN': string;
}

export const dig_socket_system_messages : C6RestfulModel & iDefineDig_Socket_System_Messages = {
    TABLE_NAME:'dig_socket_system_messages',
    MESSAGE_QUERY: 'wp_zesv6j_dig_socket_system_messages.message_query',
    MESSAGE_ID: 'wp_zesv6j_dig_socket_system_messages.message_id',
    MESSAGE_EXECUTED: 'wp_zesv6j_dig_socket_system_messages.message_executed',
    MESSAGE_SECONDS_WAIT_TO_RUN: 'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_run',
    MESSAGE_INSERTED_TIMESTAMP: 'wp_zesv6j_dig_socket_system_messages.message_inserted_timestamp',
    MESSAGE_SECONDS_WAIT_TO_RERUN: 'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_rerun',
    PRIMARY: [
        'wp_zesv6j_dig_socket_system_messages.message_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_socket_system_messages.message_query':'message_query',
      'wp_zesv6j_dig_socket_system_messages.message_id':'message_id',
      'wp_zesv6j_dig_socket_system_messages.message_executed':'message_executed',
      'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_run':'message_seconds_wait_to_run',
      'wp_zesv6j_dig_socket_system_messages.message_inserted_timestamp':'message_inserted_timestamp',
      'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_rerun':'message_seconds_wait_to_rerun',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_socket_system_messages.message_query': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_system_messages.message_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_socket_system_messages.message_executed': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_run': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_socket_system_messages.message_inserted_timestamp': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_rerun': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Sub_Mode {
      'sub_mode_id'?: number;
      'mode_id'?: number;
      'name'?: string;
      'time_limit'?: number;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Sub_Mode {
      'SUB_MODE_ID': string;
      'MODE_ID': string;
      'NAME': string;
      'TIME_LIMIT': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_sub_mode : C6RestfulModel & iDefineDig_Sub_Mode = {
    TABLE_NAME:'dig_sub_mode',
    SUB_MODE_ID: 'wp_zesv6j_dig_sub_mode.sub_mode_id',
    MODE_ID: 'wp_zesv6j_dig_sub_mode.mode_id',
    NAME: 'wp_zesv6j_dig_sub_mode.name',
    TIME_LIMIT: 'wp_zesv6j_dig_sub_mode.time_limit',
    CREATED: 'wp_zesv6j_dig_sub_mode.created',
    UPDATED: 'wp_zesv6j_dig_sub_mode.updated',
    PRIMARY: [
        'wp_zesv6j_dig_sub_mode.sub_mode_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_sub_mode.sub_mode_id':'sub_mode_id',
      'wp_zesv6j_dig_sub_mode.mode_id':'mode_id',
      'wp_zesv6j_dig_sub_mode.name':'name',
      'wp_zesv6j_dig_sub_mode.time_limit':'time_limit',
      'wp_zesv6j_dig_sub_mode.created':'created',
      'wp_zesv6j_dig_sub_mode.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_sub_mode.sub_mode_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_sub_mode.mode_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_sub_mode.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_sub_mode.time_limit': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_sub_mode.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_sub_mode.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Subscription_Entry {
      'user_id'?: number;
      'subscription_id'?: number;
      'active'?: number;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Subscription_Entry {
      'USER_ID': string;
      'SUBSCRIPTION_ID': string;
      'ACTIVE': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_subscription_entry : C6RestfulModel & iDefineDig_Subscription_Entry = {
    TABLE_NAME:'dig_subscription_entry',
    USER_ID: 'wp_zesv6j_dig_subscription_entry.user_id',
    SUBSCRIPTION_ID: 'wp_zesv6j_dig_subscription_entry.subscription_id',
    ACTIVE: 'wp_zesv6j_dig_subscription_entry.active',
    CREATED: 'wp_zesv6j_dig_subscription_entry.created',
    MODIFIED: 'wp_zesv6j_dig_subscription_entry.modified',
    PRIMARY: [
        'wp_zesv6j_dig_subscription_entry.user_id',
        'wp_zesv6j_dig_subscription_entry.subscription_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_subscription_entry.user_id':'user_id',
      'wp_zesv6j_dig_subscription_entry.subscription_id':'subscription_id',
      'wp_zesv6j_dig_subscription_entry.active':'active',
      'wp_zesv6j_dig_subscription_entry.created':'created',
      'wp_zesv6j_dig_subscription_entry.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_subscription_entry.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_subscription_entry.subscription_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_subscription_entry.active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_entry.created': { 
            MYSQL_TYPE: 'timestamp', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_entry.modified': { 
            MYSQL_TYPE: 'timestamp', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Subscription_Model {
      'model_id'?: number;
      'model_name'?: string;
      'model_descriptor'?: string;
      'active'?: number;
      'charge_interval'?: number;
      'charge_amount'?: string;
      'receive_amount'?: string;
      'background_photo'?: string;
      'percent_savings'?: number;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Subscription_Model {
      'MODEL_ID': string;
      'MODEL_NAME': string;
      'MODEL_DESCRIPTOR': string;
      'ACTIVE': string;
      'CHARGE_INTERVAL': string;
      'CHARGE_AMOUNT': string;
      'RECEIVE_AMOUNT': string;
      'BACKGROUND_PHOTO': string;
      'PERCENT_SAVINGS': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_subscription_model : C6RestfulModel & iDefineDig_Subscription_Model = {
    TABLE_NAME:'dig_subscription_model',
    MODEL_ID: 'wp_zesv6j_dig_subscription_model.model_id',
    MODEL_NAME: 'wp_zesv6j_dig_subscription_model.model_name',
    MODEL_DESCRIPTOR: 'wp_zesv6j_dig_subscription_model.model_descriptor',
    ACTIVE: 'wp_zesv6j_dig_subscription_model.active',
    CHARGE_INTERVAL: 'wp_zesv6j_dig_subscription_model.charge_interval',
    CHARGE_AMOUNT: 'wp_zesv6j_dig_subscription_model.charge_amount',
    RECEIVE_AMOUNT: 'wp_zesv6j_dig_subscription_model.receive_amount',
    BACKGROUND_PHOTO: 'wp_zesv6j_dig_subscription_model.background_photo',
    PERCENT_SAVINGS: 'wp_zesv6j_dig_subscription_model.percent_savings',
    CREATED: 'wp_zesv6j_dig_subscription_model.created',
    MODIFIED: 'wp_zesv6j_dig_subscription_model.modified',
    PRIMARY: [
        'wp_zesv6j_dig_subscription_model.model_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_subscription_model.model_id':'model_id',
      'wp_zesv6j_dig_subscription_model.model_name':'model_name',
      'wp_zesv6j_dig_subscription_model.model_descriptor':'model_descriptor',
      'wp_zesv6j_dig_subscription_model.active':'active',
      'wp_zesv6j_dig_subscription_model.charge_interval':'charge_interval',
      'wp_zesv6j_dig_subscription_model.charge_amount':'charge_amount',
      'wp_zesv6j_dig_subscription_model.receive_amount':'receive_amount',
      'wp_zesv6j_dig_subscription_model.background_photo':'background_photo',
      'wp_zesv6j_dig_subscription_model.percent_savings':'percent_savings',
      'wp_zesv6j_dig_subscription_model.created':'created',
      'wp_zesv6j_dig_subscription_model.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_subscription_model.model_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.model_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.model_descriptor': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.active': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.charge_interval': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.charge_amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.receive_amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.background_photo': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_subscription_model.percent_savings': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_model.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Subscription_Extras {
      'subscription_id'?: number;
      'comp_percentage'?: string;
      'store_discount'?: string;
      'created'?: string;
      'modified'?: string;
}

interface iDefineDig_Subscription_Extras {
      'SUBSCRIPTION_ID': string;
      'COMP_PERCENTAGE': string;
      'STORE_DISCOUNT': string;
      'CREATED': string;
      'MODIFIED': string;
}

export const dig_subscription_extras : C6RestfulModel & iDefineDig_Subscription_Extras = {
    TABLE_NAME:'dig_subscription_extras',
    SUBSCRIPTION_ID: 'wp_zesv6j_dig_subscription_extras.subscription_id',
    COMP_PERCENTAGE: 'wp_zesv6j_dig_subscription_extras.comp_percentage',
    STORE_DISCOUNT: 'wp_zesv6j_dig_subscription_extras.store_discount',
    CREATED: 'wp_zesv6j_dig_subscription_extras.created',
    MODIFIED: 'wp_zesv6j_dig_subscription_extras.modified',
    PRIMARY: [
        'wp_zesv6j_dig_subscription_extras.subscription_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_subscription_extras.subscription_id':'subscription_id',
      'wp_zesv6j_dig_subscription_extras.comp_percentage':'comp_percentage',
      'wp_zesv6j_dig_subscription_extras.store_discount':'store_discount',
      'wp_zesv6j_dig_subscription_extras.created':'created',
      'wp_zesv6j_dig_subscription_extras.modified':'modified',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_subscription_extras.subscription_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_extras.comp_percentage': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '5,2', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_extras.store_discount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '5,2', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_extras.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_subscription_extras.modified': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Team_Size {
      'team_size_id'?: number;
      'name'?: string;
      'size'?: number;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Team_Size {
      'TEAM_SIZE_ID': string;
      'NAME': string;
      'SIZE': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_team_size : C6RestfulModel & iDefineDig_Team_Size = {
    TABLE_NAME:'dig_team_size',
    TEAM_SIZE_ID: 'wp_zesv6j_dig_team_size.team_size_id',
    NAME: 'wp_zesv6j_dig_team_size.name',
    SIZE: 'wp_zesv6j_dig_team_size.size',
    CREATED: 'wp_zesv6j_dig_team_size.created',
    UPDATED: 'wp_zesv6j_dig_team_size.updated',
    PRIMARY: [
        'wp_zesv6j_dig_team_size.team_size_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_team_size.team_size_id':'team_size_id',
      'wp_zesv6j_dig_team_size.name':'name',
      'wp_zesv6j_dig_team_size.size':'size',
      'wp_zesv6j_dig_team_size.created':'created',
      'wp_zesv6j_dig_team_size.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_team_size.team_size_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_team_size.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_team_size.size': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_team_size.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_team_size.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Team_Roster {
      'id'?: number;
      'uid'?: number;
      'user_team_id'?: number;
      'position'?: number;
      'acceptance'?: number;
}

interface iDefineDig_Team_Roster {
      'ID': string;
      'UID': string;
      'USER_TEAM_ID': string;
      'POSITION': string;
      'ACCEPTANCE': string;
}

export const dig_team_roster : C6RestfulModel & iDefineDig_Team_Roster = {
    TABLE_NAME:'dig_team_roster',
    ID: 'wp_zesv6j_dig_team_roster.id',
    UID: 'wp_zesv6j_dig_team_roster.uid',
    USER_TEAM_ID: 'wp_zesv6j_dig_team_roster.user_team_id',
    POSITION: 'wp_zesv6j_dig_team_roster.position',
    ACCEPTANCE: 'wp_zesv6j_dig_team_roster.acceptance',
    PRIMARY: [
        'wp_zesv6j_dig_team_roster.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_team_roster.id':'id',
      'wp_zesv6j_dig_team_roster.uid':'uid',
      'wp_zesv6j_dig_team_roster.user_team_id':'user_team_id',
      'wp_zesv6j_dig_team_roster.position':'position',
      'wp_zesv6j_dig_team_roster.acceptance':'acceptance',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_team_roster.id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_team_roster.uid': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_team_roster.user_team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_team_roster.position': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_team_roster.acceptance': { 
            MYSQL_TYPE: 'tinyint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Temp_Invite {
      'temp_invite_id'?: number;
      'sender_id'?: number;
      'comp_id'?: number;
      'team_id'?: number;
      'invitation_type'?: string;
      'email'?: string;
      'phone'?: string;
      'created'?: string;
}

interface iDefineDig_Temp_Invite {
      'TEMP_INVITE_ID': string;
      'SENDER_ID': string;
      'COMP_ID': string;
      'TEAM_ID': string;
      'INVITATION_TYPE': string;
      'EMAIL': string;
      'PHONE': string;
      'CREATED': string;
}

export const dig_temp_invite : C6RestfulModel & iDefineDig_Temp_Invite = {
    TABLE_NAME:'dig_temp_invite',
    TEMP_INVITE_ID: 'wp_zesv6j_dig_temp_invite.temp_invite_id',
    SENDER_ID: 'wp_zesv6j_dig_temp_invite.sender_id',
    COMP_ID: 'wp_zesv6j_dig_temp_invite.comp_id',
    TEAM_ID: 'wp_zesv6j_dig_temp_invite.team_id',
    INVITATION_TYPE: 'wp_zesv6j_dig_temp_invite.invitation_type',
    EMAIL: 'wp_zesv6j_dig_temp_invite.email',
    PHONE: 'wp_zesv6j_dig_temp_invite.phone',
    CREATED: 'wp_zesv6j_dig_temp_invite.created',
    PRIMARY: [
        'wp_zesv6j_dig_temp_invite.temp_invite_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_temp_invite.temp_invite_id':'temp_invite_id',
      'wp_zesv6j_dig_temp_invite.sender_id':'sender_id',
      'wp_zesv6j_dig_temp_invite.comp_id':'comp_id',
      'wp_zesv6j_dig_temp_invite.team_id':'team_id',
      'wp_zesv6j_dig_temp_invite.invitation_type':'invitation_type',
      'wp_zesv6j_dig_temp_invite.email':'email',
      'wp_zesv6j_dig_temp_invite.phone':'phone',
      'wp_zesv6j_dig_temp_invite.created':'created',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_temp_invite.temp_invite_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_temp_invite.sender_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_temp_invite.comp_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_temp_invite.team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_temp_invite.invitation_type': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_temp_invite.email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_temp_invite.phone': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_temp_invite.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Tournament_Payout_Table {
      'id'?: number;
      'label'?: string;
      'min'?: number;
      'max'?: number;
      'percentage'?: string;
}

interface iDefineDig_Tournament_Payout_Table {
      'ID': string;
      'LABEL': string;
      'MIN': string;
      'MAX': string;
      'PERCENTAGE': string;
}

export const dig_tournament_payout_table : C6RestfulModel & iDefineDig_Tournament_Payout_Table = {
    TABLE_NAME:'dig_tournament_payout_table',
    ID: 'wp_zesv6j_dig_tournament_payout_table.id',
    LABEL: 'wp_zesv6j_dig_tournament_payout_table.label',
    MIN: 'wp_zesv6j_dig_tournament_payout_table.min',
    MAX: 'wp_zesv6j_dig_tournament_payout_table.max',
    PERCENTAGE: 'wp_zesv6j_dig_tournament_payout_table.percentage',
    PRIMARY: [
        'wp_zesv6j_dig_tournament_payout_table.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_tournament_payout_table.id':'id',
      'wp_zesv6j_dig_tournament_payout_table.label':'label',
      'wp_zesv6j_dig_tournament_payout_table.min':'min',
      'wp_zesv6j_dig_tournament_payout_table.max':'max',
      'wp_zesv6j_dig_tournament_payout_table.percentage':'percentage',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_tournament_payout_table.id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_tournament_payout_table.label': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_tournament_payout_table.min': { 
            MYSQL_TYPE: 'smallint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_tournament_payout_table.max': { 
            MYSQL_TYPE: 'smallint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_tournament_payout_table.percentage': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Transaction_Log {
      'id'?: number;
      'user_id'?: number;
      'amount'?: string;
      'payment_token'?: string;
      'auth_status'?: number;
      'transaction_id'?: string;
      'response_text'?: string;
      'cc_auth_code'?: string;
      'cc_response_code'?: number;
      'cc_mask'?: string;
      'cvv_response'?: string;
      'avs_response'?: string;
      'kount_decision'?: string;
      'kount_score'?: number;
      'kount_omniscore'?: string;
      'kount_trans_id'?: string;
      'cc_fname'?: string;
      'cc_lname'?: string;
      'cc_addr_line_1'?: string;
      'cc_addr_line_2'?: string;
      'cc_city'?: string;
      'cc_state'?: string;
      'cc_zip'?: string;
      'cc_country'?: string;
      'pp_authorization_status'?: string;
      'pp_authorization_amount'?: string;
      'pp_authorization_payer_email'?: string;
      'created'?: string;
      'updated'?: string;
      'cc_company'?: string;
      'from_user_id'?: number;
}

interface iDefineDig_Transaction_Log {
      'ID': string;
      'USER_ID': string;
      'AMOUNT': string;
      'PAYMENT_TOKEN': string;
      'AUTH_STATUS': string;
      'TRANSACTION_ID': string;
      'RESPONSE_TEXT': string;
      'CC_AUTH_CODE': string;
      'CC_RESPONSE_CODE': string;
      'CC_MASK': string;
      'CVV_RESPONSE': string;
      'AVS_RESPONSE': string;
      'KOUNT_DECISION': string;
      'KOUNT_SCORE': string;
      'KOUNT_OMNISCORE': string;
      'KOUNT_TRANS_ID': string;
      'CC_FNAME': string;
      'CC_LNAME': string;
      'CC_ADDR_LINE_1': string;
      'CC_ADDR_LINE_2': string;
      'CC_CITY': string;
      'CC_STATE': string;
      'CC_ZIP': string;
      'CC_COUNTRY': string;
      'PP_AUTHORIZATION_STATUS': string;
      'PP_AUTHORIZATION_AMOUNT': string;
      'PP_AUTHORIZATION_PAYER_EMAIL': string;
      'CREATED': string;
      'UPDATED': string;
      'CC_COMPANY': string;
      'FROM_USER_ID': string;
}

export const dig_transaction_log : C6RestfulModel & iDefineDig_Transaction_Log = {
    TABLE_NAME:'dig_transaction_log',
    ID: 'wp_zesv6j_dig_transaction_log.id',
    USER_ID: 'wp_zesv6j_dig_transaction_log.user_id',
    AMOUNT: 'wp_zesv6j_dig_transaction_log.amount',
    PAYMENT_TOKEN: 'wp_zesv6j_dig_transaction_log.payment_token',
    AUTH_STATUS: 'wp_zesv6j_dig_transaction_log.auth_status',
    TRANSACTION_ID: 'wp_zesv6j_dig_transaction_log.transaction_id',
    RESPONSE_TEXT: 'wp_zesv6j_dig_transaction_log.response_text',
    CC_AUTH_CODE: 'wp_zesv6j_dig_transaction_log.cc_auth_code',
    CC_RESPONSE_CODE: 'wp_zesv6j_dig_transaction_log.cc_response_code',
    CC_MASK: 'wp_zesv6j_dig_transaction_log.cc_mask',
    CVV_RESPONSE: 'wp_zesv6j_dig_transaction_log.cvv_response',
    AVS_RESPONSE: 'wp_zesv6j_dig_transaction_log.avs_response',
    KOUNT_DECISION: 'wp_zesv6j_dig_transaction_log.kount_decision',
    KOUNT_SCORE: 'wp_zesv6j_dig_transaction_log.kount_score',
    KOUNT_OMNISCORE: 'wp_zesv6j_dig_transaction_log.kount_omniscore',
    KOUNT_TRANS_ID: 'wp_zesv6j_dig_transaction_log.kount_trans_id',
    CC_FNAME: 'wp_zesv6j_dig_transaction_log.cc_fname',
    CC_LNAME: 'wp_zesv6j_dig_transaction_log.cc_lname',
    CC_ADDR_LINE_1: 'wp_zesv6j_dig_transaction_log.cc_addr_line_1',
    CC_ADDR_LINE_2: 'wp_zesv6j_dig_transaction_log.cc_addr_line_2',
    CC_CITY: 'wp_zesv6j_dig_transaction_log.cc_city',
    CC_STATE: 'wp_zesv6j_dig_transaction_log.cc_state',
    CC_ZIP: 'wp_zesv6j_dig_transaction_log.cc_zip',
    CC_COUNTRY: 'wp_zesv6j_dig_transaction_log.cc_country',
    PP_AUTHORIZATION_STATUS: 'wp_zesv6j_dig_transaction_log.pp_authorization_status',
    PP_AUTHORIZATION_AMOUNT: 'wp_zesv6j_dig_transaction_log.pp_authorization_amount',
    PP_AUTHORIZATION_PAYER_EMAIL: 'wp_zesv6j_dig_transaction_log.pp_authorization_payer_email',
    CREATED: 'wp_zesv6j_dig_transaction_log.created',
    UPDATED: 'wp_zesv6j_dig_transaction_log.updated',
    CC_COMPANY: 'wp_zesv6j_dig_transaction_log.cc_company',
    FROM_USER_ID: 'wp_zesv6j_dig_transaction_log.from_user_id',
    PRIMARY: [
        'wp_zesv6j_dig_transaction_log.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_transaction_log.id':'id',
      'wp_zesv6j_dig_transaction_log.user_id':'user_id',
      'wp_zesv6j_dig_transaction_log.amount':'amount',
      'wp_zesv6j_dig_transaction_log.payment_token':'payment_token',
      'wp_zesv6j_dig_transaction_log.auth_status':'auth_status',
      'wp_zesv6j_dig_transaction_log.transaction_id':'transaction_id',
      'wp_zesv6j_dig_transaction_log.response_text':'response_text',
      'wp_zesv6j_dig_transaction_log.cc_auth_code':'cc_auth_code',
      'wp_zesv6j_dig_transaction_log.cc_response_code':'cc_response_code',
      'wp_zesv6j_dig_transaction_log.cc_mask':'cc_mask',
      'wp_zesv6j_dig_transaction_log.cvv_response':'cvv_response',
      'wp_zesv6j_dig_transaction_log.avs_response':'avs_response',
      'wp_zesv6j_dig_transaction_log.kount_decision':'kount_decision',
      'wp_zesv6j_dig_transaction_log.kount_score':'kount_score',
      'wp_zesv6j_dig_transaction_log.kount_omniscore':'kount_omniscore',
      'wp_zesv6j_dig_transaction_log.kount_trans_id':'kount_trans_id',
      'wp_zesv6j_dig_transaction_log.cc_fname':'cc_fname',
      'wp_zesv6j_dig_transaction_log.cc_lname':'cc_lname',
      'wp_zesv6j_dig_transaction_log.cc_addr_line_1':'cc_addr_line_1',
      'wp_zesv6j_dig_transaction_log.cc_addr_line_2':'cc_addr_line_2',
      'wp_zesv6j_dig_transaction_log.cc_city':'cc_city',
      'wp_zesv6j_dig_transaction_log.cc_state':'cc_state',
      'wp_zesv6j_dig_transaction_log.cc_zip':'cc_zip',
      'wp_zesv6j_dig_transaction_log.cc_country':'cc_country',
      'wp_zesv6j_dig_transaction_log.pp_authorization_status':'pp_authorization_status',
      'wp_zesv6j_dig_transaction_log.pp_authorization_amount':'pp_authorization_amount',
      'wp_zesv6j_dig_transaction_log.pp_authorization_payer_email':'pp_authorization_payer_email',
      'wp_zesv6j_dig_transaction_log.created':'created',
      'wp_zesv6j_dig_transaction_log.updated':'updated',
      'wp_zesv6j_dig_transaction_log.cc_company':'cc_company',
      'wp_zesv6j_dig_transaction_log.from_user_id':'from_user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_transaction_log.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.user_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_transaction_log.amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_transaction_log.payment_token': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.auth_status': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_transaction_log.transaction_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.response_text': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_auth_code': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_response_code': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_transaction_log.cc_mask': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cvv_response': { 
            MYSQL_TYPE: 'char', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.avs_response': { 
            MYSQL_TYPE: 'char', 
            MAX_LENGTH: '1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.kount_decision': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.kount_score': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.kount_omniscore': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.kount_trans_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '12', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_fname': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_lname': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_addr_line_1': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_addr_line_2': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_city': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_state': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_zip': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_country': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.pp_authorization_status': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.pp_authorization_amount': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.pp_authorization_payer_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.cc_company': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_transaction_log.from_user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Twitch_Login_Info {
      'twitch_user_id'?: string;
      'twitch_user_name'?: string;
      'twitch_access_token'?: string;
      'twitch_user_email'?: string;
      'twitch_meta_key'?: string;
      'user_id'?: number;
}

interface iDefineDig_Twitch_Login_Info {
      'TWITCH_USER_ID': string;
      'TWITCH_USER_NAME': string;
      'TWITCH_ACCESS_TOKEN': string;
      'TWITCH_USER_EMAIL': string;
      'TWITCH_META_KEY': string;
      'USER_ID': string;
}

export const dig_twitch_login_info : C6RestfulModel & iDefineDig_Twitch_Login_Info = {
    TABLE_NAME:'dig_twitch_login_info',
    TWITCH_USER_ID: 'wp_zesv6j_dig_twitch_login_info.twitch_user_id',
    TWITCH_USER_NAME: 'wp_zesv6j_dig_twitch_login_info.twitch_user_name',
    TWITCH_ACCESS_TOKEN: 'wp_zesv6j_dig_twitch_login_info.twitch_access_token',
    TWITCH_USER_EMAIL: 'wp_zesv6j_dig_twitch_login_info.twitch_user_email',
    TWITCH_META_KEY: 'wp_zesv6j_dig_twitch_login_info.twitch_meta_key',
    USER_ID: 'wp_zesv6j_dig_twitch_login_info.user_id',
    PRIMARY: [
        'wp_zesv6j_dig_twitch_login_info.twitch_user_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_twitch_login_info.twitch_user_id':'twitch_user_id',
      'wp_zesv6j_dig_twitch_login_info.twitch_user_name':'twitch_user_name',
      'wp_zesv6j_dig_twitch_login_info.twitch_access_token':'twitch_access_token',
      'wp_zesv6j_dig_twitch_login_info.twitch_user_email':'twitch_user_email',
      'wp_zesv6j_dig_twitch_login_info.twitch_meta_key':'twitch_meta_key',
      'wp_zesv6j_dig_twitch_login_info.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_twitch_login_info.twitch_user_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_twitch_login_info.twitch_user_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_twitch_login_info.twitch_access_token': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_twitch_login_info.twitch_user_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_twitch_login_info.twitch_meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_twitch_login_info.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_User_Allowed_Games {
      'user_id'?: number;
      'game_id'?: number;
}

interface iDefineDig_User_Allowed_Games {
      'USER_ID': string;
      'GAME_ID': string;
}

export const dig_user_allowed_games : C6RestfulModel & iDefineDig_User_Allowed_Games = {
    TABLE_NAME:'dig_user_allowed_games',
    USER_ID: 'wp_zesv6j_dig_user_allowed_games.user_id',
    GAME_ID: 'wp_zesv6j_dig_user_allowed_games.game_id',
    PRIMARY: [
        'wp_zesv6j_dig_user_allowed_games.user_id',
        'wp_zesv6j_dig_user_allowed_games.game_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_allowed_games.user_id':'user_id',
      'wp_zesv6j_dig_user_allowed_games.game_id':'game_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_allowed_games.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_allowed_games.game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_User_Channels {
      'channel_id'?: string;
      'channel_user_id'?: number;
      'channel_name'?: string;
}

interface iDefineDig_User_Channels {
      'CHANNEL_ID': string;
      'CHANNEL_USER_ID': string;
      'CHANNEL_NAME': string;
}

export const dig_user_channels : C6RestfulModel & iDefineDig_User_Channels = {
    TABLE_NAME:'dig_user_channels',
    CHANNEL_ID: 'wp_zesv6j_dig_user_channels.channel_id',
    CHANNEL_USER_ID: 'wp_zesv6j_dig_user_channels.channel_user_id',
    CHANNEL_NAME: 'wp_zesv6j_dig_user_channels.channel_name',
    PRIMARY: [
        'wp_zesv6j_dig_user_channels.channel_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_channels.channel_id':'channel_id',
      'wp_zesv6j_dig_user_channels.channel_user_id':'channel_user_id',
      'wp_zesv6j_dig_user_channels.channel_name':'channel_name',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_channels.channel_id': { 
            MYSQL_TYPE: 'binary', 
            MAX_LENGTH: '16', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_channels.channel_user_id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_channels.channel_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_User_Groups {
      'group_id'?: number;
      'user_id'?: number;
}

interface iDefineDig_User_Groups {
      'GROUP_ID': string;
      'USER_ID': string;
}

export const dig_user_groups : C6RestfulModel & iDefineDig_User_Groups = {
    TABLE_NAME:'dig_user_groups',
    GROUP_ID: 'wp_zesv6j_dig_user_groups.group_id',
    USER_ID: 'wp_zesv6j_dig_user_groups.user_id',
    PRIMARY: [
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_groups.group_id':'group_id',
      'wp_zesv6j_dig_user_groups.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_groups.group_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_groups.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_User_Referral {
      'referred_by'?: number;
      'user_id'?: number;
}

interface iDefineDig_User_Referral {
      'REFERRED_BY': string;
      'USER_ID': string;
}

export const dig_user_referral : C6RestfulModel & iDefineDig_User_Referral = {
    TABLE_NAME:'dig_user_referral',
    REFERRED_BY: 'wp_zesv6j_dig_user_referral.referred_by',
    USER_ID: 'wp_zesv6j_dig_user_referral.user_id',
    PRIMARY: [
        'wp_zesv6j_dig_user_referral.user_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_referral.referred_by':'referred_by',
      'wp_zesv6j_dig_user_referral.user_id':'user_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_referral.referred_by': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_referral.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_User_Stats_Meta {
      'meta_id'?: number;
      'user_stats_id'?: number;
      'meta_key'?: string;
      'meta_value'?: string;
}

interface iDefineDig_User_Stats_Meta {
      'META_ID': string;
      'USER_STATS_ID': string;
      'META_KEY': string;
      'META_VALUE': string;
}

export const dig_user_stats_meta : C6RestfulModel & iDefineDig_User_Stats_Meta = {
    TABLE_NAME:'dig_user_stats_meta',
    META_ID: 'wp_zesv6j_dig_user_stats_meta.meta_id',
    USER_STATS_ID: 'wp_zesv6j_dig_user_stats_meta.user_stats_id',
    META_KEY: 'wp_zesv6j_dig_user_stats_meta.meta_key',
    META_VALUE: 'wp_zesv6j_dig_user_stats_meta.meta_value',
    PRIMARY: [
        'wp_zesv6j_dig_user_stats_meta.meta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_stats_meta.meta_id':'meta_id',
      'wp_zesv6j_dig_user_stats_meta.user_stats_id':'user_stats_id',
      'wp_zesv6j_dig_user_stats_meta.meta_key':'meta_key',
      'wp_zesv6j_dig_user_stats_meta.meta_value':'meta_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_stats_meta.meta_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_stats_meta.user_stats_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_stats_meta.meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_stats_meta.meta_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_User_Team_Meta {
      'meta_id'?: number;
      'user_team_id'?: number;
      'meta_key'?: string;
      'meta_value'?: string;
}

interface iDefineDig_User_Team_Meta {
      'META_ID': string;
      'USER_TEAM_ID': string;
      'META_KEY': string;
      'META_VALUE': string;
}

export const dig_user_team_meta : C6RestfulModel & iDefineDig_User_Team_Meta = {
    TABLE_NAME:'dig_user_team_meta',
    META_ID: 'wp_zesv6j_dig_user_team_meta.meta_id',
    USER_TEAM_ID: 'wp_zesv6j_dig_user_team_meta.user_team_id',
    META_KEY: 'wp_zesv6j_dig_user_team_meta.meta_key',
    META_VALUE: 'wp_zesv6j_dig_user_team_meta.meta_value',
    PRIMARY: [
        'wp_zesv6j_dig_user_team_meta.meta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_user_team_meta.meta_id':'meta_id',
      'wp_zesv6j_dig_user_team_meta.user_team_id':'user_team_id',
      'wp_zesv6j_dig_user_team_meta.meta_key':'meta_key',
      'wp_zesv6j_dig_user_team_meta.meta_value':'meta_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_user_team_meta.meta_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_team_meta.user_team_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_user_team_meta.meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_user_team_meta.meta_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Vendor_Game {
      'vendor_game_id'?: number;
      'vendor_id'?: number;
      'game_id'?: number;
      'platform_id'?: number;
}

interface iDefineDig_Vendor_Game {
      'VENDOR_GAME_ID': string;
      'VENDOR_ID': string;
      'GAME_ID': string;
      'PLATFORM_ID': string;
}

export const dig_vendor_game : C6RestfulModel & iDefineDig_Vendor_Game = {
    TABLE_NAME:'dig_vendor_game',
    VENDOR_GAME_ID: 'wp_zesv6j_dig_vendor_game.vendor_game_id',
    VENDOR_ID: 'wp_zesv6j_dig_vendor_game.vendor_id',
    GAME_ID: 'wp_zesv6j_dig_vendor_game.game_id',
    PLATFORM_ID: 'wp_zesv6j_dig_vendor_game.platform_id',
    PRIMARY: [
        'wp_zesv6j_dig_vendor_game.vendor_game_id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_vendor_game.vendor_game_id':'vendor_game_id',
      'wp_zesv6j_dig_vendor_game.vendor_id':'vendor_id',
      'wp_zesv6j_dig_vendor_game.game_id':'game_id',
      'wp_zesv6j_dig_vendor_game.platform_id':'platform_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_vendor_game.vendor_game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_vendor_game.vendor_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_vendor_game.game_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_vendor_game.platform_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Wallet_Deposit_Type {
      'id'?: number;
      'label'?: string;
      'description'?: string;
      'notes'?: string;
      'fee'?: string;
      'percentage'?: string;
      'min_threshold'?: string;
      'max_threshold'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Wallet_Deposit_Type {
      'ID': string;
      'LABEL': string;
      'DESCRIPTION': string;
      'NOTES': string;
      'FEE': string;
      'PERCENTAGE': string;
      'MIN_THRESHOLD': string;
      'MAX_THRESHOLD': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_wallet_deposit_type : C6RestfulModel & iDefineDig_Wallet_Deposit_Type = {
    TABLE_NAME:'dig_wallet_deposit_type',
    ID: 'wp_zesv6j_dig_wallet_deposit_type.id',
    LABEL: 'wp_zesv6j_dig_wallet_deposit_type.label',
    DESCRIPTION: 'wp_zesv6j_dig_wallet_deposit_type.description',
    NOTES: 'wp_zesv6j_dig_wallet_deposit_type.notes',
    FEE: 'wp_zesv6j_dig_wallet_deposit_type.fee',
    PERCENTAGE: 'wp_zesv6j_dig_wallet_deposit_type.percentage',
    MIN_THRESHOLD: 'wp_zesv6j_dig_wallet_deposit_type.min_threshold',
    MAX_THRESHOLD: 'wp_zesv6j_dig_wallet_deposit_type.max_threshold',
    CREATED: 'wp_zesv6j_dig_wallet_deposit_type.created',
    UPDATED: 'wp_zesv6j_dig_wallet_deposit_type.updated',
    PRIMARY: [
        'wp_zesv6j_dig_wallet_deposit_type.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_wallet_deposit_type.id':'id',
      'wp_zesv6j_dig_wallet_deposit_type.label':'label',
      'wp_zesv6j_dig_wallet_deposit_type.description':'description',
      'wp_zesv6j_dig_wallet_deposit_type.notes':'notes',
      'wp_zesv6j_dig_wallet_deposit_type.fee':'fee',
      'wp_zesv6j_dig_wallet_deposit_type.percentage':'percentage',
      'wp_zesv6j_dig_wallet_deposit_type.min_threshold':'min_threshold',
      'wp_zesv6j_dig_wallet_deposit_type.max_threshold':'max_threshold',
      'wp_zesv6j_dig_wallet_deposit_type.created':'created',
      'wp_zesv6j_dig_wallet_deposit_type.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_wallet_deposit_type.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.label': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.description': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.notes': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.fee': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_deposit_type.percentage': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.min_threshold': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.max_threshold': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_deposit_type.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Wallet_Transactions {
      'id'?: number;
      'user_id'?: number;
      'amount'?: string;
      'action'?: string;
      'comment'?: string;
      'status'?: number;
      'transaction_log_id'?: number;
      'withdrawal_request_id'?: number;
      'created'?: string;
      'updated'?: string;
      'buyer_id'?: number;
}

interface iDefineDig_Wallet_Transactions {
      'ID': string;
      'USER_ID': string;
      'AMOUNT': string;
      'ACTION': string;
      'COMMENT': string;
      'STATUS': string;
      'TRANSACTION_LOG_ID': string;
      'WITHDRAWAL_REQUEST_ID': string;
      'CREATED': string;
      'UPDATED': string;
      'BUYER_ID': string;
}

export const dig_wallet_transactions : C6RestfulModel & iDefineDig_Wallet_Transactions = {
    TABLE_NAME:'dig_wallet_transactions',
    ID: 'wp_zesv6j_dig_wallet_transactions.id',
    USER_ID: 'wp_zesv6j_dig_wallet_transactions.user_id',
    AMOUNT: 'wp_zesv6j_dig_wallet_transactions.amount',
    ACTION: 'wp_zesv6j_dig_wallet_transactions.action',
    COMMENT: 'wp_zesv6j_dig_wallet_transactions.comment',
    STATUS: 'wp_zesv6j_dig_wallet_transactions.status',
    TRANSACTION_LOG_ID: 'wp_zesv6j_dig_wallet_transactions.transaction_log_id',
    WITHDRAWAL_REQUEST_ID: 'wp_zesv6j_dig_wallet_transactions.withdrawal_request_id',
    CREATED: 'wp_zesv6j_dig_wallet_transactions.created',
    UPDATED: 'wp_zesv6j_dig_wallet_transactions.updated',
    BUYER_ID: 'wp_zesv6j_dig_wallet_transactions.buyer_id',
    PRIMARY: [
        'wp_zesv6j_dig_wallet_transactions.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_wallet_transactions.id':'id',
      'wp_zesv6j_dig_wallet_transactions.user_id':'user_id',
      'wp_zesv6j_dig_wallet_transactions.amount':'amount',
      'wp_zesv6j_dig_wallet_transactions.action':'action',
      'wp_zesv6j_dig_wallet_transactions.comment':'comment',
      'wp_zesv6j_dig_wallet_transactions.status':'status',
      'wp_zesv6j_dig_wallet_transactions.transaction_log_id':'transaction_log_id',
      'wp_zesv6j_dig_wallet_transactions.withdrawal_request_id':'withdrawal_request_id',
      'wp_zesv6j_dig_wallet_transactions.created':'created',
      'wp_zesv6j_dig_wallet_transactions.updated':'updated',
      'wp_zesv6j_dig_wallet_transactions.buyer_id':'buyer_id',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_wallet_transactions.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.user_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_transactions.amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_transactions.action': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.comment': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.status': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.transaction_log_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.withdrawal_request_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_transactions.buyer_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Wallet_Withdrawal_Requests {
      'id'?: number;
      'user_id'?: number;
      'wallet_withdrwal_type_id'?: number;
      'first_approver_id'?: number;
      'second_approver_id'?: number;
      'first_approval'?: number;
      'second_approval'?: number;
      'notes'?: string;
      'kount_decision'?: string;
      'kount_score'?: number;
      'kount_omniscore'?: string;
      'kount_trans_id'?: string;
      'total_amount'?: string;
      'withdrawal_amount'?: string;
      'withdrawal_fee'?: string;
      'paid'?: number;
      'first_name'?: string;
      'last_name'?: string;
      'paypal_email'?: string;
      'addr_line_1'?: string;
      'addr_line_2'?: string;
      'addr_city'?: string;
      'addr_state'?: string;
      'addr_zip'?: string;
      'addr_country'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Wallet_Withdrawal_Requests {
      'ID': string;
      'USER_ID': string;
      'WALLET_WITHDRWAL_TYPE_ID': string;
      'FIRST_APPROVER_ID': string;
      'SECOND_APPROVER_ID': string;
      'FIRST_APPROVAL': string;
      'SECOND_APPROVAL': string;
      'NOTES': string;
      'KOUNT_DECISION': string;
      'KOUNT_SCORE': string;
      'KOUNT_OMNISCORE': string;
      'KOUNT_TRANS_ID': string;
      'TOTAL_AMOUNT': string;
      'WITHDRAWAL_AMOUNT': string;
      'WITHDRAWAL_FEE': string;
      'PAID': string;
      'FIRST_NAME': string;
      'LAST_NAME': string;
      'PAYPAL_EMAIL': string;
      'ADDR_LINE_1': string;
      'ADDR_LINE_2': string;
      'ADDR_CITY': string;
      'ADDR_STATE': string;
      'ADDR_ZIP': string;
      'ADDR_COUNTRY': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_wallet_withdrawal_requests : C6RestfulModel & iDefineDig_Wallet_Withdrawal_Requests = {
    TABLE_NAME:'dig_wallet_withdrawal_requests',
    ID: 'wp_zesv6j_dig_wallet_withdrawal_requests.id',
    USER_ID: 'wp_zesv6j_dig_wallet_withdrawal_requests.user_id',
    WALLET_WITHDRWAL_TYPE_ID: 'wp_zesv6j_dig_wallet_withdrawal_requests.wallet_withdrwal_type_id',
    FIRST_APPROVER_ID: 'wp_zesv6j_dig_wallet_withdrawal_requests.first_approver_id',
    SECOND_APPROVER_ID: 'wp_zesv6j_dig_wallet_withdrawal_requests.second_approver_id',
    FIRST_APPROVAL: 'wp_zesv6j_dig_wallet_withdrawal_requests.first_approval',
    SECOND_APPROVAL: 'wp_zesv6j_dig_wallet_withdrawal_requests.second_approval',
    NOTES: 'wp_zesv6j_dig_wallet_withdrawal_requests.notes',
    KOUNT_DECISION: 'wp_zesv6j_dig_wallet_withdrawal_requests.kount_decision',
    KOUNT_SCORE: 'wp_zesv6j_dig_wallet_withdrawal_requests.kount_score',
    KOUNT_OMNISCORE: 'wp_zesv6j_dig_wallet_withdrawal_requests.kount_omniscore',
    KOUNT_TRANS_ID: 'wp_zesv6j_dig_wallet_withdrawal_requests.kount_trans_id',
    TOTAL_AMOUNT: 'wp_zesv6j_dig_wallet_withdrawal_requests.total_amount',
    WITHDRAWAL_AMOUNT: 'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_amount',
    WITHDRAWAL_FEE: 'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_fee',
    PAID: 'wp_zesv6j_dig_wallet_withdrawal_requests.paid',
    FIRST_NAME: 'wp_zesv6j_dig_wallet_withdrawal_requests.first_name',
    LAST_NAME: 'wp_zesv6j_dig_wallet_withdrawal_requests.last_name',
    PAYPAL_EMAIL: 'wp_zesv6j_dig_wallet_withdrawal_requests.paypal_email',
    ADDR_LINE_1: 'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_1',
    ADDR_LINE_2: 'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_2',
    ADDR_CITY: 'wp_zesv6j_dig_wallet_withdrawal_requests.addr_city',
    ADDR_STATE: 'wp_zesv6j_dig_wallet_withdrawal_requests.addr_state',
    ADDR_ZIP: 'wp_zesv6j_dig_wallet_withdrawal_requests.addr_zip',
    ADDR_COUNTRY: 'wp_zesv6j_dig_wallet_withdrawal_requests.addr_country',
    CREATED: 'wp_zesv6j_dig_wallet_withdrawal_requests.created',
    UPDATED: 'wp_zesv6j_dig_wallet_withdrawal_requests.updated',
    PRIMARY: [
        'wp_zesv6j_dig_wallet_withdrawal_requests.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_wallet_withdrawal_requests.id':'id',
      'wp_zesv6j_dig_wallet_withdrawal_requests.user_id':'user_id',
      'wp_zesv6j_dig_wallet_withdrawal_requests.wallet_withdrwal_type_id':'wallet_withdrwal_type_id',
      'wp_zesv6j_dig_wallet_withdrawal_requests.first_approver_id':'first_approver_id',
      'wp_zesv6j_dig_wallet_withdrawal_requests.second_approver_id':'second_approver_id',
      'wp_zesv6j_dig_wallet_withdrawal_requests.first_approval':'first_approval',
      'wp_zesv6j_dig_wallet_withdrawal_requests.second_approval':'second_approval',
      'wp_zesv6j_dig_wallet_withdrawal_requests.notes':'notes',
      'wp_zesv6j_dig_wallet_withdrawal_requests.kount_decision':'kount_decision',
      'wp_zesv6j_dig_wallet_withdrawal_requests.kount_score':'kount_score',
      'wp_zesv6j_dig_wallet_withdrawal_requests.kount_omniscore':'kount_omniscore',
      'wp_zesv6j_dig_wallet_withdrawal_requests.kount_trans_id':'kount_trans_id',
      'wp_zesv6j_dig_wallet_withdrawal_requests.total_amount':'total_amount',
      'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_amount':'withdrawal_amount',
      'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_fee':'withdrawal_fee',
      'wp_zesv6j_dig_wallet_withdrawal_requests.paid':'paid',
      'wp_zesv6j_dig_wallet_withdrawal_requests.first_name':'first_name',
      'wp_zesv6j_dig_wallet_withdrawal_requests.last_name':'last_name',
      'wp_zesv6j_dig_wallet_withdrawal_requests.paypal_email':'paypal_email',
      'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_1':'addr_line_1',
      'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_2':'addr_line_2',
      'wp_zesv6j_dig_wallet_withdrawal_requests.addr_city':'addr_city',
      'wp_zesv6j_dig_wallet_withdrawal_requests.addr_state':'addr_state',
      'wp_zesv6j_dig_wallet_withdrawal_requests.addr_zip':'addr_zip',
      'wp_zesv6j_dig_wallet_withdrawal_requests.addr_country':'addr_country',
      'wp_zesv6j_dig_wallet_withdrawal_requests.created':'created',
      'wp_zesv6j_dig_wallet_withdrawal_requests.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_wallet_withdrawal_requests.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.user_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.wallet_withdrwal_type_id': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.first_approver_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.second_approver_id': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.first_approval': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.second_approval': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.notes': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.kount_decision': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.kount_score': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.kount_omniscore': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,1', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.kount_trans_id': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '12', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.total_amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_amount': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_fee': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.paid': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.first_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.last_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.paypal_email': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_1': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_2': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.addr_city': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.addr_state': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.addr_zip': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.addr_country': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_requests.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iDig_Wallet_Withdrawal_Type {
      'id'?: number;
      'label'?: string;
      'description'?: string;
      'notes'?: string;
      'fee'?: string;
      'percentage'?: string;
      'maximum_fee'?: string;
      'created'?: string;
      'updated'?: string;
}

interface iDefineDig_Wallet_Withdrawal_Type {
      'ID': string;
      'LABEL': string;
      'DESCRIPTION': string;
      'NOTES': string;
      'FEE': string;
      'PERCENTAGE': string;
      'MAXIMUM_FEE': string;
      'CREATED': string;
      'UPDATED': string;
}

export const dig_wallet_withdrawal_type : C6RestfulModel & iDefineDig_Wallet_Withdrawal_Type = {
    TABLE_NAME:'dig_wallet_withdrawal_type',
    ID: 'wp_zesv6j_dig_wallet_withdrawal_type.id',
    LABEL: 'wp_zesv6j_dig_wallet_withdrawal_type.label',
    DESCRIPTION: 'wp_zesv6j_dig_wallet_withdrawal_type.description',
    NOTES: 'wp_zesv6j_dig_wallet_withdrawal_type.notes',
    FEE: 'wp_zesv6j_dig_wallet_withdrawal_type.fee',
    PERCENTAGE: 'wp_zesv6j_dig_wallet_withdrawal_type.percentage',
    MAXIMUM_FEE: 'wp_zesv6j_dig_wallet_withdrawal_type.maximum_fee',
    CREATED: 'wp_zesv6j_dig_wallet_withdrawal_type.created',
    UPDATED: 'wp_zesv6j_dig_wallet_withdrawal_type.updated',
    PRIMARY: [
        'wp_zesv6j_dig_wallet_withdrawal_type.id',
    ],
    COLUMNS: {
      'wp_zesv6j_dig_wallet_withdrawal_type.id':'id',
      'wp_zesv6j_dig_wallet_withdrawal_type.label':'label',
      'wp_zesv6j_dig_wallet_withdrawal_type.description':'description',
      'wp_zesv6j_dig_wallet_withdrawal_type.notes':'notes',
      'wp_zesv6j_dig_wallet_withdrawal_type.fee':'fee',
      'wp_zesv6j_dig_wallet_withdrawal_type.percentage':'percentage',
      'wp_zesv6j_dig_wallet_withdrawal_type.maximum_fee':'maximum_fee',
      'wp_zesv6j_dig_wallet_withdrawal_type.created':'created',
      'wp_zesv6j_dig_wallet_withdrawal_type.updated':'updated',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_dig_wallet_withdrawal_type.id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.label': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.description': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.notes': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.fee': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.percentage': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.maximum_fee': { 
            MYSQL_TYPE: 'decimal', 
            MAX_LENGTH: '13,4', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.created': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_dig_wallet_withdrawal_type.updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iLinks {
      'link_id'?: number;
      'link_url'?: string;
      'link_name'?: string;
      'link_image'?: string;
      'link_target'?: string;
      'link_description'?: string;
      'link_visible'?: string;
      'link_owner'?: number;
      'link_rating'?: number;
      'link_updated'?: string;
      'link_rel'?: string;
      'link_notes'?: string;
      'link_rss'?: string;
}

interface iDefineLinks {
      'LINK_ID': string;
      'LINK_URL': string;
      'LINK_NAME': string;
      'LINK_IMAGE': string;
      'LINK_TARGET': string;
      'LINK_DESCRIPTION': string;
      'LINK_VISIBLE': string;
      'LINK_OWNER': string;
      'LINK_RATING': string;
      'LINK_UPDATED': string;
      'LINK_REL': string;
      'LINK_NOTES': string;
      'LINK_RSS': string;
}

export const links : C6RestfulModel & iDefineLinks = {
    TABLE_NAME:'links',
    LINK_ID: 'wp_zesv6j_links.link_id',
    LINK_URL: 'wp_zesv6j_links.link_url',
    LINK_NAME: 'wp_zesv6j_links.link_name',
    LINK_IMAGE: 'wp_zesv6j_links.link_image',
    LINK_TARGET: 'wp_zesv6j_links.link_target',
    LINK_DESCRIPTION: 'wp_zesv6j_links.link_description',
    LINK_VISIBLE: 'wp_zesv6j_links.link_visible',
    LINK_OWNER: 'wp_zesv6j_links.link_owner',
    LINK_RATING: 'wp_zesv6j_links.link_rating',
    LINK_UPDATED: 'wp_zesv6j_links.link_updated',
    LINK_REL: 'wp_zesv6j_links.link_rel',
    LINK_NOTES: 'wp_zesv6j_links.link_notes',
    LINK_RSS: 'wp_zesv6j_links.link_rss',
    PRIMARY: [
        'wp_zesv6j_links.link_id',
    ],
    COLUMNS: {
      'wp_zesv6j_links.link_id':'link_id',
      'wp_zesv6j_links.link_url':'link_url',
      'wp_zesv6j_links.link_name':'link_name',
      'wp_zesv6j_links.link_image':'link_image',
      'wp_zesv6j_links.link_target':'link_target',
      'wp_zesv6j_links.link_description':'link_description',
      'wp_zesv6j_links.link_visible':'link_visible',
      'wp_zesv6j_links.link_owner':'link_owner',
      'wp_zesv6j_links.link_rating':'link_rating',
      'wp_zesv6j_links.link_updated':'link_updated',
      'wp_zesv6j_links.link_rel':'link_rel',
      'wp_zesv6j_links.link_notes':'link_notes',
      'wp_zesv6j_links.link_rss':'link_rss',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_links.link_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_url': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_image': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_target': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '25', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_description': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_visible': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_owner': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_rating': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_updated': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_rel': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_links.link_notes': { 
            MYSQL_TYPE: 'mediumtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_links.link_rss': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iOptions {
      'option_id'?: number;
      'option_name'?: string;
      'option_value'?: string;
      'autoload'?: string;
}

interface iDefineOptions {
      'OPTION_ID': string;
      'OPTION_NAME': string;
      'OPTION_VALUE': string;
      'AUTOLOAD': string;
}

export const options : C6RestfulModel & iDefineOptions = {
    TABLE_NAME:'options',
    OPTION_ID: 'wp_zesv6j_options.option_id',
    OPTION_NAME: 'wp_zesv6j_options.option_name',
    OPTION_VALUE: 'wp_zesv6j_options.option_value',
    AUTOLOAD: 'wp_zesv6j_options.autoload',
    PRIMARY: [
        'wp_zesv6j_options.option_id',
    ],
    COLUMNS: {
      'wp_zesv6j_options.option_id':'option_id',
      'wp_zesv6j_options.option_name':'option_name',
      'wp_zesv6j_options.option_value':'option_value',
      'wp_zesv6j_options.autoload':'autoload',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_options.option_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_options.option_name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '191', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_options.option_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_options.autoload': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '20', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iPostmeta {
      'meta_id'?: number;
      'post_id'?: number;
      'meta_key'?: string;
      'meta_value'?: string;
}

interface iDefinePostmeta {
      'META_ID': string;
      'POST_ID': string;
      'META_KEY': string;
      'META_VALUE': string;
}

export const postmeta : C6RestfulModel & iDefinePostmeta = {
    TABLE_NAME:'postmeta',
    META_ID: 'wp_zesv6j_postmeta.meta_id',
    POST_ID: 'wp_zesv6j_postmeta.post_id',
    META_KEY: 'wp_zesv6j_postmeta.meta_key',
    META_VALUE: 'wp_zesv6j_postmeta.meta_value',
    PRIMARY: [
        'wp_zesv6j_postmeta.meta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_postmeta.meta_id':'meta_id',
      'wp_zesv6j_postmeta.post_id':'post_id',
      'wp_zesv6j_postmeta.meta_key':'meta_key',
      'wp_zesv6j_postmeta.meta_value':'meta_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_postmeta.meta_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_postmeta.post_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_postmeta.meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_postmeta.meta_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iTerm_Relationships {
      'object_id'?: number;
      'term_taxonomy_id'?: number;
      'term_order'?: number;
}

interface iDefineTerm_Relationships {
      'OBJECT_ID': string;
      'TERM_TAXONOMY_ID': string;
      'TERM_ORDER': string;
}

export const term_relationships : C6RestfulModel & iDefineTerm_Relationships = {
    TABLE_NAME:'term_relationships',
    OBJECT_ID: 'wp_zesv6j_term_relationships.object_id',
    TERM_TAXONOMY_ID: 'wp_zesv6j_term_relationships.term_taxonomy_id',
    TERM_ORDER: 'wp_zesv6j_term_relationships.term_order',
    PRIMARY: [
        'wp_zesv6j_term_relationships.object_id',
        'wp_zesv6j_term_relationships.term_taxonomy_id',
    ],
    COLUMNS: {
      'wp_zesv6j_term_relationships.object_id':'object_id',
      'wp_zesv6j_term_relationships.term_taxonomy_id':'term_taxonomy_id',
      'wp_zesv6j_term_relationships.term_order':'term_order',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_term_relationships.object_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_term_relationships.term_taxonomy_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_term_relationships.term_order': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iTerm_Taxonomy {
      'term_taxonomy_id'?: number;
      'term_id'?: number;
      'taxonomy'?: string;
      'description'?: string;
      'parent'?: number;
      'count'?: number;
}

interface iDefineTerm_Taxonomy {
      'TERM_TAXONOMY_ID': string;
      'TERM_ID': string;
      'TAXONOMY': string;
      'DESCRIPTION': string;
      'PARENT': string;
      'COUNT': string;
}

export const term_taxonomy : C6RestfulModel & iDefineTerm_Taxonomy = {
    TABLE_NAME:'term_taxonomy',
    TERM_TAXONOMY_ID: 'wp_zesv6j_term_taxonomy.term_taxonomy_id',
    TERM_ID: 'wp_zesv6j_term_taxonomy.term_id',
    TAXONOMY: 'wp_zesv6j_term_taxonomy.taxonomy',
    DESCRIPTION: 'wp_zesv6j_term_taxonomy.description',
    PARENT: 'wp_zesv6j_term_taxonomy.parent',
    COUNT: 'wp_zesv6j_term_taxonomy.count',
    PRIMARY: [
        'wp_zesv6j_term_taxonomy.term_taxonomy_id',
    ],
    COLUMNS: {
      'wp_zesv6j_term_taxonomy.term_taxonomy_id':'term_taxonomy_id',
      'wp_zesv6j_term_taxonomy.term_id':'term_id',
      'wp_zesv6j_term_taxonomy.taxonomy':'taxonomy',
      'wp_zesv6j_term_taxonomy.description':'description',
      'wp_zesv6j_term_taxonomy.parent':'parent',
      'wp_zesv6j_term_taxonomy.count':'count',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_term_taxonomy.term_taxonomy_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_term_taxonomy.term_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_term_taxonomy.taxonomy': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '32', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_term_taxonomy.description': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_term_taxonomy.parent': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_term_taxonomy.count': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iTerms {
      'term_id'?: number;
      'name'?: string;
      'slug'?: string;
      'term_group'?: number;
      'term_order'?: number;
}

interface iDefineTerms {
      'TERM_ID': string;
      'NAME': string;
      'SLUG': string;
      'TERM_GROUP': string;
      'TERM_ORDER': string;
}

export const terms : C6RestfulModel & iDefineTerms = {
    TABLE_NAME:'terms',
    TERM_ID: 'wp_zesv6j_terms.term_id',
    NAME: 'wp_zesv6j_terms.name',
    SLUG: 'wp_zesv6j_terms.slug',
    TERM_GROUP: 'wp_zesv6j_terms.term_group',
    TERM_ORDER: 'wp_zesv6j_terms.term_order',
    PRIMARY: [
        'wp_zesv6j_terms.term_id',
    ],
    COLUMNS: {
      'wp_zesv6j_terms.term_id':'term_id',
      'wp_zesv6j_terms.name':'name',
      'wp_zesv6j_terms.slug':'slug',
      'wp_zesv6j_terms.term_group':'term_group',
      'wp_zesv6j_terms.term_order':'term_order',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_terms.term_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_terms.name': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '200', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_terms.slug': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '200', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_terms.term_group': { 
            MYSQL_TYPE: 'bigint', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_terms.term_order': { 
            MYSQL_TYPE: 'int', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iUm_Followers {
      'id'?: number;
      'time'?: string;
      'user_id1'?: number;
      'user_id2'?: number;
}

interface iDefineUm_Followers {
      'ID': string;
      'TIME': string;
      'USER_ID1': string;
      'USER_ID2': string;
}

export const um_followers : C6RestfulModel & iDefineUm_Followers = {
    TABLE_NAME:'um_followers',
    ID: 'wp_zesv6j_um_followers.id',
    TIME: 'wp_zesv6j_um_followers.time',
    USER_ID1: 'wp_zesv6j_um_followers.user_id1',
    USER_ID2: 'wp_zesv6j_um_followers.user_id2',
    PRIMARY: [
        'wp_zesv6j_um_followers.id',
    ],
    COLUMNS: {
      'wp_zesv6j_um_followers.id':'id',
      'wp_zesv6j_um_followers.time':'time',
      'wp_zesv6j_um_followers.user_id1':'user_id1',
      'wp_zesv6j_um_followers.user_id2':'user_id2',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_um_followers.id': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_followers.time': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_followers.user_id1': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_um_followers.user_id2': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iUm_Friends {
      'id'?: number;
      'time'?: string;
      'user_id1'?: number;
      'user_id2'?: number;
      'status'?: number;
}

interface iDefineUm_Friends {
      'ID': string;
      'TIME': string;
      'USER_ID1': string;
      'USER_ID2': string;
      'STATUS': string;
}

export const um_friends : C6RestfulModel & iDefineUm_Friends = {
    TABLE_NAME:'um_friends',
    ID: 'wp_zesv6j_um_friends.id',
    TIME: 'wp_zesv6j_um_friends.time',
    USER_ID1: 'wp_zesv6j_um_friends.user_id1',
    USER_ID2: 'wp_zesv6j_um_friends.user_id2',
    STATUS: 'wp_zesv6j_um_friends.status',
    PRIMARY: [
        'wp_zesv6j_um_friends.id',
    ],
    COLUMNS: {
      'wp_zesv6j_um_friends.id':'id',
      'wp_zesv6j_um_friends.time':'time',
      'wp_zesv6j_um_friends.user_id1':'user_id1',
      'wp_zesv6j_um_friends.user_id2':'user_id2',
      'wp_zesv6j_um_friends.status':'status',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_um_friends.id': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_friends.time': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_friends.user_id1': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_um_friends.user_id2': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_um_friends.status': { 
            MYSQL_TYPE: 'tinyint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iUm_Metadata {
      'umeta_id'?: number;
      'user_id'?: number;
      'um_key'?: string;
      'um_value'?: string;
}

interface iDefineUm_Metadata {
      'UMETA_ID': string;
      'USER_ID': string;
      'UM_KEY': string;
      'UM_VALUE': string;
}

export const um_metadata : C6RestfulModel & iDefineUm_Metadata = {
    TABLE_NAME:'um_metadata',
    UMETA_ID: 'wp_zesv6j_um_metadata.umeta_id',
    USER_ID: 'wp_zesv6j_um_metadata.user_id',
    UM_KEY: 'wp_zesv6j_um_metadata.um_key',
    UM_VALUE: 'wp_zesv6j_um_metadata.um_value',
    PRIMARY: [
        'wp_zesv6j_um_metadata.umeta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_um_metadata.umeta_id':'umeta_id',
      'wp_zesv6j_um_metadata.user_id':'user_id',
      'wp_zesv6j_um_metadata.um_key':'um_key',
      'wp_zesv6j_um_metadata.um_value':'um_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_um_metadata.umeta_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_metadata.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_metadata.um_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_metadata.um_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iUm_Notifications {
      'id'?: number;
      'time'?: string;
      'user'?: string;
      'status'?: string;
      'photo'?: string;
      'type'?: string;
      'url'?: string;
      'content'?: string;
}

interface iDefineUm_Notifications {
      'ID': string;
      'TIME': string;
      'USER': string;
      'STATUS': string;
      'PHOTO': string;
      'TYPE': string;
      'URL': string;
      'CONTENT': string;
}

export const um_notifications : C6RestfulModel & iDefineUm_Notifications = {
    TABLE_NAME:'um_notifications',
    ID: 'wp_zesv6j_um_notifications.id',
    TIME: 'wp_zesv6j_um_notifications.time',
    USER: 'wp_zesv6j_um_notifications.user',
    STATUS: 'wp_zesv6j_um_notifications.status',
    PHOTO: 'wp_zesv6j_um_notifications.photo',
    TYPE: 'wp_zesv6j_um_notifications.type',
    URL: 'wp_zesv6j_um_notifications.url',
    CONTENT: 'wp_zesv6j_um_notifications.content',
    PRIMARY: [
        'wp_zesv6j_um_notifications.id',
    ],
    COLUMNS: {
      'wp_zesv6j_um_notifications.id':'id',
      'wp_zesv6j_um_notifications.time':'time',
      'wp_zesv6j_um_notifications.user':'user',
      'wp_zesv6j_um_notifications.status':'status',
      'wp_zesv6j_um_notifications.photo':'photo',
      'wp_zesv6j_um_notifications.type':'type',
      'wp_zesv6j_um_notifications.url':'url',
      'wp_zesv6j_um_notifications.content':'content',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_um_notifications.id': { 
            MYSQL_TYPE: 'int unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_notifications.time': { 
            MYSQL_TYPE: 'datetime', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_notifications.user': { 
            MYSQL_TYPE: 'tinytext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_um_notifications.status': { 
            MYSQL_TYPE: 'tinytext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_um_notifications.photo': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_notifications.type': { 
            MYSQL_TYPE: 'tinytext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
        'wp_zesv6j_um_notifications.url': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_um_notifications.content': { 
            MYSQL_TYPE: 'text', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export interface  iUsermeta {
      'umeta_id'?: number;
      'user_id'?: number;
      'meta_key'?: string;
      'meta_value'?: string;
}

interface iDefineUsermeta {
      'UMETA_ID': string;
      'USER_ID': string;
      'META_KEY': string;
      'META_VALUE': string;
}

export const usermeta : C6RestfulModel & iDefineUsermeta = {
    TABLE_NAME:'usermeta',
    UMETA_ID: 'wp_zesv6j_usermeta.umeta_id',
    USER_ID: 'wp_zesv6j_usermeta.user_id',
    META_KEY: 'wp_zesv6j_usermeta.meta_key',
    META_VALUE: 'wp_zesv6j_usermeta.meta_value',
    PRIMARY: [
        'wp_zesv6j_usermeta.umeta_id',
    ],
    COLUMNS: {
      'wp_zesv6j_usermeta.umeta_id':'umeta_id',
      'wp_zesv6j_usermeta.user_id':'user_id',
      'wp_zesv6j_usermeta.meta_key':'meta_key',
      'wp_zesv6j_usermeta.meta_value':'meta_value',
    },
    TYPE_VALIDATION: {
        'wp_zesv6j_usermeta.umeta_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: true, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_usermeta.user_id': { 
            MYSQL_TYPE: 'bigint unsigned', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_usermeta.meta_key': { 
            MYSQL_TYPE: 'varchar', 
            MAX_LENGTH: '255', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: true 
        },
        'wp_zesv6j_usermeta.meta_value': { 
            MYSQL_TYPE: 'longtext', 
            MAX_LENGTH: '', 
            AUTO_INCREMENT: false, 
            SKIP_COLUMN_IN_POST: false 
        },
    },
    REGEX_VALIDATION: {
    }

}

  

export const TABLES = {
    
  carbon_carbons: carbon_carbons,
  carbon_comments: carbon_comments,
  carbon_feature_group_references: carbon_feature_group_references,
  carbon_features: carbon_features,
  carbon_group_references: carbon_group_references,
  carbon_groups: carbon_groups,
  carbon_history_logs: carbon_history_logs,
  carbon_location_references: carbon_location_references,
  carbon_locations: carbon_locations,
  carbon_photos: carbon_photos,
  carbon_reports: carbon_reports,
  carbon_sessions: carbon_sessions,
  carbon_user_followers: carbon_user_followers,
  carbon_user_groups: carbon_user_groups,
  carbon_user_messages: carbon_user_messages,
  carbon_user_sessions: carbon_user_sessions,
  carbon_user_tasks: carbon_user_tasks,
  carbon_users: carbon_users,
  commentmeta: commentmeta,
  comments: comments,
  dig_advertiser_cards: dig_advertiser_cards,
  dig_aws_servers: dig_aws_servers,
  dig_categories: dig_categories,
  dig_chat_advertisements: dig_chat_advertisements,
  dig_chat_global_messages: dig_chat_global_messages,
  dig_chat_group_members: dig_chat_group_members,
  dig_chat_group_messages: dig_chat_group_messages,
  dig_chat_groups: dig_chat_groups,
  dig_comp_category: dig_comp_category,
  dig_competitions: dig_competitions,
  dig_comp_evidence: dig_comp_evidence,
  users: users,
  dig_user_team: dig_user_team,
  posts: posts,
  dig_comp_invitation: dig_comp_invitation,
  dig_comp_platform: dig_comp_platform,
  dig_platform: dig_platform,
  dig_comp_region: dig_comp_region,
  dig_region: dig_region,
  dig_comp_registration: dig_comp_registration,
  dig_vendor: dig_vendor,
  dig_comp_score: dig_comp_score,
  dig_comp_single_use_passwords: dig_comp_single_use_passwords,
  dig_comp_team_names: dig_comp_team_names,
  dig_comp_tourneytype: dig_comp_tourneytype,
  dig_tourney_type: dig_tourney_type,
  dig_comp_type: dig_comp_type,
  dig_mode_game: dig_mode_game,
  dig_competitions_meta: dig_competitions_meta,
  dig_contact_support: dig_contact_support,
  dig_custom_buy_in: dig_custom_buy_in,
  dig_custom_prize_pool: dig_custom_prize_pool,
  dig_debit_audit: dig_debit_audit,
  dig_discord_login_info: dig_discord_login_info,
  dig_dispute_posts: dig_dispute_posts,
  dig_facebook_login_info: dig_facebook_login_info,
  dig_feature_group_references: dig_feature_group_references,
  dig_features: dig_features,
  dig_game: dig_game,
  dig_group_references: dig_group_references,
  dig_groups: dig_groups,
  dig_history_logs: dig_history_logs,
  dig_match_confirm: dig_match_confirm,
  dig_match_results: dig_match_results,
  dig_mode: dig_mode,
  dig_nonce: dig_nonce,
  dig_parent_user: dig_parent_user,
  dig_payout_table: dig_payout_table,
  dig_result_type: dig_result_type,
  dig_result_upload: dig_result_upload,
  dig_results: dig_results,
  dig_reward: dig_reward,
  dig_reward_type: dig_reward_type,
  dig_reward_challenge: dig_reward_challenge,
  dig_reward_origin: dig_reward_origin,
  dig_reward_type_origin: dig_reward_type_origin,
  dig_socket_channel_members: dig_socket_channel_members,
  dig_socket_channel_messages: dig_socket_channel_messages,
  dig_socket_channels: dig_socket_channels,
  dig_socket_system_messages: dig_socket_system_messages,
  dig_sub_mode: dig_sub_mode,
  dig_subscription_entry: dig_subscription_entry,
  dig_subscription_model: dig_subscription_model,
  dig_subscription_extras: dig_subscription_extras,
  dig_team_size: dig_team_size,
  dig_team_roster: dig_team_roster,
  dig_temp_invite: dig_temp_invite,
  dig_tournament_payout_table: dig_tournament_payout_table,
  dig_transaction_log: dig_transaction_log,
  dig_twitch_login_info: dig_twitch_login_info,
  dig_user_allowed_games: dig_user_allowed_games,
  dig_user_channels: dig_user_channels,
  dig_user_groups: dig_user_groups,
  dig_user_referral: dig_user_referral,
  dig_user_stats_meta: dig_user_stats_meta,
  dig_user_team_meta: dig_user_team_meta,
  dig_vendor_game: dig_vendor_game,
  dig_wallet_deposit_type: dig_wallet_deposit_type,
  dig_wallet_transactions: dig_wallet_transactions,
  dig_wallet_withdrawal_requests: dig_wallet_withdrawal_requests,
  dig_wallet_withdrawal_type: dig_wallet_withdrawal_type,
  links: links,
  options: options,
  postmeta: postmeta,
  term_relationships: term_relationships,
  term_taxonomy: term_taxonomy,
  terms: terms,
  um_followers: um_followers,
  um_friends: um_friends,
  um_metadata: um_metadata,
  um_notifications: um_notifications,
  usermeta: usermeta,
};

export const C6 = {
        // try to 1=1 match the Rest abstract class
    ADDDATE: 'ADDDATE',
    ADDTIME: 'ADDTIME',
    AS: 'AS',
    ASC: 'ASC',
    
    BETWEEN: 'BETWEEN',
    
    CONCAT: 'CONCAT',
    CONVERT_TZ: 'CONVERT_TZ',
    COUNT: 'COUNT',
    COUNT_ALL: 'COUNT_ALL',
    CURRENT_DATE: 'CURRENT_DATE',
    CURRENT_TIMESTAMP: 'CURRENT_TIMESTAMP',
    
    DAY: 'DAY',
    DAY_HOUR: 'DAY_HOUR',
    DAY_MICROSECOND: 'DAY_MICROSECOND',
    DAY_MINUTE: 'DAY_MINUTE',
    DAY_SECOND: 'DAY_SECOND',
    DAYNAME: 'DAYNAME',
    DAYOFMONTH: 'DAYOFMONTH',
    DAYOFWEEK: 'DAYOFWEEK',
    DAYOFYEAR: 'DAYOFYEAR',
    DATE: 'DATE',
    DATE_ADD: 'DATE_ADD',
    DATEDIFF: 'DATEDIFF',
    DATE_SUB: 'DATE_SUB',
    DATE_FORMAT: 'DATE_FORMAT',
    DESC: 'DESC',
    DISTINCT: 'DISTINCT',
    
    EXTRACT: 'EXTRACT',
    EQUAL: '=',
    EQUAL_NULL_SAFE: '<=>',
    
    FALSE: 'FALSE',
    FULL_OUTER: 'FULL_OUTER',
    FROM_DAYS: 'FROM_DAYS',
    FROM_UNIXTIME: 'FROM_UNIXTIME',
    
    GET_FORMAT: 'GET_FORMAT',
    GREATER_THAN: '>',
    GROUP_BY: 'GROUP_BY',
    GROUP_CONCAT: 'GROUP_CONCAT',
    GREATER_THAN_OR_EQUAL_TO: '>=',
    
    HAVING: 'HAVING',
    HEX: 'HEX',
    HOUR: 'HOUR',
    HOUR_MICROSECOND: 'HOUR_MICROSECOND',
    HOUR_SECOND: 'HOUR_SECOND',
    HOUR_MINUTE: 'HOUR_MINUTE',
    
    IN: 'IN',
    IS: 'IS',
    IS_NOT: 'IS_NOT',
    INNER: 'INNER',
    INTERVAL: 'INTERVAL',
    
    JOIN: 'JOIN',
    
    LEFT: 'LEFT',
    LEFT_OUTER: 'LEFT_OUTER',
    LESS_THAN: '<',
    LESS_THAN_OR_EQUAL_TO: '<=',
    LIKE: 'LIKE',
    LIMIT: 'LIMIT',
    LOCALTIME: 'LOCALTIME',
    LOCALTIMESTAMP: 'LOCALTIMESTAMP',
    
    MAKEDATE: 'MAKEDATE',
    MAKETIME: 'MAKETIME',
    MONTHNAME: 'MONTHNAME',
    MICROSECOND: 'MICROSECOND',
    MINUTE: 'MINUTE',
    MINUTE_MICROSECOND: 'MINUTE_MICROSECOND',
    MINUTE_SECOND: 'MINUTE_SECOND',
    MIN: 'MIN',
    MAX: 'MAX',
    MONTH: 'MONTH',
    
    NOT_LIKE: 'NOT_LIKE',
    NOT_EQUAL: '<>',
    NOT_IN: 'NOT_IN',
    NOW: 'NOW',
    NULL: 'NULL',
    
    ORDER: 'ORDER',
    
    PAGE: 'PAGE',
    PAGINATION: 'PAGINATION',
    RIGHT_OUTER: 'RIGHT_OUTER',
    
    SECOND: 'SECOND',
    SECOND_MICROSECOND: 'SECOND_MICROSECOND',
    SELECT: 'SELECT',
    STR_TO_DATE: 'STR_TO_DATE',
    SUBDATE: 'SUBDATE',
    SUBTIME: 'SUBTIME',
    SUM: 'SUM',
    SYSDATE: 'SYSDATE',
    
    TIME: 'TIME',
    TIME_FORMAT: 'TIME_FORMAT',
    TIME_TO_SEC: 'TIME_TO_SEC',
    TIMEDIFF: 'TIMEDIFF',
    TIMESTAMP: 'TIMESTAMP',
    TIMESTAMPADD: 'TIMESTAMPADD',
    TIMESTAMPDIFF: 'TIMESTAMPDIFF',
    TO_DAYS: 'TO_DAYS',
    TO_SECONDS: 'TO_SECONDS',
    TRANSACTION_TIMESTAMP: 'TRANSACTION_TIMESTAMP',
    TRUE: 'TRUE',
    
    UNIX_TIMESTAMP: 'UNIX_TIMESTAMP',
    UNKNOWN: 'UNKNOWN',
    UPDATE: 'UPDATE',
    UNHEX: 'UNHEX',
    UTC_DATE: 'UNHEX',
    UTC_TIME: 'UNHEX',
    UTC_TIMESTAMP: 'UNHEX',
    
    WHERE: 'WHERE',
    WEEKDAY: 'WEEKDAY',
    WEEKOFYEAR: 'WEEKOFYEAR',
    
    YEARWEEK: 'YEARWEEK',
   
    
    // carbon identifiers
    DEPENDANT_ON_ENTITY: 'DEPENDANT_ON_ENTITY',
   
    // PHP validation
    OPTIONS: 'OPTIONS',
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    REPLACE: 'REPLACE INTO',
    DELETE: 'DELETE',
    REST_REQUEST_PREPROCESS_CALLBACKS: 'PREPROCESS',
    PREPROCESS: 'PREPROCESS',
    REST_REQUEST_FINNISH_CALLBACKS: 'FINISH',
    FINISH: 'FINISH',
    VALIDATE_C6_ENTITY_ID_REGEX: '#^([a-fA-F0-9]{20,35})$#',

    TABLES: TABLES,
    ...TABLES
    
};

export const COLUMNS = {
    
'wp_zesv6j_carbon_carbons.entity_pk':'entity_pk',
'wp_zesv6j_carbon_carbons.entity_fk':'entity_fk',
'wp_zesv6j_carbon_carbons.entity_tag':'entity_tag',

'wp_zesv6j_carbon_comments.parent_id':'parent_id',
'wp_zesv6j_carbon_comments.comment_id':'comment_id',
'wp_zesv6j_carbon_comments.user_id':'user_id',
'wp_zesv6j_carbon_comments.comment':'comment',

'wp_zesv6j_carbon_feature_group_references.feature_entity_id':'feature_entity_id',
'wp_zesv6j_carbon_feature_group_references.group_entity_id':'group_entity_id',

'wp_zesv6j_carbon_features.feature_entity_id':'feature_entity_id',
'wp_zesv6j_carbon_features.feature_code':'feature_code',
'wp_zesv6j_carbon_features.feature_creation_date':'feature_creation_date',

'wp_zesv6j_carbon_group_references.group_id':'group_id',
'wp_zesv6j_carbon_group_references.allowed_to_grant_group_id':'allowed_to_grant_group_id',

'wp_zesv6j_carbon_groups.group_name':'group_name',
'wp_zesv6j_carbon_groups.entity_id':'entity_id',
'wp_zesv6j_carbon_groups.created_by':'created_by',
'wp_zesv6j_carbon_groups.creation_date':'creation_date',

'wp_zesv6j_carbon_history_logs.history_uuid':'history_uuid',
'wp_zesv6j_carbon_history_logs.history_table':'history_table',
'wp_zesv6j_carbon_history_logs.history_type':'history_type',
'wp_zesv6j_carbon_history_logs.history_data':'history_data',
'wp_zesv6j_carbon_history_logs.history_original_query':'history_original_query',
'wp_zesv6j_carbon_history_logs.history_time':'history_time',

'wp_zesv6j_carbon_location_references.entity_reference':'entity_reference',
'wp_zesv6j_carbon_location_references.location_reference':'location_reference',
'wp_zesv6j_carbon_location_references.location_time':'location_time',

'wp_zesv6j_carbon_locations.entity_id':'entity_id',
'wp_zesv6j_carbon_locations.latitude':'latitude',
'wp_zesv6j_carbon_locations.longitude':'longitude',
'wp_zesv6j_carbon_locations.street':'street',
'wp_zesv6j_carbon_locations.city':'city',
'wp_zesv6j_carbon_locations.state':'state',
'wp_zesv6j_carbon_locations.elevation':'elevation',
'wp_zesv6j_carbon_locations.zip':'zip',

'wp_zesv6j_carbon_photos.parent_id':'parent_id',
'wp_zesv6j_carbon_photos.photo_id':'photo_id',
'wp_zesv6j_carbon_photos.user_id':'user_id',
'wp_zesv6j_carbon_photos.photo_path':'photo_path',
'wp_zesv6j_carbon_photos.photo_description':'photo_description',

'wp_zesv6j_carbon_reports.log_level':'log_level',
'wp_zesv6j_carbon_reports.report':'report',
'wp_zesv6j_carbon_reports.date':'date',
'wp_zesv6j_carbon_reports.call_trace':'call_trace',

'wp_zesv6j_carbon_sessions.user_id':'user_id',
'wp_zesv6j_carbon_sessions.user_ip':'user_ip',
'wp_zesv6j_carbon_sessions.session_id':'session_id',
'wp_zesv6j_carbon_sessions.session_expires':'session_expires',
'wp_zesv6j_carbon_sessions.session_data':'session_data',
'wp_zesv6j_carbon_sessions.user_online_status':'user_online_status',

'wp_zesv6j_carbon_user_followers.follower_table_id':'follower_table_id',
'wp_zesv6j_carbon_user_followers.follows_user_id':'follows_user_id',
'wp_zesv6j_carbon_user_followers.user_id':'user_id',

'wp_zesv6j_carbon_user_groups.group_id':'group_id',
'wp_zesv6j_carbon_user_groups.user_id':'user_id',

'wp_zesv6j_carbon_user_messages.message_id':'message_id',
'wp_zesv6j_carbon_user_messages.from_user_id':'from_user_id',
'wp_zesv6j_carbon_user_messages.to_user_id':'to_user_id',
'wp_zesv6j_carbon_user_messages.message':'message',
'wp_zesv6j_carbon_user_messages.message_read':'message_read',
'wp_zesv6j_carbon_user_messages.creation_date':'creation_date',

'wp_zesv6j_carbon_user_sessions.user_id':'user_id',
'wp_zesv6j_carbon_user_sessions.user_ip':'user_ip',
'wp_zesv6j_carbon_user_sessions.session_id':'session_id',
'wp_zesv6j_carbon_user_sessions.session_expires':'session_expires',
'wp_zesv6j_carbon_user_sessions.session_data':'session_data',
'wp_zesv6j_carbon_user_sessions.user_online_status':'user_online_status',

'wp_zesv6j_carbon_user_tasks.task_id':'task_id',
'wp_zesv6j_carbon_user_tasks.user_id':'user_id',
'wp_zesv6j_carbon_user_tasks.from_id':'from_id',
'wp_zesv6j_carbon_user_tasks.task_name':'task_name',
'wp_zesv6j_carbon_user_tasks.task_description':'task_description',
'wp_zesv6j_carbon_user_tasks.percent_complete':'percent_complete',
'wp_zesv6j_carbon_user_tasks.start_date':'start_date',
'wp_zesv6j_carbon_user_tasks.end_date':'end_date',

'wp_zesv6j_carbon_users.user_username':'user_username',
'wp_zesv6j_carbon_users.user_password':'user_password',
'wp_zesv6j_carbon_users.user_id':'user_id',
'wp_zesv6j_carbon_users.user_type':'user_type',
'wp_zesv6j_carbon_users.user_sport':'user_sport',
'wp_zesv6j_carbon_users.user_session_id':'user_session_id',
'wp_zesv6j_carbon_users.user_facebook_id':'user_facebook_id',
'wp_zesv6j_carbon_users.user_first_name':'user_first_name',
'wp_zesv6j_carbon_users.user_last_name':'user_last_name',
'wp_zesv6j_carbon_users.user_profile_pic':'user_profile_pic',
'wp_zesv6j_carbon_users.user_profile_uri':'user_profile_uri',
'wp_zesv6j_carbon_users.user_cover_photo':'user_cover_photo',
'wp_zesv6j_carbon_users.user_birthday':'user_birthday',
'wp_zesv6j_carbon_users.user_gender':'user_gender',
'wp_zesv6j_carbon_users.user_about_me':'user_about_me',
'wp_zesv6j_carbon_users.user_rank':'user_rank',
'wp_zesv6j_carbon_users.user_email':'user_email',
'wp_zesv6j_carbon_users.user_email_code':'user_email_code',
'wp_zesv6j_carbon_users.user_email_confirmed':'user_email_confirmed',
'wp_zesv6j_carbon_users.user_generated_string':'user_generated_string',
'wp_zesv6j_carbon_users.user_membership':'user_membership',
'wp_zesv6j_carbon_users.user_deactivated':'user_deactivated',
'wp_zesv6j_carbon_users.user_last_login':'user_last_login',
'wp_zesv6j_carbon_users.user_ip':'user_ip',
'wp_zesv6j_carbon_users.user_education_history':'user_education_history',
'wp_zesv6j_carbon_users.user_location':'user_location',
'wp_zesv6j_carbon_users.user_creation_date':'user_creation_date',

'wp_zesv6j_commentmeta.meta_id':'meta_id',
'wp_zesv6j_commentmeta.comment_id':'comment_id',
'wp_zesv6j_commentmeta.meta_key':'meta_key',
'wp_zesv6j_commentmeta.meta_value':'meta_value',

'wp_zesv6j_comments.comment_ID':'comment_ID',
'wp_zesv6j_comments.comment_post_ID':'comment_post_ID',
'wp_zesv6j_comments.comment_author':'comment_author',
'wp_zesv6j_comments.comment_author_email':'comment_author_email',
'wp_zesv6j_comments.comment_author_url':'comment_author_url',
'wp_zesv6j_comments.comment_author_IP':'comment_author_IP',
'wp_zesv6j_comments.comment_date':'comment_date',
'wp_zesv6j_comments.comment_date_gmt':'comment_date_gmt',
'wp_zesv6j_comments.comment_content':'comment_content',
'wp_zesv6j_comments.comment_karma':'comment_karma',
'wp_zesv6j_comments.comment_approved':'comment_approved',
'wp_zesv6j_comments.comment_agent':'comment_agent',
'wp_zesv6j_comments.comment_type':'comment_type',
'wp_zesv6j_comments.comment_parent':'comment_parent',
'wp_zesv6j_comments.user_id':'user_id',

'wp_zesv6j_dig_advertiser_cards.id':'id',
'wp_zesv6j_dig_advertiser_cards.photo':'photo',
'wp_zesv6j_dig_advertiser_cards.link':'link',
'wp_zesv6j_dig_advertiser_cards.description':'description',
'wp_zesv6j_dig_advertiser_cards.position':'position',
'wp_zesv6j_dig_advertiser_cards.start':'start',
'wp_zesv6j_dig_advertiser_cards.end':'end',
'wp_zesv6j_dig_advertiser_cards.comp_type_ids':'comp_type_ids',
'wp_zesv6j_dig_advertiser_cards.created':'created',
'wp_zesv6j_dig_advertiser_cards.updated':'updated',

'wp_zesv6j_dig_aws_servers.server_instance_id':'server_instance_id',
'wp_zesv6j_dig_aws_servers.server_version':'server_version',
'wp_zesv6j_dig_aws_servers.server_ami_id':'server_ami_id',
'wp_zesv6j_dig_aws_servers.server_recipe_version':'server_recipe_version',
'wp_zesv6j_dig_aws_servers.server_vpc_id':'server_vpc_id',
'wp_zesv6j_dig_aws_servers.server_account':'server_account',
'wp_zesv6j_dig_aws_servers.server_environment':'server_environment',
'wp_zesv6j_dig_aws_servers.server_instance_profile_name':'server_instance_profile_name',
'wp_zesv6j_dig_aws_servers.server_min_size':'server_min_size',
'wp_zesv6j_dig_aws_servers.server_max_size':'server_max_size',
'wp_zesv6j_dig_aws_servers.server_desired_capacity':'server_desired_capacity',
'wp_zesv6j_dig_aws_servers.server_demand_base_capacity':'server_demand_base_capacity',
'wp_zesv6j_dig_aws_servers.server_demand_percent_above_base':'server_demand_percent_above_base',
'wp_zesv6j_dig_aws_servers.server_ec2_avail_zone':'server_ec2_avail_zone',
'wp_zesv6j_dig_aws_servers.server_ec2_region':'server_ec2_region',
'wp_zesv6j_dig_aws_servers.server_main':'server_main',
'wp_zesv6j_dig_aws_servers.server_document_root':'server_document_root',
'wp_zesv6j_dig_aws_servers.server_created':'server_created',
'wp_zesv6j_dig_aws_servers.server_modified':'server_modified',
'wp_zesv6j_dig_aws_servers.server_public_ipv4':'server_public_ipv4',
'wp_zesv6j_dig_aws_servers.server_private_ipv4':'server_private_ipv4',
'wp_zesv6j_dig_aws_servers.server_active':'server_active',

'wp_zesv6j_dig_categories.id':'id',
'wp_zesv6j_dig_categories.category_name':'category_name',
'wp_zesv6j_dig_categories.category_code':'category_code',
'wp_zesv6j_dig_categories.description':'description',
'wp_zesv6j_dig_categories.cat_order':'cat_order',
'wp_zesv6j_dig_categories.parent':'parent',
'wp_zesv6j_dig_categories.header_background_image':'header_background_image',
'wp_zesv6j_dig_categories.featured_image':'featured_image',
'wp_zesv6j_dig_categories.card_image':'card_image',
'wp_zesv6j_dig_categories.metadata':'metadata',
'wp_zesv6j_dig_categories.created':'created',
'wp_zesv6j_dig_categories.updated':'updated',

'wp_zesv6j_dig_chat_advertisements.advertisement_id':'advertisement_id',
'wp_zesv6j_dig_chat_advertisements.advertisement_image':'advertisement_image',
'wp_zesv6j_dig_chat_advertisements.advertisement_link':'advertisement_link',
'wp_zesv6j_dig_chat_advertisements.created_at':'created_at',
'wp_zesv6j_dig_chat_advertisements.modified_at':'modified_at',
'wp_zesv6j_dig_chat_advertisements.last_shown_at':'last_shown_at',
'wp_zesv6j_dig_chat_advertisements.advertisement_active':'advertisement_active',
'wp_zesv6j_dig_chat_advertisements.advertisement_alt_text':'advertisement_alt_text',
'wp_zesv6j_dig_chat_advertisements.advertisement_increment':'advertisement_increment',

'wp_zesv6j_dig_chat_global_messages.global_message_id':'global_message_id',
'wp_zesv6j_dig_chat_global_messages.global_message_from_user':'global_message_from_user',
'wp_zesv6j_dig_chat_global_messages.global_message':'global_message',
'wp_zesv6j_dig_chat_global_messages.global_message_datetime':'global_message_datetime',
'wp_zesv6j_dig_chat_global_messages.global_message_advertisement':'global_message_advertisement',

'wp_zesv6j_dig_chat_group_members.group_id':'group_id',
'wp_zesv6j_dig_chat_group_members.user_id':'user_id',

'wp_zesv6j_dig_chat_group_messages.group_message_id':'group_message_id',
'wp_zesv6j_dig_chat_group_messages.group_message_from_user':'group_message_from_user',
'wp_zesv6j_dig_chat_group_messages.group_message_to_group':'group_message_to_group',
'wp_zesv6j_dig_chat_group_messages.group_message':'group_message',

'wp_zesv6j_dig_chat_groups.group_id':'group_id',
'wp_zesv6j_dig_chat_groups.group_name':'group_name',
'wp_zesv6j_dig_chat_groups.group_active':'group_active',

'wp_zesv6j_dig_comp_category.id':'id',
'wp_zesv6j_dig_comp_category.comp_id':'comp_id',
'wp_zesv6j_dig_comp_category.cat_id':'cat_id',

'wp_zesv6j_dig_competitions.comp_id':'comp_id',
'wp_zesv6j_dig_competitions.comp_type_id':'comp_type_id',
'wp_zesv6j_dig_competitions.mode_game_id':'mode_game_id',
'wp_zesv6j_dig_competitions.best_of':'best_of',
'wp_zesv6j_dig_competitions.now_flag':'now_flag',
'wp_zesv6j_dig_competitions.datetime':'datetime',
'wp_zesv6j_dig_competitions.public':'public',
'wp_zesv6j_dig_competitions.pin':'pin',
'wp_zesv6j_dig_competitions.organizer_id':'organizer_id',
'wp_zesv6j_dig_competitions.status':'status',
'wp_zesv6j_dig_competitions.deleted':'deleted',
'wp_zesv6j_dig_competitions.created':'created',
'wp_zesv6j_dig_competitions.modified':'modified',
'wp_zesv6j_dig_competitions.buy_in':'buy_in',
'wp_zesv6j_dig_competitions.parent_comp':'parent_comp',

'wp_zesv6j_dig_comp_evidence.comp_id':'comp_id',
'wp_zesv6j_dig_comp_evidence.user_id':'user_id',
'wp_zesv6j_dig_comp_evidence.team_id':'team_id',
'wp_zesv6j_dig_comp_evidence.evidence_post':'evidence_post',
'wp_zesv6j_dig_comp_evidence.evidence_desc':'evidence_desc',
'wp_zesv6j_dig_comp_evidence.evidence_external_url':'evidence_external_url',

'wp_zesv6j_users.ID':'ID',
'wp_zesv6j_users.user_login':'user_login',
'wp_zesv6j_users.user_pass':'user_pass',
'wp_zesv6j_users.user_nicename':'user_nicename',
'wp_zesv6j_users.user_email':'user_email',
'wp_zesv6j_users.user_url':'user_url',
'wp_zesv6j_users.user_registered':'user_registered',
'wp_zesv6j_users.user_activation_key':'user_activation_key',
'wp_zesv6j_users.user_status':'user_status',
'wp_zesv6j_users.display_name':'display_name',

'wp_zesv6j_dig_user_team.user_team_id':'user_team_id',
'wp_zesv6j_dig_user_team.uid':'uid',
'wp_zesv6j_dig_user_team.team_name':'team_name',
'wp_zesv6j_dig_user_team.team_desc':'team_desc',
'wp_zesv6j_dig_user_team.team_picture':'team_picture',
'wp_zesv6j_dig_user_team.team_type':'team_type',
'wp_zesv6j_dig_user_team.hide':'hide',
'wp_zesv6j_dig_user_team.team_size_id':'team_size_id',
'wp_zesv6j_dig_user_team.created':'created',
'wp_zesv6j_dig_user_team.updated':'updated',

'wp_zesv6j_posts.ID':'ID',
'wp_zesv6j_posts.post_author':'post_author',
'wp_zesv6j_posts.post_date':'post_date',
'wp_zesv6j_posts.post_date_gmt':'post_date_gmt',
'wp_zesv6j_posts.post_content':'post_content',
'wp_zesv6j_posts.post_title':'post_title',
'wp_zesv6j_posts.post_excerpt':'post_excerpt',
'wp_zesv6j_posts.post_status':'post_status',
'wp_zesv6j_posts.comment_status':'comment_status',
'wp_zesv6j_posts.ping_status':'ping_status',
'wp_zesv6j_posts.post_password':'post_password',
'wp_zesv6j_posts.post_name':'post_name',
'wp_zesv6j_posts.to_ping':'to_ping',
'wp_zesv6j_posts.pinged':'pinged',
'wp_zesv6j_posts.post_modified':'post_modified',
'wp_zesv6j_posts.post_modified_gmt':'post_modified_gmt',
'wp_zesv6j_posts.post_content_filtered':'post_content_filtered',
'wp_zesv6j_posts.post_parent':'post_parent',
'wp_zesv6j_posts.guid':'guid',
'wp_zesv6j_posts.menu_order':'menu_order',
'wp_zesv6j_posts.post_type':'post_type',
'wp_zesv6j_posts.post_mime_type':'post_mime_type',
'wp_zesv6j_posts.comment_count':'comment_count',

'wp_zesv6j_dig_comp_invitation.invitation_id':'invitation_id',
'wp_zesv6j_dig_comp_invitation.user_id':'user_id',
'wp_zesv6j_dig_comp_invitation.comp_id':'comp_id',
'wp_zesv6j_dig_comp_invitation.team_id':'team_id',
'wp_zesv6j_dig_comp_invitation.sender_id':'sender_id',
'wp_zesv6j_dig_comp_invitation.invitation_type':'invitation_type',
'wp_zesv6j_dig_comp_invitation.token':'token',
'wp_zesv6j_dig_comp_invitation.created':'created',
'wp_zesv6j_dig_comp_invitation.updated':'updated',

'wp_zesv6j_dig_comp_platform.comp_id':'comp_id',
'wp_zesv6j_dig_comp_platform.platform_id':'platform_id',

'wp_zesv6j_dig_platform.platform_id':'platform_id',
'wp_zesv6j_dig_platform.platform_name':'platform_name',

'wp_zesv6j_dig_comp_region.region_id':'region_id',
'wp_zesv6j_dig_comp_region.comp_id':'comp_id',

'wp_zesv6j_dig_region.region_id':'region_id',
'wp_zesv6j_dig_region.region_name':'region_name',

'wp_zesv6j_dig_comp_registration.comp_registration_id':'comp_registration_id',
'wp_zesv6j_dig_comp_registration.user_id':'user_id',
'wp_zesv6j_dig_comp_registration.competitions_id':'competitions_id',
'wp_zesv6j_dig_comp_registration.team_id':'team_id',
'wp_zesv6j_dig_comp_registration.position':'position',
'wp_zesv6j_dig_comp_registration.created':'created',
'wp_zesv6j_dig_comp_registration.updated':'updated',
'wp_zesv6j_dig_comp_registration.vendor_id':'vendor_id',
'wp_zesv6j_dig_comp_registration.vendor_gamertag':'vendor_gamertag',
'wp_zesv6j_dig_comp_registration.streaming_platform':'streaming_platform',
'wp_zesv6j_dig_comp_registration.streaming_url':'streaming_url',
'wp_zesv6j_dig_comp_registration.team_full_timestamp':'team_full_timestamp',

'wp_zesv6j_dig_vendor.vendor_id':'vendor_id',
'wp_zesv6j_dig_vendor.vendor_name':'vendor_name',

'wp_zesv6j_dig_comp_score.comp_id':'comp_id',
'wp_zesv6j_dig_comp_score.user_id':'user_id',
'wp_zesv6j_dig_comp_score.team_id':'team_id',
'wp_zesv6j_dig_comp_score.score':'score',
'wp_zesv6j_dig_comp_score.scorebox':'scorebox',
'wp_zesv6j_dig_comp_score.created':'created',

'wp_zesv6j_dig_comp_single_use_passwords.password_id':'password_id',
'wp_zesv6j_dig_comp_single_use_passwords.comp_id':'comp_id',
'wp_zesv6j_dig_comp_single_use_passwords.comp_password':'comp_password',
'wp_zesv6j_dig_comp_single_use_passwords.comp_password_taken':'comp_password_taken',
'wp_zesv6j_dig_comp_single_use_passwords.comp_team_id':'comp_team_id',
'wp_zesv6j_dig_comp_single_use_passwords.created':'created',
'wp_zesv6j_dig_comp_single_use_passwords.modified':'modified',

'wp_zesv6j_dig_comp_team_names.team_id':'team_id',
'wp_zesv6j_dig_comp_team_names.team_name':'team_name',
'wp_zesv6j_dig_comp_team_names.created':'created',
'wp_zesv6j_dig_comp_team_names.updated':'updated',

'wp_zesv6j_dig_comp_tourneytype.id':'id',
'wp_zesv6j_dig_comp_tourneytype.comp_id':'comp_id',
'wp_zesv6j_dig_comp_tourneytype.tourney_type_id':'tourney_type_id',
'wp_zesv6j_dig_comp_tourneytype.bracket':'bracket',

'wp_zesv6j_dig_tourney_type.id':'id',
'wp_zesv6j_dig_tourney_type.name':'name',
'wp_zesv6j_dig_tourney_type.percentage':'percentage',
'wp_zesv6j_dig_tourney_type.comp_type_id':'comp_type_id',
'wp_zesv6j_dig_tourney_type.created':'created',
'wp_zesv6j_dig_tourney_type.updated':'updated',

'wp_zesv6j_dig_comp_type.comp_type_id':'comp_type_id',
'wp_zesv6j_dig_comp_type.comp_type':'comp_type',
'wp_zesv6j_dig_comp_type.comp_percentage':'comp_percentage',
'wp_zesv6j_dig_comp_type.created':'created',
'wp_zesv6j_dig_comp_type.updated':'updated',

'wp_zesv6j_dig_mode_game.mode_game_id':'mode_game_id',
'wp_zesv6j_dig_mode_game.game_id':'game_id',
'wp_zesv6j_dig_mode_game.mode_id':'mode_id',
'wp_zesv6j_dig_mode_game.rules_post_id':'rules_post_id',

'wp_zesv6j_dig_competitions_meta.meta_id':'meta_id',
'wp_zesv6j_dig_competitions_meta.comp_id':'comp_id',
'wp_zesv6j_dig_competitions_meta.meta_key':'meta_key',
'wp_zesv6j_dig_competitions_meta.meta_value':'meta_value',

'wp_zesv6j_dig_contact_support.support_ticket_id':'support_ticket_id',
'wp_zesv6j_dig_contact_support.support_from_user_id':'support_from_user_id',
'wp_zesv6j_dig_contact_support.support_name':'support_name',
'wp_zesv6j_dig_contact_support.support_email':'support_email',
'wp_zesv6j_dig_contact_support.support_callback_requested':'support_callback_requested',
'wp_zesv6j_dig_contact_support.support_category':'support_category',
'wp_zesv6j_dig_contact_support.support_message':'support_message',
'wp_zesv6j_dig_contact_support.support_phone_number':'support_phone_number',

'wp_zesv6j_dig_custom_buy_in.buyin_id':'buyin_id',
'wp_zesv6j_dig_custom_buy_in.comp_id':'comp_id',
'wp_zesv6j_dig_custom_buy_in.mode_id':'mode_id',
'wp_zesv6j_dig_custom_buy_in.buy_in':'buy_in',
'wp_zesv6j_dig_custom_buy_in.created':'created',
'wp_zesv6j_dig_custom_buy_in.updated':'updated',

'wp_zesv6j_dig_custom_prize_pool.id':'id',
'wp_zesv6j_dig_custom_prize_pool.comp_id':'comp_id',
'wp_zesv6j_dig_custom_prize_pool.prize':'prize',
'wp_zesv6j_dig_custom_prize_pool.created':'created',
'wp_zesv6j_dig_custom_prize_pool.updated':'updated',

'wp_zesv6j_dig_debit_audit.id':'id',
'wp_zesv6j_dig_debit_audit.user_id':'user_id',
'wp_zesv6j_dig_debit_audit.debit_amount':'debit_amount',
'wp_zesv6j_dig_debit_audit.debit_action':'debit_action',
'wp_zesv6j_dig_debit_audit.debit_comment':'debit_comment',
'wp_zesv6j_dig_debit_audit.created':'created',
'wp_zesv6j_dig_debit_audit.modified':'modified',

'wp_zesv6j_dig_discord_login_info.discord_user_id':'discord_user_id',
'wp_zesv6j_dig_discord_login_info.discord_user_name':'discord_user_name',
'wp_zesv6j_dig_discord_login_info.discord_access_token':'discord_access_token',
'wp_zesv6j_dig_discord_login_info.discord_user_email':'discord_user_email',
'wp_zesv6j_dig_discord_login_info.discord_meta_key':'discord_meta_key',
'wp_zesv6j_dig_discord_login_info.user_id':'user_id',

'wp_zesv6j_dig_dispute_posts.comp_id':'comp_id',
'wp_zesv6j_dig_dispute_posts.post_id':'post_id',

'wp_zesv6j_dig_facebook_login_info.facebook_user_id':'facebook_user_id',
'wp_zesv6j_dig_facebook_login_info.facebook_first_name':'facebook_first_name',
'wp_zesv6j_dig_facebook_login_info.facebook_access_token':'facebook_access_token',
'wp_zesv6j_dig_facebook_login_info.facebook_user_email':'facebook_user_email',
'wp_zesv6j_dig_facebook_login_info.facebook_meta_key':'facebook_meta_key',
'wp_zesv6j_dig_facebook_login_info.user_id':'user_id',

'wp_zesv6j_dig_feature_group_references.feature_entity_id':'feature_entity_id',
'wp_zesv6j_dig_feature_group_references.group_entity_id':'group_entity_id',

'wp_zesv6j_dig_features.feature_entity_id':'feature_entity_id',
'wp_zesv6j_dig_features.feature_code':'feature_code',
'wp_zesv6j_dig_features.feature_creation_date':'feature_creation_date',

'wp_zesv6j_dig_game.game_id':'game_id',
'wp_zesv6j_dig_game.name':'name',
'wp_zesv6j_dig_game.code':'code',
'wp_zesv6j_dig_game.vendor':'vendor',
'wp_zesv6j_dig_game.game_logo_image':'game_logo_image',
'wp_zesv6j_dig_game.header_background_image':'header_background_image',
'wp_zesv6j_dig_game.description':'description',
'wp_zesv6j_dig_game.featured_image':'featured_image',
'wp_zesv6j_dig_game.created':'created',
'wp_zesv6j_dig_game.modified':'modified',
'wp_zesv6j_dig_game.is_crossplay':'is_crossplay',
'wp_zesv6j_dig_game.game_order':'game_order',
'wp_zesv6j_dig_game.game_meta_title':'game_meta_title',
'wp_zesv6j_dig_game.game_meta_desc':'game_meta_desc',

'wp_zesv6j_dig_group_references.group_id':'group_id',
'wp_zesv6j_dig_group_references.allowed_to_grant_group_id':'allowed_to_grant_group_id',

'wp_zesv6j_dig_groups.group_name':'group_name',
'wp_zesv6j_dig_groups.entity_id':'entity_id',
'wp_zesv6j_dig_groups.created_by':'created_by',
'wp_zesv6j_dig_groups.creation_date':'creation_date',

'wp_zesv6j_dig_history_logs.history_uuid':'history_uuid',
'wp_zesv6j_dig_history_logs.history_uri':'history_uri',
'wp_zesv6j_dig_history_logs.history_table':'history_table',
'wp_zesv6j_dig_history_logs.history_type':'history_type',
'wp_zesv6j_dig_history_logs.history_request':'history_request',
'wp_zesv6j_dig_history_logs.history_response':'history_response',
'wp_zesv6j_dig_history_logs.history_query':'history_query',
'wp_zesv6j_dig_history_logs.history_time':'history_time',
'wp_zesv6j_dig_history_logs.history_updated':'history_updated',

'wp_zesv6j_dig_match_confirm.comp_id':'comp_id',
'wp_zesv6j_dig_match_confirm.team_id':'team_id',
'wp_zesv6j_dig_match_confirm.agreement':'agreement',

'wp_zesv6j_dig_match_results.user_id':'user_id',
'wp_zesv6j_dig_match_results.team_id':'team_id',
'wp_zesv6j_dig_match_results.comp_id':'comp_id',
'wp_zesv6j_dig_match_results.selected_winning_team':'selected_winning_team',
'wp_zesv6j_dig_match_results.created':'created',

'wp_zesv6j_dig_mode.mode_id':'mode_id',
'wp_zesv6j_dig_mode.name':'name',
'wp_zesv6j_dig_mode.comp_type_id':'comp_type_id',
'wp_zesv6j_dig_mode.max_players':'max_players',
'wp_zesv6j_dig_mode.team_size':'team_size',
'wp_zesv6j_dig_mode.created':'created',
'wp_zesv6j_dig_mode.modified':'modified',
'wp_zesv6j_dig_mode.archived':'archived',

'wp_zesv6j_dig_nonce.nonce_key':'nonce_key',
'wp_zesv6j_dig_nonce.nonce_value':'nonce_value',
'wp_zesv6j_dig_nonce.nonce_user_id':'nonce_user_id',
'wp_zesv6j_dig_nonce.nonce_session_id':'nonce_session_id',
'wp_zesv6j_dig_nonce.nonce_created':'nonce_created',
'wp_zesv6j_dig_nonce.nonce_expires':'nonce_expires',

'wp_zesv6j_dig_parent_user.parent_user_id':'parent_user_id',
'wp_zesv6j_dig_parent_user.child_user_id':'child_user_id',
'wp_zesv6j_dig_parent_user.child_active':'child_active',

'wp_zesv6j_dig_payout_table.id':'id',
'wp_zesv6j_dig_payout_table.label':'label',
'wp_zesv6j_dig_payout_table.percentage':'percentage',

'wp_zesv6j_dig_result_type.result_type_id':'result_type_id',
'wp_zesv6j_dig_result_type.comp_type_id':'comp_type_id',
'wp_zesv6j_dig_result_type.position':'position',
'wp_zesv6j_dig_result_type.prize_percentage':'prize_percentage',
'wp_zesv6j_dig_result_type.label':'label',
'wp_zesv6j_dig_result_type.time_delay':'time_delay',
'wp_zesv6j_dig_result_type.created':'created',
'wp_zesv6j_dig_result_type.updated':'updated',

'wp_zesv6j_dig_result_upload.comp_id':'comp_id',
'wp_zesv6j_dig_result_upload.user_id':'user_id',
'wp_zesv6j_dig_result_upload.team_id':'team_id',
'wp_zesv6j_dig_result_upload.created':'created',
'wp_zesv6j_dig_result_upload.post_id':'post_id',
'wp_zesv6j_dig_result_upload.scorebox':'scorebox',

'wp_zesv6j_dig_results.result_id':'result_id',
'wp_zesv6j_dig_results.comp_id':'comp_id',
'wp_zesv6j_dig_results.user_id':'user_id',
'wp_zesv6j_dig_results.position':'position',
'wp_zesv6j_dig_results.team_id':'team_id',
'wp_zesv6j_dig_results.paid':'paid',
'wp_zesv6j_dig_results.dispute_status':'dispute_status',
'wp_zesv6j_dig_results.created':'created',
'wp_zesv6j_dig_results.updated':'updated',

'wp_zesv6j_dig_reward.reward_id':'reward_id',
'wp_zesv6j_dig_reward.user_id':'user_id',
'wp_zesv6j_dig_reward.challenge_id':'challenge_id',
'wp_zesv6j_dig_reward.redeemed_status':'redeemed_status',
'wp_zesv6j_dig_reward.created':'created',
'wp_zesv6j_dig_reward.modified':'modified',

'wp_zesv6j_dig_reward_type.reward_type_id':'reward_type_id',
'wp_zesv6j_dig_reward_type.name':'name',
'wp_zesv6j_dig_reward_type.active':'active',
'wp_zesv6j_dig_reward_type.conversion':'conversion',
'wp_zesv6j_dig_reward_type.created':'created',
'wp_zesv6j_dig_reward_type.modified':'modified',

'wp_zesv6j_dig_reward_challenge.challenge_id':'challenge_id',
'wp_zesv6j_dig_reward_challenge.reward_origin_id':'reward_origin_id',
'wp_zesv6j_dig_reward_challenge.active':'active',
'wp_zesv6j_dig_reward_challenge.fixed':'fixed',
'wp_zesv6j_dig_reward_challenge.reward_amount':'reward_amount',
'wp_zesv6j_dig_reward_challenge.query':'query',
'wp_zesv6j_dig_reward_challenge.description':'description',

'wp_zesv6j_dig_reward_origin.reward_origin_id':'reward_origin_id',
'wp_zesv6j_dig_reward_origin.name':'name',

'wp_zesv6j_dig_reward_type_origin.reward_type_id':'reward_type_id',
'wp_zesv6j_dig_reward_type_origin.reward_origin_id':'reward_origin_id',
'wp_zesv6j_dig_reward_type_origin.created':'created',
'wp_zesv6j_dig_reward_type_origin.modified':'modified',

'wp_zesv6j_dig_socket_channel_members.channel_id':'channel_id',
'wp_zesv6j_dig_socket_channel_members.user_id':'user_id',

'wp_zesv6j_dig_socket_channel_messages.channel_message_id':'channel_message_id',
'wp_zesv6j_dig_socket_channel_messages.channel_message_from_user':'channel_message_from_user',
'wp_zesv6j_dig_socket_channel_messages.channel_message_to_channel_id':'channel_message_to_channel_id',
'wp_zesv6j_dig_socket_channel_messages.channel_message':'channel_message',

'wp_zesv6j_dig_socket_channels.channel_id':'channel_id',
'wp_zesv6j_dig_socket_channels.channel_name':'channel_name',
'wp_zesv6j_dig_socket_channels.channel_active':'channel_active',
'wp_zesv6j_dig_socket_channels.channel_public':'channel_public',
'wp_zesv6j_dig_socket_channels.channel_created_by':'channel_created_by',

'wp_zesv6j_dig_socket_system_messages.message_query':'message_query',
'wp_zesv6j_dig_socket_system_messages.message_id':'message_id',
'wp_zesv6j_dig_socket_system_messages.message_executed':'message_executed',
'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_run':'message_seconds_wait_to_run',
'wp_zesv6j_dig_socket_system_messages.message_inserted_timestamp':'message_inserted_timestamp',
'wp_zesv6j_dig_socket_system_messages.message_seconds_wait_to_rerun':'message_seconds_wait_to_rerun',

'wp_zesv6j_dig_sub_mode.sub_mode_id':'sub_mode_id',
'wp_zesv6j_dig_sub_mode.mode_id':'mode_id',
'wp_zesv6j_dig_sub_mode.name':'name',
'wp_zesv6j_dig_sub_mode.time_limit':'time_limit',
'wp_zesv6j_dig_sub_mode.created':'created',
'wp_zesv6j_dig_sub_mode.updated':'updated',

'wp_zesv6j_dig_subscription_entry.user_id':'user_id',
'wp_zesv6j_dig_subscription_entry.subscription_id':'subscription_id',
'wp_zesv6j_dig_subscription_entry.active':'active',
'wp_zesv6j_dig_subscription_entry.created':'created',
'wp_zesv6j_dig_subscription_entry.modified':'modified',

'wp_zesv6j_dig_subscription_model.model_id':'model_id',
'wp_zesv6j_dig_subscription_model.model_name':'model_name',
'wp_zesv6j_dig_subscription_model.model_descriptor':'model_descriptor',
'wp_zesv6j_dig_subscription_model.active':'active',
'wp_zesv6j_dig_subscription_model.charge_interval':'charge_interval',
'wp_zesv6j_dig_subscription_model.charge_amount':'charge_amount',
'wp_zesv6j_dig_subscription_model.receive_amount':'receive_amount',
'wp_zesv6j_dig_subscription_model.background_photo':'background_photo',
'wp_zesv6j_dig_subscription_model.percent_savings':'percent_savings',
'wp_zesv6j_dig_subscription_model.created':'created',
'wp_zesv6j_dig_subscription_model.modified':'modified',

'wp_zesv6j_dig_subscription_extras.subscription_id':'subscription_id',
'wp_zesv6j_dig_subscription_extras.comp_percentage':'comp_percentage',
'wp_zesv6j_dig_subscription_extras.store_discount':'store_discount',
'wp_zesv6j_dig_subscription_extras.created':'created',
'wp_zesv6j_dig_subscription_extras.modified':'modified',

'wp_zesv6j_dig_team_size.team_size_id':'team_size_id',
'wp_zesv6j_dig_team_size.name':'name',
'wp_zesv6j_dig_team_size.size':'size',
'wp_zesv6j_dig_team_size.created':'created',
'wp_zesv6j_dig_team_size.updated':'updated',

'wp_zesv6j_dig_team_roster.id':'id',
'wp_zesv6j_dig_team_roster.uid':'uid',
'wp_zesv6j_dig_team_roster.user_team_id':'user_team_id',
'wp_zesv6j_dig_team_roster.position':'position',
'wp_zesv6j_dig_team_roster.acceptance':'acceptance',

'wp_zesv6j_dig_temp_invite.temp_invite_id':'temp_invite_id',
'wp_zesv6j_dig_temp_invite.sender_id':'sender_id',
'wp_zesv6j_dig_temp_invite.comp_id':'comp_id',
'wp_zesv6j_dig_temp_invite.team_id':'team_id',
'wp_zesv6j_dig_temp_invite.invitation_type':'invitation_type',
'wp_zesv6j_dig_temp_invite.email':'email',
'wp_zesv6j_dig_temp_invite.phone':'phone',
'wp_zesv6j_dig_temp_invite.created':'created',

'wp_zesv6j_dig_tournament_payout_table.id':'id',
'wp_zesv6j_dig_tournament_payout_table.label':'label',
'wp_zesv6j_dig_tournament_payout_table.min':'min',
'wp_zesv6j_dig_tournament_payout_table.max':'max',
'wp_zesv6j_dig_tournament_payout_table.percentage':'percentage',

'wp_zesv6j_dig_transaction_log.id':'id',
'wp_zesv6j_dig_transaction_log.user_id':'user_id',
'wp_zesv6j_dig_transaction_log.amount':'amount',
'wp_zesv6j_dig_transaction_log.payment_token':'payment_token',
'wp_zesv6j_dig_transaction_log.auth_status':'auth_status',
'wp_zesv6j_dig_transaction_log.transaction_id':'transaction_id',
'wp_zesv6j_dig_transaction_log.response_text':'response_text',
'wp_zesv6j_dig_transaction_log.cc_auth_code':'cc_auth_code',
'wp_zesv6j_dig_transaction_log.cc_response_code':'cc_response_code',
'wp_zesv6j_dig_transaction_log.cc_mask':'cc_mask',
'wp_zesv6j_dig_transaction_log.cvv_response':'cvv_response',
'wp_zesv6j_dig_transaction_log.avs_response':'avs_response',
'wp_zesv6j_dig_transaction_log.kount_decision':'kount_decision',
'wp_zesv6j_dig_transaction_log.kount_score':'kount_score',
'wp_zesv6j_dig_transaction_log.kount_omniscore':'kount_omniscore',
'wp_zesv6j_dig_transaction_log.kount_trans_id':'kount_trans_id',
'wp_zesv6j_dig_transaction_log.cc_fname':'cc_fname',
'wp_zesv6j_dig_transaction_log.cc_lname':'cc_lname',
'wp_zesv6j_dig_transaction_log.cc_addr_line_1':'cc_addr_line_1',
'wp_zesv6j_dig_transaction_log.cc_addr_line_2':'cc_addr_line_2',
'wp_zesv6j_dig_transaction_log.cc_city':'cc_city',
'wp_zesv6j_dig_transaction_log.cc_state':'cc_state',
'wp_zesv6j_dig_transaction_log.cc_zip':'cc_zip',
'wp_zesv6j_dig_transaction_log.cc_country':'cc_country',
'wp_zesv6j_dig_transaction_log.pp_authorization_status':'pp_authorization_status',
'wp_zesv6j_dig_transaction_log.pp_authorization_amount':'pp_authorization_amount',
'wp_zesv6j_dig_transaction_log.pp_authorization_payer_email':'pp_authorization_payer_email',
'wp_zesv6j_dig_transaction_log.created':'created',
'wp_zesv6j_dig_transaction_log.updated':'updated',
'wp_zesv6j_dig_transaction_log.cc_company':'cc_company',
'wp_zesv6j_dig_transaction_log.from_user_id':'from_user_id',

'wp_zesv6j_dig_twitch_login_info.twitch_user_id':'twitch_user_id',
'wp_zesv6j_dig_twitch_login_info.twitch_user_name':'twitch_user_name',
'wp_zesv6j_dig_twitch_login_info.twitch_access_token':'twitch_access_token',
'wp_zesv6j_dig_twitch_login_info.twitch_user_email':'twitch_user_email',
'wp_zesv6j_dig_twitch_login_info.twitch_meta_key':'twitch_meta_key',
'wp_zesv6j_dig_twitch_login_info.user_id':'user_id',

'wp_zesv6j_dig_user_allowed_games.user_id':'user_id',
'wp_zesv6j_dig_user_allowed_games.game_id':'game_id',

'wp_zesv6j_dig_user_channels.channel_id':'channel_id',
'wp_zesv6j_dig_user_channels.channel_user_id':'channel_user_id',
'wp_zesv6j_dig_user_channels.channel_name':'channel_name',

'wp_zesv6j_dig_user_groups.group_id':'group_id',
'wp_zesv6j_dig_user_groups.user_id':'user_id',

'wp_zesv6j_dig_user_referral.referred_by':'referred_by',
'wp_zesv6j_dig_user_referral.user_id':'user_id',

'wp_zesv6j_dig_user_stats_meta.meta_id':'meta_id',
'wp_zesv6j_dig_user_stats_meta.user_stats_id':'user_stats_id',
'wp_zesv6j_dig_user_stats_meta.meta_key':'meta_key',
'wp_zesv6j_dig_user_stats_meta.meta_value':'meta_value',

'wp_zesv6j_dig_user_team_meta.meta_id':'meta_id',
'wp_zesv6j_dig_user_team_meta.user_team_id':'user_team_id',
'wp_zesv6j_dig_user_team_meta.meta_key':'meta_key',
'wp_zesv6j_dig_user_team_meta.meta_value':'meta_value',

'wp_zesv6j_dig_vendor_game.vendor_game_id':'vendor_game_id',
'wp_zesv6j_dig_vendor_game.vendor_id':'vendor_id',
'wp_zesv6j_dig_vendor_game.game_id':'game_id',
'wp_zesv6j_dig_vendor_game.platform_id':'platform_id',

'wp_zesv6j_dig_wallet_deposit_type.id':'id',
'wp_zesv6j_dig_wallet_deposit_type.label':'label',
'wp_zesv6j_dig_wallet_deposit_type.description':'description',
'wp_zesv6j_dig_wallet_deposit_type.notes':'notes',
'wp_zesv6j_dig_wallet_deposit_type.fee':'fee',
'wp_zesv6j_dig_wallet_deposit_type.percentage':'percentage',
'wp_zesv6j_dig_wallet_deposit_type.min_threshold':'min_threshold',
'wp_zesv6j_dig_wallet_deposit_type.max_threshold':'max_threshold',
'wp_zesv6j_dig_wallet_deposit_type.created':'created',
'wp_zesv6j_dig_wallet_deposit_type.updated':'updated',

'wp_zesv6j_dig_wallet_transactions.id':'id',
'wp_zesv6j_dig_wallet_transactions.user_id':'user_id',
'wp_zesv6j_dig_wallet_transactions.amount':'amount',
'wp_zesv6j_dig_wallet_transactions.action':'action',
'wp_zesv6j_dig_wallet_transactions.comment':'comment',
'wp_zesv6j_dig_wallet_transactions.status':'status',
'wp_zesv6j_dig_wallet_transactions.transaction_log_id':'transaction_log_id',
'wp_zesv6j_dig_wallet_transactions.withdrawal_request_id':'withdrawal_request_id',
'wp_zesv6j_dig_wallet_transactions.created':'created',
'wp_zesv6j_dig_wallet_transactions.updated':'updated',
'wp_zesv6j_dig_wallet_transactions.buyer_id':'buyer_id',

'wp_zesv6j_dig_wallet_withdrawal_requests.id':'id',
'wp_zesv6j_dig_wallet_withdrawal_requests.user_id':'user_id',
'wp_zesv6j_dig_wallet_withdrawal_requests.wallet_withdrwal_type_id':'wallet_withdrwal_type_id',
'wp_zesv6j_dig_wallet_withdrawal_requests.first_approver_id':'first_approver_id',
'wp_zesv6j_dig_wallet_withdrawal_requests.second_approver_id':'second_approver_id',
'wp_zesv6j_dig_wallet_withdrawal_requests.first_approval':'first_approval',
'wp_zesv6j_dig_wallet_withdrawal_requests.second_approval':'second_approval',
'wp_zesv6j_dig_wallet_withdrawal_requests.notes':'notes',
'wp_zesv6j_dig_wallet_withdrawal_requests.kount_decision':'kount_decision',
'wp_zesv6j_dig_wallet_withdrawal_requests.kount_score':'kount_score',
'wp_zesv6j_dig_wallet_withdrawal_requests.kount_omniscore':'kount_omniscore',
'wp_zesv6j_dig_wallet_withdrawal_requests.kount_trans_id':'kount_trans_id',
'wp_zesv6j_dig_wallet_withdrawal_requests.total_amount':'total_amount',
'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_amount':'withdrawal_amount',
'wp_zesv6j_dig_wallet_withdrawal_requests.withdrawal_fee':'withdrawal_fee',
'wp_zesv6j_dig_wallet_withdrawal_requests.paid':'paid',
'wp_zesv6j_dig_wallet_withdrawal_requests.first_name':'first_name',
'wp_zesv6j_dig_wallet_withdrawal_requests.last_name':'last_name',
'wp_zesv6j_dig_wallet_withdrawal_requests.paypal_email':'paypal_email',
'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_1':'addr_line_1',
'wp_zesv6j_dig_wallet_withdrawal_requests.addr_line_2':'addr_line_2',
'wp_zesv6j_dig_wallet_withdrawal_requests.addr_city':'addr_city',
'wp_zesv6j_dig_wallet_withdrawal_requests.addr_state':'addr_state',
'wp_zesv6j_dig_wallet_withdrawal_requests.addr_zip':'addr_zip',
'wp_zesv6j_dig_wallet_withdrawal_requests.addr_country':'addr_country',
'wp_zesv6j_dig_wallet_withdrawal_requests.created':'created',
'wp_zesv6j_dig_wallet_withdrawal_requests.updated':'updated',

'wp_zesv6j_dig_wallet_withdrawal_type.id':'id',
'wp_zesv6j_dig_wallet_withdrawal_type.label':'label',
'wp_zesv6j_dig_wallet_withdrawal_type.description':'description',
'wp_zesv6j_dig_wallet_withdrawal_type.notes':'notes',
'wp_zesv6j_dig_wallet_withdrawal_type.fee':'fee',
'wp_zesv6j_dig_wallet_withdrawal_type.percentage':'percentage',
'wp_zesv6j_dig_wallet_withdrawal_type.maximum_fee':'maximum_fee',
'wp_zesv6j_dig_wallet_withdrawal_type.created':'created',
'wp_zesv6j_dig_wallet_withdrawal_type.updated':'updated',

'wp_zesv6j_links.link_id':'link_id',
'wp_zesv6j_links.link_url':'link_url',
'wp_zesv6j_links.link_name':'link_name',
'wp_zesv6j_links.link_image':'link_image',
'wp_zesv6j_links.link_target':'link_target',
'wp_zesv6j_links.link_description':'link_description',
'wp_zesv6j_links.link_visible':'link_visible',
'wp_zesv6j_links.link_owner':'link_owner',
'wp_zesv6j_links.link_rating':'link_rating',
'wp_zesv6j_links.link_updated':'link_updated',
'wp_zesv6j_links.link_rel':'link_rel',
'wp_zesv6j_links.link_notes':'link_notes',
'wp_zesv6j_links.link_rss':'link_rss',

'wp_zesv6j_options.option_id':'option_id',
'wp_zesv6j_options.option_name':'option_name',
'wp_zesv6j_options.option_value':'option_value',
'wp_zesv6j_options.autoload':'autoload',

'wp_zesv6j_postmeta.meta_id':'meta_id',
'wp_zesv6j_postmeta.post_id':'post_id',
'wp_zesv6j_postmeta.meta_key':'meta_key',
'wp_zesv6j_postmeta.meta_value':'meta_value',

'wp_zesv6j_term_relationships.object_id':'object_id',
'wp_zesv6j_term_relationships.term_taxonomy_id':'term_taxonomy_id',
'wp_zesv6j_term_relationships.term_order':'term_order',

'wp_zesv6j_term_taxonomy.term_taxonomy_id':'term_taxonomy_id',
'wp_zesv6j_term_taxonomy.term_id':'term_id',
'wp_zesv6j_term_taxonomy.taxonomy':'taxonomy',
'wp_zesv6j_term_taxonomy.description':'description',
'wp_zesv6j_term_taxonomy.parent':'parent',
'wp_zesv6j_term_taxonomy.count':'count',

'wp_zesv6j_terms.term_id':'term_id',
'wp_zesv6j_terms.name':'name',
'wp_zesv6j_terms.slug':'slug',
'wp_zesv6j_terms.term_group':'term_group',
'wp_zesv6j_terms.term_order':'term_order',

'wp_zesv6j_um_followers.id':'id',
'wp_zesv6j_um_followers.time':'time',
'wp_zesv6j_um_followers.user_id1':'user_id1',
'wp_zesv6j_um_followers.user_id2':'user_id2',

'wp_zesv6j_um_friends.id':'id',
'wp_zesv6j_um_friends.time':'time',
'wp_zesv6j_um_friends.user_id1':'user_id1',
'wp_zesv6j_um_friends.user_id2':'user_id2',
'wp_zesv6j_um_friends.status':'status',

'wp_zesv6j_um_metadata.umeta_id':'umeta_id',
'wp_zesv6j_um_metadata.user_id':'user_id',
'wp_zesv6j_um_metadata.um_key':'um_key',
'wp_zesv6j_um_metadata.um_value':'um_value',

'wp_zesv6j_um_notifications.id':'id',
'wp_zesv6j_um_notifications.time':'time',
'wp_zesv6j_um_notifications.user':'user',
'wp_zesv6j_um_notifications.status':'status',
'wp_zesv6j_um_notifications.photo':'photo',
'wp_zesv6j_um_notifications.type':'type',
'wp_zesv6j_um_notifications.url':'url',
'wp_zesv6j_um_notifications.content':'content',

'wp_zesv6j_usermeta.umeta_id':'umeta_id',
'wp_zesv6j_usermeta.user_id':'user_id',
'wp_zesv6j_usermeta.meta_key':'meta_key',
'wp_zesv6j_usermeta.meta_value':'meta_value',

};

export type RestTableInterfaces = iCarbon_Carbons
	| iCarbon_Comments
	| iCarbon_Feature_Group_References
	| iCarbon_Features
	| iCarbon_Group_References
	| iCarbon_Groups
	| iCarbon_History_Logs
	| iCarbon_Location_References
	| iCarbon_Locations
	| iCarbon_Photos
	| iCarbon_Reports
	| iCarbon_Sessions
	| iCarbon_User_Followers
	| iCarbon_User_Groups
	| iCarbon_User_Messages
	| iCarbon_User_Sessions
	| iCarbon_User_Tasks
	| iCarbon_Users
	| iCommentmeta
	| iComments
	| iDig_Advertiser_Cards
	| iDig_Aws_Servers
	| iDig_Categories
	| iDig_Chat_Advertisements
	| iDig_Chat_Global_Messages
	| iDig_Chat_Group_Members
	| iDig_Chat_Group_Messages
	| iDig_Chat_Groups
	| iDig_Comp_Category
	| iDig_Competitions
	| iDig_Comp_Evidence
	| iUsers
	| iDig_User_Team
	| iPosts
	| iDig_Comp_Invitation
	| iDig_Comp_Platform
	| iDig_Platform
	| iDig_Comp_Region
	| iDig_Region
	| iDig_Comp_Registration
	| iDig_Vendor
	| iDig_Comp_Score
	| iDig_Comp_Single_Use_Passwords
	| iDig_Comp_Team_Names
	| iDig_Comp_Tourneytype
	| iDig_Tourney_Type
	| iDig_Comp_Type
	| iDig_Mode_Game
	| iDig_Competitions_Meta
	| iDig_Contact_Support
	| iDig_Custom_Buy_In
	| iDig_Custom_Prize_Pool
	| iDig_Debit_Audit
	| iDig_Discord_Login_Info
	| iDig_Dispute_Posts
	| iDig_Facebook_Login_Info
	| iDig_Feature_Group_References
	| iDig_Features
	| iDig_Game
	| iDig_Group_References
	| iDig_Groups
	| iDig_History_Logs
	| iDig_Match_Confirm
	| iDig_Match_Results
	| iDig_Mode
	| iDig_Nonce
	| iDig_Parent_User
	| iDig_Payout_Table
	| iDig_Result_Type
	| iDig_Result_Upload
	| iDig_Results
	| iDig_Reward
	| iDig_Reward_Type
	| iDig_Reward_Challenge
	| iDig_Reward_Origin
	| iDig_Reward_Type_Origin
	| iDig_Socket_Channel_Members
	| iDig_Socket_Channel_Messages
	| iDig_Socket_Channels
	| iDig_Socket_System_Messages
	| iDig_Sub_Mode
	| iDig_Subscription_Entry
	| iDig_Subscription_Model
	| iDig_Subscription_Extras
	| iDig_Team_Size
	| iDig_Team_Roster
	| iDig_Temp_Invite
	| iDig_Tournament_Payout_Table
	| iDig_Transaction_Log
	| iDig_Twitch_Login_Info
	| iDig_User_Allowed_Games
	| iDig_User_Channels
	| iDig_User_Groups
	| iDig_User_Referral
	| iDig_User_Stats_Meta
	| iDig_User_Team_Meta
	| iDig_Vendor_Game
	| iDig_Wallet_Deposit_Type
	| iDig_Wallet_Transactions
	| iDig_Wallet_Withdrawal_Requests
	| iDig_Wallet_Withdrawal_Type
	| iLinks
	| iOptions
	| iPostmeta
	| iTerm_Relationships
	| iTerm_Taxonomy
	| iTerms
	| iUm_Followers
	| iUm_Friends
	| iUm_Metadata
	| iUm_Notifications
	| iUsermeta;

export const convertForRequestBody = function (restfulObject: RestTableInterfaces, tableName: string | string[], regexErrorHandler: (message:string) => void = alert) {

    let payload = {};

    const tableNames = Array.isArray(tableName) ? tableName : [tableName];
    
    tableNames.forEach((table) => {

        Object.keys(restfulObject).map(value => {

            let shortReference = value.toUpperCase();

            if (shortReference in C6[table]) {

                const longName = C6[table][shortReference];

                payload[longName] = restfulObject[value]

                const regexValidations = C6[table].REGEX_VALIDATION[longName]

                if (regexValidations instanceof RegExp) {

                    if (false === regexValidations.test(restfulObject[value])) {

                        regexErrorHandler('Failed to match regex (' + regexValidations + ') for column (' + longName + ')')

                        throw Error('Failed to match regex (' + regexValidations + ') for column (' + longName + ')')

                    }

                } else if (typeof regexValidations === 'object' && regexValidations !== null) {

                    Object.keys(regexValidations)?.map((errorMessage) => {

                        const regex : RegExp = regexValidations[errorMessage];
                        
                        if (false === regex.test(restfulObject[value])) {

                            const devErrorMessage = 'Failed to match regex (' + regex + ') for column (' + longName + ')';
                            
                            regexErrorHandler(errorMessage ?? devErrorMessage)
                            
                            throw Error(devErrorMessage)

                        }
                        
                    })
                    
                }
                
            }
            
        })

        return true;

    });

    return payload;

};

