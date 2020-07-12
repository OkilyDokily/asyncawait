async function demo(){
  console.log("first") //code before an await is synchronous so it will run first
  
  await (new Promise(resolve=>{console.log("second"); resolve();})); //second because this promise is all synchronous code// if it were async then the 3rd funtion would be called first

  //in the meantime the third() function will run and print "third" to the console
  console.log("fourth");//this is the last bit of code on the page to run
  
}

function third(){
  console.log("third");// this will run before the demo code is finished
}

demo();//the async code is called first 
third();// this prints before the final console.log in demo() code.


