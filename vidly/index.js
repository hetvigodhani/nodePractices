const Joi=require('joi');
Joi.objectId=require('joi-objectid')(Joi);
const mongoose=require('mongoose');
// const genres=require('./routes/genres');
// const customers=require('./routes/customers');
// const movies=require('./routes/movies');
// const rentals=require('./routes/rentals');
const users=require('./routes/users');
const express=require('express');
const app=express();

mongoose.connect('mongodb://0.0.0.0:27017/vidly')
    .then(()=>console.log('connected to mongodb...'))
    .catch(err=>console.error('could not connect to mongodb...'));

app.use(express.json());
// app.use('/api/genres',genres);
// app.use('/api/customer',customers);
// app.use('/api/movies',movies);
// app.use('/api/rentals',rentals);
app.use('/api/users',users);

const port=process.env.PORT || 1600;
app.listen(port,()=>console.log(`listening on port ${port}...`));
