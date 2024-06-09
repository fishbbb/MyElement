const themeColors = {
    Primary: '#409EFF',
    Success: '#67C23A',
    Warning: '#E6A23C',
    Danger: '#F56C6C',
    Info: '#909399',
    Text: '#606266',
    Link: '#409EFF',
    Disabled: '#C0C4CC',
    EyeCareMode: '#FFD3A2',
    DarkMode: '#000000',
    LightMode: '#FFFFFF',
    BorderColor: '#CCCCCC'
};

const themeContainer = document.getElementById('theme-container');
let count = 0;

// 遍历主题颜色对象，创建主题盒子并添加到主题容器中
Object.entries(themeColors).forEach(([name, color]) => {
    const themeBox = createThemeBox(name, color);
    themeContainer.appendChild(themeBox);
    count++;

    if (count % 3 === 0) {
        const br = document.createElement('br');
        themeContainer.appendChild(br);
    }
});

function createThemeBox(name, color) {
    // 创建主题盒子
    const themeBox = document.createElement('div');
    themeBox.classList.add('theme-box');

    // 创建颜色块
    const colorBox = document.createElement('div');
    colorBox.classList.add('theme-color');
    colorBox.style.backgroundColor = color;

    // 创建主题名称显示
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('theme-name');
    nameDiv.textContent = `${name} : ${color}`;
    
    if (name === 'LightMode') {
        nameDiv.style.color = '#000'; // 为 LightMode 设置字体颜色为黑色
    }

    if (name === 'LightMode') {
        themeBox.style.border = '2px solid #CCCCCC'; // 为 LightMode 添加灰色边框
    }

    themeBox.appendChild(colorBox);
    themeBox.appendChild(nameDiv);

    return themeBox;
}