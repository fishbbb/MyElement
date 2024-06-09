document.addEventListener("DOMContentLoaded", function() {
    // 获取所有父级元素
    const parentItems = document.querySelectorAll(".parent");

    // 遍历父级元素
    parentItems.forEach(item => {
        // 获取切换按钮、子元素列表、孙子元素列表及子元素的高度
        const toggleButton = item.querySelector(".toggle");
        const childrenList = item.querySelector(".children");
        const grandChildrenList = item.querySelector(".grandchildren");
        const childrenHeight = childrenList.scrollHeight;

        // 监听父级元素的点击事件
        item.addEventListener("click", function(e) {
            // 如果点击的不是切换按钮，则返回
            if (e.target !== toggleButton) {
                return;
            }

            // 切换子元素列表的最大高度
            if (childrenList.style.maxHeight) {
                childrenList.style.maxHeight = null;
                grandChildrenList.style.maxHeight = null;
                toggleButton.classList.remove("expanded");
                item.style.height = "auto";
            } else {
                // 展开子元素列表和孙子元素列表
                childrenList.style.maxHeight = childrenHeight + "px";
                grandChildrenList.style.maxHeight = grandChildrenList.scrollHeight + "px";
                toggleButton.classList.add("expanded");
                item.style.height = (item.offsetHeight + childrenHeight) + "px";
            }
        });
    });
});