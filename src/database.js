//requires
const mongoose = require('mongoose');
//consts
const URI = 'mongodb://localhost/mern-tasks';


mongoose.connect( URI )
  .then( db => console.log('DB is connected') )
  .catch(err => console.log(err));

module.exports = mongoose;
