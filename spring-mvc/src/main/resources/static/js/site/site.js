const usuarioProfilePictures = document.querySelectorAll(
  ".usuario-profile-picture"
);
//action="/pages/game/save/delete"
usuarioProfilePictures.forEach((form, index) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (confirm("Tem certeza que deseja excluir o save?")) {
      fetch("http://localhost:8080/pages/game/save/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: e.target.children[0].value }),
      })
        .then((resonse) => resonse.json())
        .then(() => {
          window.location.reload();
        });
    }
  });
});
