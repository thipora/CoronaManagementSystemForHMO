import Vaccination from'../models/vaccinationModel.js';

const createVaccination = async (req, res) => {
  try{
    const vaccination = new Vaccination({
        ...req.body,
    });
    const savedVaccination = await vaccination.save();
    res.json(savedVaccination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const findVaccinationById = async (req, res) => {
  const memberId = req.params.id;
  try {
    const vaccination = await Vaccination.find({memberId: memberId});
    if (vaccination == 0) {
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
