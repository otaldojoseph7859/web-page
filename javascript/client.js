document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("who-am-i-popup");
    const closeButton = popup.querySelector(".close-btn");

    // Selecionar o link correto no footer
    const whoAmILink = document.querySelector('footer a[href="#who_am_i"]');

    if (whoAmILink) {
        whoAmILink.addEventListener("click", function (event) {
            event.preventDefault(); // Impede que a página role até a seção
            popup.style.display = "block"; // Exibe o pop-up
        });
    }

    // Função para fechar o pop-up
    function closePopup() {
        popup.style.display = "none";
    }

    // Fechar o pop-up ao clicar no botão de fechar
    closeButton.addEventListener("click", closePopup);

    // Fechar ao clicar fora do pop-up
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Fechar o pop-up ao pressionar a tecla "Esc"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("what_is_my_goal_popup");
    const closeButton = popup.querySelector(".close-btn");

    // Selecionar o link correto no footer
    const what_is_my_goal_link = document.querySelector('footer a[href="#what_is_my_goal"]');

    if (what_is_my_goal_link) {
        what_is_my_goal_link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede que a página role até a seção
            popup.style.display = "block"; // Exibe o pop-up
        });
    }

    // Função para fechar o pop-up
    function closePopup() {
        popup.style.display = "none";
    }

    // Fechar o pop-up ao clicar no botão de fechar
    closeButton.addEventListener("click", closePopup);

    // Fechar ao clicar fora do pop-up
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Fechar o pop-up ao pressionar a tecla "Esc"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("my_proposals_popup");
    const closeButton = popup.querySelector(".close-btn");

    // Selecionar o link correto no footer
    const my_proposals_link = document.querySelector('footer a[href="#my_proposals"]');

    if (my_proposals_link) {
        my_proposals_link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede que a página role até a seção
            popup.style.display = "block"; // Exibe o pop-up
        });
    }

    // Função para fechar o pop-up
    function closePopup() {
        popup.style.display = "none";
    }

    // Fechar o pop-up ao clicar no botão de fechar
    closeButton.addEventListener("click", closePopup);

    // Fechar ao clicar fora do pop-up
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Fechar o pop-up ao pressionar a tecla "Esc"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    // Agora o código só roda depois que o DOM estiver carregado
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const mensagem = document.querySelector("#mensagem");
    const botao = document.querySelector("#button");

    if (!nome || !email || !telefone || !mensagem || !botao) {
        console.error("Erro: Um ou mais elementos do formulário não foram encontrados!");
        return;
    }

    botao.addEventListener("click", function () {
        sendMail();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    const inputs = form.querySelectorAll("input, textarea");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                input.style.border = "2px solid red";
                isValid = false;
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        if (isValid) {
            sendMail();
        } else {
            alert("Preencha todos os campos obrigatórios!");
        }
    });
});

function sendMail() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, email, telefone, mensagem })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao enviar mensagem.");
    });
}