var express = require('express');

var router = express.Router();

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

module.exports = router;

function getCommentsForAPost(req, res, next){
  console.log('getting all comments');
  next();
}

function createComment(req, res, next){
  console.log('Creating comment');
  next();
}

function deleteComment(req, res, next){
  console.log('deleting comment');
  next();
}

function updateComment(req, res, next){
  console.log('updating comment');
  next();
}
