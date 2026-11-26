document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((open) => open.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
