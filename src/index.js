//requires
//external libraries
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//internal libraries
const router = require('./routes/task_routes');
const { mongoose } = require('./database');

const app = express();


//Settings

app.set( 'port',
  process.env.PORT || 3000
);

//Middlewares

app.use( morgan('dev') );
app.use( express.json() );

//Routes

app.use( '/api/tasks', router );

//Statics files

app.use( express.static( path.join( __dirname, 'public' ) ) );

//Starting server
app.listen( app.get('port'), () =>{
    console.log( 'Server on port' + app.get('port') );
  }
);
