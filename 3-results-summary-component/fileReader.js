fetch('./data.json')
    .then((response) => response.json())
    .then((json) => setStuff(json));

function setData(json) {
    var elements = document.getElementsByClassName("partScore");
    for(var i = 0; i < json.length; i++) {
        console.log(json[i]);
        elements[i].children[0].children[0].src = json[i].icon;
        elements[i].children[0].children[1].innerHTML = json[i].category;
        elements[i].children[1].children[0].innerHTML = json[i].score;
    }
}