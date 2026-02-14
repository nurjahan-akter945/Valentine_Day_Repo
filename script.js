// h1 tag typewriter effect

const text = "Will you be my eternal?"
let index = 0;
function typeEffect(){
    if (index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();
// Modal Section

document.addEventListener("DOMContentLoaded", function(){
    let openBtn = document.getElementById("openYesBtn");
    let closeBtn = document.getElementById("closeYesBtn");
    let modalContent = document.getElementById("yesModal");

//  1. Show the modal when 'Yes' is clicked

    openBtn.addEventListener("click", function(){
        modalContent.style.display = "block";
        
    })
    // 2. Hide the modal when 'x' is clicked

    closeBtn.addEventListener("click", function(){
        modalContent.style.display = "none"
    })
    // 3. Hide the modal if the user clicks anywhere outside of it

window.addEventListener("click", function(e){
    if(e.target === modalContent){
        modalContent.style.display = "none"
    }
})
})

const openBtn = document.getElementById("openNoBtn");
const modal = document.getElementById("noModal");
const closeBtn = document.getElementById("closeNoBtn");

// 1. Show the modal when 'No' is clicked
openBtn.onclick = function() {
    modal.style.display = "block";
}

// 2. Hide the modal when 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 3. Optional: Hide the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
