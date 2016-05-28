window.addEventListener("load", function(){
		
	 // var enjoy = document.querySelector(".enjoy");
	 // enjoy.addEventListener("click", function(){
	 // 	this.parentElement.parentElement.parentElement.classList.add("dispear");
	 // 	var t = this.parentElement.parentElement.parentElement;
	 // 	t.addEventListener("animationend", function(){
	 // 		alert('asda')
	 // 		this.remove("dispear");
	 // 		this.remove();
	 // 	})
	 // })


	 var checks = document.querySelectorAll(".check");
	 var nickname = document.querySelector("#nickname");
	 for (var i = 0; i < checks.length; i++) {
	 	checks[i].addEventListener("click", function(){
	 		var t = this.textContent;
	 		console.log(t);
	 		if(t == "No"){
	 			nickname.style.display = "block";
	 			console.log(nickname);
	 		}else{
	 			nickname.style.display = "none";
	 			// console.log(nickname);

	 		}
	 		for (var i = 0; i < checks.length; i++) {
	 			checks[i].classList.remove('active')
	 		};
	 		this.classList.add("active");
	 		// alert(this.textContent)
	 	})
	 };
})	
