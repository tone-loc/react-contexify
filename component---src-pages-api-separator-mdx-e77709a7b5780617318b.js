(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var r=n(171),a=n.n(r),o=n(0),i=n.n(o),c=n(168),l=n(167);t.default=function(e){var t=e.components,n=a()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Separator"),i.a.createElement(c.MDXTag,{name:"p",components:t},"The simplest component ever created! No props at all."),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},"import { Item, Menu, Separator } from 'react-contexify';\n\n<Menu id=\"foo\">\n  <Item>Copy</Item>\n  <Separator />\n  <Item>Paste</Item>\n</Menu>\n")))};var u={}},163:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return u});n(179),n(77),n(51),n(180),n(50);var r=n(175),a=n(161),o=function(e){return e/16},i={giant:1170,desktop:992,tablet:768,phone:376},c=Object.keys(i).reduce(function(e,t){var n=o(i[t]);return e[t]=function(){return Object(a.b)(["@media (min-width:","em){",";}"],n,a.b.apply(void 0,arguments))},e},{}),l=function(){return"undefined"!=typeof window&&!window.matchMedia("(min-width: "+o(i.tablet)+"em)").matches},u={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(r.h)),animations:["none"].concat(Object.values(r.f))}},164:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(162),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(166),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var p=n(34);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),f=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,n){var r;e.exports=(r=n(170))&&r.default||r},167:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(165),i=n.n(o),c=n(0),l=n.n(c),u=n(176),s=n(161),p=n(178),d=n.n(p),f=n(163),m=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"},{label:"Migrate from v3"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];n(76),n(26),n(181),n(49);function b(){var e=i()(["\n      display: none;\n  "]);return b=function(){return e},e}var g=s.c.div.withConfig({displayName:"Fab__Container",componentId:"sc-1me259o-0"})(["width:60px;height:60px;background:#9b4ccb;border-radius:100%;position:fixed;bottom:10px;right:15px;z-index:5;",";"],f.b.tablet(b())),h=s.c.button.withConfig({displayName:"Fab__Button",componentId:"sc-1me259o-1"})(["padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:4px 0 0 0;overflow:visible;&:hover{opacity:0.7;background:transparent;}"]),v=s.c.div.withConfig({displayName:"Fab__OutterButton",componentId:"sc-1me259o-2"})(["width:30px;height:24px;display:inline-block;position:relative;"]),y=Object(s.b)(["width:30px;height:4px;background-color:#e1e1e1;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease;"]),x=s.c.div.withConfig({displayName:"Fab__InnerButton",componentId:"sc-1me259o-3"})(["display:block;top:50%;margin-top:-2px;transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);"," "," &::before,&::after{",' content:"";display:block;}&::before{top:-10px;transition:top 0.1s 0.25s ease-in,opacity 0.1s ease-in;',";}&::after{bottom:-10px;transition:bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);",";}"],function(e){return e.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},y,y,function(e){return e.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(e){return e.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),w=function(e){var t=e.toggled,n=e.onToggle;return l.a.createElement(g,null,l.a.createElement(h,{onClick:n},l.a.createElement(v,null,l.a.createElement(x,{toggled:t}))))},O=n(164),E=Object(s.c)(O.Link).attrs({activeClassName:"nav-item-active"}).withConfig({displayName:"NavLink__StyledLink",componentId:"g709m1-0"})(["display:inline-block;color:#fff;transition:transform 0.3s;&.","{color:#bd50ff;}&:hover{color:#bd50ff;transform:scale(1.155);}"],"nav-item-active"),k=function(e){var t=e.to,n=e.children;return l.a.createElement(E,{to:t},n)},_=s.c.div.withConfig({displayName:"Logo",componentId:"sc-1k1pl5n-0"})(["padding:15px 0;margin:0;display:block;position:relative;z-index:4;"]),j=Object(s.c)(O.Link).withConfig({displayName:"Logo__A",componentId:"sc-1k1pl5n-1"})(["cursor:pointer;text-transform:uppercase;padding:5px 0;display:inline-block;font-size:18px;color:#fff;white-space:nowrap;font-weight:400;line-height:30px;overflow:hidden;text-align:center;display:block;&:hover{color:#fff;}&::after{content:'';position:absolute;bottom:0;right:15px;height:1px;width:calc(100% - 30px);background-color:hsla(0,0%,71%,0.3);}"]),M=function(e){var t=e.children;return l.a.createElement(_,null,l.a.createElement(j,{to:"/",activeStyle:{color:"#fff"}},t))};function C(){var e=i()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return C=function(){return e},e}var P=s.c.aside.withConfig({displayName:"Sidenav__Nav",componentId:"sc-1psbioe-0"})(["width:100%;opacity:",";pointer-events:",";position:fixed;top:0;left:0;height:100%;background:#212120;box-shadow:0 16px 38px -12px rgba(0,0,0,0.56),0 4px 25px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2);transition:opacity 0.4s;z-index:4;",";"],function(e){return e.isOpen?1:0},function(e){return e.isOpen?"initial":"none"},f.b.tablet(C(),function(e){return e.sidenavWidth})),S=s.c.div.withConfig({displayName:"Sidenav__Wrapper",componentId:"sc-1psbioe-1"})(["position:relative;height:calc(100vh - 50px);overflow:auto;width:100%;z-index:4;padding:12px;font-size:1em;& ul{margin-left:12px;list-style:none;}& p{margin:0;color:#fff;font-weight:bold;}"]),I=function(e){var t=e.isSidebarOpen,n=e.toggleSidebar,r=e.navMenu,a=e.sidenavWidth,o=e.isMobile;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{isOpen:t,sidenavWidth:a},l.a.createElement(M,null,"React-Contexify"),l.a.createElement(S,null,r.map(function(e){var t=e.prefix||"";return l.a.createElement(c.Fragment,{key:e.title},l.a.createElement("p",null,e.title),l.a.createElement("ul",null,e.menu.map(function(e){var r=e.link||e.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return l.a.createElement("li",{key:r},l.a.createElement(k,Object.assign({to:t+r},o&&{onClick:n}),e.label))})))}))),l.a.createElement(w,{onToggle:n,toggled:t}))};n(182),n(183),n(184);function T(){var e=i()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return T=function(){return e},e}function N(){var e=i()(["\nh1{\n  color: #b561b7;\n  font-weight: bold;\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return N=function(){return e},e}var D=Object(f.a)(),L=Object(s.a)(N()),q=s.c.main.withConfig({displayName:"Layout__Main",componentId:"sc-138vppf-0"})(["overflow:auto;",";"],function(e){return e.isSidebarOpen&&Object(s.b)(["",";"],f.b.tablet(T(),function(e){return e.sidenavWidth},function(e){return e.sidenavWidth}))}),z=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isSidebarOpen:!D,isMobile:D},t.isMobile=function(){t.setState({isMobile:Object(f.a)()})},t.toggleSidebar=function(){t.setState({isSidebarOpen:!t.state.isSidebarOpen})},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){d.a.highlightAll(),window.addEventListener("resize",this,f.a)},n.componentWillUnmount=function(){window.removeEventListener("resize",this,f.a)},n.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{isSidebarOpen:this.state.isSidebarOpen,sidenavWidth:"260px"},this.props.children),l.a.createElement(I,{sidenavWidth:"260px",navMenu:m,isSidebarOpen:this.state.isSidebarOpen,isMobile:this.state.isMobile,toggleSidebar:this.toggleSidebar}),l.a.createElement(L,null),l.a.createElement(u.ToastContainer,null))},t}(c.Component);t.a=z},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(173);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(169);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(0)),o=c(n(53)),i=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),u=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(s,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var p=function(e){var t=e.components,n=e.children;return a.default.createElement(u,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},170:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),c=n(4),l=n.n(c),u=n(52),s=n(2),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=p},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=u(o),c=u(n(174)),l=n(169);function u(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,u=e.components,p=void 0===u?{}:u,d=e.Layout,f=e.layoutProps,m=p[n+"."+t]||p[t]||s[t]||t;return d?((0,c.default)(this,d),i.default.createElement(d,r({components:p},f),i.default.createElement(m,o,l))):i.default.createElement(m,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(p)},174:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,n,p){if("string"!=typeof n){if(s){var d=u(n);d&&d!==s&&e(t,d,p)}var f=i(n);c&&(f=f.concat(c(n)));for(var m=0;m<f.length;++m){var b=f[m];if(!(r[b]||a[b]||p&&p[b])){var g=l(n,b);try{o(t,b,g)}catch(e){}}}return t}return t}}}]);
//# sourceMappingURL=component---src-pages-api-separator-mdx-e77709a7b5780617318b.js.map