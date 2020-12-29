const config = require('./config.js');
const htmlToFormattedText = require('html-to-formatted-text');
const mail = require('@sendgrid/mail');
const { SearchSource } = require('jest');

mail.setApiKey(config.credentials.sendgrid.API_KEY);
const from = "kontakt.futuristic@gmail.com";

let sendMail = async (to, subject, html) => {
    let result = {};
    const msg = {
        to: to,
        from: from,
        subject: subject,
        text: htmlToFormattedText(html),
        html: html
    };
    await mail.send(msg).then(() => {
        result = {
            error: false,
            message: "Udało się wysłać wiadomość"
        };
    }).catch((error) => {
        console.error(error);
        result = {
            error: true,
            message: error.message
        };
    });
    return result;
}

let stripMailTextsFromScripts = (txt) => {
    let pos = txt.search(/<script/i);
    let pos2 = txt.search(/<\/script>/i);
    let part1 = '';
    let part2 = '';
    let result = txt;
    while(pos > -1){
        part1 = result.substring(0,pos);
        part2 = result.substring(pos2+9);
        result = part1 + part2;
        pos = result.search('<script');
        pos2 = result.search('</script>');
    }
    result = result.replace(/\s+/g,' ').trim();
    return result;
}

module.exports = {
    sendMail,
    stripMailTextsFromScripts
}