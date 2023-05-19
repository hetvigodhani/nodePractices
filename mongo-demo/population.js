const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/playground')
    .then(()=>console.log('connected to mongodb...'))
    .catch(err=>console.log('could not connect to mongo db...',err));

const Author=mongoose.model('Author',new mongoose.Schema({
    name:String,
    bio:String,
    website:String
}));

const Course=mongoose.model('Course',new mongoose.Schema({
    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
}));

async function createAuthor(name,bio,website){
    const author=new Author({
        name,
        bio,
        website
    });
    const result=await author.save();
    console.log(result);
}

async function createCourse(name,author)
{
    const course=new Course({
        name,
        author
    });
    const result=await course.save();
    console.log(result);
}

async function listCourses()
{
    const courses=await Course
        .find()
        .populate('author','name -_id')
        .select('name author');
    console.log(courses);
}

// createAuthor('hetvi','my bio','my website');

// createCourse('node course','6459dce8ca90512420e4b42d');

listCourses();