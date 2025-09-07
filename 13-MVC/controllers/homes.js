const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to Airbnb' });
};

exports.postAddHome = (req, res, next) => {
  const { houseName } = req.body;
  const home = new Home(houseName);
  home.save();
  res.render('homeAdded', { pageTitle: 'Home Added Successfully' });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render('home', { 
      registeredHomes: homes, 
      pageTitle: 'Airbnb Homes' 
    });
  });
};
