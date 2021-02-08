import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class CreateStudent extends Component {
    constructor(props) {
        super(props)        
        this.onChangeTeacherName =this.onChangeTeacherName.bind(this)
        this.onChangeStudentNo = this.onChangeStudentNo.bind(this)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)        
        this.onChangeClass = this.onChangeClass.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            teacherName: '',
            studentNo: '',
            firstName: '',
            lastName: '',
            class: '',
            teachers: [],
            toHome: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/teachers/')
           .then(response => {
               if(response.data.length > 0) {
                this.setState({
                    teachers: response.data.map(teacher => teacher.teacherName),
                    teacherName: response.data[0].teacherName
                }) 
               }
           })
        
    }

    onChangeTeacherName(e) {
        this.setState({
            teacherName: e.target.value
        })
    }
    
    onChangeStudentNo(e) {
        this.setState({
            studentNo: e.target.value
        })
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeClass(e) {
        this.setState({
            class: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const student = {
            teacherName: this.state.teacherName,
            studentNo: this.state.studentNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            class: this.state.class
        }

        console.log('Student Registered')

        axios.post('http://localhost:5000/students/add', student)
           .then(res => console.log(res.data))

        this.setState({
            toHome: true
        })
    }

    render() {
        if(this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h3>Student Registration</h3>
                <form onSubmit = {this.onSubmit}>                   
                    <div className = 'form-group'>
                        <label>Student Number</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.studentNo} onChange = {this.onChangeStudentNo} />
                    </div>

                    <div className = 'form-group'>
                        <label>First Name</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.firstName} onChange = {this.onChangeFirstName} />
                    </div>

                    <div className = 'form-group'>
                        <label>Last Name</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.lastName} onChange = {this.onChangeLastName} />
                    </div>

                    <div className = 'form-group'>
                        <label>Class</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.class} onChange = {this.onChangeClass} />
                    </div>

                    <div className = 'form-group'>
                        <label>Assigned Teacher</label>
                        <select required className = 'form-control'
                         value = {this.state.teacherName} onChange ={this.onChangeTeacherName}>
                             {
                                 this.state.teachers.map(function(teacher){
                                     return <option key = {teacher} value = {teacher}>{teacher}</option>
                                 })
                             }                        

                        </select>
                    </div>

                    <div className = 'form-group'>
                        <input type = 'submit' value = 'Register' className = 'btn btn-dark' />
                    </div>               


                </form>
            </div>
        )
        
    }
}