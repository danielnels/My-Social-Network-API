const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThoughts, 
  updateThought,
  deleteThought,
  addReaction, 
  deleteReaction,
} = require('../../controllers/thoughtController');



//GET/api/thoughts 
router.route('/').get(getThoughts).post(createThoughts);

//get/put/delete- /:thoughtId 
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// delete/add reaction by reactionId
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;