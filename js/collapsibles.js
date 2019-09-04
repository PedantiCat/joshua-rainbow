
window.addEventListener("load", function () {
    var collapsibles = document.getElementsByClassName("collapsible-button");
    var contents = document.getElementsByClassName("collapsible-content");

    function toggleCollapsible(i) {
        console.log(i);
        console.log(contents[i].style.display);
        if (contents[i].style.display == "block") {
            collapsibles[i].innerHTML = collapsibles[i].innerHTML.replace("-","+");
            collapsibles[i].style.background = "#c8c8c8";
            contents[i].style.display = "none";
            localStorage.setItem("Collapsible #"+i, false);        
        } else {
            collapsibles[i].innerHTML = collapsibles[i].innerHTML.replace("+","-");
            collapsibles[i].style.background = "#fff";
            contents[i].style.display = "block";
            localStorage.setItem("Collapsible #"+i, true);        
        }
    }
        
    function getCollapsibleListener(i) {
        return function () {
            toggleCollapsible(i);
        }
    }

    for (var i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", getCollapsibleListener(i));
        if (localStorage.getItem("Collapsible #"+i) == "true") {
            toggleCollapsible(i);
        }
    }
})