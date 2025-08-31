   let menu = document.querySelector('#menu-icon');
   let navbar = document.querySelector('.navbar');
    
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    } 


       function showForm(formId) {
    document.querySelectorAll(".form-box ").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
    }
   let count = 0; 
 function changingBackground(){
   if(count%4===1){
       document.querySelectorAll("body").forEach(body => body.classList.add("active"));
   }
   else{
       document.querySelectorAll("body").forEach(body => body.classList.remove("active"));
   }
   if(count%4===2){
       document.querySelectorAll("body").forEach(body => body.classList.add("active1"));
   }
  else{
     document.querySelectorAll("body").forEach(body => body.classList.remove("active1"));
   }
   if(count%4===3){
    document.querySelectorAll("body").forEach(body => body.classList.add("active2"));
   }
   else{
    document.querySelectorAll("body").forEach(body => body.classList.remove("active2"));
   }
   if(count%4===0){
    document.querySelectorAll("body").forEach(body => body.classList.add("body"));
   }
   else{
    document.querySelectorAll("body").forEach(body => body.classList.add("active"));
   }
   count++;
   }

 function addBackground(){
   if(count%4===1){
       document.querySelectorAll("body").forEach(body => body.classList.add("add"));
   }
   else{
       document.querySelectorAll("body").forEach(body => body.classList.remove("add"));
      
   }

   if(count%4===2){
       document.querySelectorAll("body").forEach(body => body.classList.add("add1"));
   }
  else{
       document.querySelectorAll("body").forEach(body => body.classList.remove("add1"));
    
   }
   if(count%4===3){
       document.querySelectorAll("body").forEach(body => body.classList.add("add2"));
   
   }
   else{
       document.querySelectorAll("body").forEach(body => body.classList.remove("add2"));
    
   }
   if(count%4===0){
    document.querySelectorAll("body").forEach(body => body.classList.add("body"));
   }
   else{
    document.querySelectorAll("body").forEach(body => body.classList.add("add"));
   }
   count++;
  }
  
   






 
     
