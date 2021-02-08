import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import TeachersList from './components/TeachersList'
import StudentsList from './components/StudentsList'
import EditTeacher from './components/EditTeacher'
import CreateTeacher from './components/CreateTeacher'
import CreateStudent from './components/CreateStudent'

function App() {
  return (
    <Router>
      <div className = 'container'>
      <Navbar />
      <br/>
      <Route path = '/'  exact component = {StudentsList}  />
      <Route path = '/teacher'   component = {TeachersList}  />
      <Route path = '/edit/:id'  component = {EditTeacher} />
      <Route path = '/create'  component = {CreateTeacher} />
      <Route path = '/student'  component = {CreateStudent} />
      </div>
    </Router>
  );
}

export default App;
