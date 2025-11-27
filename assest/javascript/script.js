//HOME E HEADER
const bg = document.getElementById("home");
const menuBtn = document.querySelector('.menu-icon');
const mobileNav = document.getElementById('mobileNav');

const images = [
    "assest/img/bg1.jpg",
    "assest/img/bg2.jpg",
    "assest/img/bg3.jpg",
    "assest/img/bg4.jpg",
    "assest/img/bg6.jpg"
];

let index1 = 0;

function changeBackground() {
    bg.style.backgroundImage = `url(${images[index1]})`;
    index1 = (index1 + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 4000);



menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

//ESPECIALIDADES
const grid = document.querySelector('.services-grid');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// Pegamos a largura EXATA do card (incluindo margin/gap)
function getCardWidth() {
    const card = document.querySelector('.services-itens');
    const styles = window.getComputedStyle(card);
    const gap = parseInt(styles.marginRight) || 20; 
    return card.getBoundingClientRect().width + 20; // largura + gap
}

btnNext.addEventListener('click', () => {
    grid.scrollLeft += getCardWidth();
});

btnPrev.addEventListener('click', () => {
    grid.scrollLeft -= getCardWidth();
});


//EQUIPES
const grid1 = document.querySelector('.equipe-grid');
const btnPrev1 = document.querySelector('.btn-prev1');
const btnNext1 = document.querySelector('.btn-next1');

// Pegamos a largura EXATA do card (incluindo margin/gap)
function getCardWidth1() {
    const card1 = document.querySelector('.equipe-itens');
    const styles1 = window.getComputedStyle(card1);
    const gap1 = parseInt(styles1.marginRight) || 20; 
    return card1.getBoundingClientRect().width + 20; // largura + gap
}

btnNext1.addEventListener('click', () => {
    grid1.scrollLeft += getCardWidth1();
});

btnPrev1.addEventListener('click', () => {
    grid1.scrollLeft -= getCardWidth1();
});

// Botão flutuante simples – WhatsApp
(function(){
  const phone = "5591984544033";
  const msg = "Olá! Gostaria de agendar uma consulta.";
  const btn = document.getElementById("waFloatBtn");

  if(btn){
    btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
})();


// interacão do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        
        // Fechar menu mobile após clicar
            document.getElementById("mobileNav").classList.remove("active");
        });
    });


