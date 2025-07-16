document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");
      actualizarBloqueados();
    });
  });

  function actualizarBloqueados() {
    const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"))
                           .map(r => r.dataset.id);

    ramos.forEach(ramo => {
      const prerreq = ramo.dataset.prerreq;

      if (prerreq) {
        const requisitos = prerreq.split(",");
        const cumplido = requisitos.every(req => aprobados.includes(req));

        if (cumplido) {
          ramo.classList.remove("bloqueado");
        } else {
          ramo.classList.add("bloqueado");
          ramo.classList.remove("aprobado");
        }
      }
    });
  }

  // Inicial
  actualizarBloqueados();
});
