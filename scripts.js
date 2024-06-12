document.addEventListener("DOMContentLoaded", function() {
    const username = "tu-usuario"; // Cambia esto a tu nombre de usuario de GitHub
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
