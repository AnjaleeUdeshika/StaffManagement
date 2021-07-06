// import React from 'react';
// import { jsPDF } from 'jspdf';
// import  "jspdf-autotable";

// const exportPDF = (data) => {
//     const unit = "pt";
//     const size = "A3";
//     const orientation = "portrait";

//     const marginLeft = 40;
//     const doc = new jsPDF(orientation, unit, size);

//     doc.setFontSize(18);

//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();

//     today = mm + '/' + dd + '/' + yyyy;

//     const title = "Staff Details Report  "+today;
//     const headers = [[//add table headers]];

//<tbody>
//{

//     const d = staffs.map(staff => 
             /* <tr key={staff._id}>
              <td>
               {staff.staffId}
             </td>
             <td>
               {staff.name}
             </td>
             <td>
               {staff.staffType}
             </td>
             <td>
               {staff.position}
             </td>
             <td>
               {staff.age}
             </td>
             <td>
               {staff.gender}
             </td>
             <td>
               {staff.phone}
             </td>
             <td>
               {staff.NIC}
             </td>
             <td>
               {staff.userName}
             </td>*/


//     doc.text(title, marginLeft, 40);
//     doc.autoTable(content);
//     doc.save("report.pdf")
// }