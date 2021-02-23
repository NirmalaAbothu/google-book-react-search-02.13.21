(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{33:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),i=s(27),o=s.n(i),a=s(9),r=s(2),l=(s(33),s(0));function h({fluid:e,children:t}){return Object(l.jsx)("div",{className:"container".concat(e?"-fluid":""),children:t})}function d({fluid:e,children:t}){return Object(l.jsx)("div",{className:"row".concat(e?"-fluid":""),children:t})}function j({size:e,children:t}){return Object(l.jsx)("div",{className:e.split(" ").map((e=>"col-"+e)).join(" "),children:t})}var b=function({children:e}){return Object(l.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center",marginTop:"20px"},className:"jumbotron",children:e})},u=s(13),m=s.n(u),x=function(e){return m.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},O=function(e){return m.a.delete("/api/books/"+e)},p=function(e){return console.log(e),m.a.post("/api/books",e)},g=function(){return m.a.get("/api/books").then((e=>e.data))},v=s(62),k=s(8);s(53);s(54);function f({children:e}){return Object(l.jsx)("div",{className:"list-overflow-container",children:Object(l.jsx)("ul",{className:"list-group",children:e})})}function N(e){return Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(h,{children:Object(l.jsxs)(d,{children:[Object(l.jsx)(j,{size:"xs-4 sm-2 md-3",children:Object(l.jsx)("img",{src:e.image,alt:" No Image Found"})}),Object(l.jsxs)(j,{size:"xs-8 sm-10 md-9",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:["Written By"," ",[e.authors].flat().join(", ")]}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("a",{rel:"noreferrer noopener",className:"btn btn-lg btn-primary input-lg view",target:"_blank",href:e.link,style:{backgroundColor:"lightBlue",borderColor:"lightblue"},children:"View"}),e.id?Object(l.jsx)(v.a,{type:"danger",className:"input-lg",onClick:t=>{O(e.id).then((t=>{e.loadBooks(),console.log(e.id)})).catch((e=>console.log(e)))},style:{marginLeft:"10px",borderColor:"red"},children:"Delete"}):Object(l.jsx)(v.a,{type:"success",className:"input-lg",onClick:t=>{p({title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then((e=>console.log(e))).catch((e=>console.log(e)))},style:{backgroundColor:"green",marginLeft:"10px",borderColor:"green"},children:"Save"})]})]})})},e.id)}var B=function(){return Object(l.jsx)(h,{fluid:!0,children:Object(l.jsx)(d,{children:Object(l.jsx)(j,{size:"md-12",children:Object(l.jsxs)(b,{children:[Object(l.jsx)("h1",{children:"404 Page Not Found"}),Object(l.jsx)("h1",{children:Object(l.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};function y(e){return Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",Object(k.a)({className:"form-control"},e))})}function S(e){return Object(l.jsx)("button",Object(k.a)(Object(k.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}class C extends c.a.Component{constructor(...e){super(...e),this.state={value:"",bookArray:[]},this.SearchBook=e=>{x(e).then((e=>this.setState({bookArray:e.data.items.map((e=>this.createBook(e)),console.log("Book details:",e.data.items))}))).catch((e=>console.log(e)))},this.createBook=e=>{var t;return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors?e.volumeInfo.authors:"No Author Found",description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||"No  Image found",link:e.volumeInfo.previewLink}},this.handleInputChange=e=>{const t=e.target.name,s=e.target.value;this.setState({[t]:s})},this.handleFormSubmit=e=>{e.preventDefault(),this.SearchBook(this.state.search),this.setState({search:""})}}render(){return Object(l.jsxs)(h,{fluid:!0,children:[Object(l.jsx)(d,{children:Object(l.jsxs)(j,{size:"md-11",children:[Object(l.jsxs)(b,{children:[Object(l.jsx)("h1",{children:"(React) Google Books Search"}),Object(l.jsx)("h5",{children:"Search for and Save Books of Interest"})]}),Object(l.jsx)("h5",{style:{textAlign:"center"},children:"Book Search"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h6",{style:{textAlign:"left"},children:"Book"}),Object(l.jsx)(y,{onChange:this.handleInputChange,value:this.state.search,placeholder:"Search a book",id:"search",name:"search"}),Object(l.jsx)(S,{onClick:this.handleFormSubmit,children:"Search"})]})]})}),Object(l.jsxs)(d,{children:[Object(l.jsx)(j,{size:"xs-12 md-3"}),Object(l.jsx)(j,{size:"md-6",style:{marginLeft:"50PX"},children:Object(l.jsx)(f,{children:[...this.state.bookArray].map((e=>Object(l.jsx)(N,{title:e.title,authors:e.authors,link:e.link,description:e.description,image:e.image},e.id)))})}),Object(l.jsx)(j,{size:"md-3"})]})]})}}var I=C;class w extends c.a.Component{constructor(...e){super(...e),this.state={savedBooks:[]},this.loadBooks=e=>{g().then((e=>{console.log("This is Result:",e),this.setState({savedBooks:e})})).catch((e=>console.log(e)))}}componentDidMount(){this.loadBooks()}render(){return console.log("Saved books:",this.state.savedBooks),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(d,{children:Object(l.jsx)(j,{size:"xs-12",children:Object(l.jsx)(f,{children:[...this.state.savedBooks].map(((e,t)=>Object(l.jsx)(N,{title:e.title,authors:e.authors,link:e.link,description:e.description,image:e.image,id:e._id,loadBooks:this.loadBooks},e._id)))})})})})}}var z=w;var A=function(){const e=Object(r.f)();return Object(l.jsxs)("ul",{className:"nav nav-tabs",style:{backgroundColor:"lightblue",marginBottom:"50px"},children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link",children:"Google Books"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{to:"/saved",className:"/saved"===e.pathname?"nav-link active":"nav-link",children:"Saved"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{to:"/search",className:"/search"===e.pathname?"nav-link active":"nav-link",children:"Search"})})]})};var F=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:I}),Object(l.jsx)(r.a,{exact:!0,path:"/search",component:I}),Object(l.jsx)(r.a,{exact:!0,path:"/saved",component:z}),Object(l.jsx)(r.a,{exact:!0,path:"/noMatch",component:B})]})]})})};o.a.render(Object(l.jsx)(F,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.59d3b34c.chunk.js.map