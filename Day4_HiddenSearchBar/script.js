const search=document.querySelector(".search")
const btn=document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click",()=>{
    search.classList.toggle("active")
    input.focus() //光标自动定位
})