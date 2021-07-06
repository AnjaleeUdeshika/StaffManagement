import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import StudentList from "./StudentComponent";
import StaffList from "./StaffComponent";
import TeacherList from "./TeacherComponent";
//import SearchBox from './SearchBox/SearchBox';//serachbox
import { Switch, Route, Redirect } from "react-router-dom";
import { ITEMS } from "./shared/functionItems";
import { STUDENTS } from "./shared/studentList";
import { STAFF } from "./shared/staffList";
import { TEACHER } from "./shared/teacherList";

import AddStaffMember from './Admin/AddStaffMember'
import Admin from './Admin/Admin';
import StaffsTable from "./Admin/AllStaffMembers";
import User from './ProfileComponent/UserProfile';
import Login from "./LogIn/LoginComponent";
import StaffUpdateComponent from "./Admin/StaffUpdateComponent";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
     students: STUDENTS,
      staffs: STAFF,
      teachers: TEACHER,
      //searchField: '',
    
    
    };
  }
  render() {
    const HomePage = () => {
      return <Home />;

      /*const {stats,searchField} = this.this.state
      const filteredTeacher = stats.filter(teachers => (
          teachers.List.toLowerCase().includes(searchField.toLowerCase())
      ))*/
  };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu items={this.state.items} />}
          />
  

          <Route
            exact
            path="/studentList"
            component={() => <StudentList students={this.state.students} />}
          />
          <Route
            exact
            path="/staffList"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route
            exact
            path="/teacherlist"
            component={() => <TeacherList teachers={this.state.teachers} />}
          />

          <Route path="/login" exact  component={Login}/>
          
          <Route path="/add" exact  component={AddStaffMember}/>

          <Route path="/admin" exact component={Admin}/>

          <Route path="/user" exact component={User}/>

          <Route path="/update/:sId" exact component={StaffUpdateComponent}/>

          <Route path="/"  exact component={StaffsTable}/>
      
          <Redirect to="/home" />
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
