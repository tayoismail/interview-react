const express = require('express')
const router = express.Router()
const Student = require('../models/studentsModel')

router.route('/').get((req, res) => {
    Student.find()
         .then(students => res.json(students))
         .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const newStudent = new Student({
        studentno: req.body.studentno,
        firstname: req.body.firstname,
        lastname: req.body.lastname,        
        class: req.body.class,

    })

    newStudent.save()
        .then(() => res.json('!Student Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router