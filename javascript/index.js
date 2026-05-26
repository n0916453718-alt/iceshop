window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 8px 25px rgba(0,80,130,.22)";
    }else{
        navbar.style.boxShadow = "0 5px 20px rgba(0,80,130,.12)";
    }
});