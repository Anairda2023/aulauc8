const courseController = require('../controllers/courseController');
const express = require('express');
const router = express.Router();

router.get('/courses', courseController.getAllCourses);
router.get('/courses/:id',courseController.getCourseById);
router.post('/courses/create', courseController.createCourse);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);
router.get('/courses/edit/:id', courseController.formEditCourse);

module.exports = router;