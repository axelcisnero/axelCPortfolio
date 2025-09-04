document.addEventListener("DOMContentLoaded", () => {
  // crea un contenedor único para el footer
  const footerContainer = document.createElement("div");
  footerContainer.id = "footer-root";
  document.body.appendChild(footerContainer);

  // desde /html/index.html hacia /html/partials/footer.html
  fetch("./partials/footer.html")
    .then(res => {
      if (!res.ok) throw new Error(`Error ${res.status} al cargar footer`);
      return res.text();
    })
    .then(html => {
      footerContainer.innerHTML = html;
    })
    .catch(err => console.error("No se pudo cargar el footer:", err));
});