(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(7),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e.timerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;e.setState({date:t}),console.info(t.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.name;e.name!==t&&console.debug("Renamed from ".concat(e.name," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.date,t=this.props.name;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(u.a.Component);function v(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={hasClock:!0,clockName:v()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",(function(){e.setState({hasClock:!1})})),document.addEventListener("click",(function(){e.setState({hasClock:!0})})),window.setInterval((function(){var t=v();e.setState({clockName:t})}),3300)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(d,{name:n})]})}}]),n}(u.a.Component);c.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))},7:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.80ee70bf.chunk.js.map