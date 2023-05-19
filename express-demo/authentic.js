function auth(req,res,next)
{
    console.log('authenticating..');
    next();
}

module.exports=auth;
