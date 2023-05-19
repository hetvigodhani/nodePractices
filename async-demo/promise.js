const p=new Promise((resolve,reject)=>
{
    // kick off some asyc work
    // ...
    setTimeout(()=>
    {
        resolve(1); // pending=>resolve,fulfilled
        reject(new Error('error message')); // pending=>rejected
    },2000);
    
});

p
    .then(result=>console.log('result:',result))
    .catch(err=>console.log(err.message));