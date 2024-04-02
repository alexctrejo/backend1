const { Router } = require('express');
const router = Router();

const { getUsers, getById } = require('../controllers/user.controller');
const { getBusinessByKey } = require('../controllers/business.controller');



router.get('/users', getUsers);
router.get('/users/:id', getById)

router.get('/negocio/:keyword', getBusinessByKey);

module.exports = router;