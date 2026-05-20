document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    // 如果頁面上沒有搜尋框，就直接結束，避免報錯
    if (!searchInput) {
        return;
    }

    // 尋找所有被標記為「可搜尋」的項目
    const searchableItems = document.querySelectorAll('.searchable-item');

    searchInput.addEventListener('keyup', function (event) { // 監聽'keyup'鍵盤及時輸入搜尋元件的事件
        const filter = event.target.value.toUpperCase(); // filter元件的值轉換大寫，為event.target.value的值
        searchableItems.forEach(function (item) {
            // 取得項目內的所有文字，並轉換為大寫
            const text = item.innerText.toUpperCase();

            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none'; // 隱藏項目
            }
        });
    });
});
