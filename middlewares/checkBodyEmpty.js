const {HttpError} = require("../helpers");

const checkBodyEmpty = () => {
    const func = (req, res, next)=> {
        if (!Object.keys(req.body).length) {
            throw HttpError(400, "missing fields");
        }
        next()
    }
    return func;
}

module.exports = checkBodyEmpty;