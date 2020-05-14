const express = require('express');
const router = express.Router();

const students = require('./students.js');
const posts = require('./posts.js');
const main = require('./main.js');

router.get("/", main.welcome);

router.get("/students", students.getStudents);
router.get("/students/:id", students.getById);
router.post("/students", students.postStudent);
router.delete("/students/:id", students.deleteById);
router.put("/students/:id", students.putStudent);
router.patch("/students/:id", students.patchStudent);

router.get("/posts", posts.getPosts);
router.get("/posts/:postsId", posts.getPosts);
router.post("/posts", posts.postPosts);
router.put("/posts/:postsId", posts.getPosts);
router.patch("/posts/:postsId", posts.patchPosts);
router.delete("/posts/:postsId", posts.deletePosts);


module.exports = router;