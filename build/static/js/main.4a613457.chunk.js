(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},23:function(e,t){},24:function(e,t){},27:function(e,t,n){e.exports=n(69)},33:function(e,t,n){},35:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),l=n.n(c),o=(n(15),n(3)),i=n(4),s=n(6),u=n(5),m=n(7),h=(n(33),n(71)),p=n(72),d=(n(35),n(11)),v=n.n(d),f="a9885c4a1f9249cfb382d2833e84d6a9",b={findNewArticles:function(e,t,n){return v.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?",{params:{"api-key":f,q:e,sort:"newest",page:0}})},searchArticles:function(e,t,n){return console.log(e),console.log(t+n),v.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?",{params:{"api-key":f,q:e,begin_date:t,end_date:n,sort:"newest",page:0}})},saveArticle:function(e){return console.log("Made it to the API utility"),console.log(e),v.a.post("/api/articles",e)},removeArticle:function(e){return v.a.delete("/api/articles/"+e)},getSaved:function(){return v.a.get("/api/articles")}},g=(n(56),n(58),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e){e.preventDefault(),console.log("submitting form"),b.saveArticle({title:n.props.title,date:n.props.date,url:n.props.url}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"results-card"},r.a.createElement("h2",null,this.props.title),r.a.createElement("a",{href:this.props.url},"To Article"),r.a.createElement("p",null,"Published: ",this.props.date),r.a.createElement("button",{className:"btn btn-primary",value:this.props.id,onClick:this.handleFormSubmit},"Save Article"))}}]),t}(r.a.Component)),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"results-container"},r.a.createElement("h2",{className:"results-title"},"Results"),this.props.results.map(function(e){return r.a.createElement(g,{title:e.headline.main,url:e.web_url,date:e.pub_date,key:e._id,id:e._id})}))}}]),t}(r.a.Component),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},n.getNewArticles=function(){b.findNewArticles("news").then(function(e){n.setState({results:e.data.response.docs})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNewArticles()}},{key:"render",value:function(){return r.a.createElement("div",null,"Home",r.a.createElement(j,{results:this.state.results}))}}]),t}(r.a.Component),E=n(22),w=(n(60),n(23)),y=n.n(w),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:["placeholder"],topic:"",startDate:"",endDate:""},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(E.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.getNewArticles()},n.getNewArticles=function(){b.searchArticles(n.state.topic,n.state.startDate,n.state.endDate).then(function(e){n.setState({results:e.data.response.docs})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),"placeholder"===this.state.results[0]?r.a.createElement("div",null):r.a.createElement(j,{results:this.state.results}))}}]),t}(r.a.Component),A=(n(62),n(64),n(24)),N=n.n(A),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Component mounted"),this.getSavedArticles()}},{key:"getSavedArticles",value:function(){var e=this;b.getSaved().then(function(t){console.log("'Saved Response"),console.log(t),e.setState({results:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.results.map(function(t){return r.a.createElement(N.a,{getSavedArticles:e.getSavedArticles,title:t.title,url:t.url,date:t.date,key:t._id,id:t._id})}))}}]),t}(r.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null))}}]),t}(r.a.Component),D=n(70),_=function(){return r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved Articles")))},F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",{className:"wapper"},r.a.createElement("h1",{className:"title"},"New York Times"),r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{exact:!0,path:"/search",component:k}),r.a.createElement(p.a,{exact:!0,path:"/saved",component:C}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.4a613457.chunk.js.map