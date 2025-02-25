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
    } else {
        img.style.width = "350px"
    }
}