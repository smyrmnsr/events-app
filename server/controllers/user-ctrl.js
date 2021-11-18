const User = require("../data/db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* Registers a new user */
signUp = async (req, res) => {
    const body = req.body;

    /* If the event has an empty body, the request will yield an error */
    if (!body) {
        return res.status(400).json({
            success: false,
            erorr: "You must provide an user",
        });
    }

    /* Check if the email already exists in the database */
    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).json({
            success: false,
            error: "User already exists",
        });
    }

    /* We create a new user with the request body */
    user = new User(body);
    
    /* Hashing the password using bcrypt */
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);


    /* If the user couldn't be created by the scheme, the request will yield an error */
    if(!user) {
        return res.status(400).json({
            success: false,
            error: err,
        });
    }

    /* Trying to save the user in the database. If successful, we generate a token with jwt */
    user
        .save()
        .then(() => {
            const jwtSecretKey = "event-app";
            const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, avatar: user.avatar}, jwtSecretKey);
            return res.status(201).json({
                success: true,
                token: token
            })
        })
}

/* Logs in an existing user */
signIn = async (req, res) => {
    const body = req.body;

    /* If the event has an empty body, the request will yield an error */
    if (!body) {
        return res.status(400).json({
            success: false,
            erorr: "You must provide an user",
        });
    }

    /* Check if the user is already in the database */
    let user = await User.findOne({email: body.email});
    /* If the user is not in the database, the request will yield an error */
    if (!user) {
        return res.status(400).json({
            success: false,
            error: "User or password incorrect...",
        });
    }

    /* Password validation with bcrypt.compare */
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).json({
            success: false,
            error: "User or password incorrect...",
        })
    }

    /* Generate a new jwt token */
    const jwtSecretKey = "event-app";
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, avatar: user.avatar}, jwtSecretKey);

    /* Request yields the token */
    return res.status(201).json({
        success: true,
        token: token,
    });
}

module.exports = {
    signUp,
    signIn
}