const Queries = require("../models/Queries");
const { check, validationResult } = require("express-validator");

exports.contactUs = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const query = new Queries(req.body);
  query.save((err, query) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to query in DB",
      });
    }
    res.json(query);
  });
};