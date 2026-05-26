const toppings = [
    {
        name: "湯圓",
        img: "../image/topping1.png",
        text: "每日手作湯圓，吃得到純粹米香。"
    },
    {
        name: "地瓜圓",
        img: "../image/topping2.png",
        text: "糯米與地瓜慢工製成，口感紮實又Q彈。"
    },
    {
        name: "芋圓",
        img: "../image/topping3.png",
        text: "糯米揉入新鮮芋頭，Q彈中吃得到古早味。"
    },
    {
        name: "鳳梨",
        img: "../image/topping4.png",
        text: "慢火熬煮鳳梨，酸甜交織最開胃。"
    },
    {
        name: "白木耳",
        img: "../image/topping5.png",
        text: "天然白木耳慢火燉煮，口感滑嫩又帶蜜香。"
    },
    {
        name: "地瓜",
        img: "../image/topping6.png",
        text: "鬆軟綿密的蜜地瓜，每一口都帶著天然甜香。"
    },
    {
        name: "芋頭",
        img: "../image/topping7.png",
        text: "嚴選新鮮芋頭熬製，保留最自然的濃郁芋香。"
    },
    {
        name: "仙草",
        img: "../image/topping8.png",
        text: "滑嫩仙草凍，入口清涼又回甘。"
    },
    {
        name: "粉粿",
        img: "../image/topping9.png",
        text: "蜜香粉粿滑嫩順口，是夏天最熟悉的味道。"
    },
    {
        name: "愛玉",
        img: "../image/topping10.png",
        text: "冰涼愛玉配剉冰，最適合炎炎夏日。"
    },
    {
        name: "珍珠",
        img: "../image/topping11.png",
        text: "Q彈有嚼勁，經典古早味必點。"
    },
    {
        name: "QQ圓",
        img: "../image/topping12.png",
        text: "繽紛QQ圓，軟Q滑順有口感。"
    },
    {
        name: "紅豆",
        img: "../image/topping13.png",
        text: "慢火熬煮蜜紅豆，香甜綿密不膩口。"
    },
    {
        name: "綠豆",
        img: "../image/topping14.png",
        text: "古早味綠豆配料，清甜不膩最適合夏天。"
    },
    {
        name: "薏仁",
        img: "../image/topping15.png",
        text: "細火慢熬薏仁，帶出最純粹的豆香。"
    },
    {
        name: "大豆",
        img: "../image/topping16.png",
        text: "古早味蜜大豆，甜香濃郁不死甜。"
    }
];

function randomTopping(){
    let randomIndex = Math.floor(Math.random() * toppings.length);
    let topping = toppings[randomIndex];

    let result = document.getElementById("randomResult");

    result.innerHTML = `
        <img src="${topping.img}" alt="${topping.name}">
        <h3>今天推薦加：${topping.name}</h3>
        <p>${topping.text}</p>
    `;
}

function scrollToSection(id){
    let target = document.getElementById(id);
    target.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });
}

function showAll(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 8px 25px rgba(0,80,130,.22)";
    }else{
        navbar.style.boxShadow = "0 5px 20px rgba(0,80,130,.12)";
    }
});