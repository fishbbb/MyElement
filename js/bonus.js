// 添加事件监听器到图片上传输入框
document.getElementById('imageUploadInput').addEventListener('change', function() {
  // 获取选择的文件
  const file = this.files[0];
  const reader = new FileReader();

  // 当文件加载完成时
  reader.onload = function(e) {
    const uploadedImagesContainer = document.getElementById('uploadedImages');
    const uploadedImageElement = document.createElement('div');
    const imgElement = document.createElement('img');
    const deleteIcon = document.createElement('span');

    // 显示图片
    imgElement.src = e.target.result;
    imgElement.classList.add('uploaded-image');
    uploadedImageElement.appendChild(imgElement);

    // 添加删除功能
    deleteIcon.innerHTML = '❌ 删除一张图片';
    deleteIcon.classList.add('delete-icon');
    deleteIcon.addEventListener('click', function() {
      uploadedImagesContainer.removeChild(uploadedImageElement);
      // 如果没有上传的图片，则显示占位符
      if (uploadedImagesContainer.children.length === 0) {
        document.getElementById('imageUploadPlaceholder').style.display = 'block';
      }
    });
    uploadedImageElement.appendChild(deleteIcon);
    
    // 将上传的图片元素添加到容器中
    uploadedImagesContainer.appendChild(uploadedImageElement);
    // 隐藏上传占位符
    //document.getElementById('imageUploadPlaceholder').style.display = 'none';
  };

  reader.readAsDataURL(file);
});