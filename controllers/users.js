const { id } = require('mongoose/lib/types/documentArray/methods');
const User = require('../models/userModel');

const findUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.find({id: userId});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createUser = async (req, res) => {
  try{

    req.body = {
      "firstName": "Tzipi",
    "lastName": "Pasternak",
    "id": 326444387,
    "address": {
    "city": "תל אביב",
    "street": "רחוב הרצל",
    "number": 123
    },
    "dateOfBirth": "2004-03-10",
    "phone": "089741430",
    "mobile": "0556727951"
    };

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.body.id,
      address: req.body.address,
      dateOfBirth: req.body.dateOfBirth,
      phone: req.body.phone,
      mobile: req.body.mobile
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createUser, findUserById, findAllUsers };
