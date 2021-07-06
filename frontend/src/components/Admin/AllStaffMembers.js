
import React , {useState,useEffect}from 'react';
import axios from 'axios';
import {  NavLink, Link } from 'react-router-dom';
//import { Table } from 'react-materialize';


const StaffsTable = () => {


    //useEffect- when ccomponent is rendering get all the data from database and insert those inot staffs array
    //useState -hook- They let you use state and other React features without writing a class.
    //update value in an object in an array using useStae
    const [staffs, setStaffs] = useState([]);
    const [isLoading, setLoading] = useState(true);

        useEffect(() => {

            const fetchData = async () => {
                const staffsData = await axios.get('http://localhost:8070/staff/')
                setStaffs(staffsData.data)
                setLoading(false);

            }
            fetchData()
        },[])
            
        if(isLoading) { return <div> Loading ... </div> };


    return(
      <div className='container'>
        <h1>All Staff Members</h1>
       
        <table className="table">
            <thead>
                <tr>
                <th scope="col" data-field="id">
                Staff ID
                </th>
                <th scope="col" data-field="name">
                Name
                </th>
                <th scope="col" data-field="staffType">
                StaffType
                </th>
                <th scope="col" data-field="subject">
                Position
                </th>
                <th data-field="age">
                Age
                </th>
                <th data-field="gender">
                Gender
                </th>
                <th data-field="phone">
                Phone
                </th>
                <th data-field="NIC">
                NIC
                </th>
                <th data-field="userName">
                User Name
                </th>
                <th>
                <button type="button" class="btn btn-success btn-lg " >Download</button>
                </th>
                </tr>
            </thead>
            <tbody>
            {
          staffs.length >= 1
          ? staffs.map(staff => 
              <tr key={staff._id}>
                 <td className="table-primary">
                  {staff.staffId}
                </td>
                <td className="table-secondary">
                  {staff.name}
                </td>
                <td className="table-success">
                  {staff.staffType}
                </td>
                <td className="table-danger">
                  {staff.position}
                </td>
                <td className="table-warning">
                  {staff.age}
                </td>
                <td className="table-info">
                  {staff.gender}
                </td>
                <td className="table-light">
                  {staff.phone}
                </td>
                <td className="table-success">
                  {staff.NIC}
                </td>
                <td className="table-danger">
                  {staff.userName}
                </td>

                {/*update Staff member*/}

                <td data-field="button">
                <Link className="btn btn-warning" to={`/update/${staff._id}`} > Update </Link>
                
                </td>

            {/*delete staff member by staffId*/}
                <td data-field="button">
                <button type="button" class="btn btn-danger"
                   onClick={() => {
                    const idStaff = staff.staffId
                    console.log(staff.staffId)
                    axios.delete("http://localhost:8070/staff/delete/"+idStaff).then(() => {
                        alert("Staff Member Deleted")
                        window.location = '/'; //current location-auto refresh
                    }).catch((err) => {
                        alert(err)
                    })
                }}
                >Delete</button>
                </td>
               
              </tr>
            )
            :<tr>
                <td>There is no Staff Member</td>
             </tr>
            
            }
        </tbody>
        </table>
        
        </div> 
    );

//implement delete method

/*<th data-field="password">Password</th> 

 <td>{staff.password}</td>*/

}

export default StaffsTable;