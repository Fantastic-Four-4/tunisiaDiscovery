const { Router } = require("express");
const PayCar = require("../models/PayCar");

const router = Router();


router.post('/', async(req, res) => {
    try {
        const newPayment = new PayCar(req.body);
            const Paycreate = await newPayment.save();
            if (!Paycreate) throw new Error('Pay creation opperation failed !');
            console.log(Paycreate)
            res.status(200).json(Paycreate);
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: err.message })
        }
});

//------------ export module ---------------
module.exports = router;
