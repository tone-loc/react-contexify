(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{159:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(161),o=n(164),l=n(167),c=n(7),s=n.n(c),u=(n(49),n(177),n(76),n(79),n(77),n(80),n(176)),d=n(175),m=n(611),p=n(607),f=n.n(p),h=n(608),b=n.n(h),g=n(609),v=n.n(g),y=n(610),w=n.n(y),x=[f.a,b.a,v.a,w.a],E=n(172),k=r.c.ul.withConfig({displayName:"List__Ul",componentId:"sc-1cvhcgw-0"})(["color:white;box-shadow:5px 5px 5px rgba(0,0,0,0.5);margin:auto;max-width:600px;"]),C=r.c.li.withConfig({displayName:"List__Li",componentId:"sc-1cvhcgw-1"})(["display:flex;background-color:space-grey;margin:0;transition:background-color 0.3s ease;&:nth-child(odd){background-color:#323232;}&:nth-child(even){background-color:#4b4b4b;}& img,& article{padding:10px;}"]),S=function(e){var t=e.event,n=e.eventHandler,a=e.rows;return i.a.createElement(k,null,i.a.createElement(m.a,{keys:a.map(function(e){return e.id}),from:{transform:"scale(0)",height:0},enter:{transform:"scale(1)",height:100},leave:{transform:"scale(0)",height:0,pointerEvents:"none"}},a.map(function(e){return function(a){var r;return i.a.createElement(C,Object.assign({id:e.id,key:e.id,style:a},((r={})[""+t]=n,r),{"data-id":e.id}),i.a.createElement("img",{src:x[e.id-1],alt:"avatar",width:"100"}),i.a.createElement("article",null,i.a.createElement("div",null,i.a.createElement(E.a,null,"📇"),e.firstName," ",e.lastName),i.a.createElement("div",null,i.a.createElement(E.a,null,"📧"),e.email),i.a.createElement("div",null,i.a.createElement(E.a,null,"🏢"),e.company)))}})))},N=function(e){var t=e.menuId,n=e.theme,a=e.animation,r=e.throwAlert,o=e.deleteRow,l=e.sendEmail;return i.a.createElement(d.b,{id:t,theme:n,animation:a},i.a.createElement(d.a,{onClick:o},i.a.createElement(E.a,null,"🗑"),"Remove Row"),i.a.createElement(d.a,{onClick:l},i.a.createElement(E.a,null,"💌"),"Send Email"),i.a.createElement(d.a,{disabled:!0},"I'm disabled"),i.a.createElement(d.d,null),i.a.createElement(d.a,{onClick:function(){return u.toast.error("You shall not click 💩")}},i.a.createElement(E.a,null,"⚠️"),"Don't Click!"),i.a.createElement(d.d,null),i.a.createElement(d.e,{label:"More..."},i.a.createElement(d.a,{onClick:r},"Alert!")))},I=[{id:1,firstName:"Roseanna",lastName:"Savil",email:"rsavil0@state.gov",company:"Hoppe, Schoen and Boyle"},{id:2,firstName:"Cara",lastName:"Duddan",email:"cduddan1@merriam-webster.com",company:"Kunze-Monahan"},{id:3,firstName:"Tobias",lastName:"Maughan",email:"tmaughan2@prnewswire.com",company:"Casper, Schulist and Ryan"},{id:4,firstName:"Sammie",lastName:"Mackness",email:"smackness3@discuz.net",company:"Hirthe Group"}],_=r.c.div.withConfig({displayName:"Demo__Container",componentId:"t5ynmc-0"})(["display:flex;justify-content:center;"]),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).menuId="imateapot",t.state={rows:I},t.handleTableMenu=function(e){var n;e.preventDefault(),I.forEach(function(t){t.id===parseInt(e.currentTarget.dataset.id,10)&&(n=t)}),d.g.show({id:t.menuId,event:e,props:{item:n}})},t.resetDemo=function(){return t.setState({rows:I})},t.deleteRow=function(e){var n=e.props;t.setState({rows:t.state.rows.filter(function(e){return e.id!==parseInt(n.item.id,10)})})},t}s()(t,e);var n=t.prototype;return n.sendEmail=function(e){var t=e.props;Object(u.toast)("Email sent at "+t.item.email)},n.throwAlert=function(){window.alert("Told ya!")},n.render=function(){return i.a.createElement("div",null,this.state.rows.length>0?i.a.createElement(S,Object.assign({},this.props,{eventHandler:this.handleTableMenu,rows:this.state.rows})):i.a.createElement(_,null,i.a.createElement("button",{onClick:this.resetDemo},"Reset Demo")),i.a.createElement(N,Object.assign({},this.props,{menuId:this.menuId,throwAlert:this.throwAlert,deleteRow:this.deleteRow,sendEmail:this.sendEmail})))},t}(a.Component),M=n(163),j=r.c.ul.withConfig({displayName:"Demo__Ul",componentId:"sc-1i27tkk-0"})(["display:flex;justify-content:space-around;list-style:none;"]),L=function(e){var t=e.name,n=e.value,a=e.data,r=e.onChange;return i.a.createElement("select",{name:t,id:t,value:n,onChange:r},a.map(function(e){return i.a.createElement("option",{key:e,value:e},e)}))},R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={event:M.c.events[Object(M.a)()?1:0],theme:M.c.themes[0],animation:M.c.animations[0]},t.handleSelector=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t}return s()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,null,i.a.createElement("li",null,i.a.createElement("label",{htmlFor:"event"},"Event:"),i.a.createElement(L,{name:"event",value:this.state.event,data:M.c.events,onChange:this.handleSelector})),i.a.createElement("li",null,i.a.createElement("label",{htmlFor:"theme"},"Theme:"),i.a.createElement(L,{name:"theme",value:this.state.theme,data:M.c.themes,onChange:this.handleSelector})),i.a.createElement("li",null,i.a.createElement("label",{htmlFor:"animation"},"Animation:"),i.a.createElement(L,{name:"animation",value:this.state.animation,data:M.c.animations,onChange:this.handleSelector}))),i.a.createElement(O,this.state))},t}(a.Component),T=r.c.h1.withConfig({displayName:"pages__Title",componentId:"m2wbr-0"})(["text-align:center;"]),z=r.c.h4.withConfig({displayName:"pages__Subtitle",componentId:"m2wbr-1"})(["text-align:center;"]),A=r.c.div.withConfig({displayName:"pages__Links",componentId:"m2wbr-2"})(["display:flex;justify-content:center;& a{margin:20px;width:180px;}"]);t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(T,null,"React-Contexify"),i.a.createElement(z,null,"The easiest way to add a context menu to your react app. No bullshit"," ",i.a.createElement(E.a,null,"😲"),"!"),i.a.createElement(R,null),i.a.createElement(A,null,i.a.createElement("a",{href:"https://github.com/fkhadra/react-contexify",className:"button"},"github"),i.a.createElement(o.Link,{to:"installation-and-usage",className:"button button-outline"},"Getting Started")))}},163:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s});n(179),n(77),n(51),n(180),n(50);var a=n(175),i=n(161),r=function(e){return e/16},o={giant:1170,desktop:992,tablet:768,phone:376},l=Object.keys(o).reduce(function(e,t){var n=r(o[t]);return e[t]=function(){return Object(i.b)(["@media (min-width:","em){",";}"],n,i.b.apply(void 0,arguments))},e},{}),c=function(){return"undefined"!=typeof window&&!window.matchMedia("(min-width: "+r(o.tablet)+"em)").matches},s={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(a.h)),animations:["none"].concat(Object.values(a.f))}},164:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(162),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(166),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,n){var a;e.exports=(a=n(170))&&a.default||a},167:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(165),o=n.n(r),l=n(0),c=n.n(l),s=n(176),u=n(161),d=n(178),m=n.n(d),p=n(163),f=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"},{label:"Migrate from v3"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];n(76),n(26),n(181),n(49);function h(){var e=o()(["\n      display: none;\n  "]);return h=function(){return e},e}var b=u.c.div.withConfig({displayName:"Fab__Container",componentId:"sc-1me259o-0"})(["width:60px;height:60px;background:#9b4ccb;border-radius:100%;position:fixed;bottom:10px;right:15px;z-index:5;",";"],p.b.tablet(h())),g=u.c.button.withConfig({displayName:"Fab__Button",componentId:"sc-1me259o-1"})(["padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:4px 0 0 0;overflow:visible;&:hover{opacity:0.7;background:transparent;}"]),v=u.c.div.withConfig({displayName:"Fab__OutterButton",componentId:"sc-1me259o-2"})(["width:30px;height:24px;display:inline-block;position:relative;"]),y=Object(u.b)(["width:30px;height:4px;background-color:#e1e1e1;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease;"]),w=u.c.div.withConfig({displayName:"Fab__InnerButton",componentId:"sc-1me259o-3"})(["display:block;top:50%;margin-top:-2px;transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);"," "," &::before,&::after{",' content:"";display:block;}&::before{top:-10px;transition:top 0.1s 0.25s ease-in,opacity 0.1s ease-in;',";}&::after{bottom:-10px;transition:bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);",";}"],function(e){return e.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},y,y,function(e){return e.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(e){return e.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),x=function(e){var t=e.toggled,n=e.onToggle;return c.a.createElement(b,null,c.a.createElement(g,{onClick:n},c.a.createElement(v,null,c.a.createElement(w,{toggled:t}))))},E=n(164),k=Object(u.c)(E.Link).attrs({activeClassName:"nav-item-active"}).withConfig({displayName:"NavLink__StyledLink",componentId:"g709m1-0"})(["display:inline-block;color:#fff;transition:transform 0.3s;&.","{color:#bd50ff;}&:hover{color:#bd50ff;transform:scale(1.155);}"],"nav-item-active"),C=function(e){var t=e.to,n=e.children;return c.a.createElement(k,{to:t},n)},S=u.c.div.withConfig({displayName:"Logo",componentId:"sc-1k1pl5n-0"})(["padding:15px 0;margin:0;display:block;position:relative;z-index:4;"]),N=Object(u.c)(E.Link).withConfig({displayName:"Logo__A",componentId:"sc-1k1pl5n-1"})(["cursor:pointer;text-transform:uppercase;padding:5px 0;display:inline-block;font-size:18px;color:#fff;white-space:nowrap;font-weight:400;line-height:30px;overflow:hidden;text-align:center;display:block;&:hover{color:#fff;}&::after{content:'';position:absolute;bottom:0;right:15px;height:1px;width:calc(100% - 30px);background-color:hsla(0,0%,71%,0.3);}"]),I=function(e){var t=e.children;return c.a.createElement(S,null,c.a.createElement(N,{to:"/",activeStyle:{color:"#fff"}},t))};function _(){var e=o()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return _=function(){return e},e}var O=u.c.aside.withConfig({displayName:"Sidenav__Nav",componentId:"sc-1psbioe-0"})(["width:100%;opacity:",";pointer-events:",";position:fixed;top:0;left:0;height:100%;background:#212120;box-shadow:0 16px 38px -12px rgba(0,0,0,0.56),0 4px 25px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2);transition:opacity 0.4s;z-index:4;",";"],function(e){return e.isOpen?1:0},function(e){return e.isOpen?"initial":"none"},p.b.tablet(_(),function(e){return e.sidenavWidth})),M=u.c.div.withConfig({displayName:"Sidenav__Wrapper",componentId:"sc-1psbioe-1"})(["position:relative;height:calc(100vh - 50px);overflow:auto;width:100%;z-index:4;padding:12px;font-size:1em;& ul{margin-left:12px;list-style:none;}& p{margin:0;color:#fff;font-weight:bold;}"]),j=function(e){var t=e.isSidebarOpen,n=e.toggleSidebar,a=e.navMenu,i=e.sidenavWidth,r=e.isMobile;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{isOpen:t,sidenavWidth:i},c.a.createElement(I,null,"React-Contexify"),c.a.createElement(M,null,a.map(function(e){var t=e.prefix||"";return c.a.createElement(l.Fragment,{key:e.title},c.a.createElement("p",null,e.title),c.a.createElement("ul",null,e.menu.map(function(e){var a=e.link||e.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return c.a.createElement("li",{key:a},c.a.createElement(C,Object.assign({to:t+a},r&&{onClick:n}),e.label))})))}))),c.a.createElement(x,{onToggle:n,toggled:t}))};n(182),n(183),n(184);function L(){var e=o()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return L=function(){return e},e}function R(){var e=o()(["\nh1{\n  color: #b561b7;\n  font-weight: bold;\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return R=function(){return e},e}var T=Object(p.a)(),z=Object(u.a)(R()),A=u.c.main.withConfig({displayName:"Layout__Main",componentId:"sc-138vppf-0"})(["overflow:auto;",";"],function(e){return e.isSidebarOpen&&Object(u.b)(["",";"],p.b.tablet(L(),function(e){return e.sidenavWidth},function(e){return e.sidenavWidth}))}),D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!T,isMobile:T},t.isMobile=function(){t.setState({isMobile:Object(p.a)()})},t.toggleSidebar=function(){t.setState({isSidebarOpen:!t.state.isSidebarOpen})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){m.a.highlightAll(),window.addEventListener("resize",this,p.a)},n.componentWillUnmount=function(){window.removeEventListener("resize",this,p.a)},n.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{isSidebarOpen:this.state.isSidebarOpen,sidenavWidth:"260px"},this.props.children),c.a.createElement(j,{sidenavWidth:"260px",navMenu:f,isSidebarOpen:this.state.isSidebarOpen,isMobile:this.state.isMobile,toggleSidebar:this.toggleSidebar}),c.a.createElement(z,null),c.a.createElement(s.ToastContainer,null))},t}(l.Component);t.a=D},170:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n.n(a),r=n(0),o=n.n(r),l=n(4),c=n.n(l),s=n(52),u=n(2),d=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,i()({location:t,pageResources:n},n.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},172:function(e,t,n){"use strict";var a=n(161);t.a=a.c.span.attrs({role:"img","aria-label":"action"}).withConfig({displayName:"Emoji",componentId:"sc-1poq02a-0"})(["margin-right:8px;"])},607:function(e,t,n){e.exports=n.p+"static/tux1-d3962970b15833d3e0b91527285b2338.png"},608:function(e,t,n){e.exports=n.p+"static/tux2-8012446a1695231a7067c5fd6198d110.png"},609:function(e,t,n){e.exports=n.p+"static/tux3-1dbca368fe44d2b5549300f395f4299c.png"},610:function(e,t,n){e.exports=n.p+"static/tux4-9e4f8b1f6669c78ccf3bf05d2fa89284.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-bf2e075b81606feef93d.js.map