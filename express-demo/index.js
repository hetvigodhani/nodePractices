const startupDebugger=require('debug')('app:startup');
const dbDebugger=require('debug')('app:db');
const config=require('config');
const morgan=require('morgan');
const helmet=require('helmet');
const Joi=require('joi');
const logger=require('./logger');
const authentic=require('./authentic');
const express = require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());

// console.log('application name:'+config.get('name'));
// console.log('mail server:'+config.get('mail.host'));

// if(app.get('env')==='development')
// {
//     app.use(morgan('tiny'));
//     console.log('morgan enabled...');
//     startupDebugger('morgan enabled...');
// }

//db work
dbDebugger('connected to the database...');

app.use(logger);

app.use(authentic);

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
];
// app.get('/',(req,res)=> 
// {
//     res.send('hello world');
// });

// app.get('/api/courses',(req,res)=> 
// {
//     res.send(courses);
// });

app.post('/api/courses',(req,res)=> 
{
    const {error}=validateCourse(req.body);//result error
    if(error) return res.status(400).send(error.details[0].message);//400 bad request

    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

// app.put('/api/courses/:id',(req,res)=>
// {
//     //check he course
//     //if it doesn't exist then return 404
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with the given id not found');

//     //validate
//     //if invalid then return 400 -bad request
//     const {error}=validateCourse(req.body);//result error
//     if(error) return res.status(400).send(error.details[0].message); //400 bad request
    
//     //update course
//     course.name=req.body.name;

//     //return updated course
//     res.send(course);

// });

function validateCourse(course)
{
    const schema={
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course,schema);

}

// app.delete('/api/courses/:id',(req,res)=>
// {
//     //look up too course
//     //not existing then reurn 404
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with the given id not found');

//     //delete
//     const index=courses.indexOf(course);
//     courses.splice(index,1);

//     //return the same course
//     res.send(course);
// });


// app.get('/api/courses/:id',(req,res)=> 
// {
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with the given id not found');
//     res.send(course);
// });

const port=process.env.PORT || 1600;
app.listen(port,()=>
{
    console.log(`listening on port ${port}..`);
});

