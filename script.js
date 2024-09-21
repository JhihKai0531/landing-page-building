// 宣告變數

let headerUl = document.querySelector(".header ul"); // 導覽列物件
let headerBtn = document.querySelector(".header button"); // 漢堡選單按鈕


// 漢堡選單的事件觸發
headerBtn.onclick = function () {
    if (headerUl.style.display == "") {
        headerUl.style.display = "flex";
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

// 讓網頁其他地方被點到時也能收起選單
document.body.addEventListener('click', function (e) {
    if (window.innerWidth > 768) { return; }
    let condition = (
        !(
            headerUl.contains(e.target) ||
            headerBtn.contains(e.target) ||
            headerBtn == e.target ||
            headerUl == e.target
        )
    );
    if (condition) {
        if (headerUl.style.display == "flex") {
            headerUl.style.display = "";
        }
    }
})
