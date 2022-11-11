$(document).ready(function(){
     
     //For Navigation Action
     $(".nav-con1").click(() => {
          $(".content").toggle(500);
     });
     
     $('.nav-con3').click(()=>{
          $('.s').toggle(500)
     });
     
     //Search Filter
    $("#search").on("keyup", function() {
      
      $("#result").show();
    	var value = $(this).val().toLowerCase();
    	$("#result li").filter(function() {
     		 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  	  });
    });
    
    let navItem = $('.content');
    let navItem_p = document.createElement('p');
    let about = document.createElement('a');
    about.setAttribute('href','/about-us.html');
    about.textContent = 'About Us';
    
    navItem_p.append(about);
    navItem.append(navItem_p);
    
})
