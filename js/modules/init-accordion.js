export default class Accordion {
  constructor(list) {
    this.accordionItem = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona evento ao accordion
  addAccordionEvent() {
    this.accordionItem.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionItem.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionItem[0]);
      this.addAccordionEvent();
    }
  }
}
