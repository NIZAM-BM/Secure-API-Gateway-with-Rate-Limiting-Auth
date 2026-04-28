function getData(req, res) {
  res.json({
    message: 'Secure data accessed',
    user: req.user
  });
}

module.exports = { getData };