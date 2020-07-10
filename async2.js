async function demo2(){
  console.log("first") //code before an await is synchronous so it will run first
  
  await (new Promise(resolve=>{setTimeout(() => {console.log("third"); resolve();},0)})) //third because this promise has async code// if it were synchronous then this would be called right after first.

  //in the meantime the third() function will run and print "second" to the console
  console.log("fourth");//this is the last bit of code on the page to run
}

function second(){
  console.log("second");// this will run before the demo code is finished and before the await is resolved
}

demo2();//the async code is called first 
second();// this prints before the final console.log in demo() code.