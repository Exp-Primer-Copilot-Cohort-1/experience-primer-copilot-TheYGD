// Create web server
//

const express = require('express');
const router = express.Router();

const comments = require('../controllers/comments');

router.get('/', comments.getComments);
router.post('/', comments.createComment);
router.put('/:id', comments.updateComment);
router.delete('/:id', comments.deleteComment);

module.exports = router;