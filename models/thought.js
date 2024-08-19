
const { Schema, Types } = require('mongoose');

const reactionSchema = new mongoose.Schema(
  {
      reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
      },
      reactionBody:{
          type: String,
          required: true,
          maxlength: 280,
      },
      username:{
          type:String,
          required:true,
      },
      createdAt:{
          type: Date,
          default: date.now(),
          get: (date) => {
            if (date) return date.toISOString().split('T') [0]
          }}, 
  }
);

const thoughtSchema = new mongoose.Schema(
    {
         thoughtText: {
            type: String,
            required: true,
            minlength:1,
            maxlength:280,
          },
          createdAt:{
          type: Date,
          default: date.now(),
          get: (date) => {
            if (date) return date.toISOString().split('T') [0]
          }},
          username:{type: String, required: true, },
          reactions:[reactionSchema]
        
    },
    {
      toJSON:{
        virtuals: true
      },
      id: false
    }
  );

  thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })

  module.exports = {Thought, thoughtSchema}