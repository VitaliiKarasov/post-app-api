const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    text: { type: String, required: true },
    uid: String
})


module.exports = model('Post', PostSchema)