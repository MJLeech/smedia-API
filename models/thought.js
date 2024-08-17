
const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
         thoughtText: {
            type: String,
            required: true,
            minlenght:1,
            maxlength:280,
          },
          createdAt:{
          type: Date,
          default: date.now(),
          get: (date) => {
            if (date) return date.toISOString().split('t') [0]
          }},

          username:{type: String, required: true, },
          reactions:[{}]
        
    },
)