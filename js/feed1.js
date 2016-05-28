var maxSidebar = document.querySelector(".maxBar");
var maxChat = document.querySelector(".maxChat");
var closeChat = document.querySelector(".closeChat");
var titles = document.querySelectorAll(".title");
var chat = document.querySelector(".chat");
var minChat = document.querySelector(".minChat");
var minBar = document.querySelector(".minBar");
var backupIcon = document.querySelectorAll(".backup-icon");
var tabs = document.querySelectorAll(".tabs");
var titlesSection = document.querySelector(".titles");
var iframe = document.querySelector("iframe");
var closeFavourite = document.querySelector(".closeFavo");
var favorite = document.querySelector(".favorite");
var bb = document.querySelector(".bb");
var aa = document.querySelector(".aa");
var heart = document.querySelectorAll(".heart");
var bars = document.querySelectorAll(".bar");


var search = {
	lebronjames: [
		"LeBron James is the best",
		"His friend: Dwayne Wade",
		"LeBron James VS Kobe",
		"Why LeBron love meet",
	],
	cavaliers: [
		"Kyrie Irving & LeBron James",
		"Cleveland's offense",
		"Cleveland history",
		"How Kyrie Irving & LeBron James",
		"Cleveland's offense",
		"Cleveland history",
		"Cleveland & LeBron James",
	],
	twitter: [
		"Twitter, a new fund",
		"Twitter target",
		"LeBron James loves Twitter",
		"Why Twitter",
	],
	mvp: [
		"MVP, a new fund",
		"what is mvp",
		"LeBron James love Twitter",
		"Why Twitter",
	],
	clevelandfans: [
		"Twitter, clevelandfans",
		"clevelandfans history",
		"LeBron James love clevelandfans",
		"Why clevelandfans",
	],
	cbc: [
		"cbc, a new fund",
		"cbc history",
		"cbc James love Twitter",
		"Why cbc",
	],
}

function maxmize(){
	maxSidebar.addEventListener("click", function(){
		this.parentElement.parentElement.classList.toggle("maxmize2");
		this.classList.toggle("maxBack");
	})
	maxChat.addEventListener("click", function(){
		console.log(this.parentElement.parentElement);
		this.parentElement.parentElement.classList.toggle("maxmize2");
		this.classList.toggle("maxBack");
	})
}

function close(){
	closeChat.addEventListener("click", function(){
		console.log(this);
		this.parentElement.parentElement.classList.add("hide");
	})	
}

function activeTitle(){
	var titles = document.querySelectorAll(".title");
	for (var i = 0; i < titles.length; i++) {
		var arr = [];
		titles[i].addEventListener("click", function(){

			var t = this.querySelector("h5").textContent;
			console.log("asdasd", this.getAttribute("data-id"));
			var test = false;
			for (var i = 0; i < arr.length; i++) {
				if(arr[i] == this.getAttribute("data-id")){
					test = true;
				}
			};
			if(test){
				test = false;
				console.log("stop")
				return;
			}else{
				console.log("create");
				arr.push(this.getAttribute("data-id"));

			}
			if(227*(arr.length)+227*2 > window.innerWidth){
				console.log("over");
				var chatss = document.querySelectorAll(".chat");
				console.log("chatss", chatss[chatss.length-1]);
				chatss[chatss.length-1].querySelector(".bar").querySelector("p").textContent = t;
				return;
			}
			console.log(arr);
			var section = document.createElement("section");
			section.setAttribute("data-id", this.getAttribute("data-id"));
			section.style.right = 277*(arr.length)+"px";
			section.classList.add("chat");
			section.classList.add("product");

			if(this.getAttribute("data-type") == "across"){
				console.log("yes");
				section.innerHTML="<div class='bar'><p>"+t+"\
				</p><p><a href='link1.html' target = '_blank' id='finger' ><img src='images/finger-03.png' /></a></p><div class='close closeChat'>x</div><div class='min minChat'></div>\
				<div class='max maxChat'></div><div style='clear:both'></div></div>\
				<div class = 'chatting'><div class = 'messages'><div class = 'dialog'>\
				<div class='user'>\
					<div class='report' >\
						<div>Block this user</div>\
						<div>Report this</div>\
					</div>\
					SS\
				</div>James responded on the court with a huge game Monday night. He scored 33 points and recorded his 41st triple-double.\
				</div><div class = 'dialog myself'>#e1e1e1</div></div><div class = 'typeMessage'><input type='text'>\
				<div class = 'send'>Send</div><div style='clear:both'></div></div></div>";

				addBubble4();
			}else{
				console.log("no");
							section.innerHTML="<div class='bar'><p>"+t+"\
				</p><div class='close closeChat'>x</div><div class='min minChat'></div>\
				<div class='max maxChat'></div><div style='clear:both'></div></div>\
				<div class = 'chatting'><div class = 'messages'><div class = 'dialog'>\
				<div class='user'>\
					<div class='report' >\
						<div>Block this user</div>\
						<div>Report this</div>\
					</div>\
					JS\
				</div>dolor sit amet, consectetur adipisicing elit. Magnam quibusdam\
				</div>\
				<div class = 'dialog'>\
					<div class='user'>\
						<div class='report' >\
							<div>Block this user</div>\
							<div>Report this</div>\
						</div>\
						PD\
					</div>\
					James responded on the court with a huge game Monday night. He scored 33 points and recorded his 41st triple-double.\
				</div>\
				<div class = 'dialog myself'>That is awsome</div></div><div class = 'typeMessage'><input type='text'>\
				<div class = 'send'>Send</div><div style='clear:both'></div></div></div>";
			}
			
			document.body.appendChild(section);
			section.querySelector(".bar").querySelector(".closeChat").addEventListener("click", function(){
				console.log(this);
				var id = this.parentElement.parentElement.getAttribute("data-id");
				arr.splice(arr.indexOf(id), 1);
				this.parentElement.parentElement.remove();
			})

			section.querySelector(".bar").addEventListener("click", function(){
				console.log("asdadasdada", this);
				// this.style.height = "10px";
				this.parentElement.classList.toggle("minChat");
			}, false)

			clickUser();
		},false)
	};
}

function min(){
	minChat.addEventListener("click", function(){
		console.log(this.parentElement.parentElement);
		this.parentElement.parentElement.classList.toggle("minBar");
		this.classList.toggle('plus');
	})	
	minBar.addEventListener("click", function(){
		console.log(this.parentElement.parentElement);
		this.parentElement.parentElement.classList.toggle("minBar");
		this.classList.toggle('plus');
	})	
}

function delTitle(){
	for (var i = 0; i < backupIcon.length; i++) {
		backupIcon[i].addEventListener("click", function(){
			console.log(this.parentElement);
			this.parentElement.remove();
		}, false)
	};
}

function activeTab(){
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function(){
			for (var i = 0; i < tabs.length; i++) {
				tabs[i].classList.remove("active");
			};
			this.classList.add("active");
			if(new RegExp("active").test(this.classList) && this.textContent == "Discussions"){
				titlesSection.classList.remove("hide");
			}else{
				console.log("adadsa");
				titlesSection.classList.add("hide");
			}
		})
	};
}


function closeFavo(){
	closeFavourite.addEventListener("click", function(){
		this.parentElement.parentElement.classList.add("hide");
	})
}
function openFavo(){
	bb.addEventListener("click", function(){
		favorite.classList.remove("hide");
	})
}

function logout(){
	aa.addEventListener("click", function(){
		location.href="normalPage.html"
	})
}

function changeHeart(){
	var heart = document.querySelectorAll(".heart");
	for (var i = 0; i < heart.length; i++) {
		heart[i].addEventListener("click", function(){
			console.log(this);
			this.classList.toggle("fullHeart");
		})
	};
}

function maxmizeBar(){
	// for (var i = 0; i < bars.length; i++) {
	// 	bars[i].addEventListener("click", function(){
	// 		console.log(this.parentElement);
	// 		this.parentElement.classList.toggle("minChat");
	// 	})
	// };
}
function activeSpan(){
	var spans = document.querySelectorAll(".span");	
	var atb = document.querySelector("#atb");	//acrosstheweb container
	console.log("spans", spans);
	for (var i = 0; i < spans.length; i++) {
		spans[i].addEventListener("click", function(){
			var key = this.textContent;
			key = key.replace(" ", "").toLowerCase(); 
			console.log("key", key);
			console.log(search[key]);
			var p = search[key];
			titlesSection.innerHTML = "";
			atb.innerHTML = "";
			if(p){
				for (var i = 0; i < p.length; i++) {
					var title = document.createElement("div");
					title.setAttribute ("data-id", i);
					title.classList.add("title");
					title.innerHTML = "<h5>"+p[i]+"</h5>\
						<div class = 'heart'></div>\
						<div style='clear:both'></div>\
						<p><span>7</span> Members</p>"
					titlesSection.appendChild(title);
		  		};	
				for (var i = 0; i < Math.floor(p.length/2); i++) {
					var title = document.createElement("div");
					title.setAttribute ("data-id", i);
					title.classList.add("title");
					title.classList.add("atbLink");
					if(i%2==0){
						title.innerHTML = "\
							  <h5>"+p[i]+"</h5>\
							  <div class='icon chatIcon'></div>\
							  <div class = 'backup-icon'></div>\
							  <div style='clear:both'></div>\
						"
					}else{
						title.innerHTML = "\
					          <a href='link1.html'  target='_blank'><h5>"+p[i]+"</h5></a>\
					          <div class='icon globalIcon'></div>\
					          <div class = 'backup-icon'></div>\
					          <div style='clear:both'></div>\
						"
					}

					atb.appendChild(title);
		  		};	
			}
	  		titles = document.querySelectorAll(".title");
	  		console.log("titles", titles);
	  		animationdelay();
	  		activeTitle();
	  		changeHeart();
		})
	};

}
function adjustPostion(){
	var typeMessage = document.querySelector(".typeMessage");
	console.log(typeMessage);
}

function animationdelay(){
	for (var i = 0; i < titles.length; i++) {
		titles[i].style.animationDelay = i*150+ "ms";
	};
}


var realIdentity = false;
var hightlight = false;
function set(){
	var set  = document.querySelectorAll(".set");
	var spans = document.querySelectorAll("#span");	
	for (var i = 0; i < set.length; i++) {
		set[i].addEventListener("click", function(){
			var t = this.textContent;
			if(t == "Use real identity" || t == "Use alias name" ){
				if(realIdentity){
					this.textContent = "Use alias name";
					realIdentity = false;
				}else{
					this.textContent = "Use real identity";
					realIdentity = true;
				}
			}
			if(t == "Close hightlight" || t == "Open hightlight"){
				if(hightlight){
					this.textContent = "Close hightlight";
					for (var i = 0; i < spans.length; i++) {
						spans[i].style.borderBottom = "1px solid #ec7063";
						spans[i].style.background = "linear-gradient(135deg, #f9656c 20%, #ec7e64 100%)";
					};
					hightlight = false;
				}else{
					this.textContent = "Open hightlight";
					for (var i = 0; i < spans.length; i++) {
						spans[i].style.border = "none";
						spans[i].style.background = "transparent";
					};
					hightlight = true;
				}
			}
		})
	};
}

function clickUser(){
	var user = document.querySelectorAll(".user");
	var show = false
	for (var i = 0; i < user.length; i++) {
		user[i].addEventListener("click", function(){
			if(show){
				this.querySelector(".report").style.display = "none";
				show = false;
			}else{
				this.querySelector(".report").style.display = "block";
				var ts = this.querySelectorAll(".report>div");
				for (var i = 0; i < ts.length; i++) {
					ts[i].addEventListener("click", function(e){
						this.innerHTML = "√"
					})
				};
				console.log("ts", ts);
				show = true;
			}
		})
	};


}

function clickBubble(){
	var cross = document.querySelectorAll('.cross');
	var bubbleCross = document.querySelector('.bubbleCross');
	var C1 = document.querySelector('#C1');
	var C2 = document.querySelector('#C2');
	var C3 = document.querySelector('#C3');

	C1.addEventListener("click", function(e){
		e.preventDefault();
		this.remove();
		C2.style.display = "block";
	})
	C2.addEventListener("click", function(){
		this.remove();
		C3.style.display = "block";	
	})
	C3.addEventListener("click", function(){
		this.remove();
		var cover = document.querySelector(".cover");
		cover.classList.add("dispear");
		cover.addEventListener("animationend", function(){
			 cover.remove();
		})
	})

}

function addBubble4(){
	var cover = document.createElement("div");
	var c4 = document.querySelector("#C4");
	var c4 = document.querySelector("#C4");
	c4.addEventListener("click", function(){
		this.remove();
		// var cover = document.querySelector(".cover");
		// cover.classList.add("dispear");
		// cover.addEventListener("animationend", function(){
		// 	 cover.remove();
		// })
	})
	c4.style.display = "block";
	cover.classList.add("cover");
	cover.style.zIndex = "100000";
	cover.textContent = "100000";
	document.body.appendChild(cover)
}
window.onload = function(){
	maxmize();
	close();
	activeSpan();
	activeTitle();
	min();
	delTitle();
	activeTab();
	closeFavo();
	openFavo();
	logout();
	changeHeart();
	maxmizeBar();
	animationdelay()
	set()
	clickUser()
	clickBubble();
}
