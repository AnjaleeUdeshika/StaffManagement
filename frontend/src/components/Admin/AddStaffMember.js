import React, {useState} from 'react';
import axios from "axios";


function AddStaffmember(){

        const [staffId,setStaffId] = useState("");
        const [name,setName] = useState("");
        const [staffType,setType] = useState("");
        const [position,setPosition] = useState("");
        const [age,setAge] = useState("");
        const [gender,setGender] = useState("");
        const [address,setAddress] = useState("");
        const [phone,setPhone] = useState("");
        const [nic,setNIC] = useState("");
        const [userName,setUserName] = useState("");
        const [password,setPassword] = useState("");
        

        

        function sendData(e){
            e.preventDefault();//prevent submit 's normal behaviror
            //alert("insert");

            const newStaffMember = {
               staffId,
                name,
                staffType,
                position,
                age,
                gender,
                address,
                phone,
                nic,
                userName,
                password,
                
            }
            
            //console.log(newStaffMember)

            //pass the parameters to backend
            axios.post("http://localhost:8070/staff/add" , newStaffMember).then(() => {
                alert("Staff Member Added")
               
                setStaffId("");
                setName("");
                setType("");
                setPosition("");
                setAge("");
                setGender("");
                setAddress("");
                setPhone("");
                setNIC("");
                setUserName("");
                setPassword("");
               

            }).catch((err) => {
                alert(err)
            })
        }



    return(

      
        <div className= 'container px-4'>
              <div><h1>Register Staff Member</h1></div>

            <form onSubmit = { sendData } >

            <div className="form-group row gx-5">
                <label for="id" className="form-label">Staff Member ID</label>
                <input type="text" className="form-control" id="id" placeholder="Enter Staff Member ID" 
                onChange={(e) => {
                    setStaffId(e.target.value);//typing name(value) assign to name state through the setName function(setter) 
                }}/>
                </div>

                <div className="form-group row gx-5">
                <label for="name" className="form-label">Staff Member Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Staff Member Name" 
                onChange={(e) => {
                    setName(e.target.value);//typing name(value) assign to name state through the setName function(setter) 
                }}/>
                </div>
            
                <div className="form-group row gx-5">
                <label for="type" className="form-label">Staff Member Type</label>
                <input type="text" className="form-control" id="type" placeholder="Acadamic/Non-Academic"
                onChange={(e) => {
                    setType(e.target.value);
                }}/>
                </div>

                <div className="form-group row gx-5">
                <label for="subject" className="form-label">Position</label>
                <input type="text" className="form-control" id="position" placeholder="Teacher/Doctor/Suppervisor/..."
                onChange={(e) => {
                    setPosition(e.target.value);
                }}/>
                </div>

    
                <div className="form-group row gx-5">
                <label for="age" className="form-label">Age</label>
                <input type="text" className="form-control" id="age" 
                onChange={(e) => {
                    setAge(e.target.value);
                }}/>
                </div>

                <div className="form-group row gx-5">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" 
                onChange={(e) => {
                    setAddress(e.target.value);
                }}/>
                </div>

                <div className="form-group row gx-5">
                <label for="gender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="gender" 
                onChange={(e) => {
                    setGender(e.target.value);
                }}/>
                </div>

                <div className="form-group row gx-5">
                <label for="phone" className="form-label">Contact Number</label>
                <input type="text" className="form-control" id="phone" placeholder="**********"
                onChange={(e) => {
                    setPhone(e.target.value);
                }}/>
                </div>

                <div className="form-group row gx-5">
                <label for="nic" className="form-label">NIC</label>
                <input type="text" className="form-control" id="nic" placeholder="Enter Staff Member NIC"
                onChange={(e) => {
                    setNIC(e.target.value);
                }}/>
                </div>

        
                <div className="form-group row gx-5">
                <label for="exampleInputEmail1" className="form-label">User Name</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail"
                onChange={(e) => {
                    setUserName(e.target.value);
                }}/>
                <div id="emailHelp" className="form-text"></div>
                </div>


                <div className="form-group row gx-5">
                <label for="validationCustom03" class="form-label">Password</label>
                <input type="text" class="form-control" id="validationCustom03" required placeholder="..........." 
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <div class="invalid-feedback">
                </div>
                </div>

                
                <button type="submit" className="btn btn-primary">Add Staff Member</button>
            </form>

        </div>

    )

                //emplement Upload 4to and upload education qualifications pdf
    
}

export default AddStaffmember;