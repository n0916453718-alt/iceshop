const iceList = [
    {
        name: "自選五種冰",
        img: "../image/ice1.PNG",
        intro: "喜歡什麼配料自己搭，湯圓、粉粿、紅豆、綠豆、仙草都能自由選擇。一碗就能吃到多種口感，是最受歡迎的經典剉冰。",
        tags: ["自由搭配", "人氣必點", "古早味"]
    },
    {
        name: "芒果牛奶冰",
        img: "../image/ice2.PNG",
        intro: "香甜芒果搭配綿密剉冰，再淋上濃郁牛奶。果香、奶香與冰涼口感融合，是夏天不能錯過的人氣冰品。",
        tags: ["芒果香甜", "牛奶濃郁", "夏季人氣"]
    },
    {
        name: "水果冰",
        img: "../image/ice3.PNG",
        intro: "使用多種新鮮水果搭配剉冰，酸甜清爽又不膩口。色彩繽紛、果香自然，是夏天最適合的清涼選擇。",
        tags: ["新鮮水果", "清爽酸甜", "夏天首選"]
    },
    {
        name: "八寶圓仔冰",
        img: "../image/ice4.PNG",
        intro: "滿滿配料搭配手作圓仔，口感豐富又有層次。一口吃得到古早味甜香，也吃得到手工配料的實在。",
        tags: ["配料豐富", "手作圓仔", "經典古早味"]
    }
];

function randomIce(){
    let resultBox = document.getElementById("randomResult");
    let randomIndex = Math.floor(Math.random() * iceList.length);
    let ice = iceList[randomIndex];

    resultBox.innerHTML = `
        <div class="result-card">
            <img src="${ice.img}" alt="${ice.name}">

            <div class="result-info">
                <h3>今天推薦：${ice.name}</h3>
                <p>${ice.intro}</p>

                <div>
                    ${ice.tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>
            </div>
        </div>
    `;
}

window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 8px 25px rgba(0,80,130,.22)";
    }else{
        navbar.style.boxShadow = "0 5px 20px rgba(0,80,130,.12)";
    }
});