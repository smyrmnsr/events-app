const User = require("../data/db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

signUp = async (req, res) => {
    const body = req.body;
    console.log(req.body);
    if (!body) {
        return res.status(400).json({
            success: false,
            erorr: "You must provide an event",
        });
    }

    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).json({
            success: false,
            error: "User already exists",
        });
    }

    user = new User(body);
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    if(!user) {
        return res.status(400).json({
            success: false,
            error: err,
        });
    }

    user
        .save()
        .then(() => {
            const jwtSecretKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYzNjM3NjUwNywiaWF0IjoxNjM2Mzc2NTA3fQ.b9bm5gdUnue99HCalBBJCdlShbtrQVyiSGvQqd13zeg";
            const token = jwt.sign({ _id: user._id, name: user.name, email: user.email}, jwtSecretKey);
            return res.status(201).json({
                success: true,
                token: token
            })
        })
}

module.exports = {
    signUp,
}