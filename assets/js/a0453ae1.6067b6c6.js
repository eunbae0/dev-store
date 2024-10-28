"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[6549],{8724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(6560),c=n(8432);const r={},a="Batching",o={id:"fe/react/batching",title:"Batching",description:"Batching is when React groups multiple state updates into a single re-render for better performance.",source:"@site/docs/fe/react/batching.md",sourceDirName:"fe/react",slug:"/fe/react/batching",permalink:"/dev-store/docs/fe/react/batching",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/fe/react/batching.md",tags:[],version:"current",frontMatter:{},sidebar:"feSidebar",previous:{title:"React",permalink:"/dev-store/docs/category/react"},next:{title:"Memoization Hooks (useCallback, useMemo)",permalink:"/dev-store/docs/fe/react/memoization"}},s={},l=[{value:"React\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815",id:"react\uc758-\ub80c\ub354\ub9c1-\uacfc\uc815",level:2},{value:"Rendering",id:"rendering",level:3},{value:"Reconciliation(\uc870\uc815)",id:"reconciliation\uc870\uc815",level:3},{value:"Commit(\uc801\uc6a9)",id:"commit\uc801\uc6a9",level:3},{value:"React Batching?",id:"react-batching",level:2},{value:"React 18 \uc774\ud6c4\uc758 Automatic Batching",id:"react-18-\uc774\ud6c4\uc758-automatic-batching",level:2},{value:"batch\ub97c \uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74?",id:"batch\ub97c-\uc6d0\ud558\uc9c0-\uc54a\ub294\ub2e4\uba74",level:2},{value:"\ucc38\uace0 \ubb38\uc11c",id:"\ucc38\uace0-\ubb38\uc11c",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"batching",children:"Batching"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Batching is when React groups multiple state updates into a single re-render for better performance."})}),"\n",(0,i.jsx)(t.h2,{id:"react\uc758-\ub80c\ub354\ub9c1-\uacfc\uc815",children:"React\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815"}),"\n",(0,i.jsx)(t.h3,{id:"rendering",children:"Rendering"}),"\n",(0,i.jsx)(t.p,{children:"\uc0c1\ud0dc \uac12\uc774 \ubcc0\uacbd\ub418\uba74, React\ub294 \ubcc0\uacbd\ub41c \uc0c1\ud0dc \uac12\uc744 \uc911\uc2ec\uc73c\ub85c \uc0c8\ub85c\uc6b4 Virtual DOM\uc744 \uc0dd\uc131"}),"\n",(0,i.jsx)(t.p,{children:"\uc989\uc2dc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub2e4\uc2dc \ud638\ucd9c(\ub9ac\ub80c\ub354\ub9c1)\ud558\ub294\uac70\uc774 \uc544\ub2cc, \uc5b8\uc81c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0dd\uc131\ud560 \uc9c0 \ucd5c\uc801\uc758 \uc2dc\uac04\uc744 \uacc4\uc0b0\ud55c\ub2e4."}),"\n",(0,i.jsx)(t.h3,{id:"reconciliation\uc870\uc815",children:"Reconciliation(\uc870\uc815)"}),"\n",(0,i.jsx)(t.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\uc2dc \ud638\ucd9c\ub418\uba74, Rendering \ub2e8\uacc4\uc5d0\uc11c \ub9cc\ub4e0 Virtual DOM\uc744 \ud604\uc7ac UI\uc5d0 \uc801\uc6a9\ub41c \uac00\uc7a5 \ucd5c\uc2e0\uc758 Virtual DOM\uacfc \ube44\uad50\ud55c\ub2e4. (Fiber\ub85c \ucc98\ub9ac)"}),"\n",(0,i.jsx)(t.h3,{id:"commit\uc801\uc6a9",children:"Commit(\uc801\uc6a9)"}),"\n",(0,i.jsx)(t.p,{children:"Actual DOM\uc5d0 \ubcc0\uacbd\ub41c Virtual DOM\uc744 \uc801\uc6a9\ud574 \ud654\uba74\uc758 \ubcc0\ud654\ub97c \ub9cc\ub4e4\uc5b4\ub0b8\ub2e4."}),"\n",(0,i.jsx)(t.h2,{id:"react-batching",children:"React Batching?"}),"\n",(0,i.jsx)(t.p,{children:"\uc720\uc800 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\ub294 \uc2dc\uc810\uc5d0 \uc5ec\ub7ec \uc0c1\ud0dc \uac12\uc774 \ubcc0\uacbd\ub418\ub294 \ucf54\ub4dc(ex. setState)\uac00 \uc788\ub2e4\uba74 \ubaa8\ub450 \uae30\ub2e4\ub9b0 \ub2e4\uc74c \ub80c\ub354\ub9c1\uc73c\ub85c \ub118\uc5b4\uac04\ub2e4."}),"\n",(0,i.jsx)(t.h2,{id:"react-18-\uc774\ud6c4\uc758-automatic-batching",children:"React 18 \uc774\ud6c4\uc758 Automatic Batching"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\uc720\uc800 \uc774\ubca4\ud2b8\uc5d0 \uc5f0\uacb0\ub41c \ud568\uc218 \ub0b4\uc5d0\uc11c \uc9c1\uc811\uc801\uc73c\ub85c \ubcc0\uacbd\ub41c \uc0c1\ud0dc \uac12\ub9cc batching\uc758 \ubc94\uc704 \uc548\uc5d0 \ub4e4\uc5b4\uc654\uc74c.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\ub2e4\uc2dc \ub9d0\ud574 timeouts, promises, native event handlers \ub4f1\uc740 batching\uc774 \uc218\ud589\ub418\uc9c0 \uc54a\uc74c"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"18 \uc774\ud6c4\ubd80\ud130\ub294 createRoot\ub85c \ub9ac\uc561\ud2b8 \ub8e8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucd08\uae30\ud654\ud558\uba74 promise \ub4f1\uc758 \uc8fc\uae30 \ub0b4\uc5d0\uc11c\ub3c4 batching\uc774 \uc801\uc6a9 \ub428."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'const root = createRoot(document.getElementById("root"));\nroot.render(<App />);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"batch\ub97c-\uc6d0\ud558\uc9c0-\uc54a\ub294\ub2e4\uba74",children:"batch\ub97c \uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74?"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { flushSync } from "react-dom"; // Note: react-dom, not react\n\nfunction handleClick() {\n\tflushSync(() => {\n\t\tsetCounter((c) => c + 1);\n\t});\n\t// React has updated the DOM by now\n\tflushSync(() => {\n\t\tsetFlag((f) => !f);\n\t});\n\t// React has updated the DOM by now\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\ucc38\uace0-\ubb38\uc11c",children:"\ucc38\uace0 \ubb38\uc11c"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-18/discussions/21",children:"https://github.com/reactwg/react-18/discussions/21"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8432:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var i=n(4424);const c={},r=i.createContext(c);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);