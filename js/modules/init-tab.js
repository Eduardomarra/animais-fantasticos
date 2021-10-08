export default function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");
  const activeClass = "ativo";

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }

  if (tabMenu.length && tabContent.length) {
    

    tabMenu.forEach((itemMenu, index) => {
      tabContent[0].classList.add(activeClass);
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
