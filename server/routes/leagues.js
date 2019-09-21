const express = require('express');
const knex = require('../db/knex.js');
let router = express.Router();

router.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  function leagues() {
    return knex('leagues');
  }
  
/* GET home page. */
router.get('/', function(req, res, next) {
  leagues().select().then(data => {
      res.json(data)
  })
});

module.exports = router;
