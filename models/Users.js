const { Schema, model } = require('mongoose');

// Schema to create User Model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email:{
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/, 
    },
    thoughts:[ 
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

usersSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Users = model('Users', usersSchema);
//exporting 
module.exports = Users;