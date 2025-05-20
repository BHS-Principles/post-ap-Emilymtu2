var LIST = [
    "Carrot", 
    "Dubiously Carrot", 
    "Dubooby Carrot"
];

var BTN = document.getElementById("myButton");

for(var i = 0; i < LIST.length; i++) {
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    alert("Check ME OUT!!!!!" + LIST[i]);
}
