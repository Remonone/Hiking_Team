document.getElementById("elementSocial").classList.add("anim-social");
document.getElementById("elementNav").classList.add("anim-stage");
let navlist = document.querySelectorAll(".main-navigation__item")
let contentList = document.querySelectorAll("section");
window.onscroll = function(){scrollImages()}

    function scrollImages(){

      for(let i = 0; i < 4; i++){
      	if (window.pageYOffset > contentList[i].offsetTop - 100) {
          for(let k = 0; k < 4; k++){
            if(navlist[k].classList.contains("activated")){
              navlist[k].classList.toggle("activated");
            }
          }
          navlist[i].classList.toggle("activated");
      	}
      }
      if(window.pageYOffset > contentList[0].offsetTop + 800){
        document.querySelector(".header").style.backgroundColor = "rgba(111, 129, 138, 0.7)"
      } else {
        document.querySelector(".header").style.backgroundColor = "rgba(111, 129, 138, 0)"
      }
}


  document.getElementById("scroll-button").addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = document.getElementById("scroll-button").getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
