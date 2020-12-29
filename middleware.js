const functions = require('./functions.js');
const validations = require('./validations.js');

let checkEmail = (req, res, next) => {
    let params = req.body;
    if(!validations.email(params.to)){
        res.json({
            error: true,
            message: "Nie prawidłowy adres email odbiorcy"
        });
    }else{
        next();
    }
}

let checkParams = (req, res, next) => {
    let params = req.body;
    if(params == undefined){
        res.json({
            error:true,
            message: "Nie otrzymano parametrów!"
        });
    }else{
        next();
    }
}

let checkSubject = (req, res, next) => {
    let params = req.body;
    if(params.subject == undefined){
        res.json({
            error: true,
            message: "Musisz zdefiniować temat wiadomości"
        });
    }else{
        let subject = functions.stripMailTextsFromScripts(params.subject);
        req.body.subject = subject;
        next();
    }
}

module.exports = {
    checkEmail,
    checkParams,
    checkSubject
}