(this.webpackJsonpencapsulate=this.webpackJsonpencapsulate||[]).push([[0],{120:function(e,t,s){},145:function(e,t,s){},146:function(e,t,s){},147:function(e,t,s){},148:function(e,t,s){},149:function(e,t,s){},178:function(e,t,s){},179:function(e,t,s){},180:function(e,t,s){},184:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(28),i=s.n(c);s(120);function n(){var e=document.querySelector(".menu"),t=document.querySelectorAll(".menu li");e.classList.toggle("nav-active"),t.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.25,"s"),console.log(e)}))}var l=s(108),o=s.n(l),r=s(107),d=s.n(r),j=s(34),b=s.n(j),h=s(109),x=s.n(h),p=s(1);function u(){return Object(p.jsxs)("nav",{className:"banner",children:[Object(p.jsx)("section",{className:"mini-nav",children:Object(p.jsx)("p",{className:"fallSale",children:"Fall Sale starts 9/17! Free Shipping to US Customers, INTL coming soon"})}),Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsxs)("ul",{className:"menu",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("a",{id:"accessories",href:"/accessories",children:[Object(p.jsx)("span",{className:"left",children:Object(p.jsx)(d.a,{})})," accessories"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{id:"seasons",href:"/seasons",children:[Object(p.jsx)("span",{className:"left",children:Object(p.jsx)(o.a,{})})," seasons"]})})]}),Object(p.jsx)("a",{href:"/",className:"logo-text",children:"enCapsulate"}),Object(p.jsxs)("ul",{className:"menu",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("a",{id:"bag",href:"/bag",children:[Object(p.jsx)("span",{className:"left",children:Object(p.jsx)(b.a,{})}),"bag(0)"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{id:"login",href:"/login",children:[Object(p.jsx)("span",{className:"left",children:Object(p.jsx)(x.a,{})}),"login"]})})]}),Object(p.jsxs)("div",{className:"collapse",onClick:n,children:[Object(p.jsx)("div",{className:"line1"}),Object(p.jsx)("div",{className:"line2"}),Object(p.jsx)("div",{className:"line3"})]})]})]})}var m=s(23),f=(s(183),s(85),s(110),s(72)),O=s.n(f);s(145);function g(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),n=Object(m.a)(i,2),l=n[0],o=n[1],r=Object(a.useState)(""),d=Object(m.a)(r,2),j=d[0],b=d[1],h=Object(a.useState)(""),x=Object(m.a)(h,2),u=x[0],f=x[1];return Object(p.jsx)("div",{class:"login",children:Object(p.jsx)("div",{class:"row title",children:Object(p.jsxs)("form",{class:"col s12",onSubmit:function(e){e.preventDefault(),O.a.post("/api/users",{firstName:s,lastName:l,email:j,password:u}).catch((function(e){console.log(e)}))},children:[Object(p.jsxs)("div",{class:"row names",children:[Object(p.jsxs)("div",{class:"input-field col s3 push-s3",children:[Object(p.jsx)("input",{id:"first_name",type:"text",class:"validate",name:"firstName",value:s,onChange:function(e){c(e.target.value)}}),Object(p.jsx)("label",{for:"first_name",children:"First Name"})]}),Object(p.jsx)("div",{className:"row names",children:Object(p.jsxs)("div",{class:"input-field col s3 push-s3",children:[Object(p.jsx)("input",{id:"last_name",type:"text",class:"validate",name:"lastName",value:l,onChange:function(e){o(e.target.value)}}),Object(p.jsx)("label",{for:"last_name",children:"Last Name"})]})})]}),Object(p.jsx)("div",{class:"row email",children:Object(p.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(p.jsx)("input",{id:"emailSignUp",type:"email",class:"validate",name:"email",value:j,onChange:function(e){b(e.target.value)}}),Object(p.jsx)("label",{for:"email",children:"Email"})]})}),Object(p.jsx)("div",{class:"row password",children:Object(p.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(p.jsx)("input",{id:"passwordSignUp",type:"password",class:"validate",name:"password",value:u,onChange:function(e){f(e.target.value)}}),Object(p.jsx)("label",{for:"password",children:"Password"})]})}),Object(p.jsx)("div",{className:"title",children:Object(p.jsxs)("button",{class:"waves-effect waves-light btn",type:"submit",children:[Object(p.jsx)("i",{class:"material-icons right"}),"Sign Up"]})}),Object(p.jsx)("div",{class:"row email",children:Object(p.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(p.jsx)("input",{id:"emailLogin",type:"email",class:"validate"}),Object(p.jsx)("label",{for:"email",children:"Email"})]})}),Object(p.jsx)("div",{class:"row password",children:Object(p.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(p.jsx)("input",{id:"passwordLogin",type:"password",class:"validate"}),Object(p.jsx)("label",{for:"password",children:"Password"})]})}),Object(p.jsx)("div",{className:"title",children:Object(p.jsxs)("button",{class:"waves-effect waves-light btn",children:[Object(p.jsx)("i",{class:"material-icons right"}),"Log In"]})})]})})})}s(146);function v(){return Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("form",{action:"/create-checkout-session",method:"POST",children:Object(p.jsxs)("button",{type:"submit",className:"waves-effect waves-light btn",children:[Object(p.jsx)("i",{className:"material-icons right"}),"Checkout"]})})})}s(147);function w(){return Object(p.jsx)("header",{})}s(148);var y=s.p+"static/media/winter-capsule.f8a60318.jpg",N=s.p+"static/media/fall-capsule.7ceff239.jpg",S=s.p+"static/media/spring-capsule.3e626aa4.jpg",C=s.p+"static/media/summer-capsule.908e89c9.jpg",k=s(106),z=s(190),I=s(206),B=(s(149),s(77)),F=s(204),R=s(205),W=s(55),A=Object(k.a)((function(){return{card:{borderRadius:"1rem",boxShadow:"none",position:"relative",width:200,height:360,"&:after":{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:0,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}},content:{position:"absolute",zIndex:1,bottom:0,width:"100%",color:"white"},media:{height:"100%",width:"auto"}}}));function T(e){var t=A();return Object(p.jsxs)(F.a,{className:t.card,children:[Object(p.jsx)(R.a,{className:t.media,image:e.name}),Object(p.jsx)(B.a,{py:3,px:2,className:t.content,children:Object(p.jsxs)(W.Info,{children:[Object(p.jsx)(W.InfoSubtitle,{children:"Capsule Uno"}),Object(p.jsx)(W.InfoTitle,{children:"Winter 2021 Collection"}),Object(p.jsx)(W.InfoCaption,{children:"Sleek wear for cold air"})]})})]})}var L=s(208),_=s(207),U=s(191),E=s(57),J=s.n(E),P=s(56),$=s.n(P),q=[y,N,S,C],D=Object(k.a)((function(e){return{gridContainer:{display:"flex",alignSelf:"center",alignItems:"center",position:"relative",top:"230px",margin:0,padding:0},paper:{padding:e.spacing(15),display:"flex",top:"230px",height:"60vh",width:"88%",justifyContent:"center",alignItems:"center",alignSelf:"center",color:"#fff",backgroundColor:"#1c1c1c",opacity:"90%",borderRadius:"10px"},grid:{position:"relative",height:"60vh",display:"flex",justifyContent:"center",alignItems:"center"},photoTitle:{backgroundColor:"#fff",opacity:"85%",color:"#1c1c1c",position:"fixed",display:"flex",top:"125px",justifyContent:"center",padding:"10px",borderRadius:"8px",fontFamily:"Raleway",fontSize:"35px",fontWeight:"bold"},price:{position:"absolute",zIndex:500,display:"flex",bottom:"65px",fontFamily:"Raleway",fontWeight:"bold",color:"#fff",fontSize:"18px"},bagButton:{position:"absolute",zIndex:500,display:"flex",bottom:"18px",fontFamily:"Raleway",fontWeight:"bold",padding:"9.5px",borderRadius:"8px",left:"300px"},photoFooter:{backgroundColor:"#fff",opacity:"85%",color:"#1c1c1c",position:"fixed",display:"flex",bottom:"20px",justifyContent:"center",width:"300px",padding:"8px",borderRadius:"8px",fontFamily:"Raleway",fontSize:"16px",fontWeight:"bold"},addBag1:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"},addBag2:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"},addBag3:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"},addBag4:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"}}}));function H(){var e=D(),t=Object(a.useState)(0),s=Object(m.a)(t,2),c=s[0],i=s[1],n=Object(a.useState)(0),l=Object(m.a)(n,2),o=l[0],r=l[1],d=Object(a.useState)(0),j=Object(m.a)(d,2),h=j[0],x=j[1],u=Object(a.useState)(0),f=Object(m.a)(u,2),O=f[0],g=f[1];return Object(p.jsx)("div",{className:"body",children:Object(p.jsx)("section",{className:e.gridContainer,children:Object(p.jsxs)(I.a,{container:!0,spacing:0,children:[Object(p.jsxs)(I.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(p.jsx)("div",{className:e.photoTitle,children:"winter"}),Object(p.jsx)("p",{className:e.price,children:"$199"}),Object(p.jsx)("button",{className:e.bagButton,onClick:function(e,t){var s;switch(s=localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[],e){case"winter":for(var a=0;a<t;a++)s.push({name:"winter capsule",description:"wear for the winter",price:199.99,stock:30,category:"categories[0]._id"});case"summer":for(var c=0;c<t;c++)s.push({name:"summer capsule",description:"wear for the summer",price:189.99,stock:37,category:"categories[1]._id"});case"fall":for(var i=0;i<t;i++)s.push({name:"fall capsule",description:"wear for the fall",image:"https://www.wardrobeoxygen.com/wp-content/uploads/2018/03/capsule-wardrobe-for-working-from-home-or-for-stay-at-home-moms-500x635.jpg",price:189.99,stock:25,category:"categories[2]._id"});case"spring":for(var n=0;n<t;n++)s.push({name:"spring wear",description:"wear for the spring",price:19.99,stock:3,category:"categories[3]._id"})}localStorage.setItem("order",JSON.stringify(s))}(e.photoTitle.value,o),children:"Add to Bag"}),Object(p.jsxs)("div",{className:e.addBag1,children:[Object(p.jsxs)(_.a,{color:"secondary",badgeContent:o,children:[Object(p.jsx)(b.a,{})," "]}),Object(p.jsxs)(L.a,{children:[Object(p.jsxs)(U.a,{onClick:function(){o>0&&r(o-1)},children:[" ",Object(p.jsx)($.a,{fontSize:"small"})]}),Object(p.jsxs)(U.a,{onClick:function(){r(o+1)},children:[" ",Object(p.jsx)(J.a,{fontSize:"small"})]})]})]}),Object(p.jsx)(z.a,{className:e.paper,children:Object(p.jsx)(T,{name:q[0]})}),Object(p.jsx)("div",{className:e.photoFooter,children:" Designed for colder climates, this capsule includes the perfect winter wear that will also leave your wallet warm and fuzzy."})]}),Object(p.jsxs)(I.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(p.jsx)("div",{className:e.photoTitle,children:"spring"}),Object(p.jsx)("p",{className:e.price,children:"$149"}),Object(p.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(p.jsx)("div",{className:e.addBag2,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(_.a,{color:"secondary",badgeContent:c,children:[Object(p.jsx)(b.a,{})," "]}),Object(p.jsxs)(L.a,{children:[Object(p.jsxs)(U.a,{onClick:function(){c>0&&i(c-1)},children:[" ",Object(p.jsx)($.a,{fontSize:"small"})]}),Object(p.jsxs)(U.a,{onClick:function(){i(c+1)},children:[" ",Object(p.jsx)(J.a,{fontSize:"small"})]})]})]})}),Object(p.jsx)(z.a,{className:e.paper,children:Object(p.jsx)(T,{name:q[1]})}),Object(p.jsx)("div",{className:e.photoFooter,children:" Whether it's going to be a sunny or soaked season, hot or humid, our spring capsule will accompany you every step of the way."})]}),Object(p.jsxs)(I.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(p.jsx)("div",{className:e.photoTitle,children:"summer"}),Object(p.jsx)("p",{className:e.price,children:"$179"}),Object(p.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(p.jsx)("div",{className:e.addBag3,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(_.a,{color:"secondary",badgeContent:O,children:[Object(p.jsx)(b.a,{})," "]}),Object(p.jsxs)(L.a,{children:[Object(p.jsxs)(U.a,{onClick:function(){O>0&&g(O-1)},children:[" ",Object(p.jsx)($.a,{fontSize:"small"})]}),Object(p.jsxs)(U.a,{onClick:function(){g(O+1)},children:[" ",Object(p.jsx)(J.a,{fontSize:"small"})]})]})]})}),Object(p.jsx)(z.a,{className:e.paper,children:Object(p.jsx)(T,{name:q[2]})}),Object(p.jsx)("div",{className:e.photoFooter,children:" No need to sweat your style this summer, this collection is sure to beat the heat and fashion police. Limited quantity, order now!"})]}),Object(p.jsxs)(I.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(p.jsx)("div",{className:e.photoTitle,children:"fall"}),Object(p.jsx)("p",{className:e.price,children:"$179"}),Object(p.jsx)("div",{className:e.addBag4,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(_.a,{color:"secondary",badgeContent:h,children:[Object(p.jsx)(b.a,{})," "]}),Object(p.jsxs)(L.a,{children:[Object(p.jsxs)(U.a,{onClick:function(){h>0&&x(h-1)},children:[" ",Object(p.jsx)($.a,{fontSize:"small"})]}),Object(p.jsxs)(U.a,{onClick:function(){x(h+1)},children:[" ",Object(p.jsx)(J.a,{fontSize:"small"})]})]})]})}),Object(p.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(p.jsx)(z.a,{className:e.paper,children:Object(p.jsx)(T,{name:q[3]})}),Object(p.jsx)("div",{className:e.photoFooter,children:" We dare you not to fall in love with these fall favorites. Although paired perfectly with Pumpkin Spice Latte's, this capsule is anything but basic."})]})]})})})}s(178);function G(){return Object(p.jsxs)("div",{className:"h3",children:[Object(p.jsx)("h3",{children:"Ethically Sourced. Sustainable. Unisex."}),Object(p.jsx)("div",{className:"paragraph",children:Object(p.jsx)("p",{children:"These practices reflect our passion here at enCapsulate. We strongly believe in conservation and an all-embracing approach to clothing. Help us leave behind the world a better way."})})]})}s(179);function K(){return Object(p.jsx)("div",{className:"checkout",children:Object(p.jsx)("p",{children:"Successful Order"})})}s(180);function M(){return Object(p.jsx)("div",{className:"grid-div",children:Object(p.jsx)(T,{})})}var Q=s(111),V=s(10);function X(){return Object(p.jsx)(Q.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(u,{}),Object(p.jsxs)(V.c,{children:[Object(p.jsxs)(V.a,{exact:!0,path:"/",children:[Object(p.jsx)(w,{}),Object(p.jsx)(G,{})]}),Object(p.jsx)(V.a,{exact:!0,path:"/seasons",children:Object(p.jsx)(H,{})}),Object(p.jsx)(V.a,{exact:!0,path:"/bag",children:Object(p.jsx)(v,{})}),Object(p.jsx)(V.a,{exact:!0,path:"/login",children:Object(p.jsx)(g,{})}),Object(p.jsx)(V.a,{exact:!0,path:"/checkout",children:Object(p.jsx)(K,{})}),Object(p.jsx)(V.a,{exact:!0,path:"/products",children:Object(p.jsx)(M,{})})]})]})})}i.a.render(Object(p.jsx)(X,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.63b0951d.chunk.js.map