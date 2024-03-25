const User = require('../models/userModel');

const createUser = async (req, res) => {
  try{
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

module.exports = { createUser, findUserById, findAllUsers };
