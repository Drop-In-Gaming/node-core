
export default function teamNameValidation(str){
    let message : string[] = [],
        teamNameRgx = /^(?=.+[a-zA-Z])[ a-zA-Z0-9_-]{3,50}$/;

    if(str === ''){
        message.push('Team name can not be empty');
    }

    if(!str.match(teamNameRgx)){
        message.push('The team name you entered is invalid.');
    }

    return message;
}
