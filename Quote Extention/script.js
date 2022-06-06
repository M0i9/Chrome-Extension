    fetch("https://type.fit/api/quotes")
    .then(response=>response.json())
    .then(data=>{
    var randomIndex = Math.floor(Math.random()*data.length);
    document.getElementById("set").innerHTML = data[randomIndex].text;
});
