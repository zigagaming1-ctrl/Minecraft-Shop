/* ---------------------------------------------------------- */
/*   POPUP                                                    */
/* ---------------------------------------------------------- */

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/* ---------------------------------------------------------- */
/*   LIGHT / DARK MODE                                       */
/* ---------------------------------------------------------- */

function toggleTheme() {
    document.body.classList.toggle("light");
}

/* ---------------------------------------------------------- */
/*   HAMBURGER MENU                                           */
/* ---------------------------------------------------------- */

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show");
}

/* ---------------------------------------------------------- */
/*   PARTICLES BACKGROUND                                    */
/* ---------------------------------------------------------- */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

function makeParticles() {
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4
        });
    }
}

makeParticles();

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0,255,200,0.5)";

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
