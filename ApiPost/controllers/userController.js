const User = require('../models/user');

User.sync()
  .then(() => {
    console.log('synchronized');
  })
  .catch(err => console.log('somethingBadHappened'));
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
      res.status(404).json({ status: 'failed' });
    });
};

exports.getAllUsers = async (req, res) => {
  const users = User.findAll();
  await users
    .then(() => {
      res.status(200).json({
        status: 'success',
        results: this.getAllUsers.length,
        data: {
          users
        }
      });
    })
    .catch(err => {
      res.status(404).json({
        err
      });
    });
};

exports.getUser = async (req, res) => {
  const user = User.findByPk(req.params.id);
  await user
    .then(() => {
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({
        err
      });
    });
};

exports.updateUser = async (req, res) => {
  /*  const updates = { ...req.body };
  const user = User.update(updates, {
    where: { user_id: req.params.id }
  });
  await user
    .then(() => {
      res.staus(200).json({
        staus: 'document has been updated',
        data: {
          user: user
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        err
      });
    }); */
};

exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { user_id: req.params.id } });
  res.status(204).json({ status: 'deleted', data: null });
};
