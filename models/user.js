const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email: { type: String, required: true, unique: true },
    password: {type:String, required:true, unique:true}
})

userSchema.pre('save', async function (next) {
    const user = this;
    console.log(user)
    if (!user.isModified('password')) return next();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();

})

module.exports = mongoose.model('user',userSchema)