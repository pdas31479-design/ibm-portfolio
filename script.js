function addRecommendation() {
    let name = document.getElementById("name").value.trim();
    let recommendation = document.getElementById("new_recommendation").value.trim();

    if (recommendation === "") {
        alert("Please enter a recommendation.");
        return;
    }

    let recommendationContainer = document.getElementById("all_recommendations");

    let newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";

    if (name !== "") {
        newRecommendation.innerHTML = `<p>"${recommendation}"</p><h4>- ${name}</h4>`;
    } else {
        newRecommendation.innerHTML = `<p>"${recommendation}"</p>`;
    }

    recommendationContainer.appendChild(newRecommendation);

    document.getElementById("name").value = "";
    document.getElementById("new_recommendation").value = "";

    showPopup(true);
}

function showPopup(show) {
    let popup = document.getElementById("popup");

    if (show) {
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
    } else {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }
}
