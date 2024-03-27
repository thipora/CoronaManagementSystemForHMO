const CoronaPatient = require('../models/coronaPatientModel');


const createCoronaPatient = async (req, res) => {
  try{
    const coronaPatient = new CoronaPatient({
        positiveTestDate: req.body.positiveTestDate,
        recoveryDate: req.body.recoveryDate,
        memberId: req.body.memberId
    });
    const savedCoronaPatient = await coronaPatient.save();
    res.json(savedCoronaPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAllCoronaPatients = async (req, res) => {
  try {
    const coronaPatients = await CoronaPatient.find();
    res.json(coronaPatients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findCoronaPatientsById = async (req, res) => {
  const coronaPatientId = req.params.coronaPatientId;
  try {
    const coronaPatient = await CoronaPatient.find({_id: coronaPatientId});
    if (!coronaPatient) {
      return res.status(404).json({ message: 'coronaPatient not found' });
    }
    res.json(coronaPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createCoronaPatient, findAllCoronaPatients, findCoronaPatientsById };
