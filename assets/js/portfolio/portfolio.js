fetch("https://smug.astolfo.tech/assets/api/astolfodev/site/projects.json")
    .then(
        (response) =>{
            return response.json();
        }
    )
    .then(
        (data) => {
            check_portfolio(data);
        }
    )

let check_portfolio = (projects) => {
    console.log(projects)
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
}

