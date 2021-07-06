
const router = require("express").Router();
const { update } = require("../models/staff");
let Staff = require("../models/staff");

//create method

//http request method,disadvantage-when the data send front end to back end can access those data to third party
//http://localhost:8070/staff/add

router.route("/add").post((req,res) => {
    const staffId = req.body.staffId;//key-value =JSON
    const name = req.body.name;
    const staffType = req.body.staffType;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const NIC = req.body.NIC;
    const userName = req.body.userName;
    const password = req.body.password;


    const NewStaff = new Staff({
        staffId,
        name,
        staffType,
        age,
        gender,
        address,
        phone,
        NIC,
        userName,
        password
    })

    //js promise(if else)
    NewStaff.save().then( () => {
        res.json("Staff Member Added")//success
    }).catch((err) => {
        console.log(err);//unsuccess
    })
    
})

//route
//http://localhost:8070/staff/
router.route("/").get((req,res) => {
    Staff.find().then((staffs) => {
        res.json(staffs)
    }).catch((err) => {
        console.log(err)
    })
})

//http://localhost:8070/staff/update
router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{staffId,name,staffType,position, address,NIC,age,phone} = req.body;

    const updateStaff = {
        staffId,
        name,
        staffType,
        position,
        address,
        NIC,
        age,
        phone
    }

    

    //update staff member
    const update = await Staff.findByIdAndUpdate(userId,
        updateStaff)
    .then(() => {
        res.status(200).send({status:"Staff Member updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})


//delete staff member
router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;

    await Staff.deleteOne({staffId:userId})
    .then(() => {
        res.status(200).send({status: "Staff Member Deleted"});
    }).catch((err) => {
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", error: err.message});
    })
})


//fetch staff member
router.route("/get/:id").get(async (req,res) => {
    let userId =req.params.id;
    const user = await Staff.findById(userId)
    .then((staff) => {
        res.status(200).send({status: "Staff Member fetched", staff})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Errror with get user", error: err.message});
    })//500 -internal server error
})

module.exports = router;
