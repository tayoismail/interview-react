import React, {Component} from 'react'
import axios from 'axios'

const Teacher = (props) => (
    <tr>
      <td>{props.teacher.staffNo}</td>
      <td>{props.teacher.teacherName}</td>
      <td>{props.teacher.levels}</td>
      <td>{props.teacher.classHeld}</td>
    </tr>
)


export default class TeachersList extends Component {
    constructor(props){
        super(props)

        this.state = {teachers: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/teachers')
            .then(response => {
                this.setState({teachers: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    teacherList(){
        return this.state.teachers.map(currentTeacher => {
            return <Teacher teacher = {currentTeacher} key = {currentTeacher._id} />
        })
    }


    render() {
        return (
            <div>
                <h3>Teachers</h3>
                <table className = 'table'>
                    <thead className = 'thead-light'>
                       <tr> 
                        <th>Staff No:</th>
                        <th>Name:</th>
                        <th>Levels:</th>
                        <th>Class Held:</th>                        
                       </tr> 
                    </thead>
                    <tbody>{this.teacherList()}</tbody>

                </table>
            </div>
        )
        
    }
}