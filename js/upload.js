const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

fileInput.addEventListener('change', function() {
    const files = Array.from(fileInput.files);

    files.forEach(file => {
        const fileItem = document.createElement('li');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <span>${file.name}</span>
            <button onclick="removeFile(event)">Remove</button>
        `;

        fileList.appendChild(fileItem);
    });
});

function removeFile(event) {
    const fileItem = event.target.parentElement;
    fileList.removeChild(fileItem);
}