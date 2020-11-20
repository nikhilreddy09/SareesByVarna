var router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let Saree = require('../models/Saree')
let Admin = require('../models/Admin')

router.post('/signupadmin', async(req,res) => {
    const salt = await bcrypt.genSaltSync(10);
    const password = await bcrypt.hash(req.body.password, salt)

    const admin = new Admin({
        email: req.body.email,
        password
    });

    try {
        const savedAdmin = await admin.save();
        res.json({data: savedAdmin})
    }
    catch(error) {
        res.status(400).json({error})
    }
});

router.post('/loginadmin', async(req,res) => {

    const admin = await Admin.findOne({email: req.body.email});
    if(!admin) {
        // return res.status(400).json({ error: "Email is wrong" })
        return res.json("email is wrong");
    }
    
    //check password with password hash from database
    const validPassword = await bcrypt.compareSync(req.body.password, admin.password);
    if(!validPassword) {
        // return res.status(400).json({error: "password is wrong"});
        return res.json("password is wrong")
    }

    const token = jwt.sign({
        name: admin.username,
        id: admin._id
    }, "hello");

   return res.json({token, name: admin.fullname, id: admin._id})
});




router.get('/all', async(req,res) => {
    Saree.find({}, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
        
    })
});



module.exports = router;