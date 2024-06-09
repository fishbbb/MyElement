document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    // 获取表单中的值
    let name = document.getElementById("name").value;
    let dropdown = document.getElementById("dropdown").value;
    let number = document.getElementById("number").value;
    let switchValue = document.getElementById("switch").checked;
    
    // 获取单选框的值
    let radioValue;
    if(document.getElementById("radio1").checked){
        radioValue = document.getElementById("radio1").value;
    } else if(document.getElementById("radio2").checked){
        radioValue = document.getElementById("radio2").value;
    }
    
    // 获取复选框的值
    let checkboxValues = [];
    if(document.getElementById("checkbox1").checked){
        checkboxValues.push(document.getElementById("checkbox1").value);
    }
    if(document.getElementById("checkbox2").checked){
        checkboxValues.push(document.getElementById("checkbox2").value);
    }
    
    let color = document.getElementById("color").value;
    
    // 输出到控制台
    console.log("Name: " + name);
    console.log("Dropdown: " + dropdown);
    console.log("Number: " + number);
    console.log("Switch: " + switchValue);
    console.log("Radio Selection: " + radioValue);
    console.log("Checkbox Selection: " + checkboxValues.join(", "));
    console.log("Color Selection: " + color);
    
});