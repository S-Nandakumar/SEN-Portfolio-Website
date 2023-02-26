// =======Email======

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nandakumar2262003@gmail.com",
        Password : "IWantToBeRich22$",
        To : 'nandhakumar2262003@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name: "+ document.getElementById("name").value
        + "<br> Email:" + document.getElementById("email").value 
        + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully.")
    );
}

// ======Navbar=====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));

  var classList = document.getElementById('navbar').classList;

var minWidth769 = window.matchMedia("(min-width: 769px)");

function match() {
    minWidth769.matches ? classList.add('fixed-top') : classList.remove('fixed-top');
}

minWidth769.addListener(match);

match();


// =====Project Mouce Over=====

for (var i = 0; i < 4; i++) {
    document.querySelectorAll(".slide")[i].addEventListener("mouseover", function () {
        
        var buttonInnerHTML = "#" + this.id;
        displayText(buttonInnerHTML);
        document.querySelector(".demo").classList.add("demo-style")
  
   } );

   document.querySelectorAll(".slide")[i].addEventListener("mouseout", function(){
             document.querySelector(".demo").innerHTML = "<p> Project Discription </p>";
             document.querySelector(".demo").classList.remove("demo-style")      
         });
}

function displayText(key){
    switch (key) {
        case "#slide-1":
            document.querySelector(".demo").innerHTML = "MY SITE <br> Created with HTML & CSS. One of the begining project from the course."
            document.querySelector("#slide-1").addEventListener("click",function(){
                window.open( href ="https://project-1-my-site.netlify.app/",'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;  
            });
            break;

        case "#slide-2":
            document.querySelector(".demo").innerHTML = "Dice Game <br> Created with HTML, CSS and Javascript to understand the logics in JS."
            document.querySelector("#slide-2").addEventListener("click",function(){
                window.open( href ="https://project-2-dice-game.netlify.app/",'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;  
            });
            break;

        case "#slide-3":
            document.querySelector(".demo").innerHTML = " Drum-Kit <br> Drim-kit is a project that creates a virtual drum set using HTML, CSS and JS"
            document.querySelector("#slide-3").addEventListener("click",function(){
                window.open( href ="https://project-3-drum-kit.netlify.app/",'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;  
            });   
            break; 
        
        case "#slide-4":
            document.querySelector(".demo").innerHTML = "Simon Game <br>Created with JQuery. It's a fun game to play but it gave me some hard time while creating it."
            document.querySelector("#slide-4").addEventListener("click",function(){
                window.open( href ="https://project-4-simon-game.netlify.app/",'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;  
            });    
        default:
            break;
    }

}


