const data = [
    { title: "Monitor de Apoyo a la docencia en el curso Analisis y Diseño de Algoritmos", 
      empresa: "Pontificia Universidad de Cali", lugar: "Cali, Valle del Cauca, Colombia", fecha: "02/2022-12/2022", 
      content: "Durante mi tiempo como monitor del curso de Análisis y Diseño de Algoritmos, desempeñé diversas funciones clave para apoyar tanto a los estudiantes como al profesor. Mi labor incluyó la calificación de tareas, asegurando una evaluación justa y precisa de los trabajos presentados. Además, proporcioné asistencia a los alumnos en temas teóricos y prácticos, facilitando su comprensión de conceptos complejos y la aplicación de estos en ejercicios específicos. Asimismo, empleé la programación en Python para resolver ejercicios de la plataforma UVA, demostrando la aplicación práctica de los algoritmos en problemas reales.",
      imageUrl: "./image/puj_cali.jpeg" },
    { title: "Monitor de Apoyo a la docencia en el curso Computación Científica/Métodos Numéricos",
      empresa: "Pontificia Universidad de Cali", lugar: "Cali, Valle del Cauca, Colombia", fecha: "07/2022-12/2022", 
      content: "Como monitor del curso de Métodos Numéricos/Computación Científica, brindé apoyo integral a los estudiantes en la comprensión de los métodos matemáticos fundamentales. Asistí a los alumnos en temas teóricos, ayudándoles a entender el cálculo de ceros, la resolución de sistemas de ecuaciones, la aproximación de integrales, la resolución de ecuaciones diferenciales ordinarias (EDOs) y la interpolación. Además, utilicé programación en Python y MATLAB para demostrar la aplicación práctica de estos métodos, facilitando así el aprendizaje y la implementación efectiva de las técnicas estudiadas.", 
      imageUrl: "./image/puj_cali.jpeg" },
];

const cardsContainer = document.getElementById('cards-container');
const pagination = document.getElementById('pagination');
let currentPage = 1;
const cardsPerPage = 3;

function renderCards(page) {
    cardsContainer.innerHTML = '';
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const cardsToRender = data.slice(start, end);

    cardsToRender.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url(${card.imageUrl})`;
        cardElement.innerHTML = `<h3 class="titulo">${card.title}</h3>
                                <div class="basic-info">
                                    <p class="empresa">${card.empresa}</p>
                                    <p class="tiempo">${card.fecha}</p>
                                    <p class="lugar">${card.lugar}</p>
                                </div>
                                <p class="contenido">${card.content}</p>`;
        cardsContainer.appendChild(cardElement);
    });
}

function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(data.length / cardsPerPage);

    if (totalPages <= 1) return;

    const createPageButton = (page) => {
        const button = document.createElement('button');
        button.innerText = page;
        button.addEventListener('click', () => {
            currentPage = page;
            updateView();
        });
        return button;
    };

    pagination.appendChild(createPageButton(1));

    if (currentPage > 3) {
        const dots = document.createElement('span');
        dots.innerText = '...';
        pagination.appendChild(dots);
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pagination.appendChild(createPageButton(i));
    }

    if (currentPage < totalPages - 2) {
        const dots = document.createElement('span');
        dots.innerText = '...';
        pagination.appendChild(dots);
    }

    pagination.appendChild(createPageButton(totalPages));
}

function updateView() {
    renderCards(currentPage);
    renderPagination();
}

updateView();

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