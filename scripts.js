document.addEventListener("DOMContentLoaded", function() {
    const username = "GAOV13"; //
    const reposList = document.getElementById("repos-list");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const listItem = document.createElement("li");
                listItem.textContent = repo.name;
                reposList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
