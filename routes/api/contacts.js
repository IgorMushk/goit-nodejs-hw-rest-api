const express = require("express");
const ctrl = require("../../controllers/contacts")
//const router = express.Router();

const {validateBody, checkBodyEmpty, isValidId, authenticate, ownerContact} =require("../../middlewares");
const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ownerContact, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ownerContact, ctrl.deleteById);

router.put("/:contactId", authenticate, isValidId, ownerContact, checkBodyEmpty("missing fields"), validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:contactId/favorite", authenticate, isValidId, ownerContact, checkBodyEmpty("missing field favorite"), validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
