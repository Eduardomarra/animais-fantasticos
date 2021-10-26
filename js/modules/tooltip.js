export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // criar tooltip box e inseri ao body
  createTooltipBox(e) {
    const tooltipBox = document.createElement("div");
    const textTooltip = e.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(event) {
    // cria a tooltipBox e coloca em uma propriedade
    this.createTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
