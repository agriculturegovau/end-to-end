(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1292],{5152:function(e,t,r){"use strict";r.d(t,{Oo:function(){return f}});var n=r(7294),i=r(8870),o=r(9065),l=r(917),a=r(8153),d=r(9154);var c={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"};const s=()=>(0,l.tZ)(o.XC,{color:"border",weight:"bold",css:c}),u=({children:e,"aria-label":t})=>(0,l.tZ)("nav",{"aria-label":t},(0,l.tZ)(a.kC,{as:"ol",gap:.5,alignItems:"center"},e)),h=e=>{const{children:t,href:r}=e;return(0,l.tZ)(a.xu,{as:"li"},r?(0,l.tZ)(d.hh,e):(0,l.tZ)(d.xv,null,t))},f=({"aria-label":e="breadcrumb",links:t})=>(0,l.tZ)(u,{"aria-label":e},t.map((({label:e,...r},o)=>(0,l.tZ)(n.Fragment,{key:o},0==o?null:(0,l.tZ)(s,null),(0,l.tZ)(h,r,e,o===t.length-1?(0,l.tZ)(i.TX,null," (current page)"):null)))))},897:function(e,t,r){"use strict";r.d(t,{E$:function(){return g},J1:function(){return h},Qy:function(){return u},gN:function(){return m},i$:function(){return s},nd:function(){return f}});var n=r(5753),i=r(917),o=r(8153),l=r(8275),a=r(7294),d=r(9154),c=r(9065);const s=({children:e,invalid:t,id:r})=>(0,i.tZ)(o.Kq,{gap:.5,paddingLeft:t?1:void 0,borderLeft:t,borderLeftWidth:"xl",id:r,css:(0,i.iv)({borderLeftColor:t?l.PK.error:void 0},"","")},e),u=({as:e="label",children:t,htmlFor:r,required:n,secondaryLabel:o})=>{const l=(0,a.useMemo)((()=>o||(n?void 0:"(optional)")),[n,o]);return(0,i.tZ)(d.xv,{as:e,htmlFor:r,display:"flex",gap:.25,fontWeight:"bold"},t,l?(0,i.tZ)(d.xv,{color:"muted"},l):null)},h=({children:e,id:t})=>(0,i.tZ)(d.xv,{display:"block",color:"muted",id:t},e),f=({children:e,id:t,invalid:r,valid:n})=>(0,i.tZ)(o.kC,{gap:.5,alignItems:"center"},r?(0,i.tZ)(c.z$,{color:"error",size:"md"}):null,(0,i.tZ)(d.xv,{display:"block",color:p({invalid:r,valid:n}),id:t},e)),p=({invalid:e,valid:t})=>e?"error":t?"success":void 0,m=({children:e,hint:t,id:r,invalid:n,label:o,secondaryLabel:l,message:a,required:d,valid:c})=>{const{fieldId:p,hintId:m,messageId:g}=b(r),Z=v({required:d,fieldId:p,message:a,messageId:g,hint:t,hintId:m,invalid:n});return(0,i.tZ)(s,{invalid:n},(0,i.tZ)(u,{htmlFor:p,secondaryLabel:l,required:d},o),t?(0,i.tZ)(h,{id:m},t):null,a&&(n||c)?(0,i.tZ)(f,{id:g,invalid:n,valid:c},a):null,"function"===typeof e?e(Z):e)},b=e=>{const t=(0,n.M)(e);return{fieldId:e||`field-${t}`,hintId:`field-${t}-hint`,messageId:`field-${t}-message`}},v=({required:e,fieldId:t,message:r,messageId:n,hint:i,hintId:o,invalid:l})=>({"aria-required":Boolean(e),"aria-invalid":Boolean(l),"aria-describedby":[r?n:null,i?o:null].filter(Boolean).join(" "),id:t}),g={xs:"4.3rem",sm:"6.3rem",md:"10rem",lg:"18rem",xl:"24rem"}},1008:function(e,t,r){"use strict";r.d(t,{o:function(){return d}});var n=r(7294),i=r(897),o=r(8275),l=r(917);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const d=(0,n.forwardRef)((function({label:e,required:t,hint:r,message:n,invalid:o,valid:d,block:s,maxWidth:u,id:h,...f},p){const m=c({block:s,maxWidth:u,invalid:o,valid:d});return(0,l.tZ)(i.gN,{label:e,required:Boolean(t),hint:r,message:n,invalid:o,valid:d,id:h},(e=>(0,l.tZ)("input",a({ref:p,css:m},e,f))))})),c=({block:e,maxWidth:t,invalid:r,valid:n,multiline:l})=>({appearance:"none",boxSizing:"border-box",paddingLeft:(0,o.XH)(1),paddingRight:(0,o.XH)(1),margin:0,backgroundColor:o.PK.lightBackgroundBody,borderWidth:o.TV.borderWidth.lg,borderStyle:"solid",borderColor:o._X.borderInput,borderRadius:o.TV.borderRadius,color:o.PK.lightForegroundText,maxWidth:t?i.E$[t]:"12.8125rem",fontFamily:o.TV.font.body,...o.lB.input.md,...e&&{maxWidth:"none",display:"block",width:"100%"},...r?{backgroundColor:o.PK.errorMuted,borderColor:o.PK.error}:n?{backgroundColor:o.PK.successMuted,borderColor:o.PK.success}:void 0,...l&&{lineHeight:o.TV.lineHeight.default,paddingTop:(0,o.XH)(.5),paddingBottom:(0,o.XH)(.5),height:"auto,",minHeight:"6rem"},"&:disabled":{cursor:"not-allowed",opacity:.3},"&:focus":o.lB.outline})},5753:function(e,t,r){"use strict";r.d(t,{M:function(){return c}});var n=r(7294);function i(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var o=i()?n.useLayoutEffect:n.useEffect,l=!1,a=0,d=function(){return++a};function c(e){var t=e||(l?d():null),r=(0,n.useState)(t),i=r[0],a=r[1];return o((function(){null===i&&a(d())}),[]),(0,n.useEffect)((function(){!1===l&&(l=!0)}),[]),null!=i?String(i):void 0}},5732:function(e,t,r){"use strict";var n=r(4730),i=r(7294),o=r(4866),l=r(5944),a=["linkComponent","link","as","dark","type","block","className","children","onClick"],d=(0,i.forwardRef)((function(e,t){e.linkComponent;var r=e.link,i=e.as,d=void 0===i?"primary":i,c=(e.dark,e.type,e.block,e.className),s=e.children,u=e.onClick;(0,n.Z)(e,a);return void 0===r?(0,l.tZ)(o.zx,{onClick:u,variant:d,className:c,children:s}):(0,l.tZ)(o.ZP,{variant:d,href:r,className:c,children:s})}));d.displayName="AUbutton",t.Z=d},7510:function(e,t,r){"use strict";var n=r(9499),i=r(4730),o=r(6439),l=(r(7294),r(5944)),a=["level","size","children"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var t=e.level,r=e.size,n=e.children,d=(0,i.Z)(e,a);return(0,l.tZ)(o.X,c(c({as:"h".concat(t),fontSize:r},d),{},{children:n}))};s.displayName="AUheading",t.Z=s},3824:function(e,t,r){"use strict";r.d(t,{f:function(){return l}});var n=r(8153),i=r(1867),o=r(5944),l=function(e){var t=e.navigator,r=e.gap,l=void 0===r?1:r,a=e.reversed,d=e.children;return(0,o.tZ)(i.o,{children:a?(0,o.BX)(o.HY,{children:[(0,o.tZ)(i.s,{columnSpan:{xs:12,md:8},children:(0,o.tZ)(n.Kq,{gap:l,children:d})}),t?(0,o.tZ)(i.s,{columnSpan:{xs:12,md:4,lg:3},columnStart:t?{lg:10}:void 0,children:t}):null]}):(0,o.BX)(o.HY,{children:[t?(0,o.tZ)(i.s,{columnSpan:{xs:12,md:4,lg:3},children:t}):null,(0,o.tZ)(i.s,{columnSpan:{xs:12,md:8},columnStart:t?{lg:5}:void 0,children:(0,o.tZ)(n.Kq,{gap:l,children:d})})]})})}},2265:function(e,t,r){"use strict";var n=r(917),i=r(8275),o=r(5944);t.Z=function(){return(0,o.tZ)("hr",{css:(0,n.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.TV.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})}},9885:function(e,t,r){"use strict";r.d(t,{H1:function(){return h},H3:function(){return f},P:function(){return u},n:function(){return s}});var n=r(9499),i=r(8275),o=r(6439),l=r(9154),a=(r(7294),r(5944));function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return(0,a.tZ)(l.xv,c({as:"p",fontSize:"md",color:"muted",maxWidth:"42rem"},e))},u=function(e){return(0,a.tZ)(l.xv,c({as:"p",maxWidth:i.TV.maxWidth.bodyText},e))},h=function(e){return(0,a.tZ)(o.H1,c({maxWidth:"42rem"},e))},f=function(e){return(0,a.tZ)(o.H3,c({maxWidth:"42rem"},e))}},4209:function(e,t,r){"use strict";r(7294);var n=r(1008),i=r(5944),o=function(e){e.id;var t=e.label,r=(e.type,e.error),o=e.width,l=(e.number,e.block),a=(e.dark,e.hint),d=(e.children,e.ref);return(0,i.tZ)(n.o,{label:t,hint:a,block:l,maxWidth:o,message:null===r||void 0===r?void 0:r.message,ref:d})};o.displayName="TextInput",t.Z=o},4933:function(e,t,r){"use strict";r.d(t,{h:function(){return s}});var n=r(9499),i=r(4730),o=r(7294),l=r(5944),a=["children","style"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var t=e.children,r=e.style,n=(0,i.Z)(e,a);return(0,l.tZ)("div",c(c({style:c({display:"flex"},r)},n),{},{children:o.Children.toArray(t).map((function(e,t,r){return(0,l.tZ)("div",{style:{marginRight:t<r.length?"1em":void 0},children:e},t)}))}))}},2429:function(e,t,r){"use strict";r.d(t,{R:function(){return h}});r(7294);var n=r(8153),i=r(9154),o=r(1163),l=r(5944),a=function(e){var t=e.backHref,r=(0,o.useRouter)();return(0,l.tZ)(n.xu,{children:(0,l.tZ)(i.hh,{onClick:function(){if(t)return r.push(t);r.back()},children:"\u2190 Back"})})},d=r(7510),c=r(5152),s=function(e){var t=e.items;return(0,l.tZ)(c.Oo,{links:t})},u=r(3824),h=function(e){var t=e.title,r=e.children,n=e.backHref,i=e.breadcrumbs,o=e.frontmatter,c=e.backbreadcrumb,h=void 0===c||c,f=e.navigator;return(0,l.BX)(u.f,{navigator:f,children:[i?(0,l.tZ)(s,{items:i}):null,h?(0,l.tZ)(a,{backHref:n}):null,void 0===o?null:o,(0,l.tZ)(d.Z,{size:"xxl",level:"1",paddingTop:1,children:t}),r]})}},3742:function(e,t,r){"use strict";r.d(t,{C3:function(){return c},Fy:function(){return d},Ps:function(){return l},Sb:function(){return a}});r(7294);var n=r(7510),i=r(6103),o=r(5944),l=["Have you previously exported goods from Australia?","What do you want to export?","What is your role in the supply chain?","Where do you want to export it?","Suggested for you"],a=["Personalisation preferences","Notification preferences","Information sharing preferences"],d=["Establishment details","Commodities","Add persons","Compliance","Confirm"],c=function(e){var t=e.pages,r=e.progress;return(0,o.BX)(o.HY,{children:[(0,o.tZ)(n.Z,{level:3,size:"md",style:{marginBottom:"1em"},children:"Your progress"}),(0,o.tZ)(i.YF,{items:t.map((function(e,t){return{label:e,status:r<t?"todo":r>t?"done":"doing"}}))})]})}},4029:function(e,t,r){"use strict";r.r(t);var n=r(5732),i=r(2429),o=r(4933),l=r(7510),a=r(2265),d=r(4209),c=r(3742),s=r(9154),u=r(9885),h=r(5944);t.default=function(){return(0,h.BX)(i.R,{title:"Establishment details",navigator:(0,h.tZ)(c.C3,{pages:c.Fy,progress:0}),frontmatter:(0,h.tZ)("strong",{children:"Register an establishment"}),children:[(0,h.BX)(u.n,{children:["Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an."," "]}),(0,h.tZ)(l.Z,{level:2,size:"xl",children:"Trading name/s"}),(0,h.tZ)("p",{children:"Details must match the trading name/s on your ABN registration."}),(0,h.tZ)(d.Z,{id:"trading_name",label:"Trading name",type:"text",width:"xl"}),(0,h.tZ)("p",{children:(0,h.tZ)(s.hh,{href:"/todo",children:"Add another trading name"})}),(0,h.tZ)(l.Z,{level:2,size:"xl",children:"Phone and email"}),(0,h.tZ)("p",{children:"At least one contact number is required."}),(0,h.tZ)(d.Z,{id:"work_phone",label:"Work phone",type:"text",width:"xl"}),(0,h.tZ)(d.Z,{id:"mobile_phone",label:"Mobile phone",type:"text",width:"lg"}),(0,h.tZ)(d.Z,{id:"email_address",label:"Email address",type:"text",width:"md"}),(0,h.tZ)(l.Z,{level:2,size:"xl",children:"Postal address"}),(0,h.tZ)("p",{children:"At least one contact number is required."}),(0,h.tZ)(d.Z,{id:"address",label:"Postal address",type:"text",width:"xl"}),(0,h.tZ)(d.Z,{id:"suburb",label:"Suburb, town or city",type:"text",width:"lg"}),(0,h.tZ)(d.Z,{id:"state",label:"State or territory",type:"text",width:"md"}),(0,h.tZ)(d.Z,{id:"postcode",label:"Postcode",type:"text",width:"sm"}),(0,h.tZ)(a.Z,{}),(0,h.tZ)("div",{style:{marginTop:"3em"},children:(0,h.BX)(o.h,{children:[(0,h.tZ)(n.Z,{link:"/register-establishment/commodities",children:"Continue"}),(0,h.tZ)(n.Z,{as:"secondary",children:"Save and continue later"}),(0,h.tZ)(n.Z,{as:"tertiary",children:"Cancel"})]})})]})}},7393:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-establishment/establishment-details",function(){return r(4029)}])}},function(e){e.O(0,[3634,6103,9774,2888,179],(function(){return t=7393,e(e.s=t);var t}));var t=e.O();_N_E=t}]);