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
            .select('-__v')
            .populate('thoughts')
            if (!user) {
            res.status(404).json({message: "no user with that id"});
        }
        res.json(user);
    } catch(err) {
        res.status(500).json(err);
    }
    },
    async updateUser(req,res) {
        try{
            const user = await user.findOneAndUpdate(
                {},
                {},
                {}
            )
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req,res) {
        try{
            const user = await user.findOneAndRemove({_id: req.params.UserId})

            if(!user) {
                return res.status(404).json({message:'Invalid input. Please input existing user'})
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
}