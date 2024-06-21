data_front_end = {
    "NEWBIE": ["social-links-profile-main", "interactive-rating-component-main", "nft-preview-card-component-main",
               "order-summary-component-main", "product-preview-card-component-main", "qr-code-component-main",
               "results-summary-component-main", "blog-preview-card-main", "base-apparel-coming-soon-master",
               "recipe-page-main", "four-card-feature-section-master"
              ],
    "Junior": ["newsletter-sign-up-with-success-message-main", "interactive-card-details-form-main", "testimonials-grid-section-main"
    ],
    "Intermediate": [],
    "Advance": [],
    "Guru": [],
};

const frontend_challenges = document.getElementById("frontend-challenge");
const pagination = document.getElementById('pagination');
let key = "";

let currentPage = 1;
const cardsPerPage = 5

function updateView() {
    renderCards(currentPage);
    renderPagination();
}

function renderCards(page) {
    frontend_challenges.innerHTML = "";
    var path= './FrontEnd-Mentor/' + key + "/";
    var data = data_front_end[key]
    var value = 0;
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const cardsToRender = data.slice(start, end);
    console.log(data)
    console.log(cardsToRender)
    cardsToRender.forEach(folder => {
        var path_to_search = path + folder + "/index.html'";
        var name = folder.replace(/[-#$]/g, ' ')
        const liElement = document.createElement('ul');
        liElement.innerHTML = `<li class="info" onclick="choose_link('${path_to_search},${value})">${name}</li>`;
        frontend_challenges.appendChild(liElement);
        value +=1 ;
    });
}

function renderPagination(){
    pagination.innerHTML = '';
    const totalPages = Math.ceil(data_front_end[key].length / cardsPerPage);

    console.log(totalPages)

    if(totalPages <= 1) return;
 
    const createPageButton = (page) => {
        const button = document.createElement('button');
        button.innerText = page;
        button.classList.add("t-button");
        button.addEventListener('click', () => {
            currentPage = page;
            updateView();
        });
        return button;
    };

    pagination.appendChild(createPageButton(1));

    if (currentPage > 3) {
        const dots = document.createElement('span');
        dots.innerText = '...';
        pagination.appendChild(dots);
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pagination.appendChild(createPageButton(i));
    }

    if (currentPage < totalPages - 2) {
        const dots = document.createElement('span');
        dots.innerText = '...';
        pagination.appendChild(dots);
    }

    pagination.appendChild(createPageButton(totalPages));
}

function choose_link(url, val){
    set_active(val, "info");
    link = url;
    var iframe = document.getElementById("observar");
    iframe.src = url;
}

function choose_elemets(val, text){
    set_active(val, "t-info");
    key = text;
    currentPage = 1;
    updateView()
}

function set_active(val, text){
    var info = document.getElementsByClassName(text);
    console.log(info)
    for(i = 0; i < info.length; ++i){
        info[i].className = info[i].className.replace(" active", "");
    }

    info[val].className += " active";
}

// function choose_link(url, val){
//     set_active(val, "info");
//     link = url;
//     var iframe = document.getElementById("observar");
//     iframe.src = url;
// }

// function choose_elemets(val, text){
//     set_active(val, "t-info");
//     frontend_challenges.innerHTML = "";
//     var path= './FrontEnd-Mentor/' + text + "/";
//     var data = data_front_end[text]
//     var value = 0;
//     data.forEach(folder => {
//         var path_to_search = path + folder + "/index.html'";
//         var name = folder.replace(/[-#$]/g, ' ')
//         const liElement = document.createElement('ul');
//         liElement.innerHTML = `<li class="info" onclick="choose_link('${path_to_search},${value})">${name}</li>`;
//         frontend_challenges.appendChild(liElement);
//         value +=1 ;
//     });
// }

// function set_active(val, text){
//     var info = document.getElementsByClassName(text);
//     console.log(info)
//     for(i = 0; i < info.length; ++i){
//         info[i].className = info[i].className.replace(" active", "");
//     }

//     info[val].className += " active";
// }