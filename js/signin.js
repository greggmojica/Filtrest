window.addEventListener("load", function(){
	var eye = document.querySelector(".eye");
	var visible = false;
	eye.addEventListener("click", function(){
		//see the password
		if(!visible){
			this.parentElement.querySelector("input").setAttribute("type", "text")
			visible = true;
		}else{
			this.parentElement.querySelector("input").setAttribute("type", "password")
			visible = false;
		}
		
	})
})	
