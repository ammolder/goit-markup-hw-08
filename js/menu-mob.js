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
// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-hidden-open]"),
//     // closeMenuBtn: document.querySelector("[data-menu-close]"),
//     // menu: document.querySelector("[data-menu]"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   // refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     document.body.classList.toggle("menu-open");
//     // refs.menu.classList.toggle("is-hidden");
//   }
// })();
