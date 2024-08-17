const {Schema, Type} = require('mongoose');

const User = new Schema(
  {  username:{
        type:String,
        unique:true,
        required:true,
        trim: true, 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'email format must match: "____@___.__"'
        },
        },
    thoughts:[{type: Schema.types.ObjectId, ref: 'thought'}],//Array of _id values referencing the Thought model
    freinds:[{type: Schema.types.ObjectId, ref:'user'}],//Array of _id values referencing the User model (self-reference)
},
{
 toJSON:{
    virtual: true
 }{_id: true}
});
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('freindCount').get(function() {
    return this.freinds.length;
});

module.exports = User; 