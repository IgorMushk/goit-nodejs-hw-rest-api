const express = require("express");
const ctrl = require("../../controllers/contacts")
//const router = express.Router();

const {validateBody, checkBodyEmpty, isValidId, authenticate} =require("../../middlewares");
const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put("/:contactId", authenticate, isValidId, checkBodyEmpty("missing fields"), validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:contactId/favorite", authenticate, isValidId, checkBodyEmpty("missing field favorite"), validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
