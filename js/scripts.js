window.addEventListener("load", function(){

	var downloadInHome = document.querySelectorAll(".downloadHome");
	var onestepPop = document.querySelector("#onestep");
	var closePop = document.querySelector("#closePop");


	for (var i = 0; i < downloadInHome.length; i++) {
		downloadInHome[i].addEventListener("click", function(){
			onestepPop.style.display = "block";
		})
	};

	closePop.addEventListener("click", function(){
		// onestepPop.style.display = "none";
		onestepPop.classList.add("dispear");
		onestepPop.addEventListener("animationend", function(){
			onestepPop.classList.remove("dispear");
			onestepPop.style.display = "none";
		})
	})
})	
