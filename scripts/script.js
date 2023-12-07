const Main = () => {

  const $mobileMenuButtons = document.querySelectorAll(".mobilemenu__button")
  const $mobileMenuNav = document.querySelector(".mobilemenu__nav")
  const $mobileMenuList = document.querySelector(".mobilemenu__nav__list")
  
  
  function init(){
    initEvents()
  }
  
  function initEvents(){
    $mobileMenuButtons[0].onclick = Events.mobileMenu_open
    $mobileMenuButtons[1].onclick = Events.mobileMenu_close
    $mobileMenuNav.onclick = Events.mobileMenu_close
  }

  const Events = {
    mobileMenu_open(){
      $mobileMenuNav.style.height = "100%"
      $mobileMenuList.style.display = "block"
      setTimeout(() => {
      $mobileMenuList.style.left = "0"
      }, 1)
      $mobileMenuButtons.forEach((button) => {
        button.classList.toggle("mobilemenu__button--hidden")
      })
    },
    mobileMenu_close(){
      $mobileMenuNav.style.height = "0"
      $mobileMenuList.style.left = "-120%"

      //make menu back to the initial position
      setTimeout(() => {
        $mobileMenuList.style.display = "none"
        $mobileMenuList.style.left = "120%"
      }, 280)
      $mobileMenuButtons.forEach((button) => {
        button.classList.toggle("mobilemenu__button--hidden")
      })
    } 
  }


  return {
    init,
  }
}


const main = Main()
main.init()