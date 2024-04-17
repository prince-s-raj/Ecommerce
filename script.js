

const menuBar = document.getElementById("menu-bar");
const navBar = document.getElementById("navbar");
const navCloseBtn = document.getElementById("close");


// *-----Show Menubar---------->
menuBar.addEventListener("click", ()=>{
        navBar.classList.add("active")
})

// !-----Close Menu Bar
navCloseBtn.addEventListener("click", ()=>{
        navBar.classList.remove("active")
})
