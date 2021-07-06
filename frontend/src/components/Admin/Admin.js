import React from 'react';

function Admin(){

    return(

        <div className="list-group" style={{alignContent:'center', padding : '50px'}}>
        <a href="/add" className="list-group-item list-group-item-action active"  style={{width: '75%'}}aria-current="true"> Add New Staff Member </a>
        <a href="/" className="list-group-item list-group-item-action" style={{backgroundColor:"yellow" ,width: '75%'}}>Update Staff Member</a>
        <a href="/" className="list-group-item list-group-item-action"  style={{backgroundColor:"green",width: '75%'}}>Delete Staff Member</a>
        <a href="/" className="list-group-item list-group-item-action"   style={{backgroundColor:"pink",width: '75%'}}>All Staff Members</a>
        
        </div>

    );
}
export default Admin;