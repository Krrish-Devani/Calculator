let inp = document.getElementById("input");
let btn = document.querySelectorAll("button");

let string = "";
let arr = Array.from(btn);
arr.forEach(btn => {
    btn.addEventListener("click", function(event) {
        if(event.target.innerHTML == "=") {
            string = eval(string);
            inp.value = string;
        }else if(event.target.innerHTML == "AC") {
            string = "";
            inp.value = string;
        }else if(event.target.innerHTML == "C") {
            string = string.substring(0, string.length-1);
            inp.value = string;
        }else {
            string += event.target.innerHTML;
            inp.value = string;
        };
    });
});