var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');

router.get('/posts', getAllPosts);
router.post('/posts', createPost);
router.get('/posts/:postId', getAPost);
router.delete('/posts/:postId', deleteAPost);
router.put('/posts/:postId', updateAPost);

module.exports = router;

function getAllPosts(req, res, next){
  console.log('getting all posts');
  next();
}
function createPost(req, res, next){
  var post = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    created: new Date(),
    updated: new Date()
  });
  post.save(function(err, newPost){
    if(err)
    {
      res.status(500).json({
        msg:err
      });
    }
    else {
        res.status(201).json({
          postSchema: newPost
        });
    }
  });
}

function getAPost(req, res, next){
  console.log('getting a post');
  next();
}

function deleteAPost(req, res, next){
  console.log('deleting a post');
  next();
}

function updateAPost(req, res, next){
  console.log('updating a post');
  next();
}
