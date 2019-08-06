const router = require('express').Router()

const bodyParser = require('body-parser')


const users = []
let id = 1

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.post("/user", (req ,res ,next) => {

  const user = req.body.user

  users.id = id
  user.fname = invitee.name.first
  user.lname = invitee.name.last
  user.phone = invitee.userphone
  user.email = invitee.useremail
  user.going = 'no'

  id++

  users.push(user)
})

router.get("/user/:id", (req, res, next) => {
  const id = req.params.id

  const user = users.find(user => Number(id) === user.id)

  res.json({
    user:user 
  })
})

router.post("/user", (req ,res ,next) => {

  const user = req.body.user

  users.id = id
  user.fname = invitee.name.first
  user.lname = invitee.name.last
  user.phone = invitee.userphone
  user.email = invitee.useremail
  user.going = 'yes'

  id++

  users.push(user)
}) 

router.get("/user/:id", (req, res, next) => {
  const id = req.params.id

  const user = users.find(user => Number(id) === user.id)

  res.json({
    user:user 
  })
})

module.exports = router