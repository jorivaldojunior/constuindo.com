 // Animação de scroll para seções
 document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => observer.observe(element));
});

// Função para abrir/fechar o menu mobile
function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");
}

// Envio personalizado via WhatsApp
function sendWhatsAppMessage(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Olá, temos mais um orçamento!
    
    *Nome*: ${name}
    *Email*: ${email}
    *Mensagem*: ${message}`;

    const whatsappUrl = `https://wa.me/5581991152307?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
}