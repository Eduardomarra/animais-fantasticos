export default function initAminateScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  const halfWindow = innerHeight * 0.6; 

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }

  if (sections.length) {
    animateScroll();
    document.addEventListener("scroll", animateScroll);
  }
}
