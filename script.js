var arr = [
    { dp: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg", story: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D" },
    { dp: "https://hips.hearstapps.com/hmg-prod/images/baby-animal-photos-65f9bc47971de.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*", story: "https://t4.ftcdn.net/jpg/04/15/79/09/360_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg" },
    { dp: "https://images.unsplash.com/photo-1592670130429-fa412d400f50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D*", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0Au6KMF9u-vu2fnUAZZCNLYxOXpfP9SRBQ&s" },
    { dp: "https://hips.hearstapps.com/hmg-prod/images/baby-animals-kitten-puppy-65f9ba498b3e3.jpg?crop=0.668xw:1.00xh;0.0952xw,0&resize=980:*", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s" }
]
var storiyan = document.querySelector("#storiyan");
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += ` <div class="story" >
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
});
storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function () {

        document.querySelector("#full-screen").style.display = "none"
    }, 3000)
});
