const Review = require('../models/review');

exports.createReview = async (req, res) => {
  const newReview = await Review.create(req.body);
  res.status(200).json({
    status: 'user created',
    data: {
      newReview
    }
  });
};

exports.getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json({
    status: 'success',
    results: this.getAllReviews.length,
    data: {
      reviews
    }
  });
};

exports.getReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      review
    }
  });
};

exports.updateReview = async (req, res) => {
  const review = await Review.findByIdAndUpdate(
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
      review
    }
  });
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res
    .status(204)
    .json({ status: 'deleted one', data: null });
};
