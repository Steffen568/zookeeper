const router = require('express').Router()
const animalRouts = require('../apiRouts/animalRouts')

router.use(animalRouts)
router.use(require('./zookeeperRoutes'));

module.exports = router