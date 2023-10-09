let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons)
for (let i = 0; i < 20; i++) {
    if (i < 3) {
        buttons[i].style.backgroundColor = "#b4b8b5";
        buttons[i].style.color="#006400";
    }
    else if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19) {
        buttons[i].style.backgroundColor = "orange";
        buttons[i].style.color = "white";
    }
}

let str = "";
let screen = document.getElementById("screen");
// screen.value="2134";
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (str == "") {
                str = "0";
            }
            else {
                try{
                    str = eval(str);            
                }catch{
                        str="Math Error";
                }
            }
            screen.value = str;
        }
        else if (e.target.innerHTML == "AC") {
            str = "";
            screen.value = str;
        }
        else if (e.target.innerHTML == "C") {
            if(str!="Math Error"){
                str = str.slice(0, (str.length) - 1);
            }
            else{
                str=""
            }
            screen.value = str;   
        }
        else {
            str += e.target.innerHTML;
            screen.value = str;
        }
    })
})
