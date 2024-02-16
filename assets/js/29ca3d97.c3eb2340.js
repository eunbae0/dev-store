"use strict";(self.webpackChunkfe_store=self.webpackChunkfe_store||[]).push([[444],{9148:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(6560),i=s(9788);const r={sidebar_position:1},o="\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ud0dc\uc2a4\ud06c \ud050",c={id:"basics/javascript/event_loop_and_task_queue",title:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ud0dc\uc2a4\ud06c \ud050",description:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd",source:"@site/docs/basics/javascript/event_loop_and_task_queue.md",sourceDirName:"basics/javascript",slug:"/basics/javascript/event_loop_and_task_queue",permalink:"/fe-store/docs/basics/javascript/event_loop_and_task_queue",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/fe-store/tree/main/docs/basics/javascript/event_loop_and_task_queue.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"basicsSidebar",previous:{title:"Javascript",permalink:"/fe-store/docs/category/javascript"},next:{title:"== vs ===",permalink:"/fe-store/docs/basics/javascript/comparison"}},l={},d=[{value:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd",id:"\uc774\ubca4\ud2b8-\ub8e8\ud504\uc640-\ube0c\ub77c\uc6b0\uc800-\ud658\uacbd",level:2},{value:"\ucf5c \uc2a4\ud0dd (= \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd)",id:"\ucf5c-\uc2a4\ud0dd--\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8-\uc2a4\ud0dd",level:3},{value:"\ud799",id:"\ud799",level:3},{value:"\ud0dc\uc2a4\ud06c \ud050",id:"\ud0dc\uc2a4\ud06c-\ud050",level:3},{value:"\uc774\ubca4\ud2b8 \ub8e8\ud504",id:"\uc774\ubca4\ud2b8-\ub8e8\ud504",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\uc774\ubca4\ud2b8-\ub8e8\ud504\uc640-\ud0dc\uc2a4\ud06c-\ud050",children:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ud0dc\uc2a4\ud06c \ud050"}),"\n",(0,t.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\ub8e8\ud504\uc640-\ube0c\ub77c\uc6b0\uc800-\ud658\uacbd",children:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2022-05-11 \u110b\u1169\u110c\u1165\u11ab 1.51.08.png",src:s(300).c+""})}),"\n",(0,t.jsx)(n.h3,{id:"\ucf5c-\uc2a4\ud0dd--\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8-\uc2a4\ud0dd",children:"\ucf5c \uc2a4\ud0dd (= \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd)"}),"\n",(0,t.jsx)(n.p,{children:"\ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ud568\uc218 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc21c\ucc28\uc801\uc73c\ub85c \ucf5c \uc2a4\ud0dd\uc5d0 \ud478\uc2dc\ub418\uc5b4 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub41c\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"\ud799",children:"\ud799"}),"\n",(0,t.jsxs)(n.p,{children:["\uac1d\uccb4\uac00 \uc800\uc7a5\ub418\ub294 \uba54\ubaa8\ub9ac \uacf5\uac04\uc774\ub2e4. \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \ud799\uc5d0 \uc800\uc7a5\ub41c \uac1d\uccb4\ub97c \ucc38\uc870\ud55c\ub2e4.\n\uac1d\uccb4\ub294 \ud06c\uae30\uac00 \uc815\ud574\uc838 \uc788\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0, \ud560\ub2f9\ud574\uc57c \ud560 \uba54\ubaa8\ub9ac \uacf5\uac04\uc758 \ud06c\uae30\ub97c \ub7f0\ud0c0\uc784\uc5d0 \uacb0\uc815(\ub3d9\uc801\ud560\ub2f9) \ud574\uc57c\ud55c\ub2e4. \ub530\ub77c\uc11c \ud799\uc740 ",(0,t.jsx)(n.strong,{children:"\uad6c\uc870\ud654\uac00 \ub418\uc5b4\uc788\uc9c0 \uc54a\ub2e4"}),"\ub294 \ud2b9\uc9d5\uc774 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \ub2e8\uc21c\ud788 \ud14c\uc2a4\ud06c\uac00 \uc694\uccad\ub418\uba74 \uc791\uc5c5\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub9cc \ud558\uace0, \ube44\ub3d9\uae30 \ucc98\ub9ac\uc5d0\uc11c \uc774\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ucc98\ub9ac\ub294 \ube0c\ub77c\uc6b0\uc800 \ub610\ub294 Node.js\uac00 \ub2f4\ub2f9\ud55c\ub2e4."})}),"\n",(0,t.jsx)(n.h3,{id:"\ud0dc\uc2a4\ud06c-\ud050",children:"\ud0dc\uc2a4\ud06c \ud050"}),"\n",(0,t.jsx)(n.p,{children:"\ube44\ub3d9\uae30\ud568\uc218\uc758 \ucf5c\ubc31 \ud568\uc218(setTimeout, setInterval \ub4f1) \ub610\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \uc77c\uc2dc\uc801\uc73c\ub85c \ubcf4\uad00\ub418\ub294 \uc601\uc5ed\uc774\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"\uc774\ubca4\ud2b8-\ub8e8\ud504",children:"\uc774\ubca4\ud2b8 \ub8e8\ud504"}),"\n",(0,t.jsx)(n.p,{children:"\ucf5c \uc2a4\ud0dd\uc5d0 \ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc788\ub294\uc9c0, \ud0dc\uc2a4\ud06c \ud050\uc5d0 \ub300\uae30\uc911\uc778 \ud568\uc218\uac00 \uc788\ub294\uc9c0 \ubc18\ubcf5\ud574\uc11c \ud655\uc778\ud55c\ub2e4.\n\ub9cc\uc57d \ucf5c \uc2a4\ud0dd\uc774 \ube44\uc5b4\uc788\uace0, \ud0dc\uc2a4\ud06c \ud050\uc5d0 \ub300\uae30\uc911\uc778 \ud568\uc218\uac00 \uc788\ub2e4\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \uc21c\ucc28\uc801\uc73c\ub85c \ud0dc\uc2a4\ud06c \ud050\uc5d0 \ub300\uae30\uc911\uc778 \ud568\uc218\ub97c \ucf5c \uc2a4\ud0dd\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0a8\ub2e4."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\ud0dc\uc2a4\ud06c \ud050\uc5d0 \uc77c\uc2dc\uc801\uc73c\ub85c \ubcf4\uad00\ub41c \ud568\uc218\ub4e4\uc740 \ube44\ub3d9\uae30 \ucc98\ub9ac \ubc29\uc2dd\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function foo() {\n\tconsole.log("foo");\n}\nfunction bar() {\n\tconsole.log("bar");\n}\n\n// highlight-start\nsetTimeout(foo, 3 * 1000);\nbar(); // bar, (3\ucd08 \ud6c4), foo\n// highlight-end\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc704 \uc608\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub3d9\uc791\ud55c\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\uc804\uc5ed \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uba74 \uba3c\uc800 setTimeout \ud568\uc218\uac00 ",(0,t.jsx)("mark",{children:(0,t.jsx)(n.strong,{children:"\ud638\ucd9c"})}),"\ub418\uba70 \ucf5c \uc2a4\ud0dd\uc5d0 \ud478\uc2dc\ub418\uc5b4 \ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ub41c\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["setTimeout \ud568\uc218\uac00 ",(0,t.jsx)("mark",{children:(0,t.jsx)(n.strong,{children:"\uc2e4\ud589"})}),"\ub418\uba74 \ucf5c \uc2a4\ud0dd\uc5d0\uc11c \ud31d\ub41c\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"(\ube0c\ub77c\uc6b0\uc800)"})," \ud0c0\uc774\uba38\ub97c \uc124\uc815\ud558\uace0 \ud0c0\uc774\uba38\uc758 \ub9cc\ub8cc\ub97c \uae30\ub2e4\ub9b0\ub2e4. \uc774\ud6c4 \ud0c0\uc774\uba38\uac00 \ub9cc\ub8cc\ub41c\ub2e4\uba74 \ucf5c\ubc31 \ud568\uc218 foo\ub97c ",(0,t.jsx)(n.strong,{children:"\ud0dc\uc2a4\ud06c \ud050\uc5d0 \ub4f1\ub85d"}),"\ud55c\ub2e4.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"(\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4)"})," \ub2e4\uc74c\uc73c\ub85c bar\ud568\uc218\uac00 ",(0,t.jsx)("mark",{children:(0,t.jsx)(n.strong,{children:"\ud638\ucd9c"})}),"\ub418\uc5b4 \uc2e4\ud589 \ud6c4 \uc885\ub8cc\ub418\uc5b4 \ucf5c \uc2a4\ud0dd\uc5d0\uc11c \ud31d\ub41c\ub2e4."]}),"\n",(0,t.jsx)(n.li,{children:"\uc804\uc5ed \ucf54\ub4dc \uc2e4\ud589\uc774 \uc885\ub8cc\ub418\uace0, \ucf5c \uc2a4\ud0dd\uc5d0 \uc544\ubb34\ub7f0 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub3c4 \uc874\uc7ac\ud558\uc9c0 \uc54a\uac8c\ub41c\ub2e4."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uc774\ubca4\ud2b8 \ub8e8\ud504"}),"\uc5d0 \ucf5c \uc2a4\ud0dd\uc774 \ube44\uc5b4\uc788\uc74c\uc774 \uac10\uc9c0\ub418\uace0 \ud0dc\uc2a4\ud06c \ud050\uc5d0\uc11c \ub300\uae30\uc911\uc778 \ucf5c\ubc31 \ud568\uc218 foo\uac00 ",(0,t.jsx)(n.strong,{children:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc5d0 \uc758\ud574 \ucf5c \uc2a4\ud0dd\uc5d0 \ud478\uc2dc"}),"\ub418\uba70, ",(0,t.jsx)(n.strong,{children:"\uc2e4\ud589 \ud6c4 \uc885\ub8cc"}),"\ub418\uc5b4 \ucf5c \uc2a4\ud0dd\uc5d0\uc11c \ud31d\ub41c\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["setTimeout\uc758 \ucf5c\ubc31 \ud568\uc218\ub294 \ud0dc\uc2a4\ud06c \ud050\uc5d0 \ud478\uc2dc\ub418\uc5b4 \ub300\uae30\ud558\ub2e4 ",(0,t.jsx)(n.strong,{children:"\ucf5c \uc2a4\ud0dd\uc774 \ube44\uac8c\ub418\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \uc774\ub97c \uac10\uc9c0"}),"\ud558\uace0 ",(0,t.jsx)(n.strong,{children:"\ucf5c\ubc31 \ud568\uc218\ub97c \ucf5c \uc2a4\ud0dd\uc5d0 \ud478\uc2dc\ud558\uc5ec \uc2e4\ud589"}),"\ub41c\ub2e4."]}),"\n",(0,t.jsx)(n.li,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8(\uc5d4\uc9c4)\uc774 \uc2f1\uae00 \uc2a4\ub808\ub4dc \ubc29\uc2dd\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \uac83\uc774\uace0, \ube0c\ub77c\uc6b0\uc800\ub294 \uba40\ud2f0 \uc2a4\ub808\ub4dc\ub85c \ub3d9\uc791\ud55c\ub2e4."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},300:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/event_loop_and_task_queue_1-0cd7f2426fdd691f46e6d16eb9fbb62d.png"},9788:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>o});var t=s(4424);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);