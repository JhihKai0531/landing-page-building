// 宣告變數

let headerUl = document.querySelector(".header ul"); // 導覽列物件
let headerBtn = document.querySelector(".header button"); // 漢堡選單按鈕
// 將導覽列變成縱向的跳出選單的樣式設定
let popUpNavCSS = `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 45px;
    background-color: #fffb;
    border: 2px solid var(--btn-dark-gray);
    border-radius: 4px;
    overflow: hidden;
    `;


// 漢堡選單的事件觸發
headerBtn.onclick = function () {
    if (headerUl.style.display == "") {
        headerUl.style.cssText = popUpNavCSS;
    } else if (headerUl.style.display == "flex") {
        headerUl.style.display = "";
    } else {
        console.log('something wrong');
    }
}

// 視窗只要拉回大視窗，就將一切回復原狀
window.onresize = function () {
    if (window.innerWidth > 768) {
        headerUl.style.cssText = "";
    }
}
