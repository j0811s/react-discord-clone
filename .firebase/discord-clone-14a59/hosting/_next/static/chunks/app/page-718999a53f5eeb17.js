(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6729:function(e,s,a){Promise.resolve().then(a.bind(a,4999))},4999:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return U}});var n=a(3827);a(4612);var c=a(9398),t=a(815),l=a(1829),i=a(2279),r=a(1518),d=a(9795),h=a(703),o=a(6142),u=a(2730),m=a(8121);let x=(0,o.ZF)({apiKey:"AIzaSyA6dukvnyhI35qG2p5nuH9V_aYfNxzUZZ8",authDomain:"discord-clone-14a59.firebaseapp.com",projectId:"discord-clone-14a59",storageBucket:"discord-clone-14a59.appspot.com",messagingSenderId:"822678704807",appId:"1:822678704807:web:312b453b867fe063d08182"}),j=(0,m.ad)(x),N=(0,u.v0)(x),p=new u.hJ;var f=a(828);let v=f.I0,g=f.v9;a(9417),a(9199);var b=a(3315),I=function(e){let{channelData:s}=e,{id:a,name:c}=s,t=v();return(0,n.jsx)("div",{id:a,className:"sidebarChannel",onClick:()=>t((0,b.O)({channelId:a,channelName:c})),children:(0,n.jsxs)("h4",{className:"sidebarChannelName",children:[(0,n.jsx)("span",{className:"sidebarChannelHash",children:"#"}),c]})})},Z=a(4090),C=e=>{let[s,a]=(0,Z.useState)([]),n=(0,m.IO)((0,m.hJ)(j,e));return(0,Z.useEffect)(()=>{(0,m.cf)(n,e=>{let s=[];e.forEach(e=>{s.push({id:e.id,name:e.data().channelName})}),a(s)})},[]),{documents:s}},y=()=>{let{uid:e,photo:s,email:a,displayName:o}=g(e=>e.user.user),{documents:u}=C("channels"),x=async()=>{let e=prompt("新しいチャンネルを作成します");e&&await (0,m.ET)((0,m.hJ)(j,"channels"),{channelName:e})};return(0,n.jsxs)("nav",{className:"sidebar",children:[(0,n.jsxs)("div",{className:"sidebarLeft",children:[(0,n.jsx)("div",{className:"serverIcon",children:(0,n.jsx)(h.default,{src:"/discordIcon.png",alt:"",width:100,height:100})}),(0,n.jsx)("div",{className:"serverIcon",children:(0,n.jsx)(h.default,{src:"/next.svg",alt:"",width:100,height:100})}),(0,n.jsx)("div",{className:"sidebarLogout",children:(0,n.jsx)("button",{className:"sidebarLogoutButton",onClick:()=>N.signOut(),type:"button","aria-label":"ログアウト",children:(0,n.jsx)(d.Z,{})})})]}),(0,n.jsxs)("div",{className:"sidebarRight",children:[(0,n.jsxs)("header",{className:"sidebarTop",children:[(0,n.jsx)("h2",{className:"sidebarTopTitle",children:"Discord"}),(0,n.jsx)(c.Z,{})]}),(0,n.jsxs)("div",{className:"sidebarChannels",children:[(0,n.jsxs)("div",{className:"sidebarChannelsHeader",children:[(0,n.jsxs)("div",{className:"sidebarHeader",children:[(0,n.jsx)(c.Z,{}),(0,n.jsx)("h3",{className:"sidebarHeaderTitle",children:"チャンネル名"})]}),(0,n.jsx)("button",{type:"button","aria-label":"チャンネルを追加する",onClick:x,children:(0,n.jsx)(t.Z,{className:"sidebarAddIcon"})})]}),(0,n.jsx)("div",{className:"sidebarChannelList",children:u.map(e=>(0,n.jsx)(I,{channelData:e},e.id))})]}),(0,n.jsxs)("footer",{className:"sidebarFooter",children:[(0,n.jsxs)("figure",{className:"sidebarAccount",children:[(0,n.jsx)(h.default,{className:"sidebarAccountIcon",src:s||"",alt:"",width:100,height:100}),(0,n.jsxs)("div",{className:"sidebarAccountName",children:[(0,n.jsx)("span",{className:"sidebarAccountDisplayName",children:o}),(0,n.jsx)("span",{className:"sidebarAccountId",children:e})]})]}),(0,n.jsxs)("div",{className:"sidebarVoice",children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(i.Z,{}),(0,n.jsx)(r.Z,{})]})]})]})]})};a(2893),a(4412);var S=a(6775),k=a(3351),w=a(6914),E=a(1887),H=a(9814),M=a(7487),A=a(9401),D=a(8562),L=a(9249),O=a(8040),T=function(e){let{channelName:s}=e;return(0,n.jsxs)("div",{className:"chatHeader",children:[(0,n.jsx)("div",{className:"chatHeaderLeft",children:(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{className:"chatHeaderHash",children:"#"}),s]})}),(0,n.jsxs)("div",{className:"chatHeaderRight",children:[(0,n.jsx)(M.Z,{}),(0,n.jsx)(A.Z,{}),(0,n.jsx)(D.Z,{}),(0,n.jsxs)("div",{className:"chatHeaderSearch",children:[(0,n.jsx)("input",{type:"text",placeholder:"検索"}),(0,n.jsx)(L.Z,{})]}),(0,n.jsx)(H.Z,{}),(0,n.jsx)(O.Z,{})]})]})};a(3268);var _=a(6874),B=function(e){let{message:s,timestamp:a,user:c}=e;return(0,n.jsxs)("div",{className:"chatMessage",children:[(null==c?void 0:c.photo)?(0,n.jsx)(h.default,{className:"chatMessageIcon",src:c.photo,alt:"",width:40,height:40}):(0,n.jsx)(_.Z,{className:"chatMessageIcon"}),(0,n.jsxs)("div",{className:"chatMessageInfo",children:[(0,n.jsxs)("p",{className:"chatMessageUserName",children:[null==c?void 0:c.displayName,(0,n.jsx)("span",{className:"chatMessageTimestamp",children:new Date(null==a?void 0:a.toDate()).toLocaleString()})]}),(0,n.jsx)("p",{className:"chatMessageContent",children:s.replace("\\\n","\n")})]})]})},J=(e,s)=>{let[a,n]=(0,Z.useState)([]),c=g(e=>e.channel.channelId);return(0,Z.useEffect)(()=>{let a=(0,m.hJ)(j,e,String(c),s),t=(0,m.IO)(a,(0,m.Xo)("timestamp","asc"));(0,m.cf)(t,e=>{let s=[];e.docs.forEach(e=>{s.push({message:e.data().message,timestamp:e.data().timestamp,user:e.data().user})}),n(s)})},[c]),{subDocuments:a}},F=function(){let[e,s]=(0,Z.useState)(""),a=g(e=>e.channel.channelId),c=g(e=>e.channel.channelName),t=g(e=>e.user.user),{subDocuments:l}=J("channels","messages"),i=async e=>{if(!e||!e.match(/\S/g))return;let n=(0,m.hJ)(j,"channels",String(a),"messages");await (0,m.ET)(n,{message:e,timestamp:(0,m.Bt)(),user:t}),s(e=>"")};return(0,n.jsxs)("div",{className:"chat",children:[(0,n.jsx)(T,{channelName:c}),(0,n.jsx)("div",{className:"chatMessageContainer",children:l.map((e,s)=>{var a;return(0,n.jsx)(B,{message:null==e?void 0:e.message,timestamp:null==e?void 0:e.timestamp,user:null==e?void 0:e.user},"".concat(c,"-").concat(null==e?void 0:null===(a=e.user)||void 0===a?void 0:a.uid,"-").concat(s))})}),(0,n.jsxs)("div",{className:"chatInput",children:[(0,n.jsx)(S.Z,{}),(0,n.jsxs)("form",{className:"chatInputForm",children:[(0,n.jsx)("textarea",{className:"chatInputContent",placeholder:"メッセージを入力",onChange:e=>s(s=>e.target.value),onKeyDown:s=>{s.metaKey&&"Enter"===s.code&&i(e)},value:e}),(0,n.jsx)("button",{type:"submit",className:"chatSubmitBtn","aria-label":"メッセージを送信する",onClick:s=>{s.preventDefault(),i(e)},children:(0,n.jsx)(H.Z,{})})]}),(0,n.jsxs)("div",{className:"chatInputIcons",children:[(0,n.jsx)(k.Z,{}),(0,n.jsx)(w.Z,{}),(0,n.jsx)(E.Z,{})]})]})]})};a(3874);var K=a(8643),P=function(){return(0,n.jsxs)("div",{className:"login",children:[(0,n.jsx)("div",{className:"loginLogo",children:(0,n.jsx)(h.default,{className:"loginLogoImg",src:"/discordIcon.png",alt:"",width:450,height:450})}),(0,n.jsx)(K.Z,{className:"loginButton",onClick:()=>{(0,u.rh)(N,p).catch(e=>alert(e))},children:"ログイン"})]})},R=a(6255);function U(){let e=g(e=>e.user.user),s=v();return(0,Z.useEffect)(()=>{N.onAuthStateChanged(e=>{e?s((0,R.x4)({uid:e.uid,photo:e.photoURL,email:e.email,displayName:e.displayName})):s((0,R.kS)())})},[s]),(0,n.jsx)("main",{id:"app",className:"app",children:e.uid?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{}),(0,n.jsx)(F,{})]}):(0,n.jsx)(P,{})})}},3315:function(e,s,a){"use strict";a.d(s,{O:function(){return c}});let n=(0,a(5972).oM)({name:"channel",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:(e,s)=>{e.channelId=s.payload.channelId,e.channelName=s.payload.channelName}}});s.ZP=n.reducer;let{setChannelInfo:c}=n.actions},6255:function(e,s,a){"use strict";a.d(s,{kS:function(){return t},x4:function(){return c}});let n=(0,a(5972).oM)({name:"user",initialState:{user:{}},reducers:{login:(e,s)=>{e.user=s.payload},logout:e=>{e.user={}}}});s.ZP=n.reducer;let{login:c,logout:t}=n.actions},2893:function(){},4412:function(){},3268:function(){},3874:function(){},9417:function(){},9199:function(){},4612:function(){}},function(e){e.O(0,[358,380,275,532,971,69,744],function(){return e(e.s=6729)}),_N_E=e.O()}]);