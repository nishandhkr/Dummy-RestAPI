const User = require('../models/user');

exports.createUser = async (req, res) => {
  const newUser = User.create(req.body);
  await newUser
    .then(() => {
      res.status(200).json({
        status: 'user created',
        data: {
          newUser
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        status: 'failed'
      });
    });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: this.getAllUsers.length,
    data: {
      users
    }
  });
};

exports.getUser = async (req, res) => {
  const users = await User.findOne({
    user_id: req.params.id
  });
  res.status(200).json({
    data: {
      users
    }
  });
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  res.staus(200).json({
    staus: 'document has been updated',
    data: {
      user: user
    }
  });
};

exports.deleteUser = async (req, res) => {
  await User.findOneAndDelete({
    user_id: req.params.id
  });
  res.status(204).json({ status: 'deleted', data: null });
};
