
const traffic = document.querySelector(".traffic");

  function wait(time){
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  function setState(state){
    traffic.className = state;
  }
  
  function reset(){
    Promise.resolve()
      .then(setState.bind(null, "traffic stop"))
      .then(wait.bind(null, 2000))
      .then(setState.bind(null, "traffic wait"))
      .then(wait.bind(null, 1000))
      .then(setState.bind(null, "traffic pass"))
      .then(wait.bind(null, 3000))
      .then(reset);
  }
  
  reset();


  
