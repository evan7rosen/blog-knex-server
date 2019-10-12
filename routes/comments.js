const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");

router.get("/", commentsController.getAllComments);
router.get("/:id", commentsController.getOneComment);
router.post("/", commentsController.addOneComment);
router.patch("/:id", commentsController.updateOneComment);
router.delete("/:id", commentsController.removeOneComment);

module.exports = router;
