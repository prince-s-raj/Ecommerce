


const mainImage = document.getElementById("big-img");
const smallImg = document.querySelectorAll(".small-img");


// * Clickevents for small Images in product page
smallImg.forEach((img)=>{
    img.addEventListener("click", ()=>{
        mainImage.src = img.src
    })
})





//  onclick = "windows.location.href = ""