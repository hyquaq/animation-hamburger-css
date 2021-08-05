let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("open");
    console.log("click");
});
