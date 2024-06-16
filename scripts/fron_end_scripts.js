data_front_end = {
    "NEWBIE": ["base-apparel-coming-soon-master", "interactive-rating-component-main", "nft-preview-card-component-main",
               "order-summary-component-main", "product-preview-card-component-main", "qr-code-component-main",
               "results-summary-component-main"
              ],
    "Junior": ["newsletter-sign-up-with-success-message-main"],
};

const frontend_challenges = document.getElementById("frontend-challenge")


function choose_link(url, val){
    set_active(val, "info");
    link = url;
    var iframe = document.getElementById("observar");
    iframe.src = url;
}

function choose_elemets(val, text){
    set_active(val, "t-info");
    frontend_challenges.innerHTML = "";
    var path= './FrontEnd-Mentor/' + text + "/";
    var data = data_front_end[text]
    var value = 0;
    data.forEach(folder => {
        var path_to_search = path + folder + "/index.html'";
        var name = folder.replace(/[-#$]/g, ' ')
        const liElement = document.createElement('ul');
        liElement.innerHTML = `<li class="info" onclick="choose_link('${path_to_search},${value})">${name}</li>`;
        frontend_challenges.appendChild(liElement);
        value +=1 ;
    });
}

function set_active(val, text){
    var info = document.getElementsByClassName(text);
    for(i = 0; i < info.length; ++i){
        info[i].className = info[i].className.replace(" active", "");
    }

    info[val].className += " active";
}