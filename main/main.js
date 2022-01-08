(()=>{"use strict";function t(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}}function e(t,e,i){const s=document.documentElement,n="data-outside";function o(e){t.contains(e.target)||(t.removeAttribute(n),s.removeEventListener("click",o),i())}t.hasAttribute(n)||(setTimeout((()=>s.addEventListener("click",o))),t.setAttribute(n,""))}class i{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval((()=>{t.innerText=s,s+=i,s>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.internalLinks=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.internalLinks.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.internalLinks.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionItem=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionItem.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionItem.length&&(this.toggleAccordion(this.accordionItem[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,i){this.buttonOpen=document.querySelector(t),this.buttonClose=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutModal=this.clickOutModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickOutModal(t){t.target===this.containerModal&&this.toggleModal(t)}addModalEvent(){this.buttonOpen.addEventListener("click",this.eventToggleModal),this.buttonClose.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOutModal)}init(){return this.buttonOpen&&this.buttonClose&&this.containerModal&&this.addModalEvent(),this}}("[data-modal='abrir']","[data-modal='fechar']","[data-modal='container']").init(),new class{constructor(t){this.tooltip=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}createTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.createTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltip.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltip.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),new class{constructor(e){this.sections=document.querySelectorAll(e),this.halfWindow=.6*innerHeight,this.animateScroll=t(this.animateScroll.bind(this),200)}animateScroll(){this.sections.forEach((t=>{t.getBoundingClientRect().top-this.halfWindow<0&&t.classList.add("ativo")}))}init(){return this.animateScroll(),window.addEventListener("scroll",this.animateScroll),this}}("[data-anima='scroll']").init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(t){t.preventDefault();const i=t.currentTarget;i.classList.add(this.activeClass),e(i,this.events,(()=>{i.classList.remove(this.activeClass)}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(t){t.preventDefault(),this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),e(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addMenuMobileEvents(){this.events.forEach((t=>{this.menuButton.addEventListener(t,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}("[data-menu='button']","[data-menu='list']").init(),function(){const t=fetch("./json/animaisApi.json"),e=document.querySelector(".numeros-grid");t.then((t=>t.json())).then((t=>{t.forEach((t=>{e.appendChild(function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3> <span data-numero>${t.total}</span>`,e}(t))})),new i("[data-numero]",".numeros","ativo").init()})).catch((()=>{document.querySelector(".numeros").style.display="none"}))}();const s=new class extends class{constructor(t,e){this.slide=document.querySelector(t),this.slideWrapper=document.querySelector(e),this.distancia={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}transitionSlide(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.distancia.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0px, 0px)`}updatePosition(t){return this.distancia.movement=1.6*(this.distancia.startX-t),this.distancia.finalPosition-this.distancia.movement}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.distancia.startX=t.clientX,e="mousemove"):(this.distancia.startX=t.changedTouches[0].clientX,e="touchmove"),this.slideWrapper.addEventListener(e,this.onMove),this.transitionSlide(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.slideWrapper.removeEventListener(e,this.onMove),this.distancia.finalPosition=this.distancia.movePosition,this.transitionSlide(!0),this.changeSlideOnEnd()}addSlideEvents(){this.slideWrapper.addEventListener("mousedown",this.onStart),this.slideWrapper.addEventListener("touchstart",this.onStart),this.slideWrapper.addEventListener("mouseup",this.onEnd),this.slideWrapper.addEventListener("touchend",this.onEnd)}slidePosition(t){const e=(this.slideWrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slideConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slideIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.distancia.finalPosition=e.position,this.changeActiveClass(),this.slideWrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>t.element.classList.remove(this.activeClass))),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}changeSlideOnEnd(){this.distancia.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.distancia.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}onResize(){setTimeout((()=>{this.slideConfig(),this.changeSlide(this.index.active)}),1e3)}addResizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=t(this.onResize.bind(this),200)}init(){return this.bindEvents(),this.transitionSlide(!0),this.addSlideEvents(),this.slideConfig(),this.addResizeEvent(),this.changeSlide(0),this}}{constructor(t,e){super(t,e),this.bindControlEvents()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.slideWrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.slideWrapper.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(this.eventControl)}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".slide",".slide-wrapper");s.init(),s.addControl(".custom-controls")})();