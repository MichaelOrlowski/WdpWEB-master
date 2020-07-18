


function myFunction() {
    var x = document.getElementById("main-nav-js");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}


var myNodelist = document.getElementsByClassName("list-element-js");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.querySelector('.list');
if(list !== null){
    list.addEventListener('click', function(ev) {
        if (ev.target.className !== 'close') {
            ev.target.classList.toggle('checked');
        }else{

        }
    }, false);
}


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("to-do-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list-js").appendChild(li);
    }
    document.getElementById("to-do-input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function changeVideo1(){
    var video = document.getElementById("youtube-video")
    video.src = "https://www.youtube.com/embed/P-lXfbGdsvE";
}

function changeVideo2(){
    var video = document.getElementById("youtube-video")
    video.src = "https://www.youtube.com/embed/AHRD6u0JuHU";
}



(function ($, $win) {


    let nav_link = $('.nav-link');

    nav_link.on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    let navbar = $('.navbar');

    $(function () {
        $(document).scroll(function () {
            navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
        });
    })

})(jQuery, window);