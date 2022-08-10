// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const title = document.querySelector("h1");
const body = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/


const superEventHandler = {
    enterEvent : function(){
        title.style.color = colors[0];
        title.innerText = "마우스 여기써요."
    },
    leaveEvent : function(){
        title.style.color = colors[1];
        title.innerText = "마우스 떠나써요."
    },
    rClickEvent : function(){
        title.style.color = colors[2];
        title.innerText = "우클릭!!!"
    },
    resizeEvent : function(){
        title.style.color = colors[3];
        title.innerText = "리사이즈"
    }, 
};


title.addEventListener("mouseenter", superEventHandler.enterEvent)
title.addEventListener("mouseleave", superEventHandler.leaveEvent)
window.addEventListener("contextmenu", superEventHandler.rClickEvent)
window.addEventListener("resize", superEventHandler.resizeEvent)

function init() {}

init();
