const express = require("express")
const User = require("../models/User")
const auth = require('../middleware/auth')

const router = express.Router()


router.post('/logout',auth, async(req,res)=> {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token 
        })
        await req.user.save()
        res.send()
    } catch(error){
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async(req,res) =>{
    try{
        req.user.tokens.splace(0, req.user.tokens.length)
        await req.user.save()
    } catch(error){
        res.status(500).send(error);
    }
})


router.post('/sign-up', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/sign-up',  async(req, res) => {
    res.status(301).redirect('/')
})

router.post("/login", auth, async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findByCredentials(email, password)
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" })
    }
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router;
