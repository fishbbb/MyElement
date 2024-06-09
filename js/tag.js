const tagContainer = document.getElementById('tagContainer');

function createTag(tagName, removable) {
    // 创建一个标签元素
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = tagName;

    if (removable) {
        // 如果可删除，则创建一个关闭按钮
        const closeBtn = document.createElement('span');
        closeBtn.textContent = '×';
        closeBtn.classList.add('closeBtn');
        // 添加点击事件，点击时移除该标签
        closeBtn.addEventListener('click', function() {
            tagContainer.removeChild(tag);
        });

        tag.appendChild(closeBtn); // 将关闭按钮添加到标签中
    }

    tagContainer.insertBefore(tag, tagContainer.lastChild); // 在标签容器中插入标签
}

// 添加标签容器的点击事件
tagContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('addTag')) {
        // 弹出输入框，输入标签名
        const tagName = prompt('请输入要添加的标签名');
        // 确认是否设置为不可删除标签
        const isRemovable = confirm('是否设置为不可删除标签？');
        if (tagName) {
            // 创建并添加新标签
            createTag(tagName, !isRemovable);
            tagContainer.removeChild(event.target);
            // 在末尾添加"添加标签"按钮
            const newTagButton = document.createElement('div');
            newTagButton.classList.add('tag', 'addTag');
            newTagButton.innerHTML = '<span class="addIcon">+</span> 添加标签';
            tagContainer.insertBefore(newTagButton, tagContainer.lastChild);
        }
    }
});