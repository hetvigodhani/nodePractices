//asych
console.log('before');


//promise based approch
// getData(1)
//     .then(user=>getRepo(user.name))
//     .then(repos=>getCommits(repos[0]))
//     .then(commits=>console.log('commits:',commits))
//     .catch(err=>console.log('error:',err.message));


//async and await approch
async function displayCommits()
{
    try{
        const user= await getData(1);
        const repos=await getRepo(user);
        const commits=await getCommits(repos[0]);
        console.log('commit:',commits);
    }
    catch(err)
    {
        console.log('error:',err.message);
    }
}
displayCommits();


// getData(1,displayUsers);
console.log('after');

// function displayCommits(commits)
// {
//     console.log(commits);
// }

// function displayRepos(repos)
// {
//     console.log('repo:',repos);
//     getCommits(repo,displayCommits);
// }

// function displayUsers(user)
// {
//     getRepo('hetu',displayRepos);
// }


// synch code
// console.log('before');
// const user=getData(1);
// const repos=getRepo(user);
// const commits=getCommits(repos[0]);
// console.log('after');


function getData(id)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log('reading user from database...');
            resolve({id:id,name:'hetvi'});
        },2000);
    });
}

function getRepo(username)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log('getting repo from git...');
            resolve(['repo1','repo2','repo3']);
        },2000);
    });
}

function getCommits(repo)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log('getting commits from git...');
            // resolve(['commit']);
            reject(new Error('something happend...'));
        },2000);
    });
}