(this.webpackJsonpslider=this.webpackJsonpslider||[]).push([[4],{55:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(56),r=n(12),i=n(1),c=n.n(i),o=n(41),s=function(e){var t=e.nextArrowStyle,n=e.performSlideNext;return c.a.createElement("div",{onClick:Object(o.debounce)(n,200),style:t},c.a.createElement("i",{className:"fas fa-chevron-right fa-2x"}))},l=function(e){var t=e.previousArrowStyle,n=e.performSlidePrevious;return c.a.createElement("div",{onClick:Object(o.debounce)(n,200),style:t},c.a.createElement("i",{className:"fas fa-chevron-left fa-2x"}))},u=n(44),f=n(45);function d(){var e=Object(u.a)(["\n  max-width:","%;\n  min-width:","%;\n  height:400px;\n  animation-name: ",";\n  animation-duration: 700ms;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n \n  "]);return d=function(){return e},e}function m(){var e=Object(u.a)(["\n  from {\n    transform:translateX(","%);\n  }\n  to {\n    transform:translateX(","%);\n  }\n  "]);return m=function(){return e},e}function b(){var e=Object(u.a)(["\n  height:200px;\n  width:100%;\n  box-shadow: rgba(0, 0, 0, 0.8) 3px 3px 10px inset;\n  border-left:5px solid transparent;\n  border-right:5px solid transparent;\n  "]);return b=function(){return e},e}function p(){var e=Object(u.a)(["\n  display:flex;\n  align-self:center;\n  height:400px;\n  overflow-X:hidden;\n  overflow-Y:hidden;\n  "]);return p=function(){return e},e}var v=function(e){var t=e.slideInfo,n=e.prevIndex,a=e.slideIndex,r=e.imagesToShow,i=(f.a.div(p()),f.a.img(b()),Object(f.b)(m(),n,a));f.a.div(d(),100/r,100/r,i);return c.a.createElement("div",{className:"CarouselContainer"},t.map((function(e,t){return c.a.createElement("div",null,t)})))};n(55);t.default=function(e){var t=e.images,n=e.imagesToShow;Object(i.useEffect)((function(){y(t),S(t)}),[t]);var o=Object(i.useState)(0),u=Object(r.a)(o,2),f=u[0],d=u[1],m=Object(i.useState)(0),b=Object(r.a)(m,2),p=b[0],h=b[1],j=Object(i.useState)([]),O=Object(r.a)(j,2),x=O[0],S=O[1],w=Object(i.useState)([]),g=Object(r.a)(w,2),E=g[0],y=g[1],N=Object(i.useState)(!1),I=Object(r.a)(N,2),k=I[0],A=I[1],C=Object(i.useState)(!0),T=Object(r.a)(C,2),X=T[0],J=T[1],P=Object(i.useState)([]),M=Object(r.a)(P,2),W=M[0],Y=M[1],q={opacity:k?1:0},z={opacity:X?1:0};return c.a.createElement("div",{className:"SliderWrapper"},c.a.createElement("div",{className:"Slider"},c.a.createElement(l,{performSlidePrevious:function(){if(Math.abs(f)-100===0&&A(!1),0!==f){var e=Object(a.a)(W).pop();S([].concat(Object(a.a)(x),[e])),J(!0),h(f),d(f+100)}},previousArrowStyle:q}),c.a.createElement(v,{slideInfo:E,prevIndex:p,slideIndex:f,imagesToShow:n}),c.a.createElement(s,{performSlideNext:function(){if(!(x.length<=n)){x.length<=n+1&&J(!1);var e=Object(a.a)(x),t=e.shift();Y([].concat(Object(a.a)(W),[t])),S(e),A(!0),h(f),d(f-100)}},nextArrowStyle:z})))}}}]);
//# sourceMappingURL=4.8dc6ddc5.chunk.js.map