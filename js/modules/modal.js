export default function initModal() {
  const buttonOpen = document.querySelector("[data-modal='abrir']");
  const buttonClose = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function modalClickOut(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (buttonOpen && buttonClose && containerModal) {
    buttonOpen.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", modalClickOut);
  }
}
