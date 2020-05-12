const express = require('express');
const router = express.Router();

const users = require('./users.js');
const posts = require('./posts.js');
const main = require('./main.js');

router.get("/", main.welcome);

router.get("/users", users.getUsers);
router.get("/users/:id", users.getById);
router.post("/users", users.postUser);
router.delete("/users/:id", users.deleteById);
router.put("/users/:id", users.putUser);
router.patch("/users/:id", users.patchUser);

router.get("/posts", posts.getPosts);
router.get("/posts/:postsId", posts.getPosts);
router.post("/posts", posts.postPosts);
router.put("/posts/:postsId", posts.getPosts);
router.patch("/posts/:postsId", posts.patchPosts);
router.delete("/posts/:postsId", posts.deletePosts);


module.exports = router;