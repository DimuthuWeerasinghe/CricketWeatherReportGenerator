function weather() {
    const location = document.getElementById("searchBar").value;
    console.log(location);
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=927a746baa784acd9d185531241509&q=${location}`)
        .then(response => {
            if (!response.ok) {
                console.log("Response Not OK!");
                return;
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("currentImg").src = data.current.condition.icon;
            document.getElementById("currentText").textContent = data.current.condition.text;
        })
        .catch(error => {
            console.log("Error: ", error);
        });
}
