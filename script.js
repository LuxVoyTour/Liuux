document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.opacity = "0.8";
      setTimeout(() => {
        btn.style.opacity = "1";
      }, 150);
    });
  });
});