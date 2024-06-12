document.addEventListener("DOMContentLoaded", function() {
    const username = "GAOV13"; // Cambia esto a tu nombre de usuario de GitHub
    const reposList = document.getElementById("repos-list");
    
    // Palabras clave para filtrar los repositorios
    const keywords = ["mentor", "uva"]; // Ajusta estas palabras clave según tus necesidades

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            // Filtrar los repositorios basados en las palabras clave
            const filteredRepos = data.filter(repo => {
                return keywords.some(keyword => repo.name.toLowerCase().includes(keyword.toLowerCase()));
            });

            filteredRepos.forEach(repo => {
                const listItem = document.createElement("li");
                listItem.textContent = repo.name;
                reposList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});