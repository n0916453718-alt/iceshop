let buttons = document.querySelectorAll(".filter-btn");
let cards = document.querySelectorAll("[data-category]");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        buttons.forEach(function(btn){
            btn.classList.remove("active");
        });

        button.classList.add("active");

        let filter = button.getAttribute("data-filter");

        cards.forEach(function(card){
            let category = card.getAttribute("data-category");

            if(filter === "all" || filter === category){
                card.classList.remove("hide");
            }else{
                card.classList.add("hide");
            }
        });
    });
});