document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function getAprobados() {
    return Array.from(document.querySelectorAll(".ramo.aprobado"))
      .map(r => r.dataset.id);
  }

  function actualizarBloqueados() {
    const aprobados = getAprobados();

    ramos.forEach(ramo => {
      const prerreq = ramo.dataset.prerreq;
      if (prerreq) {
        const requisitos = prerreq.split(",");
        const desbloqueado = requisitos.every(req => aprobados.includes(req));
        if (desbloqueado) {
          ramo.classList.remove("bloqueado");
        } else {
          if (!ramo.classList.contains("bloqueado")) {
            ramo.classList.remove("aprobado");
            ramo.classList.add("bloqueado");
          }
        }
      }
    });
  }

  ramos.forEach(ramo => {
    if (!ramo.classList.contains("bloqueado")) {
      ramo.addEventListener("click", () => {
        ramo.classList.toggle("aprobado");
        actualizarBloqueados();
      });
    }
  });

  actualizarBloqueados();
});
