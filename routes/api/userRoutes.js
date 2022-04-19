const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser, 
  updateUser,
  deleteUser, 
  addFriend, 
  removeFriend,
} = require('../../controllers/userController');

//GET/api/users 
router.route('/').get(getUsers).post(createUser);

// get/put/delete- /:userId 
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//delete/add friend by friend Id
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;