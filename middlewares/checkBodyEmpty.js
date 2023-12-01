const {HttpError} = require("../helpers");

const checkBodyEmpty = (messageError) => {
    const func = (req, res, next)=> {
        if (!Object.keys(req.body).length) {
            throw HttpError(400, messageError);
        }
        next()
    }
    return func;
}

module.exports = checkBodyEmpty;