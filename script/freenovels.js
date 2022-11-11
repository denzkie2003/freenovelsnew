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
    	var value = $(this).val().toLowerCase();
    	$("#result li").filter(function() {
     		 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  	  });
    });
})
