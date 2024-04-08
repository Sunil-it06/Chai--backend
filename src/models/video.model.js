import mongoose , {Schema, SchemaType} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema({
    
        videoFile: {
            type:String, // cloudinary url
            required:true,
           
        },
        thumbnail: {
            type:String,
            required:true, // cloudinary url
          
        },
        title: {
            type:String, 
            required:true,
           
        },
        description: {
            type:String, 
            required:true,
           
        },
        duration: {
            type:Number, // cloudinary url
            required : true
          
        },

        views: {
            type:Number, 
            default : 0
        },

        password: {
            type:String, 
            required: [true , 'password is required']
          
        },
        isPublished: {
            type:Boolean, 
            default: true
          
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref : "User"
        }

    },
    {
        timestamps:true 
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const VideoSchema = new mongoose.model("video", videoSchema)
