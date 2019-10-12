const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getOnePost);
router.post("/", postsController.addOnePost);
router.patch("/:id", postsController.updateOnePost);
router.delete("/:id", postsController.removeOnePost);

module.exports = router;
