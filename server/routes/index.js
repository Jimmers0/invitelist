const router = require('express').Router()




const users = {
  going : [],
  notgoing : []
}

router.get('/going', (req, res, next) => {
  res.json(users.going)
})

router.get('/notgoing', (req, res, next) => {
  res.json(users.notgoing)
})

router.post("/notgoing", (req ,res ,next) => {
users.notgoing.push(req.body)
console.log(users)
res.json({
  message: 'user added',
  user: req.body
}) 
})

router.post("/going", (req ,res ,next) => {
  users.going.push(req.body)
  console.log(users)
  res.json({
    message: 'user added',
    user: req.body
  }) 
  })


module.exports = router