const mongoose=require('mongoose'); 

mongoose.connect('mongodb://0.0.0.0:27017/playground')
    .then(()=>console.log('connected to mongodb...'))
    .catch(err=>console.log('could not connect to mongo db...',err));

const authorSchema=new mongoose.Schema({
    name:String,
    bio:String,
    website:String
});
const Author=mongoose.model('Author',authorSchema);

const Course=mongoose.model('Course',new mongoose.Schema({
    name:String,
    authors:[authorSchema]
}));

async function createCourse(name,authors)
{
    const course=new Course({
        name,
        authors
    });
    const result=await course.save();
    console.log(result);
}

async function listCourses()
{
    const courses=await Course
        .find();
    console.log(courses);
}

// async function updateAuthor(courseId)
// {
//     // const course=await Course.update({_id:courseId},{
//     //     $set:{
//     //         'auther.name':'deep godhani'
//     //     }
//     // });
//     const course=await Course.findById(courseId);
//     course.authors.name='deep godhani';
//     course.save();
// }

async function addAuthor(courseId,author)
{
    const course=await Course.findById(courseId);
    course.authors.push(author);
    course.save();;
}
async function removeAuthor(courseId,authorId)
{
    const course=await Course.findById(courseId);
    const author=course.authors.id(authorId);
    author.remove();
    course.save();
}

removeAuthor('6459ec3b1f5aaf0552a6b2f3','6459edd853606d64ee06b286');

// addAuthor('6459ec3b1f5aaf0552a6b2f3',new Author({name:'kevin'}));

// createCourse('node course',[
//     new Author({name:'hetvi'}),
//     new Author({name:'deep'})
// ]);

// updateAuthor('6459e7a8a5e7bef6ec21518a');
