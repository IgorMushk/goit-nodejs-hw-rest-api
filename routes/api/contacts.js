const express = require("express");
const ctrl = require("../../controllers/contacts")
const router = express.Router();

const {validateBody} =require("../../middlewares");
const schemas = require("../../schemas/contacts");
const {checkBodyEmpty} = require("../../middlewares")

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", checkBodyEmpty(), validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
