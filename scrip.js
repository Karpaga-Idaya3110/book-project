//selecting popbox,popupoverlay
var popupoverlay=document.querySelector(".popupoverlay")
var popbox=document.querySelector(".popbox")
var addpopbutton=document.getElementById("add-popup-button")
addpopbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popbox.style.display="block"
})
var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popbox.style.display="none"
})
var wholecontainer=document.querySelector(".wholecontainer")
var addbook=document.getElementById("addbook")
var bookinput=document.getElementById("bookname")
var bookauthorin=document.getElementById("author")
var bookdiscrip=document.getElementById("discript")


addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML=`<h2>${bookinput.value}</h2>

    <h5>${bookauthorin.value}</h5>
    <p>${bookdiscrip.value}</p>
    <button onclick="deleteans(event)">Delete</button>`
    wholecontainer.append(div)
    popupoverlay.style.display="none"
    popbox.style.display="none"
})
function deleteans(event){
    {
        event.target.parentElement.remove()
    }

}