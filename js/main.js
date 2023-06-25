let hamburger = document.querySelector(".burger")
let overley = document.querySelector(".cls")
let elList = document.querySelector(".ul-list")
let elClose = document.querySelector(".close")
let elBody = document.body;


hamburger.addEventListener("click", (evt)=>{
    evt.preventDefault;

    overley.classList.add("overley")
    elList.classList.add("activeburger")
    elBody.classList.add("scroll")
    hamburger.style.display = "none"
})

overley.addEventListener("click", ()=>{
    overley.classList.remove("overley")
    elList.classList.remove("activeburger")
    elBody.classList.remove("scroll")
    hamburger.style.display = "block"
})
elClose.addEventListener("click", ()=>{
    overley.classList.remove("overley")
    elList.classList.remove("activeburger")
    elBody.classList.remove("scroll")
    hamburger.style.display = "block"
})