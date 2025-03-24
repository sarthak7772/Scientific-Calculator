let display = document.querySelector("#display");
let storage="";
let check = 0;
function appendToDisplay(value, t) {
    if (t === 0 && check === 0) {
        display.value += value;
        check = 1;
    }
    else if (t === 1) {
        display.value += value;
        check = 0;
    }
}
// *********************1/x***************
function onebyx() {
    if (display.value === "") {
        display.value = "Cannot Divide by 0";
    }
    else {
        let i, t = -1;
        for (i = 0; i < display.value.length; i++) {
            if (display.value[i] === '+' || display.value[i] === '-' || display.value[i] === '/' || display.value[i] === '*') {
                t = i;
            }
        }
        if (t !== -1) {
            let str = "";
            t++;
            while(t<display.value.length){
                str+=display.value[t];
                t++;
            }
            str=parseInt(str);
            str=1/str;
            let factor = Math.pow(10, 5);
            str=Math.round(str * factor) / factor;
            str=str.toString();
            let str1="";
            for(let i=0;i<=t;i++){
                str1+=display.value[i];
            }
            let n=display.value.length;
            let copy="";
            for(let i=0;i<n-1;i++){
                copy+=display.value[i];
            }
            copy+=str;
            display.value="";
            display.value=copy;
        }
        else {
            let str=display.value;
            str=1/str;
            // let factor = Math.pow(10, 5);
            // str=Math.round(str * factor) / factor;
            str=str.toString();
            display.value=str;
        }
    }
}

// *********************xpow2()***************
function xpow2(){
    if(display.value===""){
        display.value="Please select any value";
    }
    else {
        let i, t = -1;
        for (i = 0; i < display.value.length; i++) {
            if (display.value[i] === '+' || display.value[i] === '-' || display.value[i] === '/' || display.value[i] === '*') {
                t = i;
            }
        }
        if (t !== -1) {
            let str = "";
            t++;
            while(t<display.value.length){
                str+=display.value[t];
                t++;
            }
            str=parseInt(str);
            str=str*str
            let factor = Math.pow(10, 5);
            str=Math.round(str * factor) / factor;
            str=str.toString();
            let str1="";
            for(let i=0;i<=t;i++){
                str1+=display.value[i];
            }
            let n=display.value.length;
            let copy="";
            for(let i=0;i<n-1;i++){
                copy+=display.value[i];
            }
            copy+=str;
            display.value="";
            display.value=copy;
        }
        else {
            let str=display.value;
            str=str*str;
            // let factor = Math.pow(10, 5);
            // str=Math.round(str * factor) / factor;
            str=str.toString();
            display.value=str;
        }
    }
}


// *********************2rootx()***************
function two_rootx(){
    if(display.value===""){
        display.value="Please select any value";
    }
    else {
        let i, t = -1;
        for (i = 0; i < display.value.length; i++) {
            if (display.value[i] === '+' || display.value[i] === '-' || display.value[i] === '/' || display.value[i] === '*') {
                t = i;
            }
        }
        if (t !== -1) {
            let str = "";
            t++;
            while(t<display.value.length){
                str+=display.value[t];
                t++;
            }
            str=parseInt(str);
            str=2*Math.sqrt(str);
            let factor = Math.pow(10, 5);
            str=Math.round(str * factor) / factor;
            str=str.toString();
            let str1="";
            for(let i=0;i<=t;i++){
                str1+=display.value[i];
            }
            let n=display.value.length;
            let copy="";
            for(let i=0;i<n-1;i++){
                copy+=display.value[i];
            }
            copy+=str;
            display.value="";
            display.value=copy;
        }
        else {
            let str=display.value;
            str=2*Math.sqrt(str);
            // let factor = Math.pow(10, 5);
            // str=Math.round(str * factor) / factor;
            str=str.toString();
            display.value=str;
        }
    }
}

// **************CE function************
function recent_clear() {
    let i, t = -1;
    for (i = 0; i < display.value.length; i++) {
        if (display.value[i] === '+' || display.value[i] === '-' || display.value[i] === '/' || display.value[i] === '*') {
            t = i;
        }
        console.log("t is = ", t);
    }
    if (t !== -1) {
        let str = "";
        for (let i = 0; i < t; i++) {
            str += display.value[i];
        }
        display.value = str;
    }
    else {
        clearDisplay();
    }
}
// ***************Clear Display*********
function clearDisplay() {
    display.value = "";
}
function back_to() {
    let s = display.value.slice(0, -1);
    display.value = s;
    last_char = display.value.at(-1);
    if (last_char !== '1' || last_char !== '2' || last_char !== '3' || last_char !== '4' || last_char !== '5' || last_char !== '6' || last_char !== '7' || last_char !== '8' || last_char !== '9' || last_char !== '0') {
        check = 0;
    }
    else check = 1;
}
// ***************toogle*********************
function sign_change() {

    let plusCount = (display.value.split("+").length - 1);
    let minusCount = (display.value.split("-").length - 1);

    if (plusCount === 0 && minusCount === 0) {
        if (display.value.startsWith('-')) {
            display.value = display.value.substring(1);
        } else {
            display.value = "-" + display.value;
        }
    }
    else {
        let j = -1;

        for (let i = 0; i < display.value.length; i++) {
            if (display.value[i] === "+" || display.value[i] === "-") {
                j = i;
            }
        }
        console.log(j);

        if (j !== -1) {
            if (display.value[j] === '+') {
                display.value = display.value.substring(0, j) + "-" + display.value.substring(j + 1);
            } else {
                display.value = display.value.substring(0, j) + "+" + display.value.substring(j + 1);
            }
        }
    }
}
// ****************dot selection******************
function dot(value) {
    let t, i, j;
    i = 0;

    while (i < display.value.length) {
        t = 0;
        j = i;

        while (j < display.value.length &&
            display.value[j] !== '+' && display.value[j] !== '-' &&
            display.value[j] !== '/' && display.value[j] !== '*') {

            if (display.value[j] === '.') {
                t = 1;
            }
            j++;
        }

        i = j + 1;
    }

    if (t === 0) {
        display.value += value;
    }

}
// ****************final result*************
function calculate() {
    let start = 0;

    while (start < display.value.length) {
        if (display.value[start] === '0' &&
            (start === 0 || display.value[start - 1] === '+' || display.value[start - 1] === '-' ||
                display.value[start - 1] === '*' || display.value[start - 1] === '/')) {

            display.value = display.value.substring(0, start) + display.value.substring(start + 1);
        } else {
            start++;
        }
    }


    // *****for Re-evluation******

    let n=display.value.length-1;
    console.log("n is = ",n);
    let n1=n;
    while(n!=0){
        if(display.value[n]==='+' || display.value[n]==='-' || display.value[n]==='/' || display.value[n]==='*'){
            n1=-1;
            break;
        }
        n--;
    }
    if(n1===-1){
        let str="";
        while(n!=display.value.length){
            str+=display.value[n];
            n++;
        }
        storage=str;
    }
    else{
        display.value+=storage;
    }


    // *******final Calculation********
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}


