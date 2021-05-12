var links = {
    setColor: function (color) {
        var alist = document.querySelectorAll("a");
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
    
};

let nightMode = localStorage.getItem('nightMode');
const nightModeToggle = document.querySelector('#night-mode-toggle');

//Check if dark mode is enabled: if it's enabled turn it off, if IT'S DISABLED turn it on

const enablenightMode = () => {
    // 1. add the class:nightMode to the body
    document.body.classList.add("nightMode");
    links.setColor("beige");

    // 2. update nightMode in the localStorage
    localStorage.setItem("nightMode", "enabled");

};
const disablenightMode = () => {

    document.body.classList.remove("nightMode");
    links.setColor("black");
    localStorage.setItem("nightMode", null);
};

if (nightMode === "enabled") {
    enablenightMode();
}

nightModeToggle.addEventListener("click", () => {

    nightMode = localStorage.getItem("nightMode");

    if (nightMode !== "enabled") {
        enablenightMode();
        console.log(nightMode);
    } else {
        disablenightMode();
        console.log(nightMode);
    }
});