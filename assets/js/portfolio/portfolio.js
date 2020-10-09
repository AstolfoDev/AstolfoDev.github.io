import projects from "./projects.js";

let create_html = (title, url, description) => {
    return `<div class="message-box">
        <div class="author"><img src="https://api.astolfo.tech/agent" class="author-icon"><a class="author-name">AstolfoDev</a>&nbsp;|&nbsp;<a href="${url}" class="link">${title}</a></div>
        <p class="sm-text" id="about-me">
            ${description}
        </p>
    </div><br><br>`;
}

let html = "";

for (let projectsKey in projects) {
    let elem = projects[projectsKey];
    html += create_html(elem.title, elem.url, elem.description);
}


document.getElementById("public-projects").innerHTML += html;

/*
function romanize (num) {
    if (isNaN(num))
        return NaN;
    let digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}
document.write(romanize(new Date().getFullYear()));
 */