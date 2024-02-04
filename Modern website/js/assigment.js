var animation = document.getElementById("animation-button")
var slide1 = document.getElementById("slide1")
var slide2 = document.getElementById("slide2")
var slide3 = document.getElementById("slide3")
var slide4 = document.getElementById("slide4")
var section1 = document.getElementById("div9").getElementsByTagName("section")[0]
var section2 = document.getElementById("div9").getElementsByTagName("section")[1]
var section3 = document.getElementById("div9").getElementsByTagName("section")[2]
var section4 = document.getElementById("div9").getElementsByTagName("section")[3]

// document.addEventListener("DOMContentLoaded",()=>{
//     section4.style.marginRight = "250%"
//     section4.style.transitionDuration = "6s"
//     section4.style.transitionDelay = "8s"
       
// })
slide1.addEventListener("click",()=>{
    section4.style.marginRight = "-30%"
    section4.style.transitionDuration = "1s"
})
slide2.addEventListener("click",()=>{
    section4.style.marginRight = "55%"
    section4.style.transitionDuration = "1s"
})
slide3.addEventListener("click",()=>{
    section4.style.marginRight = "150%"
    section4.style.transitionDuration = "1s"
})
slide4.addEventListener("click",()=>{
    section4.style.marginRight = "250%"
    section4.style.transitionDuration = "1s"
})
