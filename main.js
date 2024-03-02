let open = document.getElementsByName('open');
document.querySelector('.menue').classList.add("pre-side-bar");
console.log(open[0]);
let  result  ;
open[0].onclick = function () { 
 
  console.log("Click")
  document.querySelector('.menue').classList.remove("pre-side-bar");
  document.querySelector('.menue').classList.add("side-bar");
  
  document.querySelector('.center').classList.add("overlay");

  display();

  let close = document.getElementsByName('close');
  console.log(close[0]);
  close[0].onclick = function () {
    
    document.querySelector('.menue').classList.remove("side-bar");
    document.querySelector('.center').classList.remove("overlay");
    result="";
    document.querySelector('.menue').innerHTML = result;
  }
  


 }


 function display(){

  

   result = 
    
     `

  <button type="button"  name="close" > close </button>
 
 
 `
 console.log(result);

  document.querySelector('.side-bar').innerHTML = result;
   
 }


