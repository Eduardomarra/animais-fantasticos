import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = innerHeight * 0.6;

    this.animateScroll = debounce(this.animateScroll.bind(this), 200);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.halfWindow < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }

  init() {
    this.animateScroll();
    window.addEventListener("scroll", this.animateScroll);
    return this;
  }
}
