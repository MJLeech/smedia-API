const {Schema, Types} = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId:{type: Schema.Types.ObjectId,
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
              if (date) return date.toISOString().split('t') [0]
            }},
    }
)