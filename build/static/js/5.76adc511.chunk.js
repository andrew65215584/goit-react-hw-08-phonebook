(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{80:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(33);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,s=l}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},81:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=i.a.createContext(null)},92:function(e,t,n){"use strict";var r=n(3),i=n(9),s=n(12);n(20);function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(0),l=n.n(o),u=n(24),c=n.n(u),p=!1,d=n(81),f=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(i="exited",r.appearStatus="entering"):i="entered":i=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:i},r.nextCallback=null,r}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[c.a.findDOMNode(this),r],s=i[0],a=i[1],o=this.getTimeouts(),l=r?o.appear:o.enter;!e&&!n||p?this.safeSetState({status:"entered"},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,a),this.safeSetState({status:"entering"},(function(){t.props.onEntering(s,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(s,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!p?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=i[0],a=i[1];this.props.addEndListener(s,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(i.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(e,r):l.a.cloneElement(l.a.Children.only(n),r))},t}(l.a.Component);function h(){}f.contextType=d.a,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},f.UNMOUNTED="unmounted",f.EXITED="exited",f.ENTERING="entering",f.ENTERED="entered",f.EXITING="exiting";var E=f,m=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"===typeof n.className?n.className=a(n.className,r):n.setAttribute("class",a(n.className&&n.className.baseVal||"",r)));var n,r}))},x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],s=r[1];t.removeClasses(i,"exit"),t.addClass(i,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],s=r[1]?"appear":"enter";t.addClass(i,s,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],s=r[1]?"appear":"enter";t.removeClasses(i,s),t.addClass(i,s,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"===typeof n,i=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}Object(s.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(r+=" "+i),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,s=n.done;this.appliedClasses[t]={},r&&m(e,r),i&&m(e,i),s&&m(e,s)},n.render=function(){var e=this.props,t=(e.classNames,Object(i.a)(e,["classNames"]));return l.a.createElement(E,Object(r.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.a.Component);x.defaultProps={classNames:""},x.propTypes={};t.a=x},93:function(e,t,n){"use strict";var r=n(9),i=n(3);var s=n(12),a=(n(20),n(0)),o=n.n(a),l=n(81);function u(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(a.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=u(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),s=[];for(var a in e)a in t?s.length&&(i[a]=s,s=[]):s.push(a);var o={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var u=i[l][r];o[i[l][r]]=n(u)}o[l]=n(l)}for(r=0;r<s.length;r++)o[s[r]]=n(s[r]);return o}(t,r);return Object.keys(i).forEach((function(s){var o=i[s];if(Object(a.isValidElement)(o)){var l=s in t,u=s in r,p=t[s],d=Object(a.isValidElement)(p)&&!p.props.in;!u||l&&!d?u||!l||d?u&&l&&Object(a.isValidElement)(p)&&(i[s]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:c(o,"exit",e),enter:c(o,"enter",e)})):i[s]=Object(a.cloneElement)(o,{in:!1}):i[s]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:c(o,"exit",e),enter:c(o,"enter",e)})}})),i}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,u(n.children,(function(e){return Object(a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,i,s),firstRender:!1}},n.handleExited=function(e,t){var n=u(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(i.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=Object(r.a)(e,["component","childFactory"]),s=this.state.contextValue,a=d(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?o.a.createElement(l.a.Provider,{value:s},a):o.a.createElement(l.a.Provider,{value:s},o.a.createElement(t,i,a))},t}(o.a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};t.a=f}}]);
//# sourceMappingURL=5.76adc511.chunk.js.map