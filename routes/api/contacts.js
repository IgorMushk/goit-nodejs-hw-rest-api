const express = require("express");
const ctrl = require("../../controllers/contacts")
const router = express.Router();

const {validateBody, checkBodyEmpty, isValidId} =require("../../middlewares");
const {schemas} = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put("/:contactId", isValidId, checkBodyEmpty("missing fields"), validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:contactId/favorite", isValidId, checkBodyEmpty("missing field favorite"), validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
