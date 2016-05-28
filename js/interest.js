window.addEventListener("load", function(){

	var myInterests = document.querySelector('#myInterests');
	var choose = document.querySelectorAll('.choose');
	var cross = document.querySelectorAll('.cross');
	var bubbleCross = document.querySelector('.bubbleCross');
	
	var gotit = document.querySelectorAll(".gotit");
	var num = 0;
	for (var i = 0; i < gotit.length; i++) {
		gotit[i].addEventListener("click", function(){
			num++;
			this.parentElement.remove();
			if(num == gotit.length){
				var cover = document.querySelector(".cover");
				cover.classList.add("dispear");
				cover.addEventListener("animationend", function(){
					 cover.remove();
				})
			}
		})
	};
	
	
	for (var i = 0; i < choose.length; i++) {
		choose[i].addEventListener("click", function(){
			var s = new RegExp("choosed").test(this.getAttribute("class"));
			if(s){
				this.classList.remove("choosed");
			}else{
				this.classList.add("choosed");
			}
			var choosed = document.querySelectorAll(".choosed");
			var fromfb = document.querySelectorAll('.fromfb');
			console.log("fromfb", fromfb);

			if(choosed){
				myInterests.innerHTML = "";
				for (var i = 0; i < fromfb.length; i++) {
					myInterests.appendChild(fromfb[i])
				};

			}

			
			for (var i = 0; i < choosed.length; i++) {
				// console.log("choosed", choosed);
				var interest = document.createElement("div");
				interest.classList.add("interest");
				interest.innerHTML = "<div class='selection'>"+choosed[i].textContent+"</div>\
						<div class='cross'>\
							<img src='images/cross.png' >\
						</div>"

				myInterests.appendChild(interest);
				cross = document.querySelectorAll('.cross');
				console.log("cross", cross);

				for (var i = 0; i < cross.length; i++) {
					cross[i].addEventListener("click", function(){
						// console.log("this.", );
						this.parentElement.remove()
					})
				};
			};
		})
	};

	if(cross){
		for (var i = 0; i < cross.length; i++) {
			cross[i].addEventListener("click", function(){
				// console.log("this.", );
				this.parentElement.remove()
			})
		};
	}

	/*bubble*/
	bubbleCross.addEventListener("click", function(){
		var cover = document.querySelector(".cover");
		cover.classList.add("dispear");
		cover.addEventListener("animationend", function(){
			 cover.remove();
		})
	})


})	
