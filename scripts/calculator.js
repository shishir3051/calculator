function calculate(e) {
    let display = document.getElementById("calculator");
    let key = e.value;
    let symbols = ["DEL", "=", "C"];

    if (symbols.includes(key)) {
        switch (key) {
            case "DEL":
                display.value = display.value.slice(0, -1);
                break;
            case "C":
                display.value = "";
                break;
            case "=":
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Syntax error";
                }
                break;
        }
    } else {
        display.value = display.value + key;
    }
    console.log(typeof this);
}
