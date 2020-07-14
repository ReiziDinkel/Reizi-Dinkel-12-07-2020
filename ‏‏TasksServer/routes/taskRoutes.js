const router = require('express').Router();

const tasksController = require('../controllers/taskController');

router.post('', tasksController.createTask)
router.get('', tasksController.getTasks)
router.put('/:id', tasksController.updateTask)
router.delete('/:id', tasksController.deleteTask)

module.exports = router;
