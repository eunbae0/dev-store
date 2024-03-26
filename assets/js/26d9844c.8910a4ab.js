"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[9348],{7140:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(6560),t=s(8432);const r={},c="\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",l={id:"basics/javascript/execution_context",title:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",description:"\uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4",source:"@site/docs/basics/javascript/execution_context.md",sourceDirName:"basics/javascript",slug:"/basics/javascript/execution_context",permalink:"/fe-store/docs/basics/javascript/execution_context",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/fe-store/tree/main/docs/basics/javascript/execution_context.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"== vs ===",permalink:"/fe-store/docs/basics/javascript/comparison"},next:{title:"\uac00\ube44\uc9c0 \uceec\ub809\ud130",permalink:"/fe-store/docs/basics/javascript/garbage_collection"}},o={},d=[{value:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \ud0c0\uc785",id:"\uc18c\uc2a4\ucf54\ub4dc\uc758-\ud0c0\uc785",level:2},{value:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \ud3c9\uac00\uc640 \uc2e4\ud589",id:"\uc18c\uc2a4\ucf54\ub4dc\uc758-\ud3c9\uac00\uc640-\uc2e4\ud589",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc5ed\ud560",id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uc5ed\ud560",level:2},{value:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd",id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8-\uc2a4\ud0dd",level:2}];function x(n){const e={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8",children:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8"}),"\n",(0,i.jsx)(e.p,{children:"\uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4"}),"\n",(0,i.jsx)(e.h2,{id:"\uc18c\uc2a4\ucf54\ub4dc\uc758-\ud0c0\uc785",children:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \ud0c0\uc785"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\uc804\uc5ed \ucf54\ub4dc (\uc804\uc5ed\uc5d0 \uc874\uc7ac\ud558\ub294 \uc18c\uc2a4\ucf54\ub4dc)",(0,i.jsx)(e.br,{}),"\n","\uc804\uc5ed\ubcc0\uc218\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 \ucd5c\uc0c1\uc704 \uc2a4\ucf54\ud504\uc778 \uc804\uc5ed \uc2a4\ucf54\ud504\ub97c \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4."]}),"\n",(0,i.jsxs)(e.li,{children:["\ud568\uc218 \ucf54\ub4dc (\ud568\uc218 \ub0b4\ubd80\uc5d0 \uc874\uc7ac\ud558\ub294 \uc18c\uc2a4\ucf54\ub4dc)",(0,i.jsx)(e.br,{}),"\n","\uc9c0\uc5ed \uc2a4\ucf54\ud504\ub97c \uc0dd\uc131\ud558\uace0 \uc9c0\uc5ed\ubcc0\uc218, \ub9e4\uac1c\ubcc0\uc218, arguments\uac1d\uccb4\ub97c \uad00\ub9ac\ud574\uc57c\ud55c\ub2e4."]}),"\n",(0,i.jsx)(e.li,{children:"eval \ucf54\ub4dc"}),"\n",(0,i.jsxs)(e.li,{children:["\ubaa8\ub4c8 \ucf54\ub4dc (\ubaa8\ub4c8 \ub0b4\ubd80\uc5d0 \uc874\uc7ac\ud558\ub294 \ucf54\ub4dc)",(0,i.jsx)(e.br,{}),"\n","\ubaa8\ub4c8\ubcc4\ub85c \ub3c5\ub9bd\uc801\uc778 \ubaa8\ub4c8 \uc2a4\ucf54\ud504\ub97c \uc0dd\uc131\ud55c\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"\ubaa8\ub4e0 \uc18c\uc2a4\ucf54\ub4dc\ub294 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ud3c9\uac00\ud558\uc5ec \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud55c\ub2e4."})}),"\n",(0,i.jsx)(e.h2,{id:"\uc18c\uc2a4\ucf54\ub4dc\uc758-\ud3c9\uac00\uc640-\uc2e4\ud589",children:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \ud3c9\uac00\uc640 \uc2e4\ud589"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 ",(0,i.jsx)(e.strong,{children:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \ud3c9\uac00"}),"\uc640 ",(0,i.jsx)(e.strong,{children:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \uc2e4\ud589"})," 2\uac1c\uc758 \uacfc\uc815\uc73c\ub85c \ub098\ub204\uc5b4 \ucc98\ub9ac\ud55c\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\uc18c\uc2a4\ucf54\ub4dc \ud3c9\uac00 \uacfc\uc815(\uc120\uc5b8\ubb38)"}),": \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\uace0, \ubcc0\uc218, \ud568\uc218 \ub4f1\uc758 \uc120\uc5b8\ubb38\ub9cc \uba3c\uc800 \uc2e4\ud589\ud558\uc5ec \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\ub9ac\ud558\ub294 \uc2a4\ucf54\ud504\uc5d0 \ub4f1\ub85d\ud55c\ub2e4."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\uc18c\uc2a4\ucf54\ub4dc\uc758 \uc2e4\ud589(\uc120\uc5b8\ubb38 \uc774\uc678\uc758 \ubb38)"}),": \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc2e4\ud589\uc5d0 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uace0, \uc18c\uc2a4\ucf54\ub4dc \uc2e4\ud589\uc774 \uc644\ub8cc\ub41c\ub2e4\uba74 \uc2e4\ud589\uacb0\uacfc\ub294 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\ub9ac\ud558\ub294 \uc2a4\ucf54\ud504\uc5d0 \ub4f1\ub85d\ub41c\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"var x;\nx = 1;\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\uc18c\uc2a4\ucf54\ub4dc \ud3c9\uac00: \ubcc0\uc218 \uc120\uc5b8\ubb38 ",(0,i.jsx)(e.code,{children:"var x;"})," \uac00 \uc2e4\ud589\ub41c\ub2e4.\n\uc0dd\uc131\ub41c \ubcc0\uc218 \uc2dd\ubcc4\uc790 x\ub294 ",(0,i.jsx)(e.strong,{children:"\uc2e4\ud589\ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\ub9ac\ud558\ub294 \uc2a4\ucf54\ud504\uc5d0 \ub4f1\ub85d"}),"\ub418\uace0 undefined\ub85c \ucd08\uae30\ud654\ub41c\ub2e4."]}),"\n",(0,i.jsxs)(e.li,{children:["\uc18c\uc2a4\ucf54\ub4dc \uc2e4\ud589: \ubcc0\uc218 \ud560\ub2f9\ubb38 ",(0,i.jsx)(e.code,{children:"x=1;"})," \ub9cc \uc2e4\ud589\ub41c\ub2e4.\nx \ubcc0\uc218\uac00 \ub4f1\ub85d\ub418\uc5b4\uc788\ub294\uc9c0 \ud655\uc778(\uc2a4\ucf54\ud504\ub85c\ubd80\ud130 \uc815\ubcf4 \uc81c\uacf5\ubc1b\uc74c)\ud558\uace0 \ub4f1\ub85d\ub418\uc5b4\uc788\ub2e4\uba74 \uac12\uc744 \ud560\ub2f9\ud558\uace0 \ud560\ub2f9 \uacb0\uacfc\ub97c \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub4f1\ub85d\ud558\uc5ec \uad00\ub9ac\ud55c\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8\uc758-\uc5ed\ud560",children:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc5ed\ud560"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\uc804\uc5ed \ucf54\ub4dc \ud3c9\uac00",(0,i.jsx)(e.br,{}),"\n","\uc804\uc5ed\ucf54\ub4dc\uc758 \ubcc0\uc218, \ud568\uc218 \uc120\uc5b8\ubb38\ub9cc \uba3c\uc800 \uc2e4\ud589\ub418\uace0 \uc0dd\uc131\ub41c \uc804\uc5ed\ubcc0\uc218, \ud568\uc218\uac00 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\ub9ac\ud558\ub294 \uc804\uc5ed \uc2a4\ucf54\ud504\uc5d0 \ub4f1\ub85d\ub41c\ub2e4."]}),"\n",(0,i.jsxs)(e.li,{children:["\uc804\uc5ed \ucf54\ub4dc \uc2e4\ud589",(0,i.jsx)(e.br,{}),"\n","\ub7f0\ud0c0\uc784\uc774 \uc2dc\uc791\ub418\uc5b4 \uc804\uc5ed \ucf54\ub4dc\uac00 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub41c\ub2e4. \ub9cc\uc57d \ud568\uc218\uac00 \ud638\ucd9c\ub418\uba74 \uc804\uc5ed \ucf54\ub4dc\uc758 \uc2e4\ud589\uc744 \uc77c\uc2dc \uc911\ub2e8\ud558\uace0 \ucf54\ub4dc \uc2e4\ud589 \uc21c\uc11c\ub97c \ubcc0\uacbd\ud558\uc5ec \ud568\uc218 \ub0b4\ubd80\ub85c \uc9c4\uc785\ud55c\ub2e4."]}),"\n",(0,i.jsxs)(e.li,{children:["\ud568\uc218 \ucf54\ub4dc \ud3c9\uac00",(0,i.jsx)(e.br,{}),"\n","\uc0dd\uc131\ub41c \ub9e4\uac1c\ubcc0\uc218, \uc9c0\uc5ed\ubcc0\uc218\uac00 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\ub9ac\ud558\ub294 \uc9c0\uc5ed \uc2a4\ucf54\ud504\uc5d0 \ub4f1\ub85d\ub41c\ub2e4."]}),"\n",(0,i.jsxs)(e.li,{children:["\ud568\uc218 \ucf54\ub4dc \uc2e4\ud589",(0,i.jsx)(e.br,{}),"\n","\ub7f0\ud0c0\uc784\uc774 \uc2dc\uc791\ub418\uc5b4 \ud568\uc218 \ucf54\ub4dc\uac00 ",(0,i.jsx)("mark",{children:"\uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589"}),"\ub41c\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8-\uc2a4\ud0dd",children:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\ub294 \uc2dc\uac04\uc758 \ud750\ub984\uc5d0 \ub530\ub77c \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ucd94\uac00(push)\ub418\uace0 \uc81c\uac70(pop)\ub41c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:"const x = 1;\n\nfunction foo() {\n\tconst y = 2;\n\n\tfunction bar() {\n\t\tconst z = 3;\n\t\tconsole.log(x + y + z);\n\t}\n\t// highlight-next-line\n\tbar();\n}\n// highlight-next-line\nfoo(); //6\n"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\uc804\uc5ed\ucf54\ub4dc\uc758 \ud3c9\uac00\uc640 \uc2e4\ud589 \u2192 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc804\uc5ed \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\uace0 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd\uc5d0 \ud478\uc2dc\ud55c\ub2e4."}),"\n",(0,i.jsx)(e.li,{children:"foo \ud568\uc218 \ucf54\ub4dc\uc758 \ud3c9\uac00\uc640 \uc2e4\ud589"}),"\n",(0,i.jsx)(e.li,{children:"bar \ud568\uc218 \ucf54\ub4dc\uc758 \ud3c9\uac00\uc640 \uc2e4\ud589"}),"\n",(0,i.jsx)(e.li,{children:"foo \ud568\uc218 \ucf54\ub4dc\ub85c \ubcf5\uadc0"}),"\n",(0,i.jsx)(e.li,{children:"\uc804\uc5ed \ucf54\ub4dc\ub85c \ubcf5\uadc0 \u2192 \ub354 \uc774\uc0c1 \uc2e4\ud589\ud560 \uc804\uc5ed\ucf54\ub4dc\uac00 \ub0a8\uc544\uc788\uc9c0 \uc54a\ub2e4\uba74 \uc804\uc5ed \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd\uc5d0\uc11c \ud31d\ub41c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uc2a4\ud0dd\uc758 \ucd5c\uc0c1\uc704\uc5d0 \uc874\uc7ac\ud558\ub294 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc5b8\uc81c\ub098 \ud604\uc7ac \uc2e4\ud589\uc911\uc778 \ucf54\ub4dc\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc774\ub2e4."})})]})}function a(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8432:(n,e,s)=>{s.d(e,{I:()=>l,M:()=>c});var i=s(4424);const t={},r=i.createContext(t);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);