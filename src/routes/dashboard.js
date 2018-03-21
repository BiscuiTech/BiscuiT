const express = require('express')
const router = express.Router()
const middleware = require('../helpers/middleware')
const pointofsaleApi = require('../helpers/pointofsale-api')

router.get('/getData', middleware.isLoggedIn, function (req, res) {
  if (req.headers.api === 'pointofsale-api-v1') { 
    let from = req.headers.from
    let to = req.headers.to
    pointofsaleApi.apiv1.events(from, to).then(function (data) {
      res.json(data)
    })
  } else if (req.headers.api === 'pointofsale-api-v2') {
    let eventGroup = req.headers.eventgroup
    pointofsaleApi.apiv2.events(eventGroup).then(function (data) {
      res.json(data)
    })
  }
})

router.get('/', middleware.isLoggedIn, function (req, res) {
  res.render('dashboard', {title: 'Dashboard'})
})
module.exports = router
