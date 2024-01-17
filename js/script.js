


/* this is also a part of navbar, but you can use it for another purposes */
let mBody = document.querySelector(`body`);

/* navbars starts */

let ulAllHeader = document.querySelector(".ulAllHeader");
let responsiveNavbarAllHeader = document.querySelector(".responsive-navbar-all-header");
let p1AllHeader = document.querySelector(".p1AllHeader");


let allHeader = document.querySelector(".allHeader");



responsiveNavbarAllHeader.addEventListener(`click`, toggleNavbar);
p1AllHeader.addEventListener(`click`, toggleDelNav);

function toggleNavbar() {
    mBody.classList.toggle(`main-overflow-hidden`)
    ulAllHeader.classList.toggle(`toggle-ul1`);
    p1AllHeader.classList.toggle(`p1-all-header-visible`)
    allHeader.classList.toggle(`header-height`)
};
function toggleDelNav() {
    mBody.classList.toggle(`main-overflow-hidden`)
    ulAllHeader.classList.toggle(`toggle-ul1`);
    p1AllHeader.classList.toggle(`p1-all-header-visible`)
    allHeader.classList.toggle(`header-height`)
};

/* navbars ends */



/* projects starts */

let parentProjects = document.querySelector(".parent1-p-section");

function ajax(){
    let server = new XMLHttpRequest();
    server.open("GET" , "http://localhost:3000/projects");
    server.setRequestHeader("Content-Type" , "application/json ; charset = utf-8");
    server.send()

    server.addEventListener(`load` , function() {
        if(server.status == 200){
            let data = JSON.parse(server.response);
            data.forEach(elem => {
                let newDivs = document.createElement(`div`);
                newDivs.classList.add("child1-p-section");
                newDivs.innerHTML = `
                <img src="${elem.img}" class="img1-p-section" alt="">
                <div class="txt-p-section">
                    <h2 class="h21-p-section">${elem.name}</h2>
                    <p class="p1-p-section">
                        ${elem.aboutProject}
                    </p>
                    <a href="${elem.linkToProject}">
                        <button class="btn1-p-section">
                            ${elem.buttonText}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z"
                                    fill="#333333" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z"
                                    fill="#333333" />
                            </svg>
                        </button>
                    </a>
                </div>
                `;
                parentProjects.appendChild(newDivs);
            })
        }else{
            console.log(`mistake or the server is not responding!`);
        }
    })
}
ajax()

/* projects ends, and you can add as much projects as you want form projects.json */






