document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");

      // Actualizar los ramos bloqueados
      actualizarBloqueados();
    });
  });

  function actualizarBloqueados() {
    const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"))
                           .map(r => r.dataset.id);

    ramos.forEach(ramo => {
      const prerreq = ramo.dataset.prerreq;
      if (prerreq) {
        if (aprobados.includes(prerreq)) {
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
