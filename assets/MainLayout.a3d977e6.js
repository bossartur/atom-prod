import{c as A,h as de,a as Tt,b as _t,d as Re,e as qt}from"./render.80a1dac8.js";import{e as m,af as _,a as q,aw as nt,d as U,t as Y,ax as Be,n as G,c as R,ay as P,v as Pe,az as H,b as x,aA as fe,aB as We,aC as V,aD as it,aE as Lt,a6 as Et,aF as zt,aG as kt,aH as ie,aI as xe,aJ as Qe,aK as Ce,aL as $e,aM as Se,P as $t,A as lt,aN as Vt,Z as le,Y as Bt,B as ve,E as B,G as X,H as O,U as Te,M as se,I as rt,u as ce,F as Pt,a7 as Mt,S as Ot,V as $,ag as Ne,O as N,T as Ht}from"./index.7456a36d.js";import{v as Dt,c as Ie,g as Ft,a as At,Q as Xe,b as Rt}from"./QBtn.9ffa1698.js";import{u as Me,Q as Wt}from"./mainStore.aeedea32.js";import{Q as Qt}from"./index.33d8b88d.js";var Nt=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:n.value},de(o.default))}}),It=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:n.value,role:"toolbar"},de(o.default))}});function Xt(){const e=q(!nt.value);return e.value===!1&&U(()=>{e.value=!0}),e}const at=typeof ResizeObserver!="undefined",Ue=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ve=A({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function i(d){d===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),l){const{offsetWidth:d,offsetHeight:c}=l;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=R();if(at===!0){let d;const c=a=>{l=f.$el.parentNode,l?(d=new ResizeObserver(i),d.observe(l),u()):a!==!0&&G(()=>{c(!0)})};return U(()=>{c()}),Y(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),Be}else{let a=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",i,P.passive),c=void 0)},w=function(){a(),l&&l.contentDocument&&(c=l.contentDocument.defaultView,c.addEventListener("resize",i,P.passive),u())};const d=Xt();let c;return U(()=>{G(()=>{l=f.$el,l&&w()})}),Y(a),f.trigger=i,()=>{if(d.value===!0)return _("object",{style:Ue.style,tabindex:-1,type:"text/html",data:Ue.url,"aria-hidden":"true",onLoad:w})}}}}),Ut=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=R(),t=Pe(fe,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const i=q(parseInt(e.heightHint,10)),u=q(!0),f=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),d=m(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?i.value:0;const s=i.value-t.scroll.value.position;return s>0?s:0}),c=m(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),a=m(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=m(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=m(()=>{const s=t.rows.value.top,C={};return s[0]==="l"&&t.left.space===!0&&(C[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(C[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function v(s,C){t.update("header",s,C)}function h(s,C){s.value!==C&&(s.value=C)}function L({height:s}){h(i,s),v("size",s)}function S(s){a.value===!0&&h(u,!0),n("focusin",s)}x(()=>e.modelValue,s=>{v("space",s),h(u,!0),t.animate()}),x(d,s=>{v("offset",s)}),x(()=>e.reveal,s=>{s===!1&&h(u,e.modelValue)}),x(u,s=>{t.animate(),n("reveal",s)}),x(t.scroll,s=>{e.reveal===!0&&h(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&v("size",i.value),v("space",e.modelValue),v("offset",d.value),Y(()=>{t.instances.header===b&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const s=Tt(o.default,[]);return e.elevated===!0&&s.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(_(Ve,{debounce:0,onResize:L})),_("header",{class:w.value,style:y.value,onFocusin:S},s)}}});function Yt(e,o,n){let l;function t(){l!==void 0&&(We.remove(l),l=void 0)}return Y(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},We.add(l)}}}const jt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Kt=["beforeShow","show","beforeHide","hide"];function Gt({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:i}){const u=R(),{props:f,emit:d,proxy:c}=u;let a;function w(s){e.value===!0?h(s):y(s)}function y(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(d("update:modelValue",!0),a=s,G(()=>{a===s&&(a=void 0)})),(f.modelValue===null||C===!1)&&v(s)}function v(s){e.value!==!0&&(e.value=!0,d("beforeShow",s),l!==void 0?l(s):d("show",s))}function h(s){if(f.disable===!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(d("update:modelValue",!1),a=s,G(()=>{a===s&&(a=void 0)})),(f.modelValue===null||C===!1)&&L(s)}function L(s){e.value!==!1&&(e.value=!1,d("beforeHide",s),t!==void 0?t(s):d("hide",s))}function S(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):s===!0!==e.value&&(s===!0?v:L)(a)}x(()=>f.modelValue,S),n!==void 0&&Dt(u)===!0&&x(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&U(()=>{S(f.modelValue)});const b={show:y,hide:h,toggle:w};return Object.assign(c,b),b}const Jt=[null,document,document.body,document.scrollingElement,document.documentElement];function Zt(e,o){let n=Ft(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Jt.includes(n)?window:n}function ut(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function st(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function _e(){if(re!==void 0)return re;const e=document.createElement("p"),o=document.createElement("div");Ie(e,{width:"100%",height:"200px"}),Ie(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),re=n-l,re}function eo(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let ee=0,qe,Le,te,Ee=!1,Ye,je,Ke,I=null;function to(e){oo(e)&&it(e)}function oo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Lt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const u=o[i];if(eo(u,l))return l?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ge(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Ee!==!0&&(Ee=!0,requestAnimationFrame(()=>{Ee=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(te===void 0||o!==window.innerHeight)&&(te=n-o,document.scrollingElement.scrollTop=l),l>te&&(document.scrollingElement.scrollTop-=Math.ceil((l-te)/8))}))}function Je(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);qe=st(window),Le=ut(window),Ye=o.style.left,je=o.style.top,Ke=window.location.href,o.style.left=`-${qe}px`,o.style.top=`-${Le}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,P.passiveCapture),window.visualViewport.addEventListener("scroll",ae,P.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ge,P.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",to,P.notPassive),e==="remove"&&(V.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ae,P.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,P.passiveCapture)):window.removeEventListener("scroll",Ge,P.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ye,o.style.top=je,window.location.href===Ke&&window.scrollTo(qe,Le),te=void 0)}function no(e){let o="add";if(e===!0){if(ee++,I!==null){clearTimeout(I),I=null;return}if(ee>1)return}else{if(ee===0||(ee--,ee>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){I!==null&&clearTimeout(I),I=setTimeout(()=>{Je(o),I=null},100);return}}Je(o)}function io(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,no(o))}}}function lo(){let e=null;const o=R();function n(){e!==null&&(clearTimeout(e),e=null)}return Et(n),Y(n),{removeTimeout:n,registerTimeout(l,t){n(),At(o)===!1&&(e=setTimeout(l,t))}}}const ro={dark:{type:Boolean,default:null}};function ao(e,o){return m(()=>e.dark===null?o.dark.isActive:e.dark)}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},uo=Object.keys(Oe);Oe.all=!0;function Ze(e){const o={};for(const n of uo)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Oe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const so=["INPUT","TEXTAREA"];function et(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&so.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function co(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),zt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ze(e,o,n){const l=$e(e);let t,i=l.left-o.event.x,u=l.top-o.event.y,f=Math.abs(i),d=Math.abs(u);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=i<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=u<0?"up":"down":c.up===!0&&u<0?(t="up",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.down===!0&&u>0?(t="down",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.left===!0&&i<0?(t="left",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down"))):c.right===!0&&i>0&&(t="right",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=u,d=0,u=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:i,y:u},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let fo=0;var ke=_t({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&V.has.touch!==!0)return;function l(i,u){n.mouse===!0&&u===!0?it(i):(n.stop===!0&&Ce(i),n.prevent===!0&&Qe(i))}const t={uid:"qvtp_"+fo++,handler:o,modifiers:n,direction:Ze(n),noop:Be,mouseStart(i){et(i,t)&&kt(i)&&(ie(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(et(i,t)){const u=i.target;ie(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,u){if(V.is.firefox===!0&&xe(e,!0),t.lastEvt=i,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Qe(c),i.cancelBubble===!0&&Ce(c),Object.assign(c,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:c}}Ce(i)}const{left:f,top:d}=$e(i);t.event={x:f,y:d,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(i){if(t.event===void 0)return;const u=$e(i),f=u.left-t.event.x,d=u.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=i;const c=t.event.mouse===!0,a=()=>{l(i,c);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),co(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),c===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{L(),h()},50):L()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:v,synthetic:h}=ze(i,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const w=Math.abs(f),y=Math.abs(d);w!==y&&(t.direction.horizontal===!0&&w>y||t.direction.vertical===!0&&w<y||t.direction.up===!0&&w<y&&d<0||t.direction.down===!0&&w<y&&d>0||t.direction.left===!0&&w>y&&f<0||t.direction.right===!0&&w>y&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,u){if(t.event!==void 0){if(Se(t,"temp"),V.is.firefox===!0&&xe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ze(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=ze(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ie(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}V.has.touch===!0&&ie(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ze(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Se(o,"main"),Se(o,"temp"),V.is.firefox===!0&&xe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ue(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const tt=150;var vo=A({name:"QDrawer",inheritAttrs:!1,props:{...jt,...ro,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Kt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:l}){const t=R(),{proxy:{$q:i}}=t,u=ao(e,i),{preventBodyScroll:f}=io(),{registerTimeout:d,removeTimeout:c}=lo(),a=Pe(fe,H);if(a===H)return console.error("QDrawer needs to be child of QLayout"),H;let w,y=null,v;const h=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),L=m(()=>e.mini===!0&&h.value!==!0),S=m(()=>L.value===!0?e.miniWidth:e.width),b=q(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),s=m(()=>e.persistent!==!0&&(h.value===!0||ct.value===!0));function C(r,p){if(W(),r!==!1&&a.animate(),k(0),h.value===!0){const E=a.instances[oe.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),D(1),a.isContainer.value!==!0&&f(!0)}else D(0),r!==!1&&be(!1);d(()=>{r!==!1&&be(!0),p!==!0&&n("show",r)},tt)}function g(r,p){J(),r!==!1&&a.animate(),D(0),k(j.value*S.value),ye(),p!==!0?d(()=>{n("hide",r)},tt):c()}const{show:T,hide:z}=Gt({showing:b,hideOnRouteChange:s,handleShow:C,handleHide:g}),{addToHistory:W,removeFromHistory:J}=Yt(b,z,s),Q={belowBreakpoint:h,hide:z},M=m(()=>e.side==="right"),j=m(()=>(i.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),He=q(0),K=q(!1),me=q(!1),De=q(S.value*j.value),oe=m(()=>M.value===!0?"left":"right"),he=m(()=>b.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),pe=m(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),Z=m(()=>e.overlay===!1&&b.value===!0&&h.value===!1),ct=m(()=>e.overlay===!0&&b.value===!0&&h.value===!1),dt=m(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&K.value===!1?" hidden":"")),ft=m(()=>({backgroundColor:`rgba(0,0,0,${He.value*.4})`})),Fe=m(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),vt=m(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),mt=m(()=>{const r={};return a.header.space===!0&&Fe.value===!1&&(pe.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&vt.value===!1&&(pe.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),ht=m(()=>{const r={width:`${S.value}px`,transform:`translateX(${De.value}px)`};return h.value===!0?r:Object.assign(r,mt.value)}),pt=m(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),gt=m(()=>`q-drawer q-drawer--${e.side}`+(me.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(K.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(pe.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Fe.value===!0?" q-drawer--top-padding":""))),bt=m(()=>{const r=i.lang.rtl===!0?e.side:oe.value;return[[ke,Ct,void 0,{[r]:!0,mouse:!0}]]}),yt=m(()=>{const r=i.lang.rtl===!0?oe.value:e.side;return[[ke,Ae,void 0,{[r]:!0,mouse:!0}]]}),wt=m(()=>{const r=i.lang.rtl===!0?oe.value:e.side;return[[ke,Ae,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){St(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}x(h,r=>{r===!0?(w=b.value,b.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?(k(0),D(0),ye()):T(!1))}),x(()=>e.side,(r,p)=>{a.instances[p]===Q&&(a.instances[p]=void 0,a[p].space=!1,a[p].offset=0),a.instances[r]=Q,a[r].size=S.value,a[r].space=Z.value,a[r].offset=he.value}),x(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),x(()=>e.behavior+e.breakpoint,ge),x(a.isContainer,r=>{b.value===!0&&f(r!==!0),r===!0&&ge()}),x(a.scrollbarWidth,()=>{k(b.value===!0?0:void 0)}),x(he,r=>{F("offset",r)}),x(Z,r=>{n("onLayout",r),F("space",r)}),x(M,()=>{k()}),x(S,r=>{k(),we(e.miniToOverlay,r)}),x(()=>e.miniToOverlay,r=>{we(r,S.value)}),x(()=>i.lang.rtl,()=>{k()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(xt(),a.animate())}),x(L,r=>{n("miniState",r)});function k(r){r===void 0?G(()=>{r=b.value===!0?0:S.value,k(j.value*r)}):(a.isContainer.value===!0&&M.value===!0&&(h.value===!0||Math.abs(r)===S.value)&&(r+=j.value*a.scrollbarWidth.value),De.value=r)}function D(r){He.value=r}function be(r){const p=r===!0?"remove":a.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function xt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),me.value=!0,y=setTimeout(()=>{y=null,me.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ct(r){if(b.value!==!1)return;const p=S.value,E=ue(r.distance.x,0,p);if(r.isFinal===!0){E>=Math.min(75,p)===!0?T():(a.animate(),D(0),k(j.value*p)),K.value=!1;return}k((i.lang.rtl===!0?M.value!==!0:M.value)?Math.max(p-E,0):Math.min(0,E-p)),D(ue(E/p,0,1)),r.isFirst===!0&&(K.value=!0)}function Ae(r){if(b.value!==!0)return;const p=S.value,E=r.direction===e.side,ne=(i.lang.rtl===!0?E!==!0:E)?ue(r.distance.x,0,p):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,p)===!0?(a.animate(),D(1),k(0)):z(),K.value=!1;return}k(j.value*ne),D(ue(1-ne/p,0,1)),r.isFirst===!0&&(K.value=!0)}function ye(){f(!1),be(!0)}function F(r,p){a.update(e.side,r,p)}function St(r,p){r.value!==p&&(r.value=p)}function we(r,p){F("size",r===!0?e.miniWidth:p)}return a.instances[e.side]=Q,we(e.miniToOverlay,S.value),F("space",Z.value),F("offset",he.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",Z.value),n("miniState",L.value),w=e.showIfAbove===!0;const r=()=>{(b.value===!0?C:g)(!1,!0)};if(a.totalWidth.value!==0){G(r);return}v=x(a.totalWidth,()=>{v(),v=void 0,b.value===!1&&e.showIfAbove===!0&&h.value===!1?T(!1):r()})}),Y(()=>{v!==void 0&&v(),y!==null&&(clearTimeout(y),y=null),b.value===!0&&ye(),a.instances[e.side]===Q&&(a.instances[e.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push($t(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),bt.value)),r.push(Re("div",{ref:"backdrop",class:dt.value,style:ft.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>wt.value)));const p=L.value===!0&&o.mini!==void 0,E=[_("div",{...l,key:""+p,class:[pt.value,l.class]},p===!0?o.mini():de(o.default))];return e.elevated===!0&&b.value===!0&&E.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Re("aside",{ref:"content",class:gt.value,style:ht.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>yt.value)),_("div",{class:"q-drawer-container"},r)}}}),mo=A({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=R(),l=Pe(fe,H);if(l===H)return console.error("QPageContainer needs to be child of QLayout"),H;lt(Vt,!0);const t=m(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>_("div",{class:"q-page-container",style:t.value},de(o.default))}});const{passive:ot}=P,ho=["both","horizontal","vertical"];var po=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ho.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;x(()=>e.scrollTarget,()=>{d(),f()});function u(){l!==null&&l();const w=Math.max(0,ut(t)),y=st(t),v={top:w-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:w,left:y},n.directionChanged=n.direction!==h,n.delta=v,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=Zt(i,e.scrollTarget),t.addEventListener("scroll",c,ot),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,ot),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[y,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{v(y),l=null}}}const{proxy:a}=R();return x(()=>a.$q.lang.rtl,u),U(()=>{i=a.$el.parentNode,f()}),Y(()=>{l!==null&&l(),d()}),Object.assign(a,{trigger:c,getPosition:()=>n}),Be}}),go=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=R(),t=q(null),i=q(l.screen.height),u=q(e.container===!0?0:l.screen.width),f=q({position:0,direction:"down",inflectionPoint:0}),d=q(0),c=q(nt.value===!0?0:_e()),a=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=m(()=>c.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),v=m(()=>c.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=T,e.onScroll!==void 0&&n("scroll",T)}}function L(g){const{height:T,width:z}=g;let W=!1;i.value!==T&&(W=!0,i.value=T,e.onScrollHeight!==void 0&&n("scrollHeight",T),b()),u.value!==z&&(W=!0,u.value=z),W===!0&&e.onResize!==void 0&&n("resize",g)}function S({height:g}){d.value!==g&&(d.value=g,b())}function b(){if(e.container===!0){const g=i.value>d.value?_e():0;c.value!==g&&(c.value=g)}}let s=null;const C={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:i,containerHeight:d,scrollbarWidth:c,totalWidth:m(()=>u.value+c.value),rows:m(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,T,z){C[g][T]=z}};if(lt(fe,C),_e()>0){let z=function(){g=null,T.classList.remove("hide-scrollbar")},W=function(){if(g===null){if(T.scrollHeight>l.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(z,300)},J=function(Q){g!==null&&Q==="remove"&&(clearTimeout(g),z()),window[`${Q}EventListener`]("resize",W)},g=null;const T=document.body;x(()=>e.container!==!0?"add":"remove",J),e.container!==!0&&J("add"),Bt(()=>{J("remove")})}return()=>{const g=qt(o.default,[_(po,{onScroll:h}),_(Ve,{onResize:L})]),T=_("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(Ve,{onResize:S}),_("div",{class:"absolute-full",style:y.value},[_("div",{class:"scroll",style:v.value},[T])])]):T}}});const bo={class:"bg-zinc-800 text-white p-3 col-span-2"},yo={class:"flex justify-center items-center gap-2"},wo={class:"text-3xl col"},xo={key:0,class:"col-span-5 bg-orange-500 hover:bg-orange-600 text-white p-3 flex items-center"},Co=ve({__name:"SidebarItem",props:{id:Number,title:String,subtitle:String,video_url:String,video_time:Number,description:String,open:Boolean,index:Number},setup(e){var u;const o=e,n=Me(),l=q(!1),t=((u=o.index)!=null?u:0)+1;function i(){l.value=!0,setTimeout(()=>{l.value=!1},500)}return(f,d)=>(B(),X("div",null,[O("div",{onClick:d[0]||(d[0]=c=>ce(n).openVideo(e.id)),class:"w-full grid grid-cols-7 mb-1 cursor-pointer"},[O("div",bo,[O("div",yo,[O("div",{class:"text-lg col"},Te(t)),O("div",wo,[e.open?(B(),se(Xe,{key:0,name:"bi-play-btn"})):(B(),se(Xe,{key:1,class:rt(l.value?"animate-bounce":""),name:"bi-lock"},null,8,["class"]))])])]),e.open?(B(),X("div",xo,Te(e.title),1)):(B(),X("div",{key:1,onClick:i,class:"col-span-5 bg-zinc-400 text-white p-3 flex items-center"},Te(e.title),1))])]))}}),So={class:"text-center mt-7"},To=O("div",{class:"font-semibold mb-5"},"\u0412\u0436\u0435 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0438? \u041E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E:",-1),_o=ve({__name:"NextVideo",setup(e){const o=Me();function n(){o.currentVideo=o.videolist[o.currentVideoIndex+1]}const l=q(!1);return U(()=>{l.value=!0,setTimeout(()=>{l.value=!1},500)}),(t,i)=>(B(),X("div",null,[O("div",So,[To,O("button",{onClick:n,class:rt([l.value?"animate-bounce":"animate-pulse","py-3 px-5 font-medium bg-orange-500 hover:bg-orange-600 text-white"])},"\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0435\u043F\u0456\u0437\u043E\u0434",2)])]))}}),qo={class:"p-5"},Lo=ve({__name:"CourseSidebar",setup(e){const o=Me();return(n,l)=>(B(),X("div",qo,[(B(!0),X(Pt,null,Mt(ce(o).videolist,(t,i)=>(B(),X("div",{key:t.id},[$(Co,{id:t.id,title:t.title,subtitle:t.subtitle,video_url:t.video_url,open:t.open,description:t.description,index:i},null,8,["id","title","subtitle","video_url","open","description","index"])]))),128)),ce(o).showButtonForNextVideo?(B(),se(_o,{key:0})):Ot("",!0)]))}}),Eo={class:"flex gap-3"},Mo=ve({__name:"MainLayout",setup(e){const o=q(!1);function n(){o.value=!o.value}return(l,t)=>{const i=Ne("el-avatar"),u=Ne("router-view");return B(),se(go,{view:"hHh lpR fFf"},{default:N(()=>[$(Ut,{class:"bg-white text-zinc-800 border-b mb-10"},{default:N(()=>[$(It,null,{default:N(()=>[$(Nt,{class:"font-semibold"},{default:N(()=>[Ht(" Atom University ")]),_:1}),O("div",Eo,[$(i,{icon:ce(Qt),size:35},null,8,["icon"]),$(Rt,{flat:"",onClick:n,color:"black",round:"",dense:"",icon:"menu"})])]),_:1})]),_:1}),$(vo,{"show-if-above":"",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=f=>o.value=f),side:"right",width:350},{default:N(()=>[$(Lo)]),_:1},8,["modelValue"]),$(mo,{class:"p-10 mt-10"},{default:N(()=>[$(Wt,{class:"mx-auto",style:{"max-width":"900px"}},{default:N(()=>[$(u)]),_:1})]),_:1})]),_:1})}}});export{Mo as default};
