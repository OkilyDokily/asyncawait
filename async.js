async function demo(){
  await (new Promise(resolve => setTimeout(function(){console.log("second"); resolve()},1000)));
  //now that the promise is constructed it will wait for it to be resolved in the meantime the first() function /////will run and print "first" to the console
  console.log("third");
  return 'x'
}

function first(){
  console.log("first");
}

demo();//the async code is called first 
first();// this is called second but prints before any console.log in demo() code.
