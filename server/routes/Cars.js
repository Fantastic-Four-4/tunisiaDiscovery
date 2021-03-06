const { Router } = require("express");
const car = require("../models/Cars");

const router = Router();

//------------ create a car ------------------
router.post("/create", async(req, res) => {
    const { title, imageUrl, text, price } = req.body;
    let cars = {};
    cars.title = title;
    cars.imageUrl = imageUrl;
    cars.text = text;
    cars.price = price;
    let carModel = new car(cars);
    await carModel.save();
    console.log(carModel)
    res.json(carModel);
});

//------------ get all cars ----------------

router.get("/", async(req, res) => {
    try {
        const cars = await car.find();
        if (!cars) throw new Error("No cars to display Err !");
        const sorted = cars.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        console.log(sorted);
        res.status(200).json(sorted);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post("/findcar", async(req, res) => {
    try {

            var cars = await car.find({
                title: { $regex: req.body.title, $options: "i" },
            });
        
        res.send(cars);
    } catch (err) {
        res.send(err);
    }
});

//------------ get one car ----------------

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneCar = await car.findById(id);
        if (!oneCar) throw new Error("No Cars to display Err !");
        res.status(200).json(oneCar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//------------ delete a car ------------------
router.delete('/:id', async (req, res) =>{
    try{
        const { id } = req.params
        const deleteCar = await car.findByIdAndDelete(id);
        if(!deleteCar) throw new Error('car deletion not done !');
        res.status(200).json(deleteCar);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ export module ---------------
module.exports = router;