const express=require('express');
const router=express.Router();


// const {createTodo} = require('../controllers/createTodo');
// const {getTodo,getTodoById} = require('../controllers/getTodo');
// const {updateTodo} = require('../controllers/updateTodo');
// const {deleteTodo} = require('../controllers/deleteTodo');
// router.post('/createTodo',createTodo);
// router.get('/getTodo',getTodo);
// router.get('/getTodo/:id',getTodoById);
// router.put('/updateTodo/:id',updateTodo);
// router.delete('/deleteTodo/:id',deleteTodo);
// const {dummy} = require('../controllers/dummy');
const {createComment} = require('../controllers/commentController');
const{createPost} = require('../controllers/postController');
const{getAllPosts} = require('../controllers/postController');
const {likePost,unlikePost} = require('../controllers/likeController');
// router.get('/dummy',dummy);
router.post('/createComment',createComment);
router.post('/createPost',createPost);
router.get("/posts",getAllPosts);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);

// import controller



// create mapping


// export
module.exports = router;