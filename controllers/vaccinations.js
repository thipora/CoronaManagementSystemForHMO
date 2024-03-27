import Vaccination from'../models/vaccinationModel.js';

const createVaccination = async (req, res) => {
  try{
    const vaccination = new Vaccination({
        vaccineDate: req.body.vaccineDate,
        manufacturer: req.body.manufacturer,
        memberId: req.body.memberId
    });
    const savedVaccination = await vaccination.save();
    res.json(savedVaccination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const findVaccinationById = async (req, res) => {
  const memberId = req.params.memberId;
  try {
    const vaccination = await Vaccination.find({memberId: memberId});
    if (!vaccination) {
      return res.status(404).json({ message: 'vaccination not found' });
    }
    res.json(vaccination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const findAllVaccinations = async (req, res) => {
  try {
    const vaccinations = await Vaccination.find();
    res.json(vaccinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createVaccination, findVaccinationById, findAllVaccinations };
