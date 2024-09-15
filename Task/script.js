
const backToTopButton = document.getElementById('to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    backToTopButton.style.display = 'block';
  } else {

    backToTopButton.style.display = 'none';
  }
});


backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});



window.addEventListener("scroll" , function(){
  const menu = document.querySelectorAll(".nav-list a")
  const sections = document.querySelectorAll("section")
  const windowScrollY = window.scrollY
  

  sections.forEach((section) =>{

    const sectionId = section.getAttribute("id")

    
      menu.forEach((link) =>{
        const LinkRef = link.getAttribute("href").slice(1)
        const sectionOffsetTop = section.offsetTop
        if(windowScrollY >= sectionOffsetTop-250){
          if(LinkRef == sectionId){
            link.classList.add('active')
            
           }else{
            link.classList.remove('active')
           }
        }
      
        document.getElementById("time").innerHTML =new Date().getHours().toString()+ " : " +new Date().getMinutes().toString()
       
   
    
    
      })




  })
  







 



})
document.onmousemove = function(e){
  document.getElementById("p").style.left = e.clientX-20 + "px"
    document.getElementById("p").style.top = e.clientY-20 + "px"
}
let counter = 0
let ivertal = setInterval(function(){
  counter++
  if(counter == 100){
    clearInterval(ivertal)
    document.getElementById("loader").style.visibility='hidden'
  }
  document.getElementById("loader-counter").innerHTML = `${counter}%`
  
},50)