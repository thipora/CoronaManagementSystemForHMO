import memberModel from'../models/memberModel.js';

const createMember = async (req, res) => {
  try{
    const member = new memberModel({
      ...req.body,
    });
    const savedMember = await member.save();
    res.json(savedMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findMemberById = async (req, res) => {
  const memberId = req.params.id;
  try {
    const member = await memberModel.findById( memberId );
    if (member == undefined) {
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
