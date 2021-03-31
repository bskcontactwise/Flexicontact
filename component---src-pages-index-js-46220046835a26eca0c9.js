/*! For license information please see component---src-pages-index-js-46220046835a26eca0c9.js.LICENSE.txt */
(self.webpackChunkflexicontact=self.webpackChunkflexicontact||[]).push([[678,682,737,88],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},5518:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7294);function a(){return r.createElement("div",null,r.createElement("h1",null,"About Page"),r.createElement("h2",null,"Hosted Voice for your Business"),r.createElement("p",null,"A cost-effective cloud based phone system, giving your business greater flexibility and control"))}},3972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var r=n(7294),a=n(5518),i=n(8984),o=n(2953);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var u=n(5900),c=n.n(u);n(1143);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){return Object.keys(t).reduce((function(n,a){var i,o=n,u=o[f(a)],c=o[a],p=l(o,[f(a),a].map(d)),v=t[a],m=function(e,t,n){var a=(0,r.useRef)(void 0!==e),i=(0,r.useState)(t),o=i[0],s=i[1],l=void 0!==e,u=a.current;return a.current=l,!l&&u&&o!==t&&s(t),[l?e:o,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(c,u,e[v]),E=m[0],h=m[1];return s({},p,((i={})[a]=E,i[v]=h,i))}),e)}n(3639);var v=/-(.)/g;var m=r.createContext({});m.Consumer,m.Provider;function E(e,t){var n=(0,r.useContext)(m);return e||n[t]||t}var h=function(e){return e[0].toUpperCase()+(t=e,t.replace(v,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var x=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,o=l(e,["bsPrefix","className","as"]);n=E(n,"navbar-brand");var u=i||(o.href?"a":"span");return r.createElement(u,s({},o,{ref:t,className:c()(a,n)}))}));x.displayName="NavbarBrand";var g=x;function b(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var y=/([A-Z])/g;var N=/^ms-/;function C(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(N,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var k=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(C(t))||function(e,t){return b(e).getComputedStyle(e,t)}(e).getPropertyValue(C(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!w.test(e))}(a)?n+=C(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(C(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},S=n(3552),P=n(3935),T=!1,O=r.createContext(null),D="unmounted",L="exited",R="entering",A="entered",M="exiting",I=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=L,r.appearStatus=R):a=A:a=t.unmountOnExit||t.mountOnEnter?D:L,r.state={status:a},r.nextCallback=null,r}(0,S.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===D?{status:L}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==R&&n!==A&&(t=R):n!==R&&n!==A||(t=M)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===R?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===L&&this.setState({status:D})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[P.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||T?this.safeSetState({status:A},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:R},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:A},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:P.findDOMNode(this);t&&!T?(this.props.onExit(r),this.safeSetState({status:M},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:L},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:L},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:P.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===D)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,l(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(O.Provider,{value:null},"function"==typeof n?n(e,a):r.cloneElement(r.Children.only(n),a))},t}(r.Component);function V(){}I.contextType=O,I.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:V,onEntering:V,onEntered:V,onExit:V,onExiting:V,onExited:V},I.UNMOUNTED=D,I.EXITED=L,I.ENTERING=R,I.ENTERED=A,I.EXITING=M;var j=I,B=!("undefined"==typeof window||!window.document||!window.document.createElement),U=!1,_=!1;try{var F={get passive(){return U=!0},get once(){return _=U=!0}};B&&(window.addEventListener("test",F,F),window.removeEventListener("test",F,!0))}catch(me){}var H=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!_){var a=r.once,i=r.capture,o=n;!_&&a&&(o=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=o),e.addEventListener(t,o,U?r:i)}e.addEventListener(t,n,r)};var X=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var Z=function(e,t,n,r){return H(e,t,n,r),function(){X(e,t,n,r)}};function G(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Z(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function Y(e,t,n,r){var a,i;null==n&&(a=k(e,"transitionDuration")||"",i=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*i||0);var o=G(e,n,r),s=Z(e,"transitionend",t);return function(){o(),s()}}function $(e,t){var n=k(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function K(e,t){var n=$(e,"transitionDuration"),r=$(e,"transitionDelay"),a=Y(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}var W,q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function J(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=z[e];return n+parseInt(k(t,r[0]),10)+parseInt(k(t,r[1]),10)}var Q=((W={}).exited="collapse",W.exiting="collapsing",W.entering="collapsing",W.entered="collapse show",W),ee={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:J},te=r.forwardRef((function(e,t){var n=e.onEnter,a=e.onEntering,i=e.onEntered,o=e.onExit,u=e.onExiting,f=e.className,d=e.children,p=e.dimension,v=void 0===p?"height":p,m=e.getDimensionValue,E=void 0===m?J:m,h=l(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),x="function"==typeof v?v():v,g=(0,r.useMemo)((function(){return q((function(e){e.style[x]="0"}),n)}),[x,n]),b=(0,r.useMemo)((function(){return q((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),a)}),[x,a]),y=(0,r.useMemo)((function(){return q((function(e){e.style[x]=null}),i)}),[x,i]),N=(0,r.useMemo)((function(){return q((function(e){e.style[x]=E(x,e)+"px",e.offsetHeight}),o)}),[o,E,x]),C=(0,r.useMemo)((function(){return q((function(e){e.style[x]=null}),u)}),[x,u]);return r.createElement(j,s({ref:t,addEndListener:K},h,{"aria-expanded":h.role?h.in:null,onEnter:g,onEntering:b,onEntered:y,onExit:N,onExiting:C}),(function(e,t){return r.cloneElement(d,s({},t,{className:c()(f,d.props.className,Q[e],"width"===x&&"width")}))}))}));te.defaultProps=ee;var ne=te,re=r.createContext(null);re.displayName="NavbarContext";var ae=re,ie=r.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,i=l(e,["children","bsPrefix"]);return a=E(a,"navbar-collapse"),r.createElement(ae.Consumer,null,(function(e){return r.createElement(ne,s({in:!(!e||!e.expanded)},i),r.createElement("div",{ref:t,className:a},n))}))}));ie.displayName="NavbarCollapse";var oe=ie;var se=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};var le=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.children,o=e.label,u=e.as,f=void 0===u?"button":u,d=e.onClick,p=l(e,["bsPrefix","className","children","label","as","onClick"]);n=E(n,"navbar-toggler");var v=(0,r.useContext)(ae)||{},m=v.onToggle,h=v.expanded,x=function(e){var t=se(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((function(e){d&&d(e),m&&m()}));return"button"===f&&(p.type="button"),r.createElement(f,s({},p,{ref:t,onClick:x,"aria-label":o,className:c()(a,n,!h&&"collapsed")}),i||r.createElement("span",{className:n+"-icon"}))}));le.displayName="NavbarToggle",le.defaultProps={label:"Toggle navigation"};var ue=le,ce=r.createContext(null),fe=function(e,t){var n=void 0===t?{}:t,a=n.displayName,i=void 0===a?h(e):a,o=n.Component,u=n.defaultProps,f=r.forwardRef((function(t,n){var a=t.className,i=t.bsPrefix,u=t.as,f=void 0===u?o||"div":u,d=l(t,["className","bsPrefix","as"]),p=E(i,e);return r.createElement(f,s({ref:n,className:c()(a,p)},d))}));return f.defaultProps=u,f.displayName=i,f}("navbar-text",{Component:"span"}),de=r.forwardRef((function(e,t){var n=p(e,{expanded:"onToggle"}),a=n.bsPrefix,i=n.expand,o=n.variant,u=n.bg,f=n.fixed,d=n.sticky,v=n.className,m=n.children,h=n.as,x=void 0===h?"nav":h,g=n.expanded,b=n.onToggle,y=n.onSelect,N=n.collapseOnSelect,C=l(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),w=E(a,"navbar"),k=(0,r.useCallback)((function(){y&&y.apply(void 0,arguments),N&&g&&b&&b(!1)}),[y,N,g,b]);void 0===C.role&&"nav"!==x&&(C.role="navigation");var S=w+"-expand";"string"==typeof i&&(S=S+"-"+i);var P=(0,r.useMemo)((function(){return{onToggle:function(){return b&&b(!g)},bsPrefix:w,expanded:!!g}}),[w,g,b]);return r.createElement(ae.Provider,{value:P},r.createElement(ce.Provider,{value:k},r.createElement(x,s({ref:t},C,{className:c()(v,w,i&&S,o&&w+"-"+o,u&&"bg-"+u,d&&"sticky-"+d,f&&"fixed-"+f)}),m)))}));de.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},de.displayName="Navbar",de.Brand=g,de.Toggle=ue,de.Collapse=oe,de.Text=fe;var pe=de;function ve(){return r.createElement(r.Fragment,null,r.createElement(pe,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.createElement(pe.Brand,{href:"#home"},"React-Bootstrap"),r.createElement(pe.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.createElement(pe.Collapse,{id:"responsive-navbar-nav"},r.createElement(Nav,{className:"mr-auto"},r.createElement(Nav.Link,{href:"#features"},"Features"),r.createElement(Nav.Link,{href:"#pricing"},"Pricing"),r.createElement(NavDropdown,{title:"Dropdown",id:"collasible-nav-dropdown"},r.createElement(NavDropdown.Item,{href:"#action/3.1"},"Action"),r.createElement(NavDropdown.Item,{href:"#action/3.2"},"Another action"),r.createElement(NavDropdown.Item,{href:"#action/3.3"},"Something"),r.createElement(NavDropdown.Divider,null),r.createElement(NavDropdown.Item,{href:"#action/3.4"},"Separated link"))),r.createElement(Nav,null,r.createElement(Nav.Link,{href:"#deets"},"More deets"),r.createElement(Nav.Link,{eventKey:2,href:"#memes"},"Dank memes")))),r.createElement("div",{class:"container text-center"},r.createElement("h1",{class:"text-center"},"Flexicontact"),r.createElement("h2",null,"Hosted Voice for your Business"),r.createElement("p",null,"A cost-effective cloud based phone system, giving your business greater flexibility and control"),r.createElement(a.default,null),r.createElement(o.default,null),r.createElement(i.default,null)))}},8984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7294);function a(){return r.createElement("div",null,r.createElement("h1",null,"Product Page"),r.createElement("h2",null,"Hosted Voice for your Business"),r.createElement("p",null,"A cost-effective cloud based phone system, giving your business greater flexibility and control"))}},2953:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7294);function a(){return r.createElement("div",null,r.createElement("h1",null,"Services Page"),r.createElement("h2",null,"Hosted Voice for your Business"),r.createElement("p",null,"A cost-effective cloud based phone system, giving your business greater flexibility and control"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-46220046835a26eca0c9.js.map