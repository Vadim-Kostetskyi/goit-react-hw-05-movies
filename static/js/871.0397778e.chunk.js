"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871,604],{604:function(e,t,s){s.r(t);var i=s(439),n=s(791),r=s(689),c=s(44),a=s(184);t.default=function(){var e=(0,n.useState)([]),t=(0,i.Z)(e,2),s=t[0],o=t[1],l=(0,r.UO)().movieId;return(0,n.useEffect)((function(){(0,c.bp)(l).then((function(e){return o(e.data.cast)}))}),[]),(0,a.jsx)("ul",{children:s.map((function(e){var t=e.original_name,s=e.character,i=e.id,n=e.profile_path;return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"",alt:t,width:"100px"}),(0,a.jsx)("h2",{children:t}),(0,a.jsxs)("p",{children:["`Character: ",s,"`"]})]},i)}))})}},871:function(e,t,s){s.r(t);var i=s(439),n=s(44),r=s(791),c=s(689),a=s(87),o=(s(604),s(184));t.default=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),s=t[0],l=t[1],h=(0,r.useState)(""),d=(0,i.Z)(h,2),u=d[0],x=d[1],v=(0,r.useState)([]),j=(0,i.Z)(v,2),m=j[0],p=j[1],f=(0,r.useState)([]),g=(0,i.Z)(f,2),w=g[0],_=g[1],b=(0,r.useState)(""),k=(0,i.Z)(b,2),S=k[0],Z=k[1],C=10*parseInt(w),I=(0,c.UO)().movieId;(0,r.useEffect)((function(){(0,n.Pg)(I).then((function(e){var t=e.data;l(t.title),x(t.overview),p(t.genres),_(t.vote_average),Z(t.poster_path)}))}),[]);var N=(0,c.s0)();console.log(N);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:function(){N(-1)},children:"Go back"}),(0,o.jsxs)("div",{className:"movie",children:[(0,o.jsx)("img",{className:"movie-img",src:S?"https://image.tmdb.org/t/p/w500/".concat(S):"",alt:s,width:"200px"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:s}),(0,o.jsxs)("p",{children:["User Score ",C,"%"]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:u}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:m.map((function(e){return(0,o.jsx)("span",{className:"geners",children:e.name},e.id)}))})]})]}),(0,o.jsxs)("div",{className:"movie-box",children:[(0,o.jsx)("p",{children:"Additional Information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.Link,{to:"/movies/".concat(I,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.Link,{to:"/movies/".concat(I,"/reviews"),children:"Reviews"})})]})]}),(0,o.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=871.0397778e.chunk.js.map