"use strict";(self.webpackChunkdeepumandal=self.webpackChunkdeepumandal||[]).push([[666],{6666:function(e,n,t){t.r(n),t.d(n,{default:function(){return Pe}});var i=t(168),r=t(2791),o=t(1560),a=t(184),s=function(){return(0,a.jsx)(o.E,{src:"./images/experience.png"})},l=t(9457),c=t(2478),d=t(1917),u=t(6762),f=t(824),x=t(9589),m=t(884),h=t(56),p=t(1413),v=t(4925),g=t(9439),b=t(3144),y=t(5671),N=Object.defineProperty,Z=function(e,n,t){return function(e,n,t){n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t};function j(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function w(e,n,t){var i=e+1;return t&&i>=n&&(i=0),i}function I(e,n,t){var i=e-1;return t&&i<0&&(i=n),i}var C="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,E=function(e){return e},O=(0,b.Z)((function e(){var n=this;(0,y.Z)(this,e),Z(this,"descendants",new Map),Z(this,"register",(function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}})),Z(this,"unregister",(function(e){n.descendants.delete(e);var t=j(Array.from(n.descendants.keys()));n.assignIndex(t)})),Z(this,"destroy",(function(){n.descendants.clear()})),Z(this,"assignIndex",(function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),Z(this,"count",(function(){return n.descendants.size})),Z(this,"enabledCount",(function(){return n.enabledValues().length})),Z(this,"values",(function(){return Array.from(n.descendants.values()).sort((function(e,n){return e.index-n.index}))})),Z(this,"enabledValues",(function(){return n.values().filter((function(e){return!e.disabled}))})),Z(this,"item",(function(e){if(0!==n.count())return n.values()[e]})),Z(this,"enabledItem",(function(e){if(0!==n.enabledCount())return n.enabledValues()[e]})),Z(this,"first",(function(){return n.item(0)})),Z(this,"firstEnabled",(function(){return n.enabledItem(0)})),Z(this,"last",(function(){return n.item(n.descendants.size-1)})),Z(this,"lastEnabled",(function(){var e=n.enabledValues().length-1;return n.enabledItem(e)})),Z(this,"indexOf",(function(e){var t,i;return e&&null!=(i=null==(t=n.descendants.get(e))?void 0:t.index)?i:-1})),Z(this,"enabledIndexOf",(function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))})),Z(this,"next",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=w(e,n.count(),t);return n.item(i)})),Z(this,"nextEnabled",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=n.item(e);if(i){var r=w(n.enabledIndexOf(i.node),n.enabledCount(),t);return n.enabledItem(r)}})),Z(this,"prev",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=I(e,n.count()-1,t);return n.item(i)})),Z(this,"prevEnabled",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=n.item(e);if(i){var r=I(n.enabledIndexOf(i.node),n.enabledCount()-1,t);return n.enabledItem(r)}})),Z(this,"registerNode",(function(e,t){if(e&&!n.descendants.has(e)){var i=j(Array.from(n.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);var r=(0,p.Z)({node:e,index:-1},t);n.descendants.set(e,r),n.assignIndex(i)}}))})),k=t(9886),_=t(4591);var A=(0,k.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),D=(0,g.Z)(A,2),P=D[0],T=D[1];var M=(0,k.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),S=(0,g.Z)(M,2),W=S[0],H=S[1],F=(0,k.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),U=(0,g.Z)(F,2),K=U[0],L=U[1],B=[E(P),function(){return E(T())},function(){return function(){var e=(0,r.useRef)(new O);return C((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var n=T(),t=(0,r.useState)(-1),i=(0,g.Z)(t,2),o=i[0],a=i[1],s=(0,r.useRef)(null);C((function(){return function(){s.current&&n.unregister(s.current)}}),[]),C((function(){if(s.current){var e=Number(s.current.dataset.index);o==e||Number.isNaN(e)||a(e)}}));var l=E(e?n.register(e):n.register);return{descendants:n,index:o,enabledIndex:n.enabledIndexOf(s.current),register:(0,_.lq)(l,s)}}(e)}],G=(0,g.Z)(B,4),z=G[0],R=(G[1],G[2]),V=G[3],q=t(6367);var X=t(6992),Y=["onChange","defaultIndex","index","allowMultiple","allowToggle"],Q=["isDisabled","isFocusable","id"];function J(e){var n=e.onChange,t=e.defaultIndex,i=e.index,o=e.allowMultiple,a=e.allowToggle,s=(0,v.Z)(e,Y);!function(e){var n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,X.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ".concat(typeof n,",")})}(e),function(e){(0,X.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var l=R(),c=(0,r.useState)(-1),d=(0,g.Z)(c,2),u=d[0],f=d[1];(0,r.useEffect)((function(){return function(){f(-1)}}),[]);var x=function(e){var n=e.value,t=e.defaultValue,i=e.onChange,o=e.shouldUpdate,a=void 0===o?function(e,n){return e!==n}:o,s=(0,q.W)(i),l=(0,q.W)(a),c=(0,r.useState)(t),d=(0,g.Z)(c,2),u=d[0],f=d[1],x=void 0!==n,m=x?n:u,h=(0,q.W)((function(e){var n="function"===typeof e?e(m):e;l(m,n)&&(x||f(n),s(n))}),[x,s,m,l]);return[m,h]}({value:i,defaultValue:function(){return o?null!=t?t:[]:null!=t?t:-1},onChange:n}),m=(0,g.Z)(x,2),h=m[0],p=m[1];return{index:h,setIndex:p,htmlProps:s,getAccordionItemProps:function(e){var n=!1;null!==e&&(n=Array.isArray(h)?h.includes(e):h===e);return{isOpen:n,onChange:function(n){if(null!==e)if(o&&Array.isArray(h)){var t=n?h.concat(e):h.filter((function(n){return n!==e}));p(t)}else n?p(e):a&&p(-1)}}},focusedIndex:u,setFocusedIndex:f,descendants:l}}var $=(0,k.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"}),ee=(0,g.Z)($,2),ne=ee[0],te=ee[1];function ie(e){var n=e.isDisabled,t=e.isFocusable,i=e.id,o=(0,v.Z)(e,Q),a=te(),s=a.getAccordionItemProps,l=a.setFocusedIndex,c=(0,r.useRef)(null),d=(0,r.useId)(),u=null!=i?i:d,f="accordion-button-".concat(u),x="accordion-panel-".concat(u);!function(e){(0,X.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var m=V({disabled:n&&!t}),h=m.register,g=m.index,b=m.descendants,y=s(-1===g?null:g),N=y.isOpen,Z=y.onChange;!function(e){(0,X.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:N,isDisabled:n});var j=(0,r.useCallback)((function(){null==Z||Z(!N),l(g)}),[g,l,N,Z]),w=(0,r.useCallback)((function(e){var n={ArrowDown:function(){var e=b.nextEnabled(g);null==e||e.node.focus()},ArrowUp:function(){var e=b.prevEnabled(g);null==e||e.node.focus()},Home:function(){var e=b.firstEnabled();null==e||e.node.focus()},End:function(){var e=b.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))}),[b,g]),I=(0,r.useCallback)((function(){l(g)}),[l,g]),C=(0,r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,p.Z)((0,p.Z)({},e),{},{type:"button",ref:(0,_.lq)(h,c,t),id:f,disabled:!!n,"aria-expanded":!!N,"aria-controls":x,onClick:(0,X.v0)(e.onClick,j),onFocus:(0,X.v0)(e.onFocus,I),onKeyDown:(0,X.v0)(e.onKeyDown,w)})}),[f,n,N,j,I,w,x,h]),E=(0,r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,p.Z)((0,p.Z)({},e),{},{ref:n,role:"region",id:x,"aria-labelledby":f,hidden:!N})}),[f,N,x]);return{isOpen:N,isDisabled:n,isFocusable:t,onOpen:function(){null==Z||Z(!0)},onClose:function(){null==Z||Z(!1)},getButtonProps:C,getPanelProps:E,htmlProps:o}}var re=t(5597),oe=t(2481),ae=t(2996),se=t(6460),le=["children","reduceMotion"],ce=["htmlProps","descendants"],de=(0,re.G)((function(e,n){var t=e.children,i=e.reduceMotion,o=(0,v.Z)(e,le),s=(0,oe.jC)("Accordion",o),l=J((0,ae.Lr)(o)),c=l.htmlProps,d=l.descendants,u=(0,v.Z)(l,ce),f=(0,r.useMemo)((function(){return(0,p.Z)((0,p.Z)({},u),{},{reduceMotion:!!i})}),[u,i]);return(0,a.jsx)(z,{value:d,children:(0,a.jsx)(ne,{value:f,children:(0,a.jsx)(W,{value:s,children:(0,a.jsx)(se.m.div,(0,p.Z)((0,p.Z)({ref:n},c),{},{className:(0,X.cx)("chakra-accordion",o.className),__css:s.root,children:t}))})})})}));de.displayName="Accordion";var ue=["htmlProps"],fe=(0,re.G)((function(e,n){var t=e.children,i=e.className,o=ie(e),s=o.htmlProps,l=(0,v.Z)(o,ue),c=H(),d=(0,p.Z)((0,p.Z)({},c.container),{},{overflowAnchor:"none"}),u=(0,r.useMemo)((function(){return l}),[l]);return(0,a.jsx)(K,{value:u,children:(0,a.jsx)(se.m.div,(0,p.Z)((0,p.Z)({ref:n},s),{},{className:(0,X.cx)("chakra-accordion__item",i),__css:d,children:"function"===typeof t?t({isExpanded:!!l.isOpen,isDisabled:!!l.isDisabled}):t}))})}));fe.displayName="AccordionItem";var xe=(0,re.G)((function(e,n){var t=(0,L().getButtonProps)(e,n),i=H(),r=(0,p.Z)({display:"flex",alignItems:"center",width:"100%",outline:0},i.button);return(0,a.jsx)(se.m.button,(0,p.Z)((0,p.Z)({},t),{},{className:(0,X.cx)("chakra-accordion__button",e.className),__css:r}))}));xe.displayName="AccordionButton";var me=t(9640);function he(e){var n=L(),t=n.isOpen,i=n.isDisabled,r=te().reduceMotion,o=(0,X.cx)("chakra-accordion__icon",e.className),s=H(),l=(0,p.Z)({opacity:i?.4:1,transform:t?"rotate(-180deg)":void 0,transition:r?void 0:"transform 0.2s",transformOrigin:"center"},s.icon);return(0,a.jsx)(me.J,(0,p.Z)((0,p.Z)({viewBox:"0 0 24 24","aria-hidden":!0,className:o,__css:l},e),{},{children:(0,a.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))}he.displayName="AccordionIcon";var pe={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};var ve=function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{delay:"number"===typeof n?n:null==n?void 0:n.enter})},ge=function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{delay:"number"===typeof n?n:null==n?void 0:n.exit})},be=t(4549),ye=t(5841),Ne=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],Ze={exit:{height:{duration:.2,ease:pe.ease},opacity:{duration:.3,ease:pe.ease}},enter:{height:{duration:.3,ease:pe.ease},opacity:{duration:.4,ease:pe.ease}}},je={exit:function(e){var n,t,i=e.animateOpacity,r=e.startingHeight,o=e.transition,a=e.transitionEnd,s=e.delay;return(0,p.Z)((0,p.Z)({},i&&{opacity:(t=r,null!=t&&parseInt(t.toString(),10)>0?1:0)}),{},{height:r,transitionEnd:null==a?void 0:a.exit,transition:null!=(n=null==o?void 0:o.exit)?n:ge(Ze.exit,s)})},enter:function(e){var n,t=e.animateOpacity,i=e.endingHeight,r=e.transition,o=e.transitionEnd,a=e.delay;return(0,p.Z)((0,p.Z)({},t&&{opacity:1}),{},{height:i,transitionEnd:null==o?void 0:o.enter,transition:null!=(n=null==r?void 0:r.enter)?n:ve(Ze.enter,a)})}},we=(0,r.forwardRef)((function(e,n){var t=e.in,i=e.unmountOnExit,o=e.animateOpacity,s=void 0===o||o,l=e.startingHeight,c=void 0===l?0:l,d=e.endingHeight,u=void 0===d?"auto":d,f=e.style,x=e.className,m=e.transition,h=e.transitionEnd,b=(0,v.Z)(e,Ne),y=(0,r.useState)(!1),N=(0,g.Z)(y,2),Z=N[0],j=N[1];(0,r.useEffect)((function(){var e=setTimeout((function(){j(!0)}));return function(){return clearTimeout(e)}}),[]),(0,X.ZK)({condition:Number(c)>0&&!!i,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var w=parseFloat(c.toString())>0,I={startingHeight:c,endingHeight:u,animateOpacity:s,transition:Z?m:{enter:{duration:0}},transitionEnd:{enter:null==h?void 0:h.enter,exit:i?null==h?void 0:h.exit:(0,p.Z)((0,p.Z)({},null==h?void 0:h.exit),{},{display:w?"block":"none"})}},C=!i||t,E=t||i?"enter":"exit";return(0,a.jsx)(be.M,{initial:!1,custom:I,children:C&&(0,a.jsx)(ye.E.div,(0,p.Z)((0,p.Z)({ref:n},b),{},{className:(0,X.cx)("chakra-collapse",x),style:(0,p.Z)({overflow:"hidden",display:"block"},f),custom:I,variants:je,initial:!!i&&"exit",animate:E,exit:"exit"}))})}));we.displayName="Collapse";var Ie=["className","motionProps"],Ce=(0,re.G)((function(e,n){var t=e.className,i=e.motionProps,r=(0,v.Z)(e,Ie),o=te().reduceMotion,s=L(),l=s.getPanelProps,c=s.isOpen,d=l(r,n),u=(0,X.cx)("chakra-accordion__panel",t),f=H();o||delete d.hidden;var x=(0,a.jsx)(se.m.div,(0,p.Z)((0,p.Z)({},d),{},{__css:f.panel,className:u}));return o?x:(0,a.jsx)(we,(0,p.Z)((0,p.Z)({in:c},i),{},{children:x}))}));Ce.displayName="AccordionPanel";var Ee,Oe=function(e){var n=e.experience;e.theme,e.index,e.totalCards;return console.log("experience1234567",n),(0,a.jsxs)(u.U,{padding:"1rem",flexDir:{base:"column",sm:"row"},justifyContent:"space-between",border:"1px solid ".concat(n.color),borderRadius:"20",children:[(0,a.jsx)(f.xu,{display:"flex",justifyContent:"center",alignItems:"center",width:{base:"40%",sm:"5%"},marginBottom:{base:"20px",sm:"0px"},children:(0,a.jsx)(o.E,{width:"100px",borderRadius:"50%",src:"./images/".concat(n.logo_path)})}),(0,a.jsxs)(d.g,{width:"93%",justifyContent:"space-between",textAlign:"left",children:[(0,a.jsxs)(u.U,{flexDirection:{base:"column",sm:"row"},width:"100%",justifyContent:"space-between",children:[(0,a.jsxs)(d.g,{width:{base:"100%",sm:"50%"},alignItems:{base:"center",sm:"flex-start"},children:[(0,a.jsx)(x.X,{sx:{fontWeight:700,color:"#001c55",fontSize:"16px",lineHeight:"20px"},children:n.title}),(0,a.jsx)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"20px"},children:n.company})]}),(0,a.jsxs)(d.g,{width:{base:"100%",sm:"50%"},alignItems:{base:"center",sm:"flex-end"},children:[(0,a.jsxs)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"15px"},children:[" ",n.duration," "]}),(0,a.jsxs)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"15px"},children:[" ",n.location," "]})]})]}),(0,a.jsx)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"20px",marginTop:"10px"},textAlign:{base:"center",sm:"left"},children:n.description})]})]})},ke=function(e){var n=e.experience,t=e.theme;return console.log("experience",n.sections[0]),(0,a.jsx)(h.K,{margin:"50px",id:"experience",w:{base:"90%",sm:"100%"},children:(0,a.jsx)(de,{allowToggle:!0,children:n.sections.map((function(e,n){return(0,a.jsx)(fe,{children:function(n){n.isExpanded;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:(0,a.jsxs)(xe,{className:"accord-panel",_hover:{color:t.secondaryText},border:"1px solid",padding:"1rem",borderColor:t.headerColor,borderRadius:"5px",marginBottom:"3px",children:[(0,a.jsx)(f.xu,{flex:"1",textAlign:"left",backgroundColor:t.body,fontFamily:"Google Sans Regular",color:t.text,children:e.title}),(0,a.jsx)(he,{})]})}),(0,a.jsx)(Ce,{padding:"1rem",display:"flex",flexDirection:"column",gap:"1rem",margin:"auto",id:"accordianpannel",backgroundColor:t.body,children:e.experiences.map((function(n,i){return(0,a.jsx)(Oe,{index:i,totalCards:e.experiences.length,experience:n,theme:t},i)}))})]})}},e.title)}))})})},_e=t(2554),Ae=t(8045),De=(0,_e.F4)(Ee||(Ee=(0,i.Z)(["\nfrom {\n  opacity: 0;\n  transform: translateY(50px);\n}\n\nto {\n  opacity: 1;\n  transform: translateY(0px);\n}\n"]))),Pe=function(){var e=c.y;return(0,a.jsxs)(d.g,{w:{base:"100%",sm:"90%",md:"800px",lg:"1000px",xl:"1100px","2xl":"1350px"},gap:"3rem",margin:"auto",children:[(0,a.jsx)(Ae.ZP,{duration:2e3,keyframes:De,children:(0,a.jsx)(d.g,{children:(0,a.jsxs)(u.U,{flexDir:{base:"column",sm:"row"},gap:"40px",mt:{base:"50px",sm:"100px"},children:[(0,a.jsx)(f.xu,{width:{base:"90%",sm:"50%"},children:(0,a.jsx)(f.xu,{children:(0,a.jsx)(s,{})})}),(0,a.jsxs)(d.g,{width:{base:"90%",sm:"50%"},children:[(0,a.jsx)(x.X,{style:{color:e.text},children:l.b8.title}),(0,a.jsx)(x.X,{style:{color:e.text},children:l.b8.subtitle}),(0,a.jsx)(m.x,{sx:{color:e.secondaryText},children:l.b8.description})]})]})})}),(0,a.jsx)(ke,{experience:l.b8,theme:e})]})}},2625:function(e,n,t){t.d(n,{XQ:function(){return r}});var i=t(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function r(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,i.Kn)(e)?Object.keys(e).reduce((function(t,i){return t[i]=n(e[i]),t}),{}):null!=e?n(e):null}},6762:function(e,n,t){t.d(n,{U:function(){return s}});var i=t(1413),r=t(56),o=t(5597),a=t(184),s=(0,o.G)((function(e,n){return(0,a.jsx)(r.K,(0,i.Z)((0,i.Z)({align:"center"},e),{},{direction:"row",ref:n}))}));s.displayName="HStack"},9589:function(e,n,t){t.d(n,{X:function(){return f}});var i=t(1413),r=t(4925),o=t(5597),a=t(2481),s=t(2996),l=t(6460),c=t(6992),d=t(184),u=["className"],f=(0,o.G)((function(e,n){var t=(0,a.mq)("Heading",e),o=(0,s.Lr)(e),f=(o.className,(0,r.Z)(o,u));return(0,d.jsx)(l.m.h2,(0,i.Z)((0,i.Z)({ref:n,className:(0,c.cx)("chakra-heading",e.className)},f),{},{__css:t}))}));f.displayName="Heading"},1917:function(e,n,t){t.d(n,{g:function(){return s}});var i=t(1413),r=t(56),o=t(5597),a=t(184),s=(0,o.G)((function(e,n){return(0,a.jsx)(r.K,(0,i.Z)((0,i.Z)({align:"center"},e),{},{direction:"column",ref:n}))}));s.displayName="VStack"},56:function(e,n,t){t.d(n,{K:function(){return x}});var i=t(1413),r=t(4925),o=t(6460),a=t(184),s=function(e){return(0,a.jsx)(o.m.div,(0,i.Z)((0,i.Z)({className:"chakra-stack__item"},e),{},{__css:(0,i.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};s.displayName="StackItem";var l=t(2625);var c=t(2791);var d=t(6992),u=t(5597),f=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],x=(0,u.G)((function(e,n){var t=e.isInline,u=e.direction,x=e.align,m=e.justify,h=e.spacing,p=void 0===h?"0.5rem":h,v=e.wrap,g=e.children,b=e.divider,y=e.className,N=e.shouldWrapChildren,Z=(0,r.Z)(e,f),j=t?"row":null!=u?u:"column",w=(0,c.useMemo)((function(){return function(e){var n=e.spacing,t=e.direction,i={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(t,(function(e){return i[e]}))}}({spacing:p,direction:j})}),[p,j]),I=!!b,C=!N&&!I,E=(0,c.useMemo)((function(){var e=function(e){return c.Children.toArray(e).filter((function(e){return(0,c.isValidElement)(e)}))}(g);return C?e:e.map((function(n,t){var i="undefined"!==typeof n.key?n.key:t,r=t+1===e.length,o=N?(0,a.jsx)(s,{children:n},i):n;if(!I)return o;var l=(0,c.cloneElement)(b,{__css:w}),d=r?null:l;return(0,a.jsxs)(c.Fragment,{children:[o,d]},i)}))}),[b,w,I,C,N,g]),O=(0,d.cx)("chakra-stack",y);return(0,a.jsx)(o.m.div,(0,i.Z)((0,i.Z)({ref:n,display:"flex",alignItems:x,justifyContent:m,flexDirection:j,flexWrap:v,gap:I?void 0:p,className:O},Z),{},{children:E}))}));x.displayName="Stack"},4591:function(e,n,t){t.d(n,{lq:function(){return r},qq:function(){return o}});var i=t(2791);function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}(n,e)}))}}function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.useMemo)((function(){return r.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=666.ccbd38c5.chunk.js.map