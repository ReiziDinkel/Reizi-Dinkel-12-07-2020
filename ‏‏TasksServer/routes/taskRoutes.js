const router = require('express').Router();

const tasksController = require('../controllers/taskController');

router.post('', tasksController.createTask)
router.post('/user', tasksController.createUser)
router.post('/login', tasksController.login)
router.get('', tasksController.getTasks)
router.put('/:id', tasksController.updateTask)
router.delete('', tasksController.deleteTask)

module.exports = router;
