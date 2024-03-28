import coronaPatientModel from '../models/coronaPatientModel.js';


const createCoronaPatient = async (req, res) => {
  try{
    const coronaPatient = new coronaPatientModel({
      ...req.body,
    });
    const savedCoronaPatient = await coronaPatient.save();
    res.json(savedCoronaPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAllCoronaPatients = async (req, res) => {
  try {
    const coronaPatients = await coronaPatientModel.find();
    res.json(coronaPatients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findCoronaPatientsById = async (req, res) => {
  const coronaPatientId = req.params.id;
  try {
    const coronaPatient = await coronaPatientModel.find({memberId: coronaPatientId});
    if (coronaPatient == 0) {
      return res.status(404).json({ message: 'coronaPatient not found' });
    }
    res.json(coronaPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { createCoronaPatient, findAllCoronaPatients, findCoronaPatientsById };
