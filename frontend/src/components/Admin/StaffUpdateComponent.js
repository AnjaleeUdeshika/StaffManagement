import React, { Component } from 'react';
import axios from 'axios';

class StaffUpdateComponet extends Component{

    constructor(props) {
        super(props)

        console.log(props.match.params.sId);
        var idParm = props.match.params.sId;

        // this.onChangeId = this.onChangeId.bind(this);
        this.onChangeStaffId = this.onChangeStaffId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeStaffType = this.onChangeStaffType.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        console.log(props.name);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          staffId: '',
          name: '',
          staffType: '',
          position: '',
          address: '',
          age: 0,
          NIC: '',
          contactNumber: 0,
          id:idParm
        }
        this.setState({
                    id: idParm
                  })
    }


    // onChangeId(idParm){
    //     this.setState({
    //         id: idParm
    //       })
    // }

    // onChangeId(idParm)


    componentDidMount() {
        console.log("prpsID : "+this.state.id);
        axios.get('http://localhost:8070/staff/get/'+this.state.id)
          .then(response => {
            console.log(response.data.staff);
              this.setState({
                staffId: response.data.staff.staffId,
                name: response.data.staff.name,
                staffType:response.data.staff.staffType,
                position: response.data.staff.position,
                address: response.data.staff.address,
                NIC: response.data.staff.NIC,
                age: Number(response.data.staff.age),
                contactNumber:Number(response.data.staff.contactNumber),
              })
          })
          .catch((error) => {
            console.log(error);
          })

          
      }

      onChangeStaffId(e) {
          this.setState({
             staffId: e.target.value
          })
      }
      onChangeName(e) {
          this.setState({
            name: e.target.value
          })
      }

      onChangeStaffType(e) {
        this.setState({
          staffType: e.target.value
        })
    }

      onChangePosition(e) {
          this.setState({
            position: e.target.value
          })
      }
      onChangeAddress(e) {
          this.setState({
            address: e.target.value
          })
      }
      onChangeNIC(e) {
          this.setState({
            NIC: e.target.value
          })
      }
      onChangeAge(e) {
          this.setState({
            age: Number(e.target.value)
          })
      }
      onChangeContactNumber(e) {
          this.setState({
            contactNumber: Number(e.target.value)
          })
      }

      onSubmit(e) {
        
        e.preventDefault();
    
        const exercise = {
          staffId: this.state.staffId,
          name: this.state.name,
          staffType: this.state.staffType,
          position: this.state.position,
          address: this.state.address,
          NIC: this.state.NIC,
          age: this.state.age,
          contactNumber: this.state.contactNumber
        }
        
        console.log(exercise);

        axios.put('http://localhost:8070/staff/update/' + this.state.id, exercise)
          .then(res => {
              console.log("RES Data : "+res.data);
              alert("Updated");
            });
            
        // window.location = '/';//after submited this will move to all staff member details page

      }

    render(){

        return(


            <div className= 'container'>

              <div><h1>Update Staff Member</h1>
              </div>
                <form onSubmit={this.onSubmit} >
    
                <div className="form-group">
                    <label for="id" className="form-label">Staff Member ID</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter Staff Member ID" 
                    value={this.state.staffId}
                    onChange={this.onChangeStaffId}
                    disabled/>
                    </div>
    
                    <div className="form-group">
                    <label for="name" className="form-label">Staff Member Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Staff Member Name" 
                     value={this.state.name}
                     onChange={this.onChangeName}/>
                    </div>
                
                    <div className="form-group">
                    <label for="type" className="form-label">Staff Member Type</label>
                    <input type="text" className="form-control" id="type" placeholder="Acadamic/Non-Academic"
                      value={this.state.staffType}
                      onChange={this.onChangeStaffType}/>
                    </div>
    
                    <div className="form-group">
                    <label for="subject" className="form-label">Position</label>
                    <input type="text" className="form-control" id="subject" placeholder="Teacher/Doctor/Suppervisor/..."
                      value={this.state.position}
                      onChange={this.onChangePosition}/>
                    </div>
    
        
                  
                    <div className="form-group">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" 
                     value={this.state.address}
                     onChange={this.onChangeAddress}/>
                    </div>
    
                    
    
                    <div className="form-group">
                    <label for="nic" className="form-label">NIC</label>
                    <input type="text" className="form-control" id="nic" 
                     value={this.state.NIC}
                     onChange={this.onChangeNIC}/>
                    </div>
    
                    <div className="form-group">
                    <label for="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" 
                     value={this.state.age}
                     onChange={this.onChangeAge}/>
                    </div>

                    <div className="form-group">
                    <label for="phone" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="phone" 
                     value={this.state.contactNumber}
                     onChange={this.onChangeContactNumber}/>
                    </div>
    
                <button type="submit" className="btn btn-primary">Update</button>
                </form>
    
            </div>
    
        )
    }

}

export default StaffUpdateComponet;

