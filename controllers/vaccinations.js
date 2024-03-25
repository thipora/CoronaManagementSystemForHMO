const Vaccination = require('../models/vaccinationModel');

const createVaccination = async (req, res) => {
  try{
    if(req.body==undefined){
      req.body = {
        "vaccineDate": "2016-02-28",
        "manufacturer": "לא הצליח באסה",
        "userId": 326444387}
    }
    const vaccination = new Vaccination({
        vaccineDate: req.body.vaccination,
        manufacturer: req.body.manufacturer,
        userId: req.body.userId
    });
    const savedVaccination = await vaccination.save();
    res.json(savedVaccination);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// const findVaccinationById = async (req, res) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.find({id: userId});
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

const findAllVaccinations = async (req, res) => {
  try {
    const vaccinations = await Vaccination.find();
    res.json(vaccinations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createVaccination, findAllVaccinations };
