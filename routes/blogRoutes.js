const express = require("express");
const blogController = require('../controllers/BlogController')

const router = express.Router()


//home
router.get("/", blogController.index)
//create blog
router.get("/create",blogController.create)
//blog details
//store blog
router.post("/", blogController.store)
//delete post
router.get("/:id", blogController.show)
router.delete("/:id",blogController.post_delete)


module.exports = router;
