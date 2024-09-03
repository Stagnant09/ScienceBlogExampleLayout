/*
Functions:
1. When a hide button is clicked, the content of the sector is hidden or shown.
2. When a copy button is clicked, the content of the sector is copied to the clipboard.
3. When a link is clicked, the content of the sector is copied to the clipboard and then opened in a new tab.
4. When a node in the contents is clicked, the page loads the respective sector.
and more
*/

let hideButtons;
let copyButtons;
let nodes;
let tag;

function hideShowContent(tag) {
    console.log(tag);
    let content = document.querySelector(`.sector-content-container[tag="${tag}"]`);
    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function copyContent(tag) {
    let clipboard = "";
    let code = document.querySelector(`.code[tag="${tag}"]`);
    let lines = code.querySelectorAll(".line");
    for (line of lines) {
        clipboard += line.textContent + "\n";
    }
    navigator.clipboard.writeText(clipboard);
}

function openLink() {
    //TODO
}

function loadSector(tag) {
    //Scroll to the start of the sector
    let sector = document.querySelector(`.sector[tag="${tag}"]`);
    sector.scrollIntoView();
}

window.onload = function() {

    let sectorContentContainers = document.getElementsByClassName("sector-content-container");
    for (sectorContentContainer of sectorContentContainers) {
        console.log(sectorContentContainer.getAttribute("tag"));
    }

    hideButtons = document.getElementsByClassName("hideshow");

    for (let i=0; i < hideButtons.length; i++) {
        hideButtons[i].addEventListener("click", function() {
            hideShowContent(hideButtons[i].getAttribute("tag"));
        });
    }

    copyButtons = document.querySelectorAll(".copy");

    for (let i=0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener("click", function() {
            copyContent(copyButtons[i].getAttribute("tag"));
        });
    }

    nodes = document.querySelectorAll(".cs");

    for (let i=0; i < nodes.length; i++) {
        nodes[i].addEventListener("click", function() {
            loadSector(nodes[i].getAttribute("tag"));
        });
    }

}