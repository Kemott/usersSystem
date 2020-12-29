const sendMail = async (req, res) => {
    let params = req.body;
    let result = await functions.sendMail(params.to, params.subject, params.html);
    res.json(result);
}

module.exports = {
    sendMail
}