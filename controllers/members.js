import memberModel from'../models/memberModel.js';

const createMember = async (req, res) => {
  try{
    const member = new memberModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.body.id,
      address: req.body.address,
      dateOfBirth: req.body.dateOfBirth,
      phone: req.body.phone,
      mobile: req.body.mobile
    });
    const savedMember = await member.save();
    res.json(savedMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findMemberById = async (req, res) => {
  const memberId = req.params.memberId;
  try {
    const member = await memberModel.find({id: memberId});
    if (!member) {
      return res.status(404).json({ message: 'member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const findAllMember = async (req, res) => {
  try {
    const members = await memberModel.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { createMember, findMemberById, findAllMember };
