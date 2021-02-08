const express = require('express')
const router = express.Router()
const Teacher = require('../models/teachersModel')

router.route('/').get((req, res) => {
    Teacher.find()
         .then(teachers => res.json(teachers))
         .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const newTeacher = new Teacher({
        staffNo: req.body.staffNo,
        teacherName: req.body.teacherName,        
        levels: req.body.levels,
        classHeld: req.body.classHeld,

    })
    console.log(newTeacher)

    newTeacher.save()
        .then(() => res.json(newTeacher))
        .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/:id').get((req, res) => {
//     Teacher.findById(req.params.id)
//         .then(teacher => res.json(teacher))
//         .catch(err => res.status(400).json('Error: ' + err))
// })

// router.route('/:id').delete((req, res) => {
//     Teacher.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Teacher Deleted'))
//         .catch(err => res.status(400).json('Error: ' + err))
// })

// router.route('/update/:id').post((req, res) => {
//     Teacher.findById(req.params.id)
//         .then(teacher => {
//             teacher.staffno = req.body.staffno,
//             teacher.firstname = req.body.firstname,
//             teacher.lastname = req.body.lastname,
//             teacher.levels = req.body.levels,
//             teacher.classheld = req.body.classheld, 
            
//             teacher.save()
//                .then(() => res.json('!Teacher Updated'))
//                .catch(err => res.status(400).json('Error: ' + err))
//         })
//         .catch(err => res.status(400).json('!Error: ' + err))
// })

module.exports = router