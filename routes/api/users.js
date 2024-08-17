const router = require('express').router();


router.route('/')
  .get()
  .post()

router.route('/:userId')
  .get()
  .put()
  .delete()

router.route('/:userId/freinds/:friendId')
.post()
.delete()