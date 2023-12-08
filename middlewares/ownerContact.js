const {Contact} = require("../models/contact");
const { HttpError} = require("../helpers");
const { boolean } = require("joi");

const ownerContact = async (req, res, next) => {
    const {_id: owner} = req.user;
    const { contactId: _id } = req.params;
    //console.log('Login owner : ', owner, 'Contact : ',  _id);
    const result = await Contact.find({ owner, _id });
    //console.log("ownerContact : ", result.owner);
    if (!result.length) {
        next(HttpError(404, "Not found for the owner"))
    }
    next();
}

module.exports = ownerContact;
