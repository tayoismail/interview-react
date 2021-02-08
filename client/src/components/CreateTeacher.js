import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class CreateTeacher extends Component {
    constructor(props) {
        super(props)
        this.onChangeTeacherName =this.onChangeTeacherName.bind(this)
        this.onChangeStaffNo = this.onChangeStaffNo.bind(this)
        this.onChangeLevels = this.onChangeLevels.bind(this)        
        this.onChangeClassHeld = this.onChangeClassHeld.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            teacherName: '',
            staffNo: '',
            levels: '',            
            classHeld: '',
            toHome: false
            
        }
    }

    onChangeTeacherName(e) {
        this.setState({
            teacherName: e.target.value
        })
    }
    
    onChangeStaffNo(e) {
        this.setState({
            staffNo: e.target.value
        })
    }

    onChangeLevels(e) {
        this.setState({
            levels: e.target.value
        })
    }   

    onChangeClassHeld(e) {
        this.setState({
            classHeld: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const teacher = {
            teacherName: this.state.teacherName,
            staffNo: this.state.staffNo,
            levels: this.state.levels,            
            classHeld: this.state.classHeld
        }

        console.log(teacher)

        axios.post('http://localhost:5000/teachers/add', teacher)
           .then(res => console.log(res.data))

        this.setState({
            teacherName: '',
            staffNo: '',
            levels: '',            
            classHeld: '',
        })
        this.setState({
            toHome: true
        })
    }

    render() {
                if(this.state.toHome === true) {
                    return <Redirect to='/teacher' />
                }

        return (
            <div>
                <h3>Teacher Registration</h3>
                <form onSubmit = {this.onSubmit}>                    
                    <div className = 'form-group'>
                        <label>Full Name</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.teacherName} onChange = {this.onChangeTeacherName} />
                    </div>

                    <div className = 'form-group'>
                        <label>Staff Number</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.staffNo} onChange = {this.onChangeStaffNo} />
                    </div>

                    <div className = 'form-group'>
                        <label>Levels</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.levels} onChange = {this.onChangeLevels} />
                    </div>

                    <div className = 'form-group'>
                        <label>Class Held</label>
                        <input type = 'text' required className = 'form-control' 
                        value = {this.state.classHeld} onChange = {this.onChangeClassHeld} />
                    </div>

                    <div className = 'form-group'>
                        <input type = 'submit' value = 'Register' className = 'btn btn-dark' />
                    </div>               


                </form>
            </div>
        )
        
    }
}