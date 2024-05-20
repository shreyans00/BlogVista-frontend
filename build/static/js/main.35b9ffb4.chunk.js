(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),s=n.n(r),o=(n(92),n(178)),i=n(13),l=n(16),j=n(1);const d=Object(a.createContext)(null);var b,h,p,x=e=>{let{children:t}=e;const[n,c]=Object(a.useState)({name:"",username:""});return Object(j.jsx)(d.Provider,{value:{account:n,setAccount:c},children:t})},O=n(8),u=n(4),g=n(175),m=n(177),f=n(172);const y=Object(u.a)(g.a)(b||(b=Object(O.a)(["\n  background: #ffffff;\n  color: black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n"]))),v=Object(u.a)(m.a)(h||(h=Object(O.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  & > a {\n    padding: 20px;\n    color: #000;\n    text-decoration: none;\n  }\n"]))),w=Object(u.a)("img")(p||(p=Object(O.a)(["\n  width: 100px;\n  height: auto;\n"])));var k,E,S,C=()=>{const e=Object(i.h)();return Object(j.jsxs)(y,{children:[Object(j.jsx)(w,{src:"./logo.png",alt:"blog logo"}),Object(j.jsxs)(v,{children:[Object(j.jsx)(l.b,{to:"/",children:"HOME"}),Object(j.jsx)(l.b,{to:"/about",children:"ABOUT"}),Object(j.jsx)(l.b,{to:"/contact",children:"CONTACT"})]}),Object(j.jsx)(f.a,{onClick:async()=>e("/account"),children:"LOGOUT"})]})},T=n(173),P=n(179);const A=Object(u.a)(o.a)(k||(k=Object(O.a)(["\n  width: 100%;\n  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)\n    center/cover no-repeat;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n\n  // Adding animation\n  animation: scaleAnimation 5s ease-in-out;\n\n  @keyframes scaleAnimation {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.05);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  perspective: 1000px;\n"]))),F=Object(u.a)(P.a)(E||(E=Object(O.a)(["\n  font-size: 60px;\n  color: rgb(14, 75, 82);\n  line-height: 1;\n"]))),M=Object(u.a)(P.a)(S||(S=Object(O.a)(["\n  font-size: 20px;\n  background: #ffffff;\n  padding: 10px;\n  border-radius: 8px;\n  &:hover {\n    background-color: rgb(14, 75, 82);\n    color: white;\n  }\n"])));var z=()=>Object(j.jsxs)(A,{children:[Object(j.jsx)(F,{children:"BlogVista"}),Object(j.jsx)(M,{children:"Elevate Your Thoughts"})]}),D=n(180),B=n(181),I=n(182),q=n(183),R=n(184);const _=[{id:1,type:"College Experiences"},{id:2,type:"Life Experiences"},{id:3,type:"Prose and Stories"},{id:4,type:"Achievements"}];var N,G,H;const L=Object(u.a)(D.a)(N||(N=Object(O.a)(["\n  border: 1px solid rgba(224, 224, 224, 1);\n  margin-top: 20px;\n"]))),Y=Object(u.a)(f.a)(G||(G=Object(O.a)(["\n  margin: 20px;\n  width: 85%;\n  background: #6495ed;\n  color: #fff;\n  text-decoration: none;\n  &:hover {\n    background: #4169e1;\n  }\n"]))),U=Object(u.a)(l.b)(H||(H=Object(O.a)(["\n  text-decoration: none;\n  color: inherit;\n  display: block;\n  padding: 8px;\n  border-radius: 5px;\n\n  &:hover {\n    background: #f0f0f0;\n  }\n\n  &.active {\n    background: #d0d0d0; /* Color for active link */\n  }\n"])));var V=()=>{const[e]=Object(l.c)(),t=e.get("category");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.b,{to:"/create".concat(t?"?category=".concat(t):""),style:{textDecoration:"none"},children:Object(j.jsx)(Y,{variant:"contained",children:"Create Blog"})}),Object(j.jsxs)(L,{children:[Object(j.jsx)(B.a,{children:Object(j.jsx)(I.a,{children:Object(j.jsx)(q.a,{children:Object(j.jsx)(U,{to:"/",className:t?"":"active",children:"All Categories"})})})}),Object(j.jsx)(R.a,{children:_.map((e=>Object(j.jsx)(I.a,{children:Object(j.jsx)(q.a,{children:Object(j.jsx)(U,{to:"/?category=".concat(e.type),className:e.type===t?"active":"",children:e.type})})},e.id)))})]})]})},J=n(73);const W={loading:{title:"Loading...",message:"Data is being loaded. Please wait"},success:{title:"Success",message:"Data successfully loaded"},requestFailure:{title:"Error!",message:"An error occur while parsing request data"},responseFailure:{title:"Error!",message:"An error occur while fetching response from server. Please try again"},networkError:{title:"Error!",message:"Unable to connect to the server. Please check internet connectivity and try again."}},Z={userLogin:{url:"/login",method:"POST"},userSignup:{url:"/signup",method:"POST"},getAllPosts:{url:"/posts",method:"GET",params:!0},getRefreshToken:{url:"/token",method:"POST"},uploadFile:{url:"file/upload",method:"POST"},createPost:{url:"create",method:"POST"},deletePost:{url:"delete",method:"DELETE",query:!0},getPostById:{url:"post",method:"GET",query:!0},newComment:{url:"/comment/new",method:"POST"},getAllComments:{url:"comments",method:"GET",query:!0},deleteComment:{url:"comment/delete",method:"DELETE",query:!0},updatePost:{url:"update",method:"PUT",query:!0}},X=(e,t)=>e.params?{params:t}:e.query?"object"===typeof t?{query:t._id}:{query:t}:{},K=n.n(J).a.create({baseURL:"http://localhost:8000",timeout:1e4,headers:{"content-type":"application/json"}});K.interceptors.request.use((function(e){return e.TYPE.params?e.params=e.TYPE.params:e.TYPE.query&&(e.url=e.url+"/"+e.TYPE.query),e}),(function(e){return Promise.reject(e)})),K.interceptors.response.use((function(e){return Q(e)}),(function(e){return Promise.reject($(e))}));const Q=e=>200===(null===e||void 0===e?void 0:e.status)?{isSuccess:!0,data:e.data}:{isFailure:!0,status:null===e||void 0===e?void 0:e.status,msg:null===e||void 0===e?void 0:e.msg,code:null===e||void 0===e?void 0:e.code},$=async e=>{return e.response?403!==(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:W.responseFailure,code:e.response.status}):void sessionStorage.clear():e.request?(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:W.requestFailure,code:""}):(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:W.networkError,code:""});var t},ee={};for(const[hn,pn]of Object.entries(Z))ee[hn]=(e,t,n)=>K({method:pn.method,url:pn.url,data:"DELETE"===pn.method?"":e,responseType:pn.responseType,headers:{authorization:sessionStorage.getItem("accessToken")},TYPE:X(pn,e),onUploadProgress:function(e){if(t){let n=Math.round(100*e.loaded/e.total);t(n)}},onDownloadProgress:function(e){if(n){let t=Math.round(100*e.loaded/e.total);n(t)}}});var te,ne,ae,ce;const re=Object(u.a)(o.a)(te||(te=Object(O.a)(["\n  border: 1px solid #d3cede;\n  border-radius: 10px;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 350px;\n  & > img,\n  & > p {\n    padding: 0 5px 5px 5px;\n  }\n"]))),se=Object(u.a)("img")({width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:150}),oe=Object(u.a)(P.a)(ne||(ne=Object(O.a)(["\n    color: #878787\n    font-size: 12px;\n"]))),ie=Object(u.a)(P.a)(ae||(ae=Object(O.a)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),le=Object(u.a)(P.a)(ce||(ce=Object(O.a)(["\n  font-size: 14px;\n  word-break: break-word;\n"])));var je=e=>{let{post:t}=e;const n=t.picture?t.picture:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",a=(e,t)=>e.length>t?e.substring(0,t)+"...":e;return Object(j.jsxs)(re,{children:[Object(j.jsx)(se,{src:n,alt:"post"}),Object(j.jsx)(oe,{children:t.categories}),Object(j.jsx)(ie,{children:a(t.title,20)}),Object(j.jsxs)(oe,{children:["Author: ",t.username]}),Object(j.jsx)(le,{children:a(t.description,100)})]})};var de=()=>{const[e,t]=Object(a.useState)([]),[n]=Object(l.c)(),c=n.get("category");return Object(a.useEffect)((()=>{(async()=>{let e=await ee.getAllPosts({category:c||""});e.isSuccess&&t(e.data)})()}),[c]),Object(j.jsx)(j.Fragment,{children:(null===e||void 0===e?void 0:e.length)?e.map((e=>Object(j.jsx)(T.a,{item:!0,lg:3,sm:4,xs:12,children:Object(j.jsx)(l.b,{style:{textDecoration:"none",color:"inherit"},to:"details/".concat(e._id),children:Object(j.jsx)(je,{post:e})})}))):Object(j.jsx)(o.a,{style:{color:"878787",margin:"30px 80px",fontSize:18},children:"No data is available for selected category"})})};var be,he,pe,xe,Oe=()=>Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(z,{}),Object(j.jsxs)(T.a,{container:!0,children:[Object(j.jsx)(T.a,{item:!0,lg:2,xs:12,sm:2,children:Object(j.jsx)(V,{})}),Object(j.jsx)(T.a,{container:!0,item:!0,xs:12,sm:10,lg:10,children:Object(j.jsx)(de,{})})]})]}),ue=n(170),ge=n(19),me=n(158),fe=n(166),ye=n(169),ve=n(159);const we=Object(u.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),ke=Object(u.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),Ee=Object(u.a)(ue.a)(be||(be=Object(O.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n"]))),Se=Object(u.a)(ge.c)(he||(he=Object(O.a)(["\n  flex: 1;\n  margin: 0 30px;\n  font-size: 25px;\n"]))),Ce=Object(u.a)(me.a)(pe||(pe=Object(O.a)(["\n  width: 100%;\n  border: none;\n  margin-top: 50px;\n  font-size: 18px;\n  &:focus-visible {\n    outline: none;\n  }\n"]))),Te=Object(u.a)(fe.a)(xe||(xe=Object(O.a)(["\n  min-width: 150px;\n"]))),Pe={title:"",description:"",picture:"",username:"",category:"",createdDate:new Date};var Ae,Fe,Me,ze,De,Be=()=>{const e=Object(i.h)(),[t,n]=(Object(i.g)(),Object(a.useState)(Pe)),[c,r]=Object(a.useState)(""),{account:s}=Object(a.useContext)(d),o=t.picture?t.picture:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";Object(a.useEffect)((()=>{var e;(async()=>{if(c){console.log("file is: ",c);const n=new FormData;n.append("name",c.name),n.append("file",c);try{const e=await ee.uploadFile(n);t.picture=e.data}catch(e){console.log("Error uploading file: ",e)}}})(),t.category=(null===(e=_.find((e=>e.type===t.category)))||void 0===e?void 0:e.id)||"",t.username=s.username}),[c]);const l=e=>{n({...t,[e.target.name]:e.target.value})};return Object(j.jsxs)(we,{children:[Object(j.jsx)(ke,{src:o,alt:"post"}),Object(j.jsxs)(Ee,{children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)(ve.a,{fontSize:"large",color:"action"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>{console.log("file is here ",e.target.files[0]),r(e.target.files[0])}}),Object(j.jsx)(Se,{onChange:e=>l(e),name:"title",placeholder:"Title"}),Object(j.jsxs)(Te,{value:t.category,onChange:e=>l(e),name:"category",children:[Object(j.jsx)(ye.a,{value:"",disabled:!0,children:"Select Category"}),_.map((e=>Object(j.jsx)(ye.a,{value:e.type,children:e.type},e.id)))]}),Object(j.jsx)(f.a,{onClick:()=>(async()=>{await ee.createPost(t),e("/")})(),variant:"contained",color:"primary",children:"Publish"})]}),Object(j.jsx)(Ce,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>l(e)})]})},Ie=n(161),qe=n(160);const Re=Object(u.a)(o.a)(Ae||(Ae=Object(O.a)(["\n    margin-top: 30px;\n    background: #F5F5F5;\n    padding: 10px;\n"]))),_e=Object(u.a)(o.a)(Fe||(Fe=Object(O.a)(["\n    display: flex;\n    margin-bottom: 5px;\n"]))),Ne=Object(u.a)(P.a)(Me||(Me=Object(O.a)(["\n    font-weight: 600,\n    font-size: 18px;\n    margin-right: 20px;\n"]))),Ge=Object(u.a)(P.a)(ze||(ze=Object(O.a)(["\n    font-size: 14px;\n    color: #878787;\n"]))),He=Object(u.a)(qe.a)(De||(De=Object(O.a)(["\n    margin-left: auto;\n"])));var Le,Ye,Ue=e=>{let{comment:t,setToggle:n}=e;const{account:c}=Object(a.useContext)(d);return Object(j.jsxs)(Re,{children:[Object(j.jsxs)(_e,{children:[Object(j.jsx)(Ne,{children:t.name}),Object(j.jsx)(Ge,{children:new Date(t.date).toDateString()}),t.name===c.username&&Object(j.jsx)(He,{onClick:()=>(async()=>{await ee.deleteComment(t._id),n((e=>!e))})()})]}),Object(j.jsx)(P.a,{children:t.comments})]})};const Ve=Object(u.a)(o.a)(Le||(Le=Object(O.a)(["\n  margin-top: 100px;\n  display: flex;\n"]))),Je=Object(u.a)("img")({width:50,height:50,borderRadius:"50%"}),We=Object(u.a)(me.a)(Ye||(Ye=Object(O.a)(["\n  height: 100px !important;\n  width: 100%;\n  margin: 0 20px;\n"]))),Ze={name:"",postId:"",date:new Date,comments:""};var Xe,Ke,Qe,$e=e=>{let{post:t}=e;const[n,c]=Object(a.useState)(Ze),[r,s]=Object(a.useState)([]),[i,l]=Object(a.useState)(!1),{account:b}=Object(a.useContext)(d);Object(a.useEffect)((()=>{(async()=>{const e=await ee.getAllComments(t._id);e.isSuccess&&s(e.data)})()}),[i,t]);return Object(j.jsxs)(o.a,{children:[Object(j.jsxs)(Ve,{children:[Object(j.jsx)(Je,{src:"https://static.thenounproject.com/png/12017-200.png",alt:"dp"}),Object(j.jsx)(We,{rowsMin:5,placeholder:"what's on your mind?",onChange:e=>(e=>{c({...n,name:b.username,postId:t._id,comments:e.target.value})})(e),value:n.comments}),Object(j.jsx)(f.a,{variant:"contained",color:"primary",size:"medium",style:{height:40},onClick:e=>(async()=>{await ee.newComment(n),c(Ze),l((e=>!e))})(),children:"Post"})]}),Object(j.jsx)(o.a,{children:r&&r.length>0&&r.map((e=>Object(j.jsx)(Ue,{comment:e,setToggle:l})))})]})};const et=Object(u.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),tt=Object(u.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),nt=Object(u.a)(Ie.a)(Xe||(Xe=Object(O.a)(["\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #878787;\n    border-radius: 10px;\n"]))),at=Object(u.a)(qe.a)(Ke||(Ke=Object(O.a)(["\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #878787;\n    border-radius: 10px;\n"]))),ct=Object(u.a)(P.a)(Qe||(Qe=Object(O.a)(["\n    font-size: 38px;\n    font-weight: 600;\n    text-align: center;\n    margin: 50px 0 10px 0;\n"]))),rt=Object(u.a)(o.a)((e=>{let{theme:t}=e;return{color:"#878787",display:"flex",margin:"20px 0",[t.breakpoints.down("sm")]:{display:"block"}}}));var st,ot,it,lt=()=>{const[e,t]=Object(a.useState)({}),{account:n}=Object(a.useContext)(d),c=Object(i.h)(),{id:r}=Object(i.i)();Object(a.useEffect)((()=>{(async()=>{let e=await ee.getPostById(r);e.isSuccess&&t(e.data)})()}),[]);return Object(j.jsxs)(et,{children:[Object(j.jsx)(tt,{src:e.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(j.jsx)(o.a,{style:{float:"right"},children:n.username===e.username&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.b,{to:"/update/".concat(e._id),children:Object(j.jsx)(nt,{color:"primary"})}),Object(j.jsx)(at,{onClick:()=>(async()=>{await ee.deletePost(e._id),c("/")})(),color:"error"})]})}),Object(j.jsx)(ct,{children:e.title}),Object(j.jsxs)(rt,{children:[Object(j.jsx)(l.b,{to:"/?username=".concat(e.username),style:{textDecoration:"none",color:"inherit"},children:Object(j.jsxs)(P.a,{children:["Author: ",Object(j.jsx)("span",{style:{fontWeight:600},children:e.username})]})}),Object(j.jsx)(P.a,{style:{marginLeft:"auto"},children:new Date(e.createdDate).toDateString()})]}),Object(j.jsx)(P.a,{children:e.description}),Object(j.jsx)($e,{post:e})]})};const jt=Object(u.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),dt=Object(u.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),bt=Object(u.a)(ue.a)(st||(st=Object(O.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n"]))),ht=Object(u.a)(ge.c)(ot||(ot=Object(O.a)(["\n  flex: 1;\n  margin: 0 30px;\n  font-size: 25px;\n"]))),pt=Object(u.a)(me.a)(it||(it=Object(O.a)(["\n  width: 100%;\n  border: none;\n  margin-top: 50px;\n  font-size: 18px;\n  &:focus-visible {\n    outline: none;\n  }\n"]))),xt={title:"",description:"",picture:"",username:"Blog_Vista",categories:"All categories",createdDate:new Date};var Ot,ut,gt,mt,ft,yt,vt=()=>{const e=Object(i.h)(),[t,n]=Object(a.useState)(xt),[c,r]=Object(a.useState)(""),[s,o]=Object(a.useState)(""),{id:l}=Object(i.i)();Object(a.useEffect)((()=>{(async()=>{let e=await ee.getPostById(l);e.isSuccess&&n(e.data)})()}),[]),Object(a.useEffect)((()=>{(async()=>{if(c){const e=new FormData;e.append("name",c.name),e.append("file",c);const n=await ee.uploadFile(e);n.isSuccess&&(t.picture=n.data,o(n.data))}})()}),[c]);const d=e=>{n({...t,[e.target.name]:e.target.value})};return Object(j.jsxs)(jt,{children:[Object(j.jsx)(dt,{src:t.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(j.jsxs)(bt,{children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)(ve.a,{fontSize:"large",color:"action"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>r(e.target.files[0])}),Object(j.jsx)(ht,{onChange:e=>d(e),value:t.title,name:"title",placeholder:"Title"}),Object(j.jsx)(f.a,{onClick:()=>(async()=>{await ee.updatePost(t),e("/details/".concat(l))})(),variant:"contained",color:"primary",children:"Update"})]}),Object(j.jsx)(pt,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>d(e),value:t.description})]})},wt=n(187),kt=n(162),Et=n(163),St=n(164),Ct=n(165);const Tt=Object(u.a)(o.a)(Ot||(Ot=Object(O.a)(["\n  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);\n  width: 100%;\n  height: 52vh;\n  background-position: left 0px bottom 0px;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #rgb(14, 75, 82)\n  text-align: center;\n"]))),Pt=Object(u.a)(o.a)(ut||(ut=Object(O.a)(["\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  margin-top: -30px;\n"]))),At=Object(u.a)(P.a)(gt||(gt=Object(O.a)(["\n  color: rgb(14, 75, 82);\n  margin-block: 1em;\n  font-size: 2em;\n  text-align: center;\n  font-weight: bold;\n"]))),Ft=Object(u.a)(P.a)(mt||(mt=Object(O.a)(["\n  color: rgb(14, 75, 82);\n  line-height: 1.8;\n"]))),Mt=Object(u.a)(wt.a)(ft||(ft=Object(O.a)(["\n  color: #4caf50;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),zt=Object(u.a)(o.a)(yt||(yt=Object(O.a)(["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #333;\n  &:hover {\n    color: #4caf50;\n  }\n"])));var Dt,Bt,It,qt,Rt=()=>Object(j.jsxs)(o.a,{children:[Object(j.jsx)(Tt,{children:Object(j.jsx)(P.a,{variant:"h3",children:"BLOG_VISTA"})}),Object(j.jsxs)(Pt,{children:[Object(j.jsx)(At,{variant:"h5",children:"Elevating Experiences, Weaving Narratives"}),Object(j.jsxs)(Ft,{children:["Blog_Vista is an innovative application designed with the primary objective of curating and showcasing the unique perspectives of diverse bloggers through their thoughtfully crafted write-ups. This platform is dedicated to fostering a sense of community, where individuals from all walks of life can immerse themselves in a plethora of engaging narratives.",Object(j.jsx)("br",{}),"In the Blog_Vista family, every member has the opportunity to explore a wealth of blogs spanning a wide array of topics, from personal reflections to expert analyses. Furthermore, our interactive platform encourages active participation by allowing users to engage with the content through comments, creating a dynamic and inclusive space for meaningful discussions.",Object(j.jsx)("br",{}),"Blog_Vista is more than just an application; it is a collective endeavor to capture moments and craft stories that resonate with the richness of the human experience.",Object(j.jsx)("br",{}),"Join us on Blog_Vista and become part of a vibrant community that celebrates the art of storytelling."," ",Object(j.jsx)(Mt,{href:"https://github.com/shreyans00",target:"_blank",children:Object(j.jsx)(kt.a,{})}),Object(j.jsx)(Mt,{href:"https://www.linkedin.com/in/shreyans-b39844299/",target:"_blank",children:Object(j.jsx)(Et.a,{})}),Object(j.jsx)(Mt,{href:"https://www.facebook.com/shreyans.raj.16",target:"_blank",children:Object(j.jsx)(St.a,{})}),Object(j.jsx)(zt,{children:Object(j.jsx)(Mt,{href:"mailto:shreyansraj3@gmail.com",children:Object(j.jsx)(Ct.a,{})})})]})]})]});const _t=Object(u.a)(o.a)(Dt||(Dt=Object(O.a)(["\n  background-image: url(http://mrtaba.ir/image/bg2.jpg);\n  width: 100%;\n  height: 50vh;\n  background-position: left 0px top -100px;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n"]))),Nt=Object(u.a)(o.a)(Bt||(Bt=Object(O.a)(["\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  margin-top: -30px;\n  text-align: center;\n"]))),Gt=Object(u.a)(P.a)(It||(It=Object(O.a)(["\n  color: rgb(14, 75, 82);\n  margin-bottom: 20px;\n"]))),Ht=Object(u.a)(wt.a)(qt||(qt=Object(O.a)(["\n  font-size: 2.5rem;\n  margin: 0 10px;\n  color: #4caf50;\n  &:hover {\n    color: #388e3c;\n  }\n"])));var Lt,Yt,Ut,Vt,Jt,Wt,Zt,Xt=()=>Object(j.jsxs)(o.a,{children:[Object(j.jsx)(_t,{children:Object(j.jsx)(P.a,{variant:"h3",children:"Getting in touch is easy!"})}),Object(j.jsx)(Nt,{children:Object(j.jsxs)(Gt,{variant:"h5",children:["Reach out to me on",Object(j.jsx)(Ht,{href:"https://www.linkedin.com/in/shreyans-b39844299/",target:"_blank",children:Object(j.jsx)(Et.a,{})}),"or send me an Email",Object(j.jsx)(Ht,{href:"mailto:shreyansraj3@gmail.com?Subject=Let's plan a virtual coffee!!!",children:Object(j.jsx)(Ct.a,{})})]})})]}),Kt=n(168),Qt=n(28);const $t=Object(u.a)(o.a)(Lt||(Lt=Object(O.a)(["\n  width: 400px;\n  margin: auto;\n  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);\n"]))),en=Object(Qt.b)(Yt||(Yt=Object(O.a)(["\n  0% {\n    transform: rotateY(0deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n"]))),tn=Object(u.a)("img")({width:300,display:"block",marginInline:55,animation:"".concat(en," 5s ease-in-out")}),nn=Object(u.a)(o.a)(Ut||(Ut=Object(O.a)(["\n  padding: 25px 35px;\n  display: flex;\n  flex: 1;\n  overflow: auto;\n  flex-direction: column;\n  & > div,\n  & > button,\n  & > p {\n    margin-top: 20px;\n  }\n"]))),an=Object(u.a)(f.a)(Vt||(Vt=Object(O.a)(["\n  text-transform: none;\n  background: rgb(11, 37, 101);\n  color: #fff;\n  height: 48px;\n  border-radius: 2px;\n"]))),cn=Object(u.a)(f.a)(Jt||(Jt=Object(O.a)(["\n  text-transform: none;\n  background: #fff;\n  color: #2874f0;\n  height: 48px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);\n"]))),rn=Object(u.a)(P.a)(Wt||(Wt=Object(O.a)(["\n  color: #878787;\n  font-size: 12px;\n"]))),sn=Object(u.a)(P.a)(Zt||(Zt=Object(O.a)(["\n  font-size: 10px;\n  color: #ff6161;\n  line-height: 0;\n  margin-top: 10px;\n  font-weight: 600;\n"]))),on={username:"",password:""},ln={name:"",username:"",password:""};var jn=e=>{let{isUserAuthenticated:t}=e;const[n,c]=Object(a.useState)(on),[r,s]=Object(a.useState)(ln),[l,b]=Object(a.useState)(""),[h,p]=Object(a.useState)("login"),x=Object(i.h)(),{setAccount:O}=Object(a.useContext)(d);Object(a.useEffect)((()=>{b(!1)}),[n]);const u=e=>{c({...n,[e.target.name]:e.target.value})},g=e=>{s({...r,[e.target.name]:e.target.value})},m=()=>{p("signup"===h?"login":"signup")};return Object(a.useEffect)((()=>{alert("Backend is not hosted yet, sorry for inconvenience"),alert("Just click login, you will be logged in")}),[]),Object(j.jsx)($t,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(tn,{src:"./blog.png",alt:"blog"}),"login"===h?Object(j.jsxs)(nn,{children:[Object(j.jsx)(Kt.a,{variant:"standard",value:n.username,onChange:e=>u(e),name:"username",label:"Enter Username"}),Object(j.jsx)(Kt.a,{variant:"standard",value:n.password,onChange:e=>u(e),name:"password",label:"Enter Password"}),l&&Object(j.jsx)(sn,{children:l}),Object(j.jsx)(an,{variant:"contained",onClick:()=>{x("/")},children:"Login"}),Object(j.jsx)(rn,{style:{textAlign:"center"},children:"OR"}),Object(j.jsx)(cn,{onClick:()=>m(),style:{marginBottom:50},children:"Create an account"})]}):Object(j.jsxs)(nn,{children:[Object(j.jsx)(Kt.a,{variant:"standard",value:r.name,onChange:e=>g(e),name:"name",label:"Enter Name"}),Object(j.jsx)(Kt.a,{variant:"standard",value:r.username,onChange:e=>g(e),name:"username",label:"Enter Username"}),Object(j.jsx)(Kt.a,{variant:"standard",value:r.password,onChange:e=>g(e),name:"password",label:"Enter Password"}),Object(j.jsx)(cn,{onClick:()=>(async()=>{(await ee.userSignup(r)).isSuccess?(b(""),s(ln),p("login")):b("Something went wrong! please try again later")})(),children:"Signup"}),Object(j.jsx)(rn,{style:{textAlign:"center"},children:"OR"}),Object(j.jsx)(an,{variant:"contained",onClick:()=>m(),children:"Already have an account"})]})]})})};const dn=e=>{let{isAuthenticated:t,...n}=e;const a=sessionStorage.getItem("accessToken");return t&&a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{}),Object(j.jsx)(i.b,{})]}):Object(j.jsx)(i.a,{replace:!0,to:"/account"})};var bn=function(){const[e,t]=Object(a.useState)(!1);return Object(j.jsx)(x,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(o.a,{style:{marginTop:64},children:Object(j.jsxs)(i.e,{children:[Object(j.jsx)(i.c,{path:"/account",element:Object(j.jsx)(jn,{isUserAuthenticated:t})}),Object(j.jsx)(i.c,{path:"/",children:Object(j.jsx)(i.c,{path:"/",element:Object(j.jsx)(Oe,{})})}),Object(j.jsx)(i.c,{path:"/create",element:Object(j.jsx)(dn,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/create",element:Object(j.jsx)(Be,{})})}),Object(j.jsx)(i.c,{path:"/details/:id",element:Object(j.jsx)(dn,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/details/:id",element:Object(j.jsx)(lt,{})})}),Object(j.jsx)(i.c,{path:"/update/:id",element:Object(j.jsx)(dn,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/update/:id",element:Object(j.jsx)(vt,{})})}),Object(j.jsx)(i.c,{path:"/about",element:Object(j.jsx)(dn,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/about",element:Object(j.jsx)(Rt,{})})}),Object(j.jsx)(i.c,{path:"/contact",element:Object(j.jsx)(dn,{isAuthenticated:e}),children:Object(j.jsx)(i.c,{path:"/contact",element:Object(j.jsx)(Xt,{})})})]})})})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(bn,{})}),document.getElementById("root"))},92:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.35b9ffb4.chunk.js.map