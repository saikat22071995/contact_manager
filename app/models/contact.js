const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    firstname:{
        type:String,
        required:true,
        maxlength:30
    },
    lastname:{
        type:String,
        required:true,
        maxlength:30
    },
    number:[{
        type:String,
        required:true,
        // validate:{
        //     validator:function(value){
        //         return validator.isMobilePhone(value)
        //     },
        //     message:{
        //         function () {
        //             return 'Invalid Mobile Number'
        //         }
        //     }
        // }
    }],
    contactImage:{
        type:String,
        //required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    
})

const Contacts=mongoose.model('contact',UserSchema)

module.exports=Contacts