var router = require('express').Router();
let Saree = require('../models/Saree')
let Admin = require('../models/Admin')

router.post('/add', async(req,res) => {
    const saree = new Saree({
        name : req.body.name,
        price : req.body.price,
        sareetype : req.body.sareetype,
        imagesUrl : req.body.imagesUrl,
    })
    try {
        const savedSaree = await saree.save()
        res.json({data: savedSaree});

    } catch(e) {
        res.status(400).json(e)
    } 
});

router.delete('/delete/:id', async(req,res) => {
    Saree.findByIdAndDelete(req.params.id , (err,result) => {
        res.send(result)
    })
})

router.post('/update/:id', async(req,res) => {
    var id = {'_id': req.params.id}
    Saree.findOneAndUpdate(id, req.body, (err,result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router;