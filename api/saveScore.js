const mongoose = require('mongoose');

export default async function handler(req, res) {
    const { body } = req;
    // return res.send(`TEST TESTSETSET Hello ${body.name}, you just parsed the request body!`);

    await mongoose.connect(`mongodb+srv://mattowskinator:${process.env.MONGODB_PASS}@cluster0.t3jerdy.mongodb.net/ghf?retryWrites=true&w=majority`);

    const userSchema = new mongoose.Schema({
        name: String,
        data: Object
    })
    const User = mongoose.model('User', userSchema);

    const user = new User({
        name: body.name,
        data: {
            score: 0
        }
    })

    await user.save();

    return res.send(`mongoose for ${body.name}`);
}