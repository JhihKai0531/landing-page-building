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

// 嘗試想讓網頁其他地方被點到時也能收起選單，但目前有一些bug
// 這串程式碼顯然不是理想做法，待修改
// document.body.addEventListener('click', function (e) {
//     console.log(e.target);

//     if (window.innerWidth > 768) {
//         return;
//     } else {
//         if (e.target == headerBtn ||
//             e.target == document.querySelector(".header button svg") ||
//             e.target == document.querySelector(".header button path")
//         ) {
//             if (headerUl.style.display == "") {
//                 headerUl.style.cssText = popUpNavCSS;
//             } else if (headerUl.style.display == "flex") {
//                 headerUl.style.display = "";
//             } else {
//                 console.log('something wrong');
//             }
//         } else if (e.target == headerUl ||
//             e.target == document.querySelector(".header ul li") ||
//             e.target == document.querySelector(".header ul li a")
//             // 這裡沒有成功
//         ) {
//             console.log("list");
            
//         } else {
//             // 網頁其他地方，這裡有成功
//             if (headerUl.style.display == "flex") {
//                 headerUl.style.display = "";
//             }
//         }
//     }
// })
