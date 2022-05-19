(() => {
  const menuBtnRef = document.querySelector("[data-menu-mobile]");
  const mobilMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobilMenuRef.classList.toggle("is-open");
  });
})();
(() => {
  const menuBtnRef = document.querySelector("[data-menu-hidden]");
  const mobilMenuRef = document.querySelector("[menu-hidden]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = mobilMenuRef.classList.toggle("menu-open");
  });
})();
