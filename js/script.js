import initAminateScroll from "./modules/animate-scroll.js";
import TabNav from "./modules/init-tab.js";
import Accordion from "./modules/init-accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchAnimais from "./modules/fetch-animais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initAminateScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchAnimais();
