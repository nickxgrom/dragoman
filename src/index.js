import translate from 'translate';
import { token }  from "../config.json"
translate.key = token;

translate('Hello world', 'ru')
    .then( text => {
        console.log(text)
    } )
    .catch( err => {
        console.log(err)
    } )
