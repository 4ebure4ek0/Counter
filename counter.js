#!C:/Program Files/nodejs/node.exe

let fs = require("fs");

function counter()
{
    console.log("Content-type: text/html\r\n");

    let count = fs.readFileSync("./counter.txt", "utf-8");

    count = Number(count);

    count = count + 1;

    count = String(count);

    fs.writeFileSync("./counter.txt", count);

    let html = fs.readFileSync("./counter.html", "utf-8");

    html = html.replace("<!--number-->", count);

    console.log(html);
    
}

counter();