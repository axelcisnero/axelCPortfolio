document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.createElement("div");
  footerContainer.id = "footer-root";
  document.body.appendChild(footerContainer);

  fetch("../html/partials/footer.html") // ajusta la ruta si tu index.html está en otra carpeta
    .then(res => {
      if (!res.ok) throw new Error(`Error ${res.status} al cargar footer`);
      return res.text();
    })
    .then(html => {
      footerContainer.innerHTML = html;
    })
    .catch(err => console.error("No se pudo cargar el footer:", err));
});
