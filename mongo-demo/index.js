const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/playground')
    .then(()=>console.log('connected to mongodb...'))
    .catch(err=>console.log('could not connect to mongo db...',err));

const courseSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:255
  },
  category:{
    type:String,
    required:true,
    enum:['web','mobile','network']
  },
  author:String,
  tags:{
    type:Array,
    validate:{
      isAsync:true,
      validator:(v, callback) => {
        setTimeout(() => {
          //some work
          const result = v && v.length > 0;
          callback(result);
        }, 4000);
      },
      message:'a course schould have at least one tag.'
    }
  },
  date: {type:Date,default:Date.now},
  isPublished: Boolean,
  price:{
    type:Number,
    required: function(){this.isPublished;},
    min:10,
    max:200
  }
});

const Course=mongoose.model('Course',courseSchema);

async function createCourse()
{
  const course=new Course({
    name:'java script',
    category:'web', 
    author:'nirav',
    tags:null,
    isPublished:true,
    price:12
  });
  try{
    await course.validate();
    // const result=await course.save();
    // console.log(result);
  }
  catch(ex)
  {
    console.log(ex.message);
  }
}

async function getCourse()
{
  const courses=await Course
    .find()
    .limit(5)
    .select({name:1,tags:1})
    .sort({name:-1});
  console.log(courses);
}

async function updateCourse(id)
{
  // update first
  // const result=await Course.update(
  //   {_id:id},
  //   {
  //     $set:
  //     {
  //       author:'Kevin',
  //       isPublished:false
  //     }
  //   });

  // query first
  const course=await Course.findById(id);
  if(!course) return;
  course.isPublished=true;
  course.author='another auther';
  const result=await course.save();
  console.log(result);
}

async function deleteCourse(id)
{
  const result=await Course.deleteOne({_id:id});
  console.log(result);
}

// deleteCourse('64578de9787480de3e2b52f4');
createCourse();