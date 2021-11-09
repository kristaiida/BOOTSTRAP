function _(name) {
    return document.querySelector(name)
}

// a
// Voi tehdä myös document.getElementById
var aelem = _("content");
console.log(aelem.nodeName);

// b
var firstBasic = document.querySelector(".basic");
console.log(firstBasic.nodeName);

// c
var allItems = document.getElementsByTagName("li");
for(i of allItems) {
    console.log(i.textContent);
}

// d 
var body = document.querySelector("body");
var allNodes = body.querySelectorAll("*");

for(x of allNodes) {
    console.log(x.nodeName);
}

// e
var article = document.querySelector("article");

for(a of article.querySelectorAll("p")) {
    console.log(a.textContent);
}

// f
for(i of allItems) {
    i.textContent = "John Doe";
}

// g

