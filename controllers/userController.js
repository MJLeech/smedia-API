const User = require("../models/User");

module.exports = {
    async newUser(req,res) {
     try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData)
     } catch (err) {
        res.status(500).json(err)
     }
    },
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneUser(req,res) {
        try{
            const user = await User.findOne({ _id: req.params.userId})
            
        }
    }
}