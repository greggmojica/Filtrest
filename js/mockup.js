window.addEventListener("load", function(){

	// var downloadInMockup = document.querySelectorAll(".downloadinmockup");
	// var onestepPop = document.querySelector("#onestep");
	// var closePop = document.querySelector("#closePop");

	// for (var i = 0; i < downloadInMockup.length; i++) {
	// 	console.log(downloadInMockup.length);
	// 	downloadInMockup[i].addEventListener("click", function(){
	// 		onestepPop.style.display = "block";
	// 	})
	// };

	// closePop.addEventListener("click", function(){
	// 	// onestepPop.style.display = "none";
	// 	onestepPop.classList.add("dispear");
	// 	onestepPop.addEventListener("animationend", function(){
	// 		onestepPop.classList.remove("dispear");
	// 		onestepPop.style.display = "none";
	// 	})
	// })

	var iframe = document.querySelector("iframe");
	var dom = iframe.contentWindow.document;
	console.log("dom", dom.body);
	
	dom.body.style.width = "100%";
	dom.body.style.transformOrigin = "left top";
	console.log("iframe", iframe);
})	
