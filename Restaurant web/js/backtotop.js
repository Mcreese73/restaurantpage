const btn = document.getElementById('myBtn')


window.onscroll = function() {

if (this.document.body.scrollTop > 200 || this.document.documentElement.scrollTop > 200) {

  btn.style.display = "block";
} else {

  btn.style.display = "none";

}
};


function topFunction() {

window.scrollTo({top: 0, behavior: 'smooth'});

}


