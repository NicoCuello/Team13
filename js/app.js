document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los campos del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Realizar validación básica (puedes personalizarla según tus necesidades)
        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Enviar el formulario (puedes implementar esto para enviarlo a través de una API externa)
        alert("Formulario enviado correctamente.");
        contactForm.reset(); // Limpiar el formulario después del envío
    });
});
