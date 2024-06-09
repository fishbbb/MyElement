const openDialogButton = document.getElementById('openDialog');
const dialog = document.getElementById('dialog');
const closeDialogButton = dialog.querySelector('.close');
const cancelButton = dialog.querySelector('.cancel-button');
const confirmButton = dialog.querySelector('.confirm-button');

// 点击打开对话框按钮
openDialogButton.addEventListener('click', function() {
    dialog.classList.remove('hidden');
});

// 点击关闭对话框按钮
closeDialogButton.addEventListener('click', function() {
    dialog.classList.add('hidden');
});

// 点击取消按钮
cancelButton.addEventListener('click', function() {
    dialog.classList.add('hidden');
});

// 点击确认按钮
confirmButton.addEventListener('click', function() {
    dialog.classList.add('hidden');
});