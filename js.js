var LISTPOP = [
    "Carrot", 
    "Dubiously Carrot", 
    "Dubooby Carrot"
];


for(var i = 0; i < LISTPOP.length; i++) {
    alert("Check ME OUT!!!!!" + LISTPOP[i]);
}

var BUTTONS = [
    "yur",
    "mom"
];

var BTN = document.getElementById("myButton");

for (var j = 0; j < BUTTONS.length; j++) {
    var newBTN = BTN.cloneNode(true);
    newBTN.textContent = BUTTONS[j];
    newBTN.id = "button-" + j; 
    document.body.append(newBTN);
};
