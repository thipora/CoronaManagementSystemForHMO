const CoronaPatient = require('../models/coronaPatientModel');


const createCoronaPatient = async (req, res) => {
  try{
    const coronaPatient = new CoronaPatient({
        positiveTestDate: req.positiveTestDate,
        recoveryDate: req.recoveryDate,
        userId: req.userId
    });
    const savedCoronaPatient = await coronaPatient.save();
    res.json(savedCoronaPatient);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const findAllCoronaPatients = async (req, res) => {
  try {
    const coronaPatients = await CoronaPatient.find();
    res.json(coronaPatients);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// const findUserById = async (req, res) => {
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


module.exports = { createCoronaPatient, findAllCoronaPatients };
