export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referencia ao objeto
    // da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // abre ou fecha modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fechar modal ao clicar fora
  clickOutModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
