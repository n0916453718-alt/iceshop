function sendFavorite(){
    let input = document.getElementById("favoriteInput");
    let result = document.getElementById("favoriteResult");
    let favorite = input.value.trim();

    if(favorite === ""){
        result.innerHTML = "請告訴我們你最喜歡的冰品！";
    }else{
        result.innerHTML = "你最喜歡的是「" + favorite + "」，歡迎下次光臨阿行冰店！";
        input.value = "";
    }
}

window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 8px 25px rgba(0,80,130,.22)";
    }else{
        navbar.style.boxShadow = "0 5px 20px rgba(0,80,130,.12)";
    }
});