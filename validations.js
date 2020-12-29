let email = (text) => {
    let rgx = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@' +
        '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
        '(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$');
    if(text == undefined || !rgx.test(text)){
        console.log(rgx.test(text));
        return false;
    }else{
        return true;
    }
}

module.exports = {
    email
}