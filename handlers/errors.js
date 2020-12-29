const err_404 = (req, res) => {
    res.status(404);
    res.json({
        error: true,
        message: "Can't find resource"
    });
};

const err_500 = (err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.json({
        error: true,
        message: "Błąd serwera"
    });
}

module.exports = {
    err_404,
    err_500
}