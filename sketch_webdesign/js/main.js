$(function(){
	$("#menubtn").on("click",function(){
		if ($("#app > header > nav").hasClass("open")) {
			$("#app > header > nav").removeClass("open")
		}else{
			$("header > nav").addClass("open")

		}


		
	})
	

})