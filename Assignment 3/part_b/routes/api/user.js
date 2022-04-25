const express = require("express")
const router = express.Router()
const User = require("../../model/User")

// @API    : create user
// @access : public
router.post("/", async (req, res) => {
    try {
        const { name, email, password, address, mobileNo } = req.body
        const user = new User({
            name, email, password, address, mobileNo
        })
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message);
    }
})


// @API : Read from Database
// @access : public

router.get("/", async (req, res) => {
    try {
        const users = await User.find({})

        if (!users) {
            return res.status(400).json({ msg: "no user found" })
        }

        return res.json(users)
    } catch (error) {
        console.log(error);
    }
})




// API : update user
// access: public

router.put("/:id", async (req, res) => {
    try {

        const { name, email, password, address, mobileNo } = req.body

        let user = await User.findByIdAndUpdate(req.params.id, { name, email, password, address, mobileNo }, { new: true })

        if (!user) {
            return res.status(400).json({ msg: "user does not exists" })
        }

        return res.json({"upadated user" : user})

    } catch (error) {
        console.log(error)
    }
})

// API : delete  user
// access: public


router.delete("/:id", async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(400).json({ msg: "user does not exists" })
        }

        return res.json({"deleted user" : user})

    } catch (error) {
        console.log(error)
    }
})

module.exports = router