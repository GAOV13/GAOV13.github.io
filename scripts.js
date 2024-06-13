function choose_link(url, val){
    var info = document.getElementsByClassName("info");
    for(i = 0; i < info.length; ++i){
        info[i].className = info[i].className.replace(" active", "");
    }

    info[val].className = info[val].className.replace(" inactive", "");
    info[val].className += " active";
    link = url;
    var iframe = document.getElementById("observar");
    iframe.src = url;
}