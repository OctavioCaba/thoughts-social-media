const Thought = require('../models').Thought;
const Ponder = require('../models').Ponder;

module.exports = {
  index: function(req, res) {
    Thought.findAll({ order: [[ 'createdAt', 'DESC' ]] }).then(thoughts => {
      Ponder.findAll({ order: [[ 'createdAt', 'DESC' ]] }).then(ponders => {
        res.render('home', { thoughts, ponders, title: 'Home', user: req.user });
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }
};
