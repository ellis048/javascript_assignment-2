//The Dynamic Content Update 
function changeContent() {
    document.getElementById("heading").textContent = "Content Updated!";
    let paragraph = document.getElementById("paragraph");
    paragraph.textContent = "I like cats as far as creatures go. I like almost any animal that does not have horns or scales on it for that matter, but I especially like cats. Any sort and denomination: spotted or solid, fat or thin, with and without fleas. I like them and admire them and almost anything they do is a pleasure to me.";
    //paragraph.style.backgroundColor = "lightblue";
    paragraph.classList.add("lightblue");
}
//interactive image Gallery

function toggleImageSize(img) {
    if (img.style.width === "350px" ){
        img.style.width = "750px"
        img.style.border ="5px solid red";
    } else {
        img.style.width = "350px"
        img.style.border ="none";
    }
}


//the cursor
document.addEventListener("mousemove", function(event) {
    let circle = document.getElementById("cursor-circle");
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
    circle.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
});

//The age checker
function checkAge() {
    const yourname = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
    const feedback = document.getElementById("feedback");

    if (ageInput === "") {
        feedback.textContent = "";
    } else if (ageInput < 18) {
        feedback.textContent = yourname + " you are a minor.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = yourname + " you are an adult.";
        feedback.style.color = "green";
    }
}
