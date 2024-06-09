const parentMenu = document.getElementsByClassName('menu-item');
const iframe = document.getElementById('iframe');

for(let i=0; i<parentMenu.length; i++){
    parentMenu[i].addEventListener('click', function (event){
        console.log(event.target.innerText);
        const text = event.target.innerText;
        for(let j=0; j<parentMenu.length; j++){
            parentMenu[j].classList.remove('active'); // 移除所有菜单项的激活样式
        }
        event.target.classList.add('active'); // 为当前被点击的菜单项添加激活样式
        
        if(text.includes('Button')){
            iframe.setAttribute('src','components/button.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Layout')){
            iframe.setAttribute('src','components/layout.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Form')){
            iframe.setAttribute('src','components/form.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Image')){
            iframe.setAttribute('src','components/bonus.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Carousel')){
            iframe.setAttribute('src','components/carousel.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Pagination')){
            iframe.setAttribute('src','components/pagination.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Table')){
            iframe.setAttribute('src','components/table.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Tag')){
            iframe.setAttribute('src','components/tag.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Theme')){
            iframe.setAttribute('src','components/theme.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Tree')){
            iframe.setAttribute('src','components/tree.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Upload')){
            iframe.setAttribute('src','components/upload.html'); // 设置 iframe 的 src 属性
        }
        else if(text.includes('Dialog')){
            iframe.setAttribute('src','components/dialog.html'); // 设置 iframe 的 src 属性
        }
    });
}