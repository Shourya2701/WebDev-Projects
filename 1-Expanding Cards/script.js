const panels = document.querySelectorAll(".panel");

// console.log(panels[0]);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClassess();
    panel.classList.add("active");
  });
});

function removeActiveClassess() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
