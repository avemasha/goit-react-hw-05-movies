"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{819:function(e,t,n){var r=n(861),o=n(757),a=n.n(o),i=n(243),s="32cb02de168bb06bb4749c02122c4141";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t.moviesId,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={fetchTrendingMovies:c,fetchMoviesDetails:u,fetchSearchMovie:l,fetchMovieCast:f,fetchMovieReviews:d};t.Z=p},257:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(439),o=n(87),a=n(791),i=n(292),s="searchMovie_search__input__0d74K",c="searchMovie_search__form__wo1u9";function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(433);function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var m=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],g=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},E=function(e){return b(e)||T(e)?e:null},_=function(e){return(0,a.isValidElement)(e)||b(e)||T(e)||y(e)};function O(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,v=o?"".concat(t,"--").concat(i):t,m=o?"".concat(n,"--").concat(i):n,h=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var e,t=f.current,n=v.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,a.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(h.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[d]),a.createElement(a.Fragment,null,r)}}function C(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},w=function(e){var t=e.theme,n=e.type,r=d(e,h);return a.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},x={info:function(e){return a.createElement(w,f({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(w,f({},e),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(w,f({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(w,f({},e),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,a.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,a.useState)([]),i=(0,r.Z)(o,2),s=i[0],c=i[1],u=(0,a.useRef)(null),l=(0,a.useRef)(new Map).current,v=function(e){return-1!==s.indexOf(e)},m=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:v,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function O(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=m.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,i=t.staleId,s=d(t,g);if(_(e)&&!function(e){return!u.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||l.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,p=s.updateId,v=s.data,h=m.props,L=function(){return O(c)},N=null==p;N&&m.count++;var R,M,P=f(f(f({},h),{},{style:h.toastStyle,key:m.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,r.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:p,data:v,closeToast:L,isIn:!1,className:E(s.className||h.toastClassName),bodyClassName:E(s.bodyClassName||h.bodyClassName),progressClassName:E(s.progressClassName||h.progressClassName),autoClose:!s.isLoading&&(R=s.autoClose,M=h.autoClose,!1===R||y(R)&&R>0?R:M),deleteToast:function(){var e=C(l.get(c),"removed");l.delete(c),I.emit(4,e);var t=m.queue.length;if(m.count=null==c?m.count-m.displayedToast:m.count-1,m.count<0&&(m.count=0),t>0){var r=null==c?m.props.limit:1;if(1===t||1===r)m.displayedToast++,w();else{var o=r>t?t:r;m.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,i=null,s={theme:t,type:n};return!1===o||(T(o)?i=o(s):(0,a.isValidElement)(o)?i=(0,a.cloneElement)(o,s):b(o)||y(o)?i=o:r?i=x.spinner():function(e){return e in x}(n)&&(i=x[n](s))),i}(P),T(s.onOpen)&&(P.onOpen=s.onOpen),T(s.onClose)&&(P.onClose=s.onClose),P.closeButton=h.closeButton,!1===s.closeButton||_(s.closeButton)?P.closeButton=s.closeButton:!0===s.closeButton&&(P.closeButton=!_(h.closeButton)||h.closeButton);var j=e;(0,a.isValidElement)(e)&&!b(e.type)?j=(0,a.cloneElement)(e,{closeToast:L,toastProps:P,data:v}):T(e)&&(j=e({closeToast:L,toastProps:P,data:v})),h.limit&&h.limit>0&&m.count>h.limit&&N?m.queue.push({toastContent:j,toastProps:P,staleId:i}):y(o)?setTimeout((function(){k(j,P,i)}),o):k(j,P,i)}}function k(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),I.emit(4,C(o,null==o.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return m.containerId=e.containerId,I.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&O(e)})).on(5,h).emit(2,m),function(){l.clear(),I.emit(3,m)}}),[]),(0,a.useEffect)((function(){m.props=e,m.isToastActive=v,m.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:v}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),o=n[0],i=n[1],s=(0,a.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],f=(0,a.useRef)(null),d=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(e),v=e.autoClose,m=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(t.nativeEvent),d.y=N(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?O():_()}}function _(){i(!0)}function O(){i(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&O(),d.x=k(t),d.y=N(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,a.useEffect)((function(){p.current=e})),(0,a.useEffect)((function(){return f.current&&f.current.addEventListener("d",_,{once:!0}),T(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",_),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return v&&m&&(w.onMouseEnter=O,w.onMouseLeave=_),y&&(w.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:_,pauseToast:O,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:w}}function M(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,i=void 0===o?"default":o,s=e.hide,c=e.className,l=e.style,d=e.controlledProgress,p=e.progress,v=e.rtl,h=e.isIn,g=e.theme,y=s||d&&0===p,b=f(f({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var E=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),_=T(c)?c({rtl:v,type:i,defaultClassName:E}):m(E,c);return a.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:_,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&r()}))}var j=function(e){var t=R(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,v=e.closeToast,h=e.transition,g=e.position,y=e.className,b=e.style,E=e.bodyClassName,_=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,I=e.updateId,w=e.role,x=e.progress,L=e.rtl,k=e.toastId,N=e.deleteToast,j=e.isIn,S=e.isLoading,Z=e.iconOut,D=e.closeOnClick,B=e.theme,A=m("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),z=T(y)?y({rtl:L,position:g,type:d,defaultClassName:A}):m(A,y),F=!!x||!u,H={closeToast:v,type:d,theme:B},U=null;return!1===s||(U=T(s)?s(H):(0,a.isValidElement)(s)?(0,a.cloneElement)(s,H):M(H)),a.createElement(h,{isIn:j,done:N,position:g,preventExitTransition:r,nodeRef:o},a.createElement("div",f(f({id:k,onClick:l,className:z},i),{},{style:b,ref:o}),a.createElement("div",f(f({},j&&{role:w}),{},{className:T(E)?E({type:d}):m("Toastify__toast-body",E),style:_}),null!=Z&&a.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},Z),a.createElement("div",null,c)),U,a.createElement(P,f(f({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:j,closeToast:v,hide:p,type:d,style:C,className:O,controlledProgress:F,progress:x||0}))))},S=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Z=O(S("bounce",!0)),D=(O(S("slide",!0)),O(S("zoom")),O(S("flip")),(0,a.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,o=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=m("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(s)?s({position:e,rtl:u,defaultClassName:t}):m(t,E(s))}return(0,a.useEffect)((function(){t&&(t.current=o.current)}),[]),a.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return a.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return a.createElement(j,f(f({},o),{},{isIn:i(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:Z,autoClose:5e3,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,A=new Map,z=[],F=1;function H(){return""+F++}function U(e){return e&&(b(e.toastId)||y(e.toastId))?e.toastId:H()}function q(e,t){return A.size>0?I.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function Q(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:U(t)})}function V(e){return function(t,n){return q(t,Q(e,n))}}function G(e,t){return q(e,Q("default",t))}G.loading=function(e,t){return q(e,Q("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=b(o)?G.loading(o,n):G.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:o}),i=b(t)?{render:t}:t;return r?G.update(r,f(f({},a),i)):G(i.render,f(f({},a),i)),o}G.dismiss(r)},u=T(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},G.success=V("success"),G.info=V("info"),G.error=V("error"),G.warning=V("warning"),G.warn=G.warning,G.dark=function(e,t){return q(e,Q("default",f({theme:"dark"},t)))},G.dismiss=function(e){A.size>0?I.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},G.isActive=function(e){var t=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=A.get(n||B);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({delay:100},r),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,q(i,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){B=e.containerId||e,A.set(B,e),z.forEach((function(e){I.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&I.off(0).off(1).off(5)}));var Y=n(184);function K(e){var t=e.forSearch,n=(e.search,(0,a.useState)("")),o=(0,r.Z)(n,2),u=o[0],l=o[1];return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)("form",{className:c,onSubmit:function(e){if(e.preventDefault(),!u)return G.warn("No keyword given to initialize search!",{position:"top-center"}),t(""),void e.currentTarget.reset();t(u),e.currentTarget.reset()},children:[(0,Y.jsx)("input",{type:"text",className:s,placeholder:"Search for a movie...",onChange:function(e){return l(e.target.value.trim())}}),(0,Y.jsx)(i.Z,{type:"submit",children:"Search"})]})})}var W=n(819),X=n(689),J=n(299),$="ListMovies_list__jtcUy";function ee(e){var t=e.search,n=(0,a.useState)(),i=(0,r.Z)(n,2),s=i[0],c=i[1],u=(0,a.useState)(!1),l=(0,r.Z)(u,2),f=l[0],d=l[1],p=(0,X.TH)();return(0,a.useEffect)((function(){t&&(d(!0),W.Z.fetchSearchMovie(t).then((function(e){0===e.results.length&&G.error("Sorry, nothing is found",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c(e.results)})).finally((function(){d(!1)})))}),[t]),(0,Y.jsxs)(Y.Fragment,{children:[f&&(0,Y.jsx)(J.Z,{}),s&&(0,Y.jsx)("ol",{className:$,children:s.map((function(e){return(0,Y.jsx)("li",{children:(0,Y.jsx)(o.rU,{to:"".concat(e.id),state:{from:p,label:"Go to Search"},children:e.title})},e.id)}))}),(0,Y.jsx)(D,{})]})}function te(){var e=(0,o.lr)(),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=n.get("search");return(0,Y.jsxs)("div",{children:[(0,Y.jsx)(K,{forSearch:function(e){return a({search:e})},search:i}),(0,Y.jsx)(ee,{search:i})]})}},292:function(e,t,n){n.d(t,{Z:function(){return a}});var r="button_button__FP1LY",o=n(184);function a(e){var t=e.type,n=e.onClick,a=e.children;return(0,o.jsx)("button",{className:r,type:t,onClick:n,children:a})}}}]);
//# sourceMappingURL=257.8d739ecf.chunk.js.map