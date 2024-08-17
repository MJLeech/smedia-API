const { kMaxLength } = require('buffer');
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
          get: (date) => {
            if (date) return date.toISOString().split('t') [0]
          }},

          username:{type: String, required: true}
        
    },
)