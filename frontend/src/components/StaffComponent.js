import React from "react";
import SearchBox from './SearchBox/SearchBox';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

function RenderStaffList({ staff, onClick }) {
  return (
    <Card onClick={() => onClick(staff.id)}>
      <CardImg
        width="100%"
        height="280px"
        src={staff.image}
        alt={staff.name}
      />
      <CardImgOverlay>
        <CardTitle>{staff.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function RenderSideBar(props) {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Students
          </NavLink>
          <NavLink className="nav-link" to="/staffList">
            <i class="fa fa-briefcase" aria-hidden="true"></i> Staff
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Exams
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-book" aria-hidden="true"></i> Subjects
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i> Attendance
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-usd" aria-hidden="true"></i> Finance
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-trophy" aria-hidden="true"></i> Sports
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-bell" aria-hidden="true"></i> Notices
          </NavLink>
          <NavLink className="nav-link" to="/admin">
            <i class="fa fa-bell" aria-hidden="true"></i> Admin
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

const StaffList = (props) => {
  const staffs = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-5 m-1" key={staff.id}>
        <RenderStaffList staff={staff} onClick={props.onClick} />
       
      </div>
    );
  });


  return (
    <div className="container">
     <div className="row"> <span className="myClass" ><h1>OUR STAFF</h1> </span>
       <SearchBox className="col-12 col-sm-2"
       placeholder = "Enter Teacher Name..." 
      handleChange = {(e) => this.setState({searchField:e.target.value})} /></div>
      <div className="row">
        <div className="col-12 col-sm-2">
          <RenderSideBar />
        </div>
        <div className="col-12 col-sm-10">
          <div className="row"> {staffs}</div>
        </div>
  
    </div>

    </div>
    
  );
};


export default StaffList;
