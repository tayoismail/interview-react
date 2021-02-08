import React, {Component} from 'react'
import axios from 'axios'

const Student = (props) => (
    <tr>
      <td>{props.student.studentNo}</td>
      <td>{props.student.firstName}</td>
      <td>{props.student.lastName}</td>
      <td>{props.student.class}</td>
      <td>{props.student.teacherName}</td>
    </tr>
)


export default class StudentsList extends Component {
    constructor(props){
        super(props)

        this.state = {students: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/students')
            .then(response => {
                this.setState({students: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    studentList(){
        return this.state.students.map(currentStudent => {
            return <Student student = {currentStudent} key = {currentStudent._id} />
        })
    }


    render() {
        return (
            <div>
                <h3>Students</h3>
                <table className = 'table'>
                    <thead className = 'thead-light'>
                       <tr> 
                        <th>Student No:</th>
                        <th>First Name:</th>
                        <th>Last Name:</th>
                        <th>Class:</th>
                        <th>Assigned Teacher</th>
                       </tr> 
                    </thead>
                    <tbody>{this.studentList()}</tbody>

                </table>
            </div>
        )
        
    }
}