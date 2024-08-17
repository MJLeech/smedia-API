const router = require('express').router();

router.route('/')
  .get()
  .post()

router.route('/:thoughtId')
  .put()
  .delete()
  
router.route('/:thoughtId/reactions')
  .post()
  .delete()