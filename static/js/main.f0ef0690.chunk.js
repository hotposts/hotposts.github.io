(this.webpackJsonpKhabar=this.webpackJsonpKhabar||[]).push([[1],{113:function(e,t,n){var r={"./ion-action-sheet.entry.js":[237,5],"./ion-alert.entry.js":[238,6],"./ion-app_8.entry.js":[239,7],"./ion-avatar_3.entry.js":[240,17],"./ion-back-button.entry.js":[241,18],"./ion-backdrop.entry.js":[242,43],"./ion-button_2.entry.js":[243,19],"./ion-card_5.entry.js":[244,20],"./ion-checkbox.entry.js":[245,21],"./ion-chip.entry.js":[246,22],"./ion-col_3.entry.js":[247,44],"./ion-datetime_3.entry.js":[248,10],"./ion-fab_3.entry.js":[249,23],"./ion-img.entry.js":[250,45],"./ion-infinite-scroll_2.entry.js":[251,46],"./ion-input.entry.js":[252,24],"./ion-item-option_3.entry.js":[253,25],"./ion-item_8.entry.js":[254,26],"./ion-loading.entry.js":[255,27],"./ion-menu_3.entry.js":[256,28],"./ion-modal.entry.js":[257,8],"./ion-nav_2.entry.js":[258,14],"./ion-popover.entry.js":[259,9],"./ion-progress-bar.entry.js":[260,29],"./ion-radio_2.entry.js":[261,30],"./ion-range.entry.js":[262,31],"./ion-refresher_2.entry.js":[263,11],"./ion-reorder_2.entry.js":[264,16],"./ion-ripple-effect.entry.js":[265,47],"./ion-route_4.entry.js":[266,32],"./ion-searchbar.entry.js":[267,33],"./ion-segment_2.entry.js":[268,34],"./ion-select_3.entry.js":[269,35],"./ion-slide_2.entry.js":[270,48],"./ion-spinner.entry.js":[271,13],"./ion-split-pane.entry.js":[272,49],"./ion-tab-bar_2.entry.js":[273,36],"./ion-tab_2.entry.js":[274,15],"./ion-text.entry.js":[275,37],"./ion-textarea.entry.js":[276,38],"./ion-toast.entry.js":[277,39],"./ion-toggle.entry.js":[278,12],"./ion-virtual-scroll.entry.js":[279,50]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=113,e.exports=c},117:function(e,t,n){var r={"./ion-icon.entry.js":[281,57]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=117,e.exports=c},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(43),s=n.n(c),a=n(10),o=n(3),i=n(28),l=n(107),d=n(7),j=n(4),u=n.n(j),b=n(8),h=n(6),p=n(27),O=n.n(p),f=n(101),x=n.n(f),m=n(14),g=n(9),v=n(103);const y=Object(g.a)({isOffline:!1,sort:"popular",theme:"dark",feeds:[],tags:[],selectedFeeds:{},feedOrder:[]},Object.entries(localStorage).reduce(((e,[t,n])=>{try{e[t]=JSON.parse(n)}catch(r){e[t]=n}return e}),{})),w=Object(v.a)(y),k=w.setGlobalState,N=w.useGlobalState,_=(e,t)=>{k(e,t);try{window.localStorage[e]=JSON.stringify(t)}catch(n){window.localStorage[e]=t}};window.addEventListener("online",(()=>_("isOffline",!1))),window.addEventListener("offline",(()=>_("isOffline",!0)));var S=n.p+"static/media/logo.9d11058d.svg";function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var D=r.createElement("path",{d:"M20.09 30.42l-6.1 3.53v18.87l58.8 33.95V60.85z",fill:"#ef8769"}),E=r.createElement("path",{d:"M72.79 0l-58.8 33.95v18.87l6.1 3.53 52.7-30.43z",fill:"#f4b691"});function F(e,t){let n=e.title,c=e.titleId,s=A(e,["title","titleId"]);return r.createElement("svg",C({viewBox:"0 0 86.77 86.77",ref:t,"aria-labelledby":c},s),n?r.createElement("title",{id:c},n):null,D,E)}const L=r.forwardRef(F);n.p;var I=n(1);const R=e=>Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.Browser.open({url:e});case 2:case"end":return t.stop()}}),t)}))),P=[{url:"khabar.github.io",title:"Progressive Web App",description:Object(I.jsxs)(I.Fragment,{children:["The Web-app/PWA version of ",Object(I.jsx)("strong",{children:"Khabar"})," app is also available and powered by GitHub Pages."]})},{logo:h.r,url:"github.com/khabar",title:"Source Code",description:"The complete source of this application is available in GitHub."},{logo:"https://usepanda.com/favicons/apple-touch-icon.png",url:"usepanda.com",title:"Data Source (API)",description:"Panda is freely available news reader where you can discover the best tools, resources and inspiration in the world of design and tech."},{logo:"https://ionicframework.com/img/meta/favicon-192x192.png",url:"ionicframework.com",title:"SDK/UI-toolkit (React)",description:"Ionic Framework is an open source UI toolkit for building cross-platform apps using web technologies."}];var T=()=>Object(I.jsxs)(o.i,{className:"about text-center",children:[Object(I.jsx)(L,{style:{height:"10vh",marginTop:"5vh"}}),Object(I.jsx)("div",{children:Object(I.jsxs)("blockquote",{children:[Object(I.jsx)("strong",{children:"Khabar"})," is a free and open-source cross-platform mobile-app/PWA for staying informed about the best tools and techniques in the world of design and technology, powered by ",Object(I.jsx)("b",{children:"Panda"})," and developed by"," ",Object(I.jsx)(o.c,{className:"inline-button",fill:"clear",onClick:R("https://himalay.com.np"),children:"Himalay Sunuwar"}),"."]})}),Object(I.jsx)("a",{href:"https://play.google.com/store/apps/details?id=np.com.himalay.khabar",target:"_system",rel:"noopener noreferrer",children:Object(I.jsx)("img",{style:{maxHeight:"80px"},alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"})}),Object(I.jsx)(o.q,{children:P.map((({logo:e,url:t,title:n,description:r})=>Object(I.jsxs)(o.o,{detail:!1,button:!0,onClick:R("https://".concat(t)),children:[Object(I.jsx)(o.b,{slot:"start",children:e?Object(I.jsx)("img",{alt:n,src:e}):Object(I.jsx)(L,{})}),Object(I.jsxs)(o.p,{children:[Object(I.jsx)("h2",{children:t}),Object(I.jsx)("h3",{children:n}),Object(I.jsx)("p",{children:r})]})]},n)))})]});var U=e=>{let t=Math.floor(((new Date).getTime()-new Date(e).getTime())/1e3),n=0;if(t<2)return"a moment ago";if(t<5)return"moments ago";if(t<60)return t+" seconds ago";if(t<120)return"a minute ago";if(t<3600){for(;t>=60;)t-=60,n+=1;return n+" minutes ago"}if(t<7200)return"an hour ago";if(t<86400){for(;t>=3600;)t-=3600,n+=1;return n+" hours ago"}if(t<172800)return"a day ago";if(t<604800){for(;t>=172800;)t-=172800,n+=1;return n+" days ago"}if(t<1209600)return"a week ago";if(t<2592e3){for(;t>=604800;)t-=604800,n+=1;return n+" weeks ago"}if(t<5184e3)return"a month ago";if(t<31536e3){for(;t>=2592e3;)t-=2592e3,n+=1;return n+" months ago"}return t<141912e4?"more than year ago":"never"};const B=e=>Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.Browser.open({url:e});case 2:case"end":return t.stop()}}),t)})));var W=({article:e})=>e._id?Object(I.jsxs)(o.e,{children:[e.image.normal?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("button",{className:"img-btn",onClick:B(e.source.targetUrl),children:Object(I.jsx)("img",{className:"card-img",alt:e.title||e.source.authorName||"x",src:e.image.normal})}),Object(I.jsxs)(o.p,{className:"item-text text-left",children:[Object(I.jsx)("h2",{children:e.title}),Object(I.jsx)("p",{children:e.description})]})]}):Object(I.jsx)(o.g,{className:"p-0",children:Object(I.jsxs)(o.o,{detail:!1,button:!0,onClick:B(e.source.targetUrl),lines:"none",children:[Object(I.jsx)(o.b,{className:"favicon",slot:"start",children:Object(I.jsx)("img",{alt:e.source.name,src:"https://www.google.com/s2/favicons?domain=".concat(e.source.targetUrl)})}),Object(I.jsxs)(o.p,{className:"item-text",children:[Object(I.jsx)("h2",{children:e.title}),Object(I.jsx)("p",{children:e.description})]})]})}),Object(I.jsxs)(o.f,{className:"item-footer",children:[Object(I.jsxs)("a",{className:"sub-link",href:e.source.sourceUrl,target:"_system",rel:"noopener noreferrer",children:[e.source.likesCount,Object(I.jsx)(o.n,{title:"Up-votes",icon:h.e,className:"up-arrow"}),e.source.commentsCount,Object(I.jsx)(o.n,{title:"Comments",style:{marginLeft:".15em"},icon:h.f})]})," ".concat(U(e.source.createdAt)," by "),Object(I.jsx)("a",{className:"sub-link",href:["reddit","redditprogramming"].includes("segment")?"https://reddit.com/u/".concat(e.source.username):e.source.authorUrl,target:"_system",rel:"noopener noreferrer",children:e.source.authorName||e.source.username})]})]}):Object(I.jsxs)(o.e,{children:[Object(I.jsx)(o.g,{className:"p-0",children:Object(I.jsxs)(o.o,{detail:!1,lines:"none",children:[Object(I.jsx)(o.b,{className:"favicon",slot:"start",children:Object(I.jsx)(o.D,{animated:!0})}),Object(I.jsxs)(o.p,{className:"item-text",children:[Object(I.jsx)("h2",{children:Object(I.jsx)(o.D,{animated:!0,style:{width:"50%"}})}),Object(I.jsx)("p",{children:Object(I.jsx)(o.D,{animated:!0,style:{width:"95%"}})})]})]})}),Object(I.jsx)(o.f,{className:"item-footer",children:Object(I.jsx)(o.D,{animated:!0,style:{width:"40%"}})})]});var M=()=>{const e=Object(r.useRef)(!1);return Object(r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e};const K="https://cors-anywhere.himalay.workers.dev/?https://api.usepanda.com",G={headers:{Origin:"https://khabar.github.io/"}};var z=function(){var e=Object(b.a)(u.a.mark((function e(t,n){var r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=500,c=n?Object(g.a)(Object(g.a)({},n),{},{headers:Object(g.a)(Object(g.a)({},n.headers||{}),G.headers)}):G,e.prev=2,e.next=5,fetch(K,c);case 5:r=e.sent.status,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:if(200!==r){e.next=19;break}return _("isOffline",!1),e.next=14,fetch(K+t,c);case 14:if(!(s=e.sent).ok){e.next=17;break}return e.abrupt("return",s.json());case 17:e.next=20;break;case 19:_("isOffline",!0);case 20:throw new Error("We encountered and error while trying to connect to the server.");case 21:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}();const H=function(){var e=Object(b.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z("/v4/articles?feeds=".concat(t,"&limit=30&page=1&sort=").concat(n)));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q="hide-footer",J=window.innerWidth;var $=({history:e})=>{var t,n;const c=M(),s=N("theme"),i=Object(d.a)(s,1)[0],l=N("sort"),j=Object(d.a)(l,1)[0],p=N("selectedFeeds"),f=Object(d.a)(p,1)[0],g=N("feedOrder"),v=Object(d.a)(g,1)[0],y=N("isOffline"),w=Object(d.a)(y,1)[0],C=Object(r.useState)(!1),A=Object(d.a)(C,2),D=A[0],E=A[1],F=Object(r.useState)(""),L=Object(d.a)(F,2),R=L[0],P=L[1],U=Object(r.useState)({open:!1,event:void 0}),B=Object(d.a)(U,2),K=B[0],G=B[1],z=Object(r.useState)(!1),$=Object(d.a)(z,2),X=$[0],Y=$[1],V=Object(r.useState)(0),Q=Object(d.a)(V,2),Z=Q[0],ee=Q[1],te=Object(r.useState)(!1),ne=Object(d.a)(te,2),re=ne[0],ce=ne[1],se=Object(r.useState)(""),ae=Object(d.a)(se,2),oe=ae[0],ie=ae[1],le=Object(r.useRef)(null),de=Object(r.useRef)(null),je=Object(r.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t,n=!0,r){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(n),e.prev=1,c=O()(f),e.next=5,H(t,r||j);case 5:s=e.sent,c[t].data=s,c[t].updatedAt=Date.now(),_("selectedFeeds",c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),ie(e.t0.message);case 14:return e.prev=14,E(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),[f,j]),ue=Object(r.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=f[t])&&!(null===(n=r.data)||void 0===n?void 0:n.length)||r&&Date.now()-(+r.updatedAt||0)>36e5)){e.next=5;break}return console.log("Fetching feed data for: "+r.title),e.next=5,je(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f,je]),be=Object(r.useCallback)((e=>()=>{const t=v.indexOf(R)+e;t>=0&&t<v.length&&P(v[t])}),[R,v]),he=()=>c.current&&G({open:!1,event:void 0}),pe=()=>Y(!1),Oe=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=3;break}return e.next=3,je(R,!1);case 3:t.detail.complete();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(b.a)(u.a.mark((function e(t){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.detail||0,r=n.scrollTop,Z<r?re||(null===(c=de.current)||void 0===c||c.classList.add(q),ce(!0)):re&&(null===(s=de.current)||void 0===s||s.classList.remove(q),ce(!1)),ee(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((()=>{let t;if(!v.length)return e.push("/feeds");if(!v.length){const e=Object.keys(f);_("feedOrder",e)}if(R&&!f[R]||!R){const e=v[0];P(e),ue(e).then(console.log).catch(console.error)}else ue(R).then(console.log).catch(console.error);return le.current&&(t=Object(o.P)({el:le.current,gestureName:"swipe-gesture",onMove:e=>{e.deltaX>J/2?be(-1)():e.deltaX<-J/2&&be(1)()}}),t.enable()),m.a.App.addListener("backButton",Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!X){e.next=4;break}pe(),e.next=9;break;case 4:return e.next=6,m.a.Modals.confirm({title:"Exit",message:"Are you sure you want to exit?",cancelButtonTitle:"No",okButtonTitle:"Yes"});case 6:t=e.sent,t.value&&m.a.App.exitApp();case 9:case"end":return e.stop()}}),e)})))),()=>{var e;null===(e=t)||void 0===e||e.destroy(),m.a.App.removeAllListeners()}}),[v,f,e,R,ue,be,X]);const xe=R&&(null===(t=f[R])||void 0===t?void 0:t.data)||[];return Object(I.jsxs)(o.s,{children:[Object(I.jsx)(o.m,{children:Object(I.jsxs)(o.I,{children:[Object(I.jsx)(o.d,{slot:"start",children:Object(I.jsx)(o.n,{title:"Khabar",slot:"icon-only",src:S})}),Object(I.jsx)(o.F,{children:R?null===(n=f[R])||void 0===n?void 0:n.title:"Khabar"}),Object(I.jsxs)(o.d,{slot:"end",children:[w&&Object(I.jsx)(o.n,{title:"Offline",icon:h.l}),Object(I.jsx)(o.c,{onClick:()=>{he(),(e=>{let t=window.localStorage.sort||"popular";document.body.classList.remove(t),t="popular"===t?"latest":"popular",document.body.classList.add(t),k("sort",t),window.localStorage.sort=t,e(t)})(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(R,!0,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},slot:"end",title:j[0].toUpperCase()+j.slice(1),children:Object(I.jsx)(o.n,{slot:"icon-only",ios:"popular"===j?h.p:h.z,md:"popular"===j?h.o:h.y})}),Object(I.jsxs)(o.t,{isOpen:K.open,event:K.event,onDidDismiss:he,children:[Object(I.jsxs)(o.o,{detail:!1,children:[Object(I.jsx)(o.p,{children:"Theme"}),Object(I.jsx)(o.H,{checked:"light"===i,color:"dark"===i?"light":"dark",onIonChange:()=>{he(),(()=>{let e=window.localStorage.theme||"dark";document.body.classList.remove(e),e="dark"===e?"light":"dark",document.body.classList.add(e),k("theme",e),window.localStorage.theme=e})()}})]}),Object(I.jsxs)(o.o,{detail:!1,button:!0,onClick:he,routerLink:"/feeds",children:[Object(I.jsx)(o.p,{children:"Feeds"}),Object(I.jsx)(o.n,{title:"Feed",md:h.a,ios:h.b,slot:"end"})]}),Object(I.jsxs)(o.o,{detail:!1,button:!0,onClick:he,routerLink:"/reorder",children:[Object(I.jsx)(o.p,{children:"Reorder"}),Object(I.jsx)(o.n,{title:"Reorder",md:h.v,ios:h.u,slot:"end"})]}),Object(I.jsxs)(o.o,{detail:!1,button:!0,onClick:()=>{he(),Y(!0)},children:[Object(I.jsx)(o.p,{children:"About"}),Object(I.jsx)(o.n,{title:"Reorder",icon:h.q,slot:"end"})]})]}),Object(I.jsx)(o.c,{onClick:e=>G({open:!0,event:e.nativeEvent}),slot:"end",title:"Menu",children:Object(I.jsx)(o.n,{slot:"icon-only",ios:h.m,md:h.n})})]})]})}),Object(I.jsxs)(o.i,{ref:le,className:"article-content",scrollEvents:!0,onIonScroll:x()(fe,200),children:[Object(I.jsx)(o.u,{slot:"fixed",onIonRefresh:Oe,children:Object(I.jsx)(o.v,{refreshingSpinner:"dots"})}),(!R||D)&&Object(I.jsx)(o.E,{className:"w-100",name:"dots",duration:30}),xe.length?xe.map((e=>Object(I.jsx)(W,{article:e},e._id))):[...new Array(12)].map(((e,t)=>Object(I.jsx)(W,{article:{}},"card"+t))),Object(I.jsx)(o.G,{isOpen:""!==oe,color:"danger",duration:15e3,onDidDismiss:()=>ie(""),message:oe,buttons:[{text:"Retry",handler:()=>{je(R).then((()=>console.log("Feeds fetched"))).catch(console.error)}}]})]}),Object(a.f)("desktop")&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(o.j,{vertical:"center",horizontal:"start",slot:"fixed",hidden:0===v.indexOf(R),children:Object(I.jsx)(o.k,{translucent:!0,onClick:be(-1),children:Object(I.jsx)(o.n,{icon:h.g})})}),Object(I.jsx)(o.j,{vertical:"center",horizontal:"end",slot:"fixed",hidden:v.indexOf(R)===v.length-1,children:Object(I.jsx)(o.k,{translucent:!0,onClick:be(1),children:Object(I.jsx)(o.n,{icon:h.h})})})]}),Object(I.jsx)(o.l,{children:Object(I.jsx)(o.B,{ref:de,className:"footer",scrollable:!0,value:R,onIonChange:e=>P(e.detail.value),children:v.map(((e,t)=>f[e]?Object(I.jsx)(o.C,{value:e,"data-index":""+t,title:f[e].title,children:Object(I.jsx)("img",{alt:f[e].title,src:f[e].icon})},"segmentBtn"+e):null))})}),Object(I.jsxs)(o.r,{isOpen:X,swipeToClose:!0,onDidDismiss:pe,children:[Object(I.jsx)(o.m,{children:Object(I.jsxs)(o.I,{children:[Object(I.jsx)(o.d,{slot:"start",children:Object(I.jsx)(o.n,{title:"Khabar",slot:"icon-only",src:S})}),Object(I.jsx)(o.F,{children:"About"}),Object(I.jsx)(o.d,{slot:"end",children:Object(I.jsx)(o.c,{onClick:pe,children:"Close"})})]})}),Object(I.jsx)(T,{})]})]})},X=n(104),Y=n(105),V=n.n(Y);const Q={minMatchCharLength:2,threshold:.4,keys:["title","description","categories"]},Z=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z("/v4/feeds/query?category=".concat(t.split("$").pop(),"&limit=100&page=1")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ee=()=>{const e=M(),t=N("feeds"),n=Object(d.a)(t,1)[0],c=N("selectedFeeds"),s=Object(d.a)(c,1)[0],a=N("feedOrder"),i=Object(d.a)(a,1)[0],l=N("tags"),j=Object(d.a)(l,1)[0],p=N("isOffline"),f=Object(d.a)(p,1)[0],x=Object(r.useState)(!1),v=Object(d.a)(x,2),y=v[0],w=v[1],k=Object(r.useState)(""),C=Object(d.a)(k,2),A=C[0],D=C[1],E=Object(r.useState)("source-category$featured"),F=Object(d.a)(E,2),L=F[0],R=F[1],P=Object(r.useState)([]),T=Object(d.a)(P,2),U=T[0],B=T[1],W=Object(r.useState)(""),K=Object(d.a)(W,2),G=K[0],H=K[1],q=Object(r.useState)([]),J=Object(d.a)(q,2),$=J[0],Y=J[1],ee=Object(r.useState)(""),te=Object(d.a)(ee,2),ne=te[0],re=te[1],ce=Object(r.useRef)(null),se=new X.a(n,Q),ae=e=>_("selectedFeeds",e),oe=e=>_("feedOrder",e),ie=Object(r.useCallback)(((e,t)=>{w(!0),Y((t||n).filter((({categories:t})=>t.includes(e)))),w(!1)}),[n]),le=Object(r.useCallback)(function(){var t=Object(b.a)(u.a.mark((function t(n=!0){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(n),t.prev=1,t.next=4,z("/v1/tags");case 4:return r=t.sent,t.next=7,Promise.all(r.reduce(((e,{_id:t,children:n})=>(n.length?e=e.concat(n.map((e=>Z(e._id)))):e.push(Z(t)),e)),[]));case 7:c=t.sent,_("feeds",V()([].concat(...c),"id")),_("tags",r),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),re(t.t0.message);case 15:return t.prev=15,e.current&&w(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})));return function(){return t.apply(this,arguments)}}(),[e]),de=(e,t)=>()=>{R(e),B(t),H(t.length?t[0]._id:""),ie(t.length?t[0]._id:e)},je=e=>()=>{H(e),ie(e)},ue=e=>{if(e.detail&&e.detail.value){const t=e.detail.value;D(t),Y(se.search(t).map((({item:e})=>e)))}else D(""),ie(G||L)},be=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(!1);case 2:t.detail.complete();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((()=>(n.length&&j.length?$.length||ie(L):le().then((()=>console.log("Feeds fetched"))).catch(console.error),m.a.App.addListener("backButton",Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object.keys(s).length){e.next=6;break}return e.next=3,m.a.Modals.confirm({title:"Exit",message:"Are you sure you want to exit?",cancelButtonTitle:"No",okButtonTitle:"Yes"});case 3:t=e.sent,t.value&&m.a.App.exitApp();case 6:case"end":return e.stop()}}),e)})))),()=>{m.a.App.removeAllListeners()})),[n,j,L,ie,$,s,le]);const he=Object.keys(s);return Object(I.jsxs)(o.s,{children:[Object(I.jsx)(o.m,{children:Object(I.jsxs)(o.I,{children:[Object(I.jsx)(o.d,{slot:"start",children:Object(I.jsx)(o.n,{title:"Khabar",slot:"icon-only",src:S})}),Object(I.jsx)(o.F,{children:"Feeds"}),Object(I.jsxs)(o.d,{slot:"end",children:[f&&Object(I.jsx)(o.n,{title:"Offline",icon:h.l}),Object(I.jsx)(o.c,{disabled:0===Object.keys(s).length,routerLink:"/home",children:"Done"})]})]})}),Object(I.jsxs)(o.i,{className:"feed-content",ref:ce,children:[Object(I.jsx)(o.A,{value:A,placeholder:"Type website name or topic",onIonChange:ue,onIonCancel:ue}),Object(I.jsx)(o.u,{slot:"fixed",onIonRefresh:be,children:Object(I.jsx)(o.v,{refreshingSpinner:"dots"})}),y&&Object(I.jsx)(o.E,{className:"w-100",name:"dots",duration:30}),""===A&&Object(I.jsxs)("div",{className:"text-center",children:[j.length?j.map((({_id:e,displayName:t,children:n},r)=>Object(I.jsx)(o.h,Object(g.a)(Object(g.a)({},L===e?{color:"secondary",outline:!0}:{}),{},{onClick:de(e,n),children:Object(I.jsx)(o.p,{children:t})}),e))):[...new Array(12)].map(((e,t)=>Object(I.jsx)(o.h,{children:Object(I.jsx)(o.D,{animated:!0,style:{width:Math.floor(Math.random()*(t+30))+20+"px"}})},"chips"+t))),U.length>0&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h4",{children:"Be more specific"}),U.map((({_id:e,displayName:t})=>Object(I.jsx)(o.h,Object(g.a)(Object(g.a)({className:"sub-tag"},G===e?{color:"secondary",outline:!0}:{}),{},{onClick:je(e),children:Object(I.jsx)(o.p,{children:t})}),e)))]})]}),$.length?$.map((e=>{return Object(I.jsxs)(o.o,{detail:!1,className:"w-100",children:[Object(I.jsx)(o.b,{slot:"start",children:Object(I.jsx)("img",{alt:e.title,src:e.icon})}),Object(I.jsxs)(o.p,{className:"ion-text-wrap",children:[Object(I.jsx)("h3",{children:e.title}),Object(I.jsx)("p",{children:e.description})]}),Object(I.jsx)(o.H,{slot:"end",checked:he.includes(e.id),onIonChange:(t=e,Object(b.a)(u.a.mark((function e(){var n,r,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.id,(r=O()(s))[n]?(delete r[n],c=[...i],a=c.indexOf(n),ae(r),a>-1&&(c.splice(a,1),oe(c))):(r[n]=t,ae(r),oe([...new Set([...i,n])]));case 3:case"end":return e.stop()}}),e)}))))})]},e.id);var t})):[...new Array(12)].map(((e,t)=>Object(I.jsxs)(o.o,{detail:!1,className:"w-100",children:[Object(I.jsx)(o.b,{slot:"start",children:Object(I.jsx)(o.D,{animated:!0})}),Object(I.jsxs)(o.p,{className:"ion-text-wrap",children:[Object(I.jsx)("h3",{children:Object(I.jsx)(o.D,{animated:!0,style:{width:"45%"}})}),Object(I.jsx)("p",{children:Object(I.jsx)(o.D,{animated:!0,style:{width:"85%"}})})]}),Object(I.jsx)(o.D,{slot:"end",animated:!0,style:{width:"10%"}})]},"skeleton"+t))),Object(I.jsx)(o.G,{isOpen:""!==ne,color:"danger",duration:15e3,onDidDismiss:()=>re(""),message:ne,buttons:[{text:"Retry",handler:()=>{le().then((()=>console.log("Feeds fetched"))).catch(console.error)}}]})]})]})};var te=({history:e})=>{const t=N("selectedFeeds"),n=Object(d.a)(t,1)[0],c=N("feedOrder"),s=Object(d.a)(c,1)[0],a=e=>_("feedOrder",e),i=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.detail){e.next=2;break}return e.abrupt("return");case 2:if(t.detail.from!==t.detail.to){e.next=4;break}return e.abrupt("return");case 4:(n=O()(s)).splice(t.detail.to,0,...n.splice(t.detail.from,1)),a(n),t.detail.complete();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((()=>{if(!s.length){const e=Object.keys(n);a(e)}}),[n,s]),Object(I.jsxs)(o.s,{children:[Object(I.jsx)(o.m,{children:Object(I.jsxs)(o.I,{children:[Object(I.jsx)(o.d,{slot:"start",children:Object(I.jsx)(o.n,{title:"Khabar",slot:"icon-only",src:S})}),Object(I.jsx)(o.F,{children:"Reorder"}),Object(I.jsx)(o.d,{slot:"end",children:Object(I.jsx)(o.c,{routerLink:"/home",children:"Done"})})]})}),Object(I.jsx)(o.i,{className:"feed-content",children:Object(I.jsx)(o.x,{disabled:!1,onIonItemReorder:i,children:s.map((e=>Object(I.jsxs)(o.o,{detail:!1,children:[Object(I.jsx)(o.b,{slot:"start",children:Object(I.jsx)("img",{alt:n[e].title,src:n[e].icon})}),Object(I.jsxs)(o.p,{className:"ion-text-wrap",children:[Object(I.jsx)("h3",{children:n[e].title}),Object(I.jsx)("p",{children:n[e].description})]}),Object(I.jsx)(o.w,{slot:"end"})]},e)))})})]})};n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234);var ne=()=>Object(I.jsx)(o.a,{children:Object(I.jsx)(l.a,{children:Object(I.jsxs)(o.z,{id:"main",children:[Object(I.jsx)(i.b,{path:"/feeds",component:ee,exact:!0}),Object(I.jsx)(i.b,{path:"/reorder",component:te,exact:!0}),Object(I.jsx)(i.b,{path:"/home",component:$,exact:!0}),Object(I.jsx)(i.a,{to:"/home"})]})})});const re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const n=e.installing;null!==n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}const se=window.localStorage.theme||"dark";document.body.classList.add(se),s.a.render(Object(I.jsx)(ne,{}),document.getElementById("root")),Object(a.f)("capacitor")||function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="".concat("","/service-worker.js");re?(!function(e,t){fetch(e).then((n=>{const r=n.headers.get("content-type");404===n.status||null!==r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>e.unregister())).then((()=>{window.location.reload()})).catch(console.error):ce(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})).catch(console.error)):ce(t,e)}))}}()}},[[235,3,4]]]);
//# sourceMappingURL=main.f0ef0690.chunk.js.map