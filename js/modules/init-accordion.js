export default function initAccordion() {
    const accordionItem = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    if (accordionItem.length) {
        accordionItem.forEach((item) => {
        accordionItem[0].classList.add(activeClass);
        accordionItem[0].nextElementSibling.classList.add(activeClass);

        item.addEventListener("click", activeAccordion);
        });
    }
}
