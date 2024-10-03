function abrir() {
    let menu = document.getElementById("menulat");
    let menua = document.getElementById("menua")
    let logo = document.getElementById("logo")
    let fecharitem = document.getElementById("closeinmenuitens");
    logo.style.margin = "25%"
    menu.style.display = "block"
    menua.style.display = "none"
    fecharitem.style.display = "block"
 
}
function fechar() {
    let menu = document.getElementById("menulat");
    let menua = document.getElementById("menua")
    let logo = document.getElementById("logo")
    logo.style.margin = "10%"
    menu.style.display = "none"
    let fecharitem = document.getElementById("closeinmenuitens");
    menua.style.display = "block"
    fecharitem.style.display = "none"
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const themeLink = document.getElementById("theme-link");
    const icon1 = document.getElementById("modepage");
    const icon2 = document.getElementById("modepage2");
    
    if (savedTheme) {
        themeLink.setAttribute("href", savedTheme);
        if (savedTheme === "Light.css") {
            icon1.style.display = "none";
            icon2.style.display = "block";
        } else {
            icon1.style.display = "block";
            icon2.style.display = "none";
        }
    }
});

function togglemode() {
    const themeLink = document.getElementById("theme-link");
    const darkTheme = "Dark.css";
    const lightTheme = "Light.css";
    const icon1 = document.getElementById("modepage");
    const icon2 = document.getElementById("modepage2");
    
    if (themeLink.getAttribute("href") === darkTheme) {
        themeLink.setAttribute("href", lightTheme);
        localStorage.setItem("theme", lightTheme);
        icon1.style.display = "none";
        icon2.style.display = "block";
    } else {
        themeLink.setAttribute("href", darkTheme);
        localStorage.setItem("theme", darkTheme);
        icon1.style.display = "block";
        icon2.style.display = "none";
    }
}




function calcIdade() {
    let sobre = document.getElementById("sobre");
    let dataAtual = new Date();
    let nascimento = new Date(2005, 7, 9); 

    let mesAtual = dataAtual.getMonth();
    let mesNascimento = nascimento.getMonth();
    let anoAtual = dataAtual.getFullYear();
    let anoNascimento = nascimento.getFullYear();
    let idade;
    
    if (mesAtual < mesNascimento) {
        idade = anoAtual - anoNascimento - 1;
        sobre.innerHTML = `Olá! Me chamo Vinicius, mas pode me chamar de Venem, atualmente eu tenho ${idade} anos, eu sou um programador que adora estudar novas tecnologias`;
    } else {
        idade = anoAtual - anoNascimento;
        sobre.innerHTML = `Olá! Me chamo Vinicius, mas pode me chamar de Venem, atualmente eu tenho ${idade} anos, eu sou um programador que adora estudar novas tecnologias`;
    }
    
}
calcIdade();

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    // Função para atualizar os slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            // Adiciona a classe 'slideactive' ao slide atual e remove dos outros
            if (index === currentSlide) {
                slide.classList.add('slideactive');
                slide.classList.remove('slide');
            } else {
                slide.classList.remove('slideactive');
                slide.classList.add('slide');
            }
        });
    }

    // Evento para o botão "Próximo"
    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Retorna ao primeiro slide
        }
        updateSlides();
    });

    // Evento para o botão "Anterior"
    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Vai para o último slide
        }
        updateSlides();
    });

    // Chama a função inicialmente para exibir o slide correto
    updateSlides();
});